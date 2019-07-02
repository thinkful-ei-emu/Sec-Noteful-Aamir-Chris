import React from 'react';
import { Link } from 'react-router-dom'

function FolderMain(props) {
    const newNotes = props.notes.map((note, index) => note.folderId === props.match.params.folderId ? (
        <div key={index}>
            <div><Link to={`/Note/${note.id}`}>{note.name}</Link></div>
            <div>Date modified on {note.modified}</div>
            <button>Delete Note</button>
            <button>Add note</button>
        </div>
        ) : <div key={index}></div> )
    return <div>{newNotes}</div>
}

export default FolderMain;