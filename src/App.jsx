import { useState } from "react";
import Child from "./components/Child";

const App = () => {
    const [data, setdata] = useState("bahut important dataa");
    return (
        <div className="rounded w-[80%] mx-auto p-10 bg-zinc-200">
            <h1 className="text-xl">App Component</h1>
            <Child data={data} />
        </div>
    );
};

export default App;
