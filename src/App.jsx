import { useState } from "react";

const App = () => {
    const [fullname, setfullname] = useState("");
    const [gender, setgender] = useState("female");
    const [city, setcity] = useState("bhopal");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            fullname,
            gender,
            city,
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

                <div className="my-3">
                    <input
                        type="radio"
                        value="male"
                        onChange={(e) => setgender(e.target.value)}
                        checked={gender == "male" ? true : false}
                    />
                    Male <br />
                    <input
                        type="radio"
                        onChange={() => setgender("female")}
                        checked={gender == "female" ? true : false}
                    />
                    Female
                </div>

                <select
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    className="block my-3"
                >
                    <option value="">City</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="indore">Indore</option>
                    <option value="gwalior">Gwalior</option>
                    <option value="ujjain">Ujjain</option>
                    <option value="sagar">Sagar</option>
                </select>

                <button className="py-2 px-4 bg-zinc-700 rounded text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
