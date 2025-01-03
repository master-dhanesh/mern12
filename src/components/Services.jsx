import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/reducers/productSlice";

const Services = () => {
    const { data } = useSelector((state) => state.products);
    console.log(data);

    const dispatch = useDispatch();

    const AddDataHandler = () => {
        const newProduct = {
            id: 3,
            name: "Product 3",
            price: 300,
        };

        dispatch(add(newProduct));
    };

    return (
        <div>
            <h1>Services</h1>
            <button
                className="mt-5 bg-zinc-700 text-white px-4 py-2 rounded"
                onClick={AddDataHandler}
            >
                Add Data
            </button>
        </div>
    );
};

export default Services;
