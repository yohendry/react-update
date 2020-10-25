import React, {useState, useEffect, useRef} from "react";
import './assets/css/style.css';
import Images from "./components/Images";

function App() {
    const [title, setTile] = useState("Title");
    const [showImage, setShowImage] = useState(false);
    const [didMount, setdidMount] = useState(false);
    const mountRef = useRef(false);

    // Component Did Mount only
    useEffect(() => {
        setdidMount(true);
        console.log("App Mounted");
    }, []);

    useEffect(() => {
        if (mountRef.current) {
            console.log("App Updated");
        } else {
            mountRef.current = true;
        }
    }, [showImage]);

    const handleClickToggleImage = () => {
        setShowImage(!showImage);
    }

    return(
        <section className="flex justify-center">
            <div className="w-10/12">
                <div className="text-center">
                    <div className="my-4">{title}</div>
                    <div>
                        <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClickToggleImage}>Toggle Image</button>
                    </div>
                </div>
                {(showImage && <Images />)}
            </div>
        </section>
    );
}

export default App;