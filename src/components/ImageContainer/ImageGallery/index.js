import React from "react";
import ImageItem from "./ImageItem";

function ImageGallery(props) {
    const {imageList, _handleClickRemoveImage} = props;

    return (
        imageList.map((imageUrl, index) => (
            <ImageItem
                key={index}
                index={index}
                imageSrc={imageUrl}
                _handleClickRemoveImage={_handleClickRemoveImage}
            />
        ))
    );
}

export default ImageGallery;