import { useState, useEffect } from "react";

interface WindowSize {
    width: number;
    height: number;
}

const useWindowSize = (): WindowSize => {
    const isClient = typeof window === "object"; // проверяем наличие window

    const getSize = (): WindowSize => {
        return {
            width: isClient ? window.innerWidth : 0, // Используйте 0 или другое значение по умолчанию, если window не определен
            height: isClient ? window.innerHeight : 0,
        };
    };

    const [windowSize, setWindowSize] = useState<WindowSize>(getSize);

    useEffect(() => {
        if (!isClient) {
            return; // Если window не определен, то ранние подписки на события изменения размеров не требуются
        }

        const handleResize = (): void => {
            setWindowSize(getSize());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [getSize, isClient]);

    return windowSize;
};

export default useWindowSize;
