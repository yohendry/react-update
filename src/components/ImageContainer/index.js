import React, {useState, useRef, useEffect} from 'react';
import ImageGallery from "./ImageGallery";

function Images() {

    const [imageList, setImageList] = useState([
        'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1532559588905-4e8e19d1f09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        'https://images.unsplash.com/photo-1603627015794-a4a01d82b90d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
        'https://images.unsplash.com/photo-1603488897066-6370e681baca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
    ]);
    const [isValidUrl, setIsValidUrl] = useState(false);
    const newImageSrc = useRef();

    useEffect(() => {
        console.log('Images mounted');
    }, [])

    function handleClickAddImage() {
        if(!newImageSrc.current) return;
        const {value} = newImageSrc.current;
        if (isValidUrl) {
            setImageList([
                value,
                ...imageList,
            ]);
            newImageSrc.current.value = "";
            handleOnChangeInput();
        }
    }

    function _handleClickRemoveImage(indexToRemove) {
        setImageList(imageList.filter((image, currentIndex) => currentIndex !== indexToRemove));
    }

    function handleOnChangeInput() {
        const regexUrl = new RegExp(/^(http|https):\/\/[^ "]+$/);
        const {value} = newImageSrc.current;

        setIsValidUrl(regexUrl.test(value));
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <ImageGallery
                    imageList={imageList}
                    _handleClickRemoveImage={_handleClickRemoveImage} />
            </div>
            <div className="flex justify-between">
                <input
                    type="text"
                    className="p-2 border border-gray-800 shadow rounded flex-1 mr-2"
                    ref={newImageSrc}
                    onChange={handleOnChangeInput}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleClickAddImage}
                    disabled={!isValidUrl}
                >
                    ADD NEW
                </button>
            </div>
        </section>
    );
}

export default Images;