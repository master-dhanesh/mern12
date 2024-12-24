import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("Subscribed!");
        navigate("/products");
    };

    return (
        <div>
            <h1 className="font-extrabold text-2xl mb-5 ">Home</h1>
            <h1 className="text-md mb-2 font-bold">Subscribe Our Newsletter</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    placeholder="email@example.com"
                    type="text"
                    className="w-[25%] p-3 rounded block mb-3"
                />
                <textarea
                    placeholder="message body"
                    className="w-[25%] p-3 rounded block mb-3"
                ></textarea>
                <button className=" bg-zinc-700 text-white px-5 py-2 rounded">
                    Subscribe Us
                </button>
            </form>
        </div>
    );
};

export default Home;
