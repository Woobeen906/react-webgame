import React, {useRef, useEffect} from 'react';

// useInterval(()=>{
//      console.log("hello");
// },isRunning ? 1000 : null);
// isRunning (delay) -> null 이 돠면 멈추

// customHook
function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);

    return savedCallback.current;
}

export default useInterval;