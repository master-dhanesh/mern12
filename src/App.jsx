import { useState } from "react";

const App = () => {
    const [fullname, setfullname] = useState("");
    const [username, setusername] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            fullname,
            username,
        };
        console.log(data);
    };

    return (
        <div className="mt-10 w-[80%] mx-auto p-10 rounded bg-zinc-200 ">
            <h1 className="font-bold text-3xl underline mb-3">Form Handling</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    className="p-2 rounded mr-4 "
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setfullname(e.target.value)}
                    value={fullname}
                />
                <input
                    className="p-2 rounded mr-4 "
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setusername(e.target.value)}
                    value={username}
                />
                <button className="py-2 px-4 bg-zinc-700 rounded text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
