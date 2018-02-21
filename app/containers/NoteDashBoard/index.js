import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import { fetchNotes, addBlankNote, editNote } from '../../redux/Notes/NoteActions';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

const LeftContainer = Cell.extend`
    margin: 0;
    height: 100vh;
    border-right: 1px solid LightGreen;
`;

const RightContainer = Cell.extend`
    height: 100vh;
`;

const AddButton = styled.button`
    background-color: LightGreen;
    border-radius: 3px;
    height: 30px;
    width: 70px;
    margin: 5px;
`;

const NoteListHeader = styled.h2`
    margin: 0;
    border-top: 1px solid LightGreen;    
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

    addNote = () => {
        const authorId = this.props.authorId;
        this.props.addBlankNote({ authorId });
    };

    editNote = (note) => {
        this.props.editNote({ note });
    };

    render() {
        return (
            <Grid columns={3}>
                <LeftContainer width={1}>
                    <AddButton onClick={this.addNote}>
                        Add
                    </AddButton>
                    <NoteListHeader>Notes</NoteListHeader>
                    <NoteList notes={this.props.notes} />
                </LeftContainer>
                {/* Search header goes here */}
                <RightContainer width={2}>
                    <NoteEditor
                        noteChangeHandler={this.editNote}
                        note={this.props.selectedNote} />
                </RightContainer>
            </Grid>
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
    addBlankNote: ({ authorId }) => {
        dispatch(addBlankNote({ authorId }));
    },
    editNote: ({ note }) => {
        dispatch(editNote({ note }));
    }
});

NoteDashBoard.propTypes = {
    authorId: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.object),
    selectedNote: PropTypes.object,
    fetchNotes: PropTypes.func,
    addBlankNote: PropTypes.func,
    editNote: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDashBoard));
