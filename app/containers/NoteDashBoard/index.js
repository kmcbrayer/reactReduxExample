import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchNotes, editNote, selectNote } from '../../redux/Notes/NoteActions';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import ManageBar from '../ManageBar';

const LeftContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 30vw;
    border-right: 1px solid #90efdf;
    float:left
`;

const RightContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 70vw;
    float: left;
`;

const Container = styled.div`
`;


class NoteDashBoard extends React.PureComponent {
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

    filterNoteListBySearchText = (list, searchText) => {
        if (searchText !== '') {
            const filteredList = list.filter((note) => (
                note.title.includes(searchText) || note.body.includes(searchText)
            ));
            return { filteredList, selectedNote: filteredList[0] };
        }
        return { filteredList: list };
    };

    render() {
        const { notes, searchText } = this.props;
        const { filteredList, selectedNote } = this.filterNoteListBySearchText(notes, searchText);

        return (
            <div>
                <ManageBar />
                <Container>
                    <LeftContainer>
                        <NoteList notes={filteredList} noteClick={this.selectNote} />
                    </LeftContainer>
                    <RightContainer>
                        <NoteEditor
                            noteChangeHandler={this.editNote}
                            note={selectedNote || this.props.selectedNote} />
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
    searchText: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDashBoard));
