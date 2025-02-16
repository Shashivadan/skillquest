"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import type { Libraries } from "@react-google-maps/api";
import { env } from "~/env";
import { Input } from "~/components/ui/input";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { MapPin, Navigation, Search } from "lucide-react";
import { useToast } from "~/components/ui/use-toast";
import { Separator } from "~/components/ui/separator";

const containerStyle = {
  width: "100%",
  height: "calc(75vh - 150px)",
  borderRadius: "15px",
};

const center = {
  lat: 17.4065,
  lng: 78.4772,
};

const libraries: Libraries = ["places", "maps"];

export default function Page() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [origin, setOrigin] = useState<google.maps.places.Autocomplete | null>(
    null,
  );
  const [search, setSearch] = useState<google.maps.places.Autocomplete | null>(
    null,
  );
  const [destination, setDestination] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [selectedOrigin, setSelectedOrigin] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);
  const [directionSteps, setDirectionSteps] = useState<
    google.maps.DirectionsStep[]
  >([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const { toast } = useToast();

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const onOriginChanged = () => {
    if (origin) {
      const place = origin.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location?.lat() ?? center.lat,
          lng: place.geometry.location?.lng() ?? center.lng,
          address: place.formatted_address ?? "",
        };
        setSelectedOrigin(location);
      }
    }
  };

  const onDestinationChanged = () => {
    if (destination) {
      const place = destination.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location?.lat() ?? center.lat,
          lng: place.geometry.location?.lng() ?? center.lng,
          address: place.formatted_address ?? "",
        };
        setSelectedDestination(location);
      }
    }
  };

  const calculateRoute = async () => {
    if (!selectedOrigin || !selectedDestination) return;

    try {
      const directionsService = new google.maps.DirectionsService();
      const result: google.maps.DirectionsResult =
        await directionsService.route(
          {
            origin: { lat: selectedOrigin.lat, lng: selectedOrigin.lng },
            destination: {
              lat: selectedDestination.lat,
              lng: selectedDestination.lng,
            },
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              setDirections(result);
              return;
            }
            if (
              status === google.maps.DirectionsStatus.ZERO_RESULTS ||
              status === google.maps.DirectionsStatus.NOT_FOUND
            ) {
              toast({
                title: "No Route Found",
                description:
                  "No route could be found between these locations. Please try different locations.",
              });
              return;
            }
            return;
          },
        );

      if (result.routes?.[0]?.legs?.[0]) {
        const route = result.routes[0];
        const leg = route.legs[0];

        setDirections(result);
        setDirectionSteps(leg?.steps ?? []);

        if (map && route.bounds) {
          map.fitBounds(route.bounds);
        }
      } else {
        throw new Error(
          "Could not calculate route. Please try different locations.",
        );
      }
    } catch (error) {
      let errorMessage =
        "Could not calculate route. Please try different locations.";

      if (error instanceof Error) {
        if (error.message.includes("ZERO_RESULTS")) {
          errorMessage =
            "No route could be found between these locations. Please try different locations.";
        } else if (error.message.includes("OVER_QUERY_LIMIT")) {
          errorMessage = "Too many requests. Please try again later.";
        } else if (error.message.includes("REQUEST_DENIED")) {
          errorMessage =
            "Route calculation request was denied. Please check your API key.";
        } else {
          errorMessage =
            "An unexpected error occurred while calculating the route. Please try again later.";
        }
      } else {
        errorMessage = "An unexpected error occurred. Please try again later.";
      }

      toast({
        variant: "destructive",
        title: "Route Error",
        description: errorMessage,
      });
    }
  };

  const onSpecficSearch = () => {
    if (search) {
      const place = search.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location?.lat() ?? center.lat,
          lng: place.geometry.location?.lng() ?? center.lng,
          address: place.formatted_address ?? "",
        };

        if (map) {
          map.setCenter(location);
        }

        setSelectedOrigin(location);
      }
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <Card className="p-4">
        <h1>Search</h1>
        <div className="mb-4 w-full">
          <div className="my-4 flex w-full items-center">
            <Search className="text-muted-foreground m-3 ml-2 mr-3" />
            <Autocomplete
              onLoad={(auto) => setSearch(auto)}
              onPlaceChanged={onSpecficSearch}
              className="w-full"
            >
              <Input
                type="text"
                placeholder="Enter location..."
                className="w-full"
              />
            </Autocomplete>
            <Button className="ml-2" onClick={onSpecficSearch}>
              Search
            </Button>
          </div>
        </div>
        <Separator />
        <h1 className="mb-4 text-2xl font-bold">Location Tracking</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Origin</label>
            <div className="flex items-center gap-2">
              <MapPin className="text-muted-foreground h-4 w-4" />
              <Autocomplete
                className="w-full"
                onLoad={(auto) => setOrigin(auto)}
                onPlaceChanged={onOriginChanged}
              >
                <Input
                  type="text"
                  placeholder="Enter origin location..."
                  className="w-full"
                />
              </Autocomplete>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Destination</label>
            <div className="flex items-center gap-2">
              <Navigation className="text-muted-foreground h-4 w-4" />
              <Autocomplete
                className="w-full"
                onLoad={(auto) => setDestination(auto)}
                onPlaceChanged={onDestinationChanged}
              >
                <Input
                  type="text"
                  placeholder="Enter destination location..."
                  className="w-full"
                />
              </Autocomplete>
            </div>
          </div>
        </div>
        <Button
          className="mt-4 w-full"
          onClick={calculateRoute}
          disabled={!selectedOrigin || !selectedDestination}
        >
          Get Directions
        </Button>
      </Card>

      <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
        <Card className="overflow-hidden">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={selectedOrigin ?? center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: true,
              fullscreenControl: true,
            }}
          >
            {directions && <DirectionsRenderer directions={directions} />}
            <Marker
              position={center}
              label={"A"}
              animation={google.maps.Animation.DROP}
              draggable
            />
          </GoogleMap>
        </Card>

        {directionSteps.length > 0 && (
          <Card className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Navigation Steps</h2>
            <div className="max-h-[calc(75vh-250px)] space-y-2 overflow-y-auto">
              {directionSteps.map((step, index) => (
                <div key={index} className="border-b pb-2">
                  <p className="text-sm">
                    <span className="font-medium">Step {index + 1}:</span>{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: step.instructions }}
                    />
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {step.distance?.text} • {step.duration?.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
