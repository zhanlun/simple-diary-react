import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCtrl = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCtrl.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('cannot fetch');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setError(null);
                    setData(data);
                })
                .catch(err => {
                    console.log(err)
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message)
                    }
                })
        }, 500)

        return () => abortCtrl.abort();
    }, [url])

    return { data, isPending, error };
}