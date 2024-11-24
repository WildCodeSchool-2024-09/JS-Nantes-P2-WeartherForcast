// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";

/* ************************************************************************* */

// Import the main app component

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  // <StrictMode>
  <Router />,
  // </StrictMode>,
);
