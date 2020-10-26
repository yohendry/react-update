import React, {useState} from 'react';

function ImageItem(props) {
    const {imageSrc, index, _handleClickRemoveImage} = props;
    const deleteIconClasses = [
        'far',
        'fa-trash-alt',
        'absolute',
        'right-0',
        'cursor-pointer',
        'bg-white',
        'bg-opacity-50',
        'hover:bg-opacity-100',
        'text-red-600',
        'hover:text-red-700',
        'px-2',
        'py-1'
    ];
    const [isMouseIn, setIsMouseIn] = useState(false);

    function handleOnMouseEnter() {
        setIsMouseIn(true);
    }

    function handleOnMouseLeave() {
        setIsMouseIn(false);
    }
    return (
        <div className="w-1/4 my-4 flex justify-center">
            <div
                className="relative"
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <i
                    className={`${deleteIconClasses.join(' ')} ${isMouseIn ? '' : 'hidden'}`}
                    onClick={() => {_handleClickRemoveImage(index)}}
                ></i>
                <img
                    src={imageSrc}
                    alt=""
                    width="150"
                    className="mx-auto"
                />
            </div>
        </div>
    );
}

export default ImageItem;

