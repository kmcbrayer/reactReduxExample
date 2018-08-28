import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

const NoteItem = styled.div`
    font-size: 1.3rem;
    padding: .3rem;
    overflow: hidden;
    
    h5 {
        margin: 0;
    }
    
    p {
        height: 2rem;
        margin: 0;
        font-size: 1rem;
        padding-left: 10px;
        color: #757575;
    }
    
    span { // FormattedDate becomes a span
        font-size: .8rem;
        margin: 0;
        padding-left: 10px;
    }
    
`;

const NoteListItem = ({ note, noteClick }) => (
    <NoteItem onClick={noteClick.bind(this, note)}>
        <h5>{note.title}</h5>
        <p>{note.body}</p>
    </NoteItem>
);

NoteListItem.propTypes = {
    note: PropTypes.object,
    noteClick: PropTypes.func
};

export default NoteListItem;
