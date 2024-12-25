import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    console.log(location);

    return (
        <div>
            <h1 className="text-5xl font-extrabold mt-5 mb-10 ">
                Product Detail
            </h1>
            <h1 className="text-3xl font-extrabold mb-3">
                {params.category.toLocaleUpperCase()}
            </h1>
            <Link
                className="px-5 py-2 mr-5 bg-zinc-700 rounded text-white"
                to="/products"
            >
                Back Link
            </Link>
            <button
                className="px-5 py-2 bg-zinc-700 rounded text-white"
                onClick={() => navigate(-1)}
            >
                Back Button
            </button>
        </div>
    );
};

export default ProductDetails;
