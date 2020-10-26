import React, {useState, useEffect} from 'react';

function useScroll() {
    const [scrollPostion, setCcrollPostion] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)}
    }, []);

    function handleScroll() {
        setCcrollPostion(window.scrollY);
    }

    return scrollPostion;
}

export default useScroll;