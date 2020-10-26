import React, {useState, useEffect} from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const unsplash = new Unsplash({ accessKey:UNSPLASH_ACCESS_KEY });

function useFetchUnsplash(page, searchTerm) {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        let response = null;

        if(searchTerm.length >= 1) {
            response = unsplash.search.photos(searchTerm, page, 20, {})
                .then(toJson)
                .then(response => {
                    const {results} = response;
                    return results.map((item) => {
                        const {color, id, urls } = item;
                        const {thumb, full} = urls;
                        return {color, id, thumb, full};
                    });
                })
        } else {
            response = unsplash.photos.listPhotos(page, 20, {})
                .then(toJson)
                .then(response => {
                    return response.map((item) => {
                        const {color, id, urls } = item;
                        const {thumb, full} = urls;
                        return {color, id, thumb, full};
                    });
                })
        }

        response
            .then(images => {
                if (page === 1) {
                    setImageList([...images]);
                } else {
                    setImageList([...imageList, ...images]);
                }
            });
    }, [page, searchTerm]);


    return [imageList, setImageList];
}

export default useFetchUnsplash;