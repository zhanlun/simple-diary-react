
import React from 'react';
import EntryList from './EntryList';
import useFetch from './useFetch';

export default function Home() {
    const { data: entries, isPending, error } = useFetch('http://localhost:8000/entries');

    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {entries && <EntryList entries={entries} />}
        </div>
    )
}
