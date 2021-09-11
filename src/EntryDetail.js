import React from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch';

export default function EntryDetail() {
    const { id } = useParams();
    const { data: entry, error, isPending } = useFetch('http://localhost:8000/entries/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/entries/' + id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="entry-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {
                entry &&
                <article>
                    <h2>{entry.title}</h2>
                    <p>Date: {entry.date}</p>
                    <div className="entry-details-body">{entry.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </div>
    )
}
