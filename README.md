# Movies Hub

A sleek, responsive movie discovery application built with React.js and Vite. Discover movies, like your favorites, and manage a personalized watchlist — all powered by the TMDB API and deployed on Netlify.

---

## 💡 Table of Contents
1. [Features](#-features)  
2. [Demo](#-demo)  
3. [Tech Stack](#-tech-stack)  
4. [Getting Started](#-getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)   
5. [Usage](#-usage)  
6. [Folder Structure](#-folder-structure)  
7. [Deployment](#-deployment)  
8. [Contributing](#-contributing)  



---

## ✨ Features
- **Movie Search**: Instant search powered by the TMDB API.  
- **Like Functionality**: 💖 Like movies and curate your personal favorites.  
- **Favorites Page**: Explore and manage your liked movies in one place.  
- **Home Page**: Browse trending and popular titles at a glance.  
- **Responsive UI**: Seamless experience on desktop, tablet, and mobile.  

---

## 🔗 Demo
🎬 Live: [https://movies-jerk.netlify.app/)]


---

## 🛠️ Tech Stack
- **Framework**: React.js (v18+) with Vite  
- **Styling**: CSS Modules / Tailwind CSS (optional)  
- **State Management**: React Context & Hooks  
- **API**: The Movie Database (TMDB)  
- **Hosting**: Netlify  
- **Version Control**: Git & GitHub  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)  
- npm or yarn  
- TMDB API Key: Sign up at [TMDB](https://www.themoviedb.org/) to obtain your free API key.  

### Installation
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/movies-hub.git
   cd movies-hub
### Install dependencies
 ```bash
npm install
# or
yarn install
 ```
### Start development server
 ```bash
npm run dev
# or
yarn dev
 ```
### 🎮 Usage
1.Home Page: View trending and popular movies.

2.Search: Enter keywords to search for movies.

3.Like: Click the heart icon to like a movie.

4.Favorites Page: Access your liked movies from the navigation.

5.Details: Click a movie poster to view details (if implemented).
## Folder Structure🗂️ 
 ```bash
movies-hub/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, icons, styles
│   ├── components/   # Reusable UI components
│   ├── context/      # React Context for state management
│   ├── pages/        # Route-based pages (Home, Favorites)
│   ├── services/     # API calls (TMDB)
│   ├── App.jsx       # Entry point
│   └── main.jsx      # Vite bootstrap
├── .env              # Environment variables
├── vite.config.js    # Vite configuration
├── package.json      # Dependencies & scripts
└── README.md         # Project documentation
 ```
## 🚢 Deployment
This project is deployed on Netlify. To configure deployment:

1.Connect your GitHub repository in Netlify.

2.Set the build command to npm run build (or yarn build).

3.Set the publish directory to dist.

4.Add the environment variable VITE_TMDB_API_KEY in Netlify settings.
## 🤝 Contributing
1.Fork the repository.

2.Create a new branch: git checkout -b feature/YourFeature

3.Commit your changes: git commit -m "Add some feature"

4.Push to the branch: git push origin feature/YourFeature

5.Open a Pull Request.

