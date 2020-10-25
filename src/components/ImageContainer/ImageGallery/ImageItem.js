import React from "react";

function ImageItem(props) {
    const {imageSrc} = props;
    return (
        <div className="w-1/3 my-4">
            <img src={imageSrc}  alt="" width="150" />
        </div>
    );
}

export default React.memo(ImageItem);

