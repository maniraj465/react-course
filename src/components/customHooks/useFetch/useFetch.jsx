import { useState, useEffect } from 'react';

const useFetch = (url, enabled = true) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!data && enabled && url) {
            const timer = setTimeout(() => {
                fetch(url)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => {
                    // console.error('Error fetching data:', error)
                    setError('Failed to fetch data. Please try again later.');
                });
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [data, enabled, url]);

    return [ data, error, setData, setError ];
};

export default useFetch;