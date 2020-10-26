import React, {useState, useEffect, useRef} from 'react';

function useDebounce() {
    const [waitTimeout, setWaitTimeout] = useState('');
    useEffect(() => {
        return () => { clearTimeout(waitTimeout); }
    }, []);

    function debounce(cb, wait = 1000) {
        clearTimeout(waitTimeout);
        setWaitTimeout(setTimeout(() => {
            cb();
            clearTimeout(waitTimeout);
            console.log('asd');
            }, wait)
        );
    }

    return debounce;
}

export default useDebounce;