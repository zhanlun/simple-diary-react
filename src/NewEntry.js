import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function NewEntry() {
    const [data, setData] = useState({
        title: '',
        date: '',
        body: '',
    });

    const history = useHistory();

    const handleChange = (e) =>
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/entries', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="new-entry">
            <h2>Add a new entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Title for your entry:</label>
                <input type="text" value={data.title}
                    name="title"
                    onChange={handleChange} required />
                <label>Date:</label>
                <input type="date" value={data.date}
                    name="date"
                    onChange={handleChange} required />

                <label>Body:</label>
                <textarea value={data.body} rows={10}
                    name="body"
                    onChange={handleChange} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
