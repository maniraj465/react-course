Tech Courses — Course List Page
================================

![Course List Page](src/assets/Course%20List%20Page.png)

**About**
- **Description:** The Course List Page shows a responsive grid of course cards (title, short description, rating, price, author and actions like favorite/add-to-cart). It is designed as the main catalog view where users can browse and filter courses before viewing details.
- **Layout:** Card grid with responsive columns, header with search, and footer. Each card links to a detailed view for the course.

**How it works**
- **Data source:** Courses are loaded from a local JSON file at `src/assets/data/courses.json` (the project includes a `useFetch` custom hook that reads this data).
- **Components:** Key components include `CourseList` (renders the grid), `Course` (individual card), `ViewCourse` (course detail), `NavBar`, `Auth` and `ProtectedRoute` for basic route protection.
- **Interactions:** Search input filters visible courses; clicking a card or "View" opens the detail page. The UI shows ratings, pricing (with discounts), and simple actions such as add-to-cart and favorite.

**Technologies**
- **React:** UI built with React components and JSX.
- **Vite:** Development and build tooling powered by Vite for fast HMR and bundling.
- **React Router:** Client-side routing using protected routes and detail views.
- **CSS Modules:** Component-scoped styles via `.module.css` files for predictable styling.
- **JavaScript (ES6+):** Application logic and custom hooks are written in modern JavaScript.
- **JSON:** Static course data kept in `src/assets/data/courses.json` for easy editing and testing.

**Run locally**
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

Open the app at `http://localhost:5173/` (or the address shown by Vite).
 
Note: If you plan to use the local REST API, run the `json-server` command below before running the dev server so the dummy data is available to the app.

**Local API (optional)**
- You can serve the courses JSON as a simple local REST API for development using `json-server`:

```bash
npx json-server --watch src/assets/data/courses.json --port 3000 --static ./src/assets/data
```

- **What this does:** Runs `json-server` which watches the `courses.json` file and automatically provides a RESTful API (GET/POST/PUT/PATCH/DELETE) at `http://localhost:3000/`. The `--static ./src/assets/data` flag serves any static files from that folder, making images or other assets available at predictable URLs. This is useful to develop and test the app against a realistic API without running a backend server.
