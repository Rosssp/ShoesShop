import ProductCard from "../../components/ProductCard/ProductCard";
import Image from "../../assets/images/converse.png";
import styles from "./productCards.module.scss";
import classNames from "classnames";

interface Props {
    title: string;
    price: number;
    img: string;
}

export default function ProductCards(props: Props) {
    return (
        <div className={classNames("wrapper", styles.wrapper)}>
            <ProductCard title="PONOSIK" price={500} img={Image} />
            <ProductCard title="yaytsa" price={500} img={Image} />
            <ProductCard title="eshketit" price={500} img={Image} />
            <ProductCard title="converse" price={500} img={Image} />
            <ProductCard title="converse" price={500} img={Image} />
            <ProductCard title="converse" price={500} img={Image} />
        </div>
    );
}
