import React from 'react';
import StateContext from '../stateContext';

class NoteMain extends React.Component {
    static contextType = StateContext;
    render(){
        const {notes, deleteNote} = this.context;
    const newNote = notes.map(note => note.id === this.props.match.params.noteId ? (
        <div>
            <div>{note.name}</div>
            <div>Date modified on {note.modified}</div>
            <button onClick={() => {
                deleteNote(note.id)               
                window.open('/','_self');
                }} 
                >
                    Delete Note
            </button>
            <p>{note.content}</p>
        </div>
        ) : '' )
    return <div>{newNote}</div>
}
}

export default NoteMain;