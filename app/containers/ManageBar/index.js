import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';

import SearchBar from './componenets/SearchBar';
import { addBlankNote, deleteNote, searchNotes } from '../../redux/Notes/NoteActions';
import { userLogOut } from '../../redux/User/UserActions';

const Button = styled.button`
    background-color: #90efdf;
    border-radius: 3px;
    height: 30px;
    min-width: 70px;
    margin: 5px 5px 5px 0px;
    font-weight: bold;
`;

const DeleteButton = styled(Button)`
    
`;

const LogOutButton = styled(Button)`
    float: right;
`;

const AddButton = styled(Button)`
    float: right;
`;

const BarWrapper = Grid.extend`
    border-bottom: 1px solid #90efdf;
    grid-gap: 0px;
`;

class ManageBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    addNote = () => {
        const authorId = this.props.authorId;
        this.props.addBlankNote(authorId);
    };

    deleteNote = () => {
        const selectedNote = this.props.selectedNote;
        this.props.deleteNote(selectedNote.id);
    };

    userLogOut = () => {
        this.props.userLogOut();
        this.history.push('/login');
    };

    searchNotes = (searchText) => {
        this.props.searchNotes(searchText);
    };

    render() {
        return (
            <BarWrapper columns={3}>
                <Cell width={1}>
                    <AddButton onClick={this.addNote}>
                        Add
                    </AddButton>
                </Cell>
                <Cell width={2}>
                    <DeleteButton onClick={this.deleteNote}>
                        Delete
                    </DeleteButton>
                    <SearchBar searchNotes={this.searchNotes} />
                    <LogOutButton onClick={this.userLogOut}>
                        Log Out
                    </LogOutButton>
                </Cell>
            </BarWrapper>
        );
    }
}

ManageBar.propTypes = {
    authorId: PropTypes.string,
    addBlankNote: PropTypes.func,
    selectedNote: PropTypes.object,
    deleteNote: PropTypes.func,
    userLogOut: PropTypes.func,
    searchNotes: PropTypes.func
};

const mapStateToProps = (state) => ({
    authorId: state.user.id,
    selectedNote: state.notes.selectedNote
});

const mapDispatchToProps = (dispatch) => ({
    addBlankNote: (authorId) => {
        dispatch(addBlankNote(authorId));
    },
    deleteNote: (noteId) => {
        dispatch(deleteNote(noteId));
    },
    userLogOut: () => {
        dispatch(userLogOut());
    },
    searchNotes: (text) => {
        dispatch(searchNotes(text));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageBar);
