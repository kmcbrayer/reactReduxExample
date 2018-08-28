import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoteListItem from './NoteListItem';

const NoteListContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 30vw;
    border-right: 1px solid #90efdf;
    float:left
`;

const NoteList = ({ notes, noteClick }) => {
    const noteItems = notes.sort((a, b) => b.lastUpdated - a.lastUpdated).map((note) => (
        <NoteListItem key={note.id} note={note} noteClick={noteClick} />
    ));

    return (
        <NoteListContainer>
            {noteItems}
        </NoteListContainer>
    );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    noteClick: PropTypes.func
};

export default NoteList;
