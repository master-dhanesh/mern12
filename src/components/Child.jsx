import Grandchild from "./Grandchild";

const Child = () => {
    return (
        <div>
            <h1 className="text-lg">Child Component</h1>
            <Grandchild />
        </div>
    );
};

export default Child;
