import React from "react";
import ImageItem from "./ImageItem";

function ImageGallery(props) {
    const {imageList} = props;

    return (
        imageList.map(imageUrl => (
            <ImageItem
                key={imageUrl}
                imageSrc={imageUrl}
            />
        ))
    );
}

export default React.memo(ImageGallery);