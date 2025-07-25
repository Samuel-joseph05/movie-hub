
Movie Hub
A modern React web app to browse popular movies, search for titles, and save favorites. Powered by The Movie Database (TMDb) API.

✨ Features
Browse Popular Movies on the home page.

Search for movies by keyword.

Favorite/Unfavorite movies — persistent with localStorage.

Responsive and modern user interface.

Favorites Page to quickly access saved movies.

Simple Navigation for seamless switching between pages.

📸 Screenshots
<!-- Optionally add screenshots here --> <!-- ![Home Page Screenshot 🚀 Getting Started ### Prerequisites - [Node.js](https://nodejs.org/) v14 or later - npm or yarn ### Installation 1. **Clone the repository:** ```bash git clone https://github.com/yourusername/movie-hub.git cd movie-hub ``` 2. **Install dependencies:** ```bash npm install # or yarn install ``` 3. **Set up TMDb API Key:** - The API key is currently hardcoded in [`src/services/api.js`](src/services/api.js). - For production, sign up for a free API key at [TMDb](https://www.themoviedb.org/settings/api). - Replace the default value in `api.js`, e.g. ```js const API_KEY = "YOUR_TMDB_API_KEY"; ``` 4. **Run the app:** ```bash npm run dev # or yarn dev ``` Visit [http://localhost:5173/](http://localhost:5173/) in your browser. ## 🧭 Usage - Browse popular movies or use the search bar. - Add/remove favorites by clicking the heart icon. - Favorites are accessible from the navigation bar and are persistent between sessions. - No authentication required. ## 🗂️ Project Structure ``` src/ ├── component/ │ ├── MovieList.jsx # Displays movie cards and favorite icons │ └── NavBar.jsx # Navigation bar component ├── context/ │ └── MovieContext.jsx # Favorite movies state/context ├── pages/ │ ├── Home.jsx # Home page (popular & search) │ └── Favorites.jsx # Favorites page ├── services/ │ └── api.js # API calls to TMDb ├── css/ │ ├── App.css │ ├── Favorites.css │ ├── Home.css │ ├── MovieList.css │ ├── Navbar.css │ └── index.css ├── App.jsx ├── main.jsx ``` ## ⚙️ Customization - To deploy, secure your API key using environment variables (`.env`). - Restyle and extend components as needed — styling is located in the `css/` folder. - Add features like movie details, user ratings, or auth if desired. ## 📦 Dependencies - [React](https://react.dev/) (with Hooks & Context API) - [react-router-dom](https://reactrouter.com/) - [TMDb API](https://www.themoviedb.org/documentation/api) (external) ## 🏷️ License MIT ## 🙏 Acknowledgments This product uses the TMDb API but is not endorsed or certified by TMDb. Feel free to copy-paste this for your main `README.md` and adjust project links, screenshots, or any other project-specific details!
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
