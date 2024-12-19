import Child from "./components/Child";

const App = () => {
    return (
        <div className="rounded w-[80%] mx-auto p-10 bg-zinc-200">
            <h1 className="text-xl">App Component</h1>
            <Child />
        </div>
    );
};

export default App;
