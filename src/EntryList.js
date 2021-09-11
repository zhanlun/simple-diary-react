import React from 'react'
import { Link } from 'react-router-dom'

export default function EntryList({ entries }) {
    return (
        <div className="entry-list">
            {entries.map(entry => (
                <div key={entry.id} className="entry-preview">
                    <Link to={`/entries/${entry.id}`}>
                        <h2>{entry.title}</h2>
                        <p>Date: {entry.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}
