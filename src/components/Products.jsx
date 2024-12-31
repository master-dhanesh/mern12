import axios from "../utils/axiosconfig";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
    const [products, setproducts] = useState([]);

    const getallproducts = async () => {
        try {
            const { data } = await axios.get("/products");
            setproducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("[Product.jsx] Mounted/Created");
        getallproducts();

        return () => {
            console.log("[Product.jsx] Unmounted/Destroyed");
            // alert("Do you want to leave this page?");
        };
    }, []);

    return (
        <div>
            <button onClick={getallproducts}>Get Products</button>
            <h1 className="text-xl font-extrabold mb-10">Products</h1>
            <div className="list-none flex flex-wrap">
                {products.map((p, i) => (
                    <Link
                        key={p.id}
                        className="w-[23%]  h list-item p-2 mr-3 mb-3 rounded bg-zinc-300"
                        to={`/products/${p.id}`}
                    >
                        <img
                            className="object-cover w-full h-[200px]"
                            src={p.image}
                            alt=""
                        />
                        {p.title}
                    </Link>
                ))}
            </div>
            <hr />

            <Outlet />
        </div>
    );
};

export default Products;
