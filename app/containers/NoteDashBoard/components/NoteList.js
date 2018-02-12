import React from 'react';
import PropTypes from 'prop-types';

const NoteList = ({ notes }) => {
    const noteItems = notes.map((note) => (
        <div key={note.id}>{note.title}</div>
    ));

    return (
        <div>
            {noteItems}
        </div>
    );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
