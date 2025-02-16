# Women Safety Application

A real-time women safety application built with Next.js and the T3 Stack, featuring WebSocket integration for instant alerts and Google Maps API for location tracking.

## Features

- **Real-time Location Tracking**
  - Live location sharing using Google Maps API
  - Accurate position updates
  - Safe route suggestions

- **Emergency Alert System**
  - One-click SOS activation
  - Instant notifications to emergency contacts
  - Real-time WebSocket communication
  - Location sharing during emergencies

- **Emergency Contact Management**
  - Add and manage trusted contacts
  - Priority-based contact list
  - Quick access to emergency numbers

## Tech Stack

- **Frontend**
  - Next.js 14 with App Router
  - React
  - Tailwind CSS
  - Shadcn UI Components

- **Backend**
  - WebSocket for real-time communication
  - Google Maps API for location services
  - NextAuth.js for authentication
  - Drizzle ORM for database operations

- **Database**
  - PostgreSQL

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/women-safety-app.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```env
   # Auth
   AUTH_SECRET=your_auth_secret
   AUTH_GITHUB_ID=your_github_id
   AUTH_GITHUB_SECRET=your_github_secret

   # Database
   DATABASE_URL=your_database_url

   # Google Maps
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Initialize the database:
   ```bash
   pnpm db:push
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

## Usage

1. **Sign Up/Login**
   - Create an account or login using GitHub authentication
   - Set up your emergency contact list

2. **Location Services**
   - Enable location services when prompted
   - View your current location on the map
   - Share location with trusted contacts

3. **Emergency Features**
   - Use the SOS button for immediate alerts
   - Your emergency contacts will receive instant notifications
   - Real-time location updates will be shared

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [T3 Stack](https://create.t3.gg/)
- UI Components by [shadcn/ui](https://ui.shadcn.com/)
- Maps integration using [Google Maps API](https://developers.google.com/maps)
