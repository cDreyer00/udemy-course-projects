import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    return (
        <div>
            <h2>PRODUCT: {id}</h2>
        </div>
    )
}

export default Product;