import styles from "./ProductCard.module.scss";
import { useEffect, useState, useRef } from "react";

interface Props {
    title?: string;
    price?: number;
    img?: string;
}

export default function ProductCard(props: Props) {
    const [fontSize, setFontSize] = useState("100%");
    const [subFontSize, setSubFontSize] = useState("100%");
    const wrapperWidth = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (wrapperWidth.current) {
            const elementWidth = wrapperWidth.current.offsetWidth;

            const adjustFontSize = () => {
                const fontSizeRatio =
                    elementWidth / (props?.title?.length || 1);
                const fontSubSizeRatio =
                    elementWidth / (props?.price?.toString().length || 1);

                setFontSize(`${fontSizeRatio * 12}%`);
                setSubFontSize(`${fontSubSizeRatio * 1.5}%`);
            };

            adjustFontSize();

            window.addEventListener("resize", adjustFontSize);

            return () => {
                window.removeEventListener("resize", adjustFontSize);
            };
        }
    }, [wrapperWidth, props?.title, props?.price]);

    return (
        <a href="#" className={styles.wrapper} ref={wrapperWidth}>
            <p style={{ fontSize: fontSize }} className={styles.title}>
                {props?.title}
            </p>
            <p style={{ fontSize: subFontSize }} className={styles.price}>
                {props?.price} €
            </p>
            <img className={styles.img} src={props?.img} alt="lol" />
        </a>
    );
}
