import { useSelector } from "react-redux";
const Services = () => {
    const { products } = useSelector((state) => state.products);
    console.log(products);
    return <div>Services</div>;
};

export default Services;
