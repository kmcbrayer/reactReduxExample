import React from 'react';
import PropTypes from 'prop-types';
import NoteListItem from './NoteListItem';

const NoteList = ({ notes, noteClick }) => {
    const noteItems = notes.sort((a, b) => b.lastUpdated - a.lastUpdated).map((note) => (
        <NoteListItem key={note.id} note={note} noteClick={noteClick} />
    ));

    return (
        <div>
            {noteItems}
        </div>
    );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    noteClick: PropTypes.func
};

export default NoteList;
