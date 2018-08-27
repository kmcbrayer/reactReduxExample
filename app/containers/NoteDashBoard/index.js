import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';

import { fetchNotes, editNote, selectNote } from '../../redux/Notes/NoteActions';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import ManageBar from '../ManageBar';

const LeftContainer = Cell.extend`
    margin: 0;
    height: 100vh;
    border-right: 1px solid #90efdf;
`;

const RightContainer = Cell.extend`
    height: 100vh;
`;

const Container = Grid.extend`
    grid-gap: 0px;
`;


class NoteDashBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    componentWillMount() {
        const authorId = this.props.authorId;
        this.props.fetchNotes(authorId);
    }

    editNote = (note) => {
        this.props.editNote(note);
    };

    selectNote = (note) => {
        this.props.selectNote(note.id);
    };

    render() {
        return (
            <div>
                <ManageBar />
                <Container columns={3}>
                    <LeftContainer width={1}>
                        <NoteList notes={this.props.notes} noteClick={this.selectNote} />
                    </LeftContainer>
                    <RightContainer width={2}>
                        <NoteEditor
                            noteChangeHandler={this.editNote}
                            note={this.props.selectedNote} />
                    </RightContainer>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authorId: state.user.id,
    notes: state.notes.list,
    searchText: state.notes.searchText,
    selectedNote: state.notes.selectedNote
});

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: (authorId) => {
        dispatch(fetchNotes(authorId));
    },
    editNote: (note) => {
        dispatch(editNote(note));
    },
    selectNote: (noteId) => {
        dispatch(selectNote(noteId));
    }
});

NoteDashBoard.propTypes = {
    authorId: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.object),
    selectedNote: PropTypes.object,
    fetchNotes: PropTypes.func,
    editNote: PropTypes.func,
    selectNote: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDashBoard));
