import { useNavigate } from "react-router-dom";

const PNF = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="font-extrabold text-5xl mt-10 mb-5 text-red-500">
                Page Not Found
            </h1>
            <button
                className="px-5 py-2 bg-red-500 rounded text-white"
                onClick={() => navigate(-1)}
            >
                Back Button
            </button>
        </div>
    );
};

export default PNF;
