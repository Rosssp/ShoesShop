import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./layout/Main/Main";
import axios from "axios";
import OurProducts from "./layout/OurProducts/OurProducts";
// import Spacer from "./components/Spacer/Spacer";

interface Item {
    id: number;
    imageUrl: [string];
    title: string;
    price: number;
    genre: [string];
    description: string;
}

function App() {
    const [appState, setAppState] = useState<Item[] | null>(null);

    useEffect(() => {
        const apiUrl =
            "https://65645bd1ceac41c0761e002a.mockapi.io/shoes/items";
        axios.get<Item[]>(apiUrl).then((res) => {
            const items = res?.data?.slice(0, 2) || [];
            setAppState(items);
        });
    }, [setAppState]);

    return (
        <>
            <Header />
            <Main />
            <OurProducts data={appState} />
        </>
    );
}

export default App;
