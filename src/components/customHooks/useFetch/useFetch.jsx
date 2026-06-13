import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!data) {
            setTimeout(() => {
                fetch(url)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => {
                    // console.error('Error fetching data:', error)
                    setError('Failed to fetch data. Please try again later.');
                });
            }, 1000);        
        }
    }, []);

    return [ data, error, setData, setError ];
};

export default useFetch;