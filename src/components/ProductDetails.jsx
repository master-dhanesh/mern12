import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/axiosconfig";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const [product, setproduct] = useState(null);

    const getsingleproducts = async () => {
        try {
            const { data } = await axios.get(`/products/${params.id}`);
            setproduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("[ProductDetails.jsx] Mounted/Created");
        getsingleproducts();

        return () => {
            console.log("[ProductDetails.jsx] Unmounted/Destroyed");
            // alert("Do you want to leave this page?");
        };
    }, []);

    return (
        <div>
            <h1 className="text-5xl font-extrabold mt-5 mb-10 ">
                Product Detail
            </h1>
            <img className="h-[25vh]" src={product?.image} alt="" />
            <h1 className="text-3xl font-extrabold mb-3">{product?.title}</h1>
            <p className="mb-5">{product?.description}</p>

            <button
                className="px-5 py-2 bg-zinc-700 rounded text-white"
                onClick={() => navigate(-1)}
            >
                Back Button
            </button>
            <hr />
            <button
                className="px-5 py-2 bg-zinc-700 rounded text-white"
                onClick={getsingleproducts}
            >
                Get Product Detail
            </button>
        </div>
    );
};

export default ProductDetails;
