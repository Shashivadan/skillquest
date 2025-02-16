<<<<<<< HEAD
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
=======
# 🎯 SkillQuest – Coding Challenges for Developers  

Welcome to **SkillQuest**! 🚀  
This repository contains a collection of coding challenges designed to **assess the skills** of potential candidates. Our organization uses this platform to evaluate **problem-solving abilities, coding proficiency, and creativity** in software development.  

## 🏆 How It Works  
1. **Pick a Challenge** – Select a problem from the `challenges/` directory.  
2. **Solve It** – Implement your solution in any programming language.  
3. **Submit Your Solution** – Fork the repo, create a new branch, and submit a Pull Request (PR).  
4. **Get Reviewed** – Our team will evaluate your code, provide feedback, and rate your solution.  

## 🔥 Challenge Categories  
We offer challenges in various domains:  
- 💻 **Algorithms & Data Structures** (Sorting, Graphs, Trees, Dynamic Programming)  
- 🌐 **Web Development** (Frontend & Backend Tasks)  
- 🛠️ **DevOps & Cloud** (Infrastructure Automation, Docker, Kubernetes)  
- 🤖 **AI & achine Learning** (Basic ML Models, NLP, Image Processing)  
- 🔐 **Cybersecurity** (CTF Challenges, Ethical Hacking Tasks)  

## 📜 Submission Guidelines  
1. **Fork this repository**  
2. **Clone it to your local system**  
    ```bash
    git clone https://github.com/intellectual-tech-intc/SkillQuest.git
    ```
3. **Create a new branch**  
    ```bash
    git checkout -b feature-yourname
    ```
4. **Solve the challenge & add your code**  
5. **Push your changes**  
    ```bash
    git add .
    git commit-m "Added solution for Challenge #X"
    git push origin feature-yourname
    ```
6. **Submit a Pull Request**  
7. **Wait for Review** and refine if needed  

## 🚀 Getting Started  
To begin solving challenges, check out our [`challenges/README.md`](./challenges/README.md) for detailed instructions on each problem.  

## 🔗 Resources  
- 📚 [Contributing Guidelines](./CONTRIBUTING.md)  
- 🔧 [Coding Standards](./CODING-STANDARDS.md)  
- 🛠️ [Setup Instructions](./SETUP.md)  

---

>>>>>>> 54d7501fd4b754228c1bb4a02ed7ec783125a163
