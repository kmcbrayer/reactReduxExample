import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoteItem = styled.div`
    font-size: 1.3rem;
    padding: .3rem;
`;

const NoteList = ({ notes }) => {
    const noteItems = notes.map((note) => (
        <div key={note.id}>{note.title}</div>
    ));

    return (
        <NoteItem>
            {noteItems}
        </NoteItem>
    );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
