import React from "react";
import ImageItem from "./ImageItem";

function ImageGallery(props) {
    const {imageList, _handleClickRemoveImage} = props;

    return (
        imageList.map((image) => (
            <ImageItem
                key={image.id}
                index={image.id}
                imageSrc={image.url}
                _handleClickRemoveImage={_handleClickRemoveImage}
            />
        ))
    );
}

export default React.memo(ImageGallery);