import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TasksContext from "./context/TasksContext.jsx";

createRoot(document.getElementById("root")).render(
    <TasksContext>
        <App />
    </TasksContext>
);
