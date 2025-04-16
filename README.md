# Skip Redesign Challenge

This project is a front-end redesign of a "select skip" page, as part of a take-home assignment. The goal was to improve the look and feel, maintain existing functionality, focus on clean and maintainable React code with good UI/UX, and ensure responsiveness across mobile and desktop.

## Approach

My approach to this challenge involved the following steps:

1.  **Understanding the Requirements:** I carefully reviewed the provided instructions, identifying the key objectives and constraints. This included understanding the need to fetch data from the given API endpoint and display it for the user to select a skip size.

2.  **Setting up the Development Environment:** I utilized Vite as the build tool for its speed and efficiency, and Tailwind CSS for rapid and responsive styling. The project was initialized with TypeScript for enhanced code maintainability and type safety.

3.  **Component-Based Architecture:** I broke down the UI into reusable React components. This promotes modularity and makes the codebase easier to understand and maintain. Key components include:
    * `PageHeader`: For displaying the main title of the section.
    * `PageSubtitle`: For providing additional context or instructions.
    * `ProgressBar`: To visually indicate the user's progress (though in this single-page redesign, it likely represents the current step).
    * `LoaderIcon`: To provide feedback to the user during data fetching.
    * `ErrorCard`: To display a user-friendly error message if data fetching fails.
    * `SkipList`: To render the list of available skip sizes.
    * `BottomBar`: To display information about the selected skip and potentially any action buttons.

4.  **Data Fetching and State Management:** I implemented a custom hook, `useSkips`, to handle the asynchronous data fetching from the provided API endpoint (`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`) using `axios` and `react-query`. `react-query` simplifies data fetching, caching, and state management. The `useState` hook was used within the `SelectSkip` component to manage the currently selected skip.

5.  **UI/UX Improvements:** The redesign focused on providing a clean and intuitive user experience. This involved:
    * Clear visual hierarchy and typography.
    * Responsive layout using Tailwind CSS to ensure proper display on various screen sizes.
    * Visual feedback on user interactions (e.g., highlighting the selected skip).

6.  **Styling with Tailwind CSS:** Tailwind CSS's utility-first approach allowed for rapid styling directly within the component JSX, leading to a more cohesive and manageable styling system. Custom styles were applied as needed to achieve the desired look and feel.

7.  **Code Structure and Maintainability:** The project structure was organized logically, separating components, hooks, API interactions, and types into dedicated folders within the `src` directory. TypeScript was used throughout the project to enforce type safety and improve code readability.


## How to Run

1.  Clone the repository:
    ```bash
    git clone https://github.com/samuelezedi/business-skip-hire
    cd business-skip-hire
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4.  Open your browser to the address provided by Vite (usually `http://localhost:5173`).

## Submission Details

* **GitHub Repository:** [https://github.com/samuelezedi/business-skip-hire]
* **Sandbox Link:** [https://jobscabal-85832.web.app/]

This sandbox provides a live, testable version of the redesigned "select skip" page, allowing you to interact with the implemented features and experience the UI/UX improvements directly.

Thank you for this opportunity. I am excited to have worked on this redesign challenge and believe the result effectively addresses the requirements outlined.