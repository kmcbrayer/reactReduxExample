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
    background-size: 35px 35px;
    border-radius: 3px;
    height: 35px;
    width: 35px;
    margin: 5px 5px 5px 0px;
    border: none;
`;

const DeleteButton = styled(Button)`
    background-image: url('trash-can-48.png');
    float: right;
`;

const LogOutButton = styled(Button)`
    background-image: url('user-48.png');
    float: right;
`;

const AddButton = styled(Button)`
    background-image: url('plus-50.png');
    float: right;
`;

const BarWrapper = Grid.extend`
    border-bottom: 1px solid #90efdf;
    grid-gap: 0px;
`;

class ManageBar extends React.PureComponent {
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
                    <AddButton onClick={this.addNote} />
                </Cell>
                <Cell width={2}>
                    <SearchBar searchText={this.props.searchText} searchNotes={this.searchNotes} />
                    <DeleteButton onClick={this.deleteNote} />
                    <LogOutButton onClick={this.userLogOut} />
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
    searchNotes: PropTypes.func,
    searchText: PropTypes.string
};

const mapStateToProps = (state) => ({
    authorId: state.user.id,
    selectedNote: state.notes.selectedNote,
    searchText: state.notes.searchText
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
