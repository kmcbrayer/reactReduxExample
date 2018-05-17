import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import { fetchNotes, editNote, selectNote } from '../../redux/Notes/NoteActions';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import ManageBar from '../ManageBar';

const LeftContainer = Cell.extend`
    margin: 0;
    height: 100vh;
    border-right: 1px solid LightGreen;
`;

const RightContainer = Cell.extend`
    height: 100vh;
`;

const NoteListHeader = styled.h2`
    margin: 0;
`;

class NoteDashBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            authorId: 0,
            notes: [],
            selectedNote: undefined
        };
    }
    componentWillMount() {
        const authorId = this.props.authorId;
        this.props.fetchNotes({ authorId });
    }

    editNote = (note) => {
        this.props.editNote({ note });
    };

    selectNote = (note) => {
        this.props.selectNote(note.id);
    };

    render() {
        return (
            <div>
                <ManageBar />
                <Grid columns={3}>
                    <LeftContainer width={1}>
                        <NoteListHeader>Notes</NoteListHeader>
                        <NoteList notes={this.props.notes} noteClick={this.selectNote} />
                    </LeftContainer>
                    {/* Search header goes here */}
                    <RightContainer width={2}>
                        <NoteEditor
                            noteChangeHandler={this.editNote}
                            note={this.props.selectedNote} />
                    </RightContainer>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authorId: state.user.id,
    notes: state.notes.list,
    selectedNote: state.notes.selectedNote
});

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: ({ authorId }) => {
        dispatch(fetchNotes({ authorId }));
    },
    editNote: ({ note }) => {
        dispatch(editNote({ note }));
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
    addBlankNote: PropTypes.func,
    editNote: PropTypes.func,
    selectNote: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDashBoard));
