import ProductCard from "../../components/ProductCard/ProductCard";
import Spacer from "../../components/Spacer/Spacer";
import styles from "./ourProducts.module.scss";
import Image from "../../assets/images/converse.png";

interface Product {
    id: number;
    imageUrl: [string];
    title: string;
    price: number;
    genre: [string];
    description: string;
}

interface Data {
    data: Product[] | null;
}

export default function OurProducts(props: Data) {
    console.log("loool", props?.data);

    return (
        <div className="wrapper">
            <Spacer px={114} />
            <h1>Our Products —</h1>
            <Spacer px={84} />
            <div className={styles.wrapper}>
                {props?.data?.map((product) => (
                    <ProductCard
                        price={product?.price}
                        title={product?.title}
                        img={Image}
                    />
                ))}
            </div>
            <Spacer px={114} />
        </div>
    );
}
