import React, {useState, useRef, useEffect} from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import ImageGallery from "./ImageGallery";
import useScroll from "../../utils/hooks/useScroll";
console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);
const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY });

function Images() {

    const [imageList, setImageList] = useState([]);
    const [isValidUrl, setIsValidUrl] = useState(false);
    const newImageInputRef = useRef();

    const scrollPostion = useScroll();

    useEffect(() => {
        newImageInputRef.current.focus();
        fetchImages();
    }, [])

    function fetchImages() {
        unsplash.search.photos(newImageInputRef.current.value, 1, 10, {})
            .then(toJson)
            .then(response => {
                const {results} = response;
                return results.map((item) => {
                    const {color, id, urls } = item;
                    const {thumb, full} = urls;
                    return {color, id, thumb, full};
                });
            })
            .then(images => setImageList(images));
    }
    function handleClickSearch() {
        fetchImages();
    }

    function _handleClickRemoveImage(id) {
        setImageList(imageList.filter((image) => image.id !== id));
    }

    return (
        <section>
            <h4 className="text-center">{`${imageList.length} Images`}</h4>
            <div>{scrollPostion}</div>
            <div className="gap-0" style={{ columnCount: 3}}>
                <ImageGallery
                    imageList={imageList}
                    _handleClickRemoveImage={_handleClickRemoveImage} />
            </div>
            <div className="flex justify-between">
                <input
                    type="text"
                    className="p-2 border border-gray-800 shadow rounded flex-1 mr-2"
                    ref={newImageInputRef}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleClickSearch}
                >
                    Search
                </button>
            </div>
        </section>
    );
}

export default Images;