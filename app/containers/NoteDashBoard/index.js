import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchNotes } from '../../redux/Notes/NoteActions';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

const LeftContainer = styled.div`
    margin: 0;
    max-width: 350px;
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

    render() {
        return (
            <div>
                <LeftContainer>
                    <h2>Notes</h2>
                    <NoteList notes={this.props.notes} />
                </LeftContainer>
                {/* Search header goes here */}
                <NoteEditor note={this.props.selectedNote} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authorId: state.user.id,
    notes: state.notes.list,
    selectedNote: state.notes.list[0]
});

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: ({ authorId }) => {
        dispatch(fetchNotes({ authorId }));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDashBoard));
