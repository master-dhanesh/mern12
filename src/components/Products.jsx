import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1 className="text-xl font-extrabold mb-10">Products</h1>
            <div className="list-none">
                <Link className="list-item" to="/products/gym-accessiories">
                    Gym Accessories
                </Link>
                <Link className="list-item" to="/products/lunch-box">
                    Lunch Box
                </Link>
                <Link className="list-item" to="/products/domestics">
                    Domestics
                </Link>
                <Link className="list-item" to="/products/clothings">
                    Clothings
                </Link>
                <Link className="list-item" to="/products/electronics">
                    Electronics
                </Link>
            </div>
            <hr />

            <Outlet />
        </div>
    );
};

export default Products;
