import styles from "./button.module.scss";

interface Props {
    text: string;
}

export default function Button(props: Props) {
    return (
        <button className={styles.wrapper}>
            <h2>{props.text}</h2>
        </button>
    );
}
