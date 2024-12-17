import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import Search from "./components/Search";

const App = () => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const headcss = { fontSize: "30px", color: "white" };
    return (
        <div className=" w-[80%] mx-auto mt-5 p-5 rounded bg-zinc-700">
            <h1 style={{ fontSize: "30px", color: "white" }}>ToDo List App</h1>
            <h1 style={headcss}>ToDo List App</h1>
            <h1 className="head">ToDo List App</h1>

            <Search tasks={tasks} />
            <hr className="w-[50%] my-5 border bg-white h-[1px]" />
            {<Create tasks={tasks} settasks={settasks} />}
            <hr className="w-[50%] my-5 border bg-white h-[1px]" />
            {<Show tasks={tasks} settasks={settasks} />}
        </div>
    );
};

export default App;
