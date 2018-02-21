import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoteItem = styled.div`
    font-size: 1.3rem;
    padding: .3rem;
`;

const NoteList = ({ notes, noteClick }) => {
    const noteItems = notes.sort((a, b) => b.lastUpdated - a.lastUpdated).map((note) => (
        <NoteItem key={note.id} onClick={noteClick.bind(this, note)}>{note.title}</NoteItem>
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
