import React, {useState, useEffect, useRef} from "react";
import './assets/css/style.css';
import Images from "./components/ImageContainer";

function App() {
    const [title, setTile] = useState("Title");

    return(
        <section className="flex justify-center">
            <div className="w-10/12">
                <div className="text-center">
                    <div className="my-4">{title}</div>
                </div>
                <Images />
            </div>
        </section>
    );
}

export default App;