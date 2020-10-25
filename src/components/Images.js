import React, {useState, useRef} from 'react';

function Images() {

    const [imageList, setImageList] = useState([
        'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1532559588905-4e8e19d1f09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        'https://images.unsplash.com/photo-1603627015794-a4a01d82b90d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
        'https://images.unsplash.com/photo-1603488897066-6370e681baca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
    ]);

    const newImageSrc = useRef();

    const ImageItem = React.memo((props) => {
        const {imageSrc} = props;
        return (
            <div className="w-1/3">
                <img src={imageSrc}  alt="" width="150" />
            </div>
        );
    });

    const ImageGallery = React.memo((props) => {
        const {imageList} = props;
        return (
            imageList.map(imageUrl => (
                <ImageItem
                    key={imageUrl}
                    imageSrc={imageUrl}
                />
            ))
        );
    });

    function handleClickAddImage() {
        setImageList([
            newImageSrc.current.value,
            ...imageList,
        ]);
        newImageSrc.current.value = "";
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <ImageGallery imageList={imageList}/>
            </div>
            <div className="flex justify-between">
                <input
                    type="text"
                    className="p-2 border border-gray-800 shadow rounded"
                    ref={newImageSrc}
                />
                <button
                    className="p-2 bg-green-600 text-white"
                    onClick={handleClickAddImage}
                >
                    ADD NEW
                </button>
            </div>
        </section>
    );
}

export default React.memo(Images);