import classNames from "classnames";
import styles from "./header.module.scss";

export default function Header() {
    const nav = [{ genre: "Male" }, { genre: "Female" }];
    return (
        <div className={styles.wrapper}>
            <div className={classNames("wrapper", styles.container)}>
                <a className={styles.logo} href="#">
                    <h1>ROS|SP</h1>
                </a>
                <ul>
                    {nav.map((item) => (
                        <li>
                            <a href="#">{item?.genre}</a>
                        </li>
                    ))}
                </ul>
                <a href="#" className={styles.basket}>
                    <div>
                        <p>520 R</p>
                    </div>
                    <p></p>
                    <div>
                        <p>3</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
