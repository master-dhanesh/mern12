import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
    const [title, settitle] = useState("");
    const [tasks, settasks] = useState([]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newTask = {
            id: nanoid(),
            title: title,
        };
        settasks([...tasks, newTask]);
        settitle("");
    };

    let renderTasks =
        tasks.length > 0 ? (
            tasks.map((t, i) => (
                <li
                    className="w-[25%] list-item px-5 py-3 rounded mb-3 bg-zinc-500"
                    key={t.id}
                >
                    {t.title}
                </li>
            ))
        ) : (
            <h1 className="w-[50%] text-green-400 text-center">
                No Pending Task
            </h1>
        );

    return (
        <div className=" w-[80%] mx-auto mt-5 p-5 rounded bg-zinc-700">
            <form
                onSubmit={SubmitHandler}
                className="w-[25%] flex justify-center p-3 rounded bg-zinc-600"
            >
                <input
                    className="w-full p-2 rounded-tl-sm rounded-bl-sm text-xl "
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                />
                <button className=" text-white bg-zinc-500 text-3xl rounded-tr-sm rounded-br-sm">
                    <i className="ri-add-fill "></i>
                </button>
            </form>
            <hr className="w-[50%] my-5 border bg-white h-[1px]" />
            <ul className="text-white list-item text-xl">{renderTasks}</ul>
        </div>
    );
};

export default App;
