import React from 'react';
import PropTypes from 'prop-types';

const NoteEditor = ({ note }) => (
    <div>
        { note ? (
            <div>
                <h1>{note.title}</h1>
                <p>{note.body}</p>
            </div>
        ) : null }
    </div>
);

NoteEditor.propTypes = {
    note: PropTypes.object,
};

export default NoteEditor;
