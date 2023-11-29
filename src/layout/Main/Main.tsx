declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        grained: any;
    }
}

import Button from "../../components/Button/Button";
import styles from "./main.module.scss";
import classNames from "classnames";
import Shoes from "../../assets/images/converse.png";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function Main() {
    const MainId = useRef<HTMLDivElement>(null);
    const options = {
        animate: true,
        patternWidth: 100.71,
        patternHeight: 100.61,
        grainOpacity: 0.5,
        grainDensity: 5.07,
        grainWidth: 0.46,
        grainHeight: 1,
        grainChaos: 2,
        grainSpeed: 1,
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const grainedd = window?.grained;
            if (grainedd) {
                try {
                    grainedd(`#${MainId?.current?.id}`, options);
                    console.log("grained", grainedd);
                } catch (error) {
                    console.error("Error initializing grained:", error);
                }
            } else {
                console.error("grained is not available on window");
            }
        }
    }, []);

    const [x, setXPos] = useState(0);
    const [y, setYPos] = useState(0);

    const windowSize = useWindowSize();
    const cX = windowSize?.width / 2,
        cY = windowSize?.height / 2;

    useEffect(() => {
        const handleMouse = (e: { clientX: number; clientY: number }) => {
            setXPos(e.clientX - cX);
            setYPos(e.clientY - cY);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => {
            window.removeEventListener("mousemove", handleMouse);
        };
    }, [cX, cY]);

    const moveBackX = -x / 80 + "px";
    const moveBackY = -y / 80 + "px";
    const moveCenterX = -x / 30 + "px";
    const moveCenterY = -y / 30 + "px";
    const moveMiddleX = -x / 15 + "px";
    const moveMiddleY = -y / 15 + "px";

    return (
        <div id="Main" ref={MainId}>
            <div className={classNames("wrapper", styles.wrapper)}>
                <div className={styles.left}>
                    <h1
                        style={{
                            transform: `translate(${moveBackX}, ${moveBackY})`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        Find your Favorit And Best <span>Sneaker's</span>
                    </h1>
                    <p
                        style={{
                            transform: `translate(${moveCenterX}, ${moveCenterY})`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non commodi veniam itaque corporis tempore assumenda
                        deserunt sit quia repudiandae, cumque odit quo facere
                        voluptate porro accusamus hic a ad fugiat.
                    </p>
                    <Button text="Shop Now" />
                </div>
                <div className={styles.right}>
                    <div
                        className={styles.plate}
                        style={{
                            transform: `translate(${moveMiddleX}, ${moveMiddleY}) `,
                            transformStyle: "preserve-3d",
                        }}
                    ></div>
                    <div
                        className={styles.text}
                        style={{
                            transform: `translate(${moveCenterX}, ${moveCenterY})`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        CONVERSE
                    </div>
                    <img
                        src={Shoes}
                        alt="lol"
                        style={{
                            transform: `translate(${moveBackX}, ${moveBackY})`,
                            transformStyle: "preserve-3d",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
