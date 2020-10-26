import React, {useState, useRef, useEffect} from 'react';
import ImageGallery from "./ImageGallery";
import useScroll from "../../utils/hooks/useScroll";
import useFetchUnsplash from "../../utils/hooks/useFetchUnsplash";
import useDebounce from "../../utils/hooks/useDebounce";


function Images() {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const scrollPostion = useScroll();
    const [imageList, setImageList] = useFetchUnsplash(page, searchTerm);
    const debounce = useDebounce();

    useEffect(() => {
        if (scrollPostion !== document.body.offsetHeight - window.innerHeight) {
            return;
        }
        setPage(page + 1);
    }, [scrollPostion]);

    function _handleClickRemoveImage(id) {
        setImageList(imageList.filter((image) => image.id !== id));
    }

    function handleOnChengeInput(event) {
        debounce(() => {
            setSearchTerm(event.target.value);
            setPage(1);
        });
    }

    return (
        <section>
            <h4 className="text-center">{`${imageList.length} Images`}</h4>
            <input
                type="text"
                className="w-full rounded border border-black p-2"
                onChange={handleOnChengeInput}
                placeholder="Search images"
            />
            <div className="gap-0" style={{ columnCount: 3}}>
                <ImageGallery
                    imageList={imageList}
                    _handleClickRemoveImage={_handleClickRemoveImage} />
            </div>
        </section>
    );
}

export default Images;