import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1 className="text-xl font-extrabold mb-10">Products</h1>
            <div className="list-none">
                <Link className="list-item" to="/products/1">
                    Gym Accessories
                </Link>
                <Link className="list-item" to="/products/2">
                    Lunch Box
                </Link>
                <Link className="list-item" to="/products/3">
                    Domestics
                </Link>
                <Link className="list-item" to="/products/4">
                    Clothings
                </Link>
                <Link className="list-item" to="/products/5">
                    Electronics
                </Link>
            </div>
        </div>
    );
};

export default Products;
