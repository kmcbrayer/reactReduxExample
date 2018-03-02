import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';

import { addBlankNote, deleteNote } from '../../redux/Notes/NoteActions';


const Button = styled.button`
    background-color: LightGreen;
    border-radius: 3px;
    height: 30px;
    width: 70px;
    margin: 5px;
`;

const BarWrapper = Grid.extend`
    border-bottom: 1px solid LightGreen;
`;

class ManageBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    addNote = () => {
        const authorId = this.props.authorId;
        this.props.addBlankNote({ authorId });
    };

    deleteNote = () => {
        const selectedNote = this.props.selectedNote;
        this.props.deleteNote(selectedNote.id);
    };

    render() {
        return (
            <BarWrapper columns={3}>
                <Cell width={1}>
                    <Button onClick={this.addNote}>
                        Add
                    </Button>
                </Cell>
                <Cell width={2}>
                    <Button onClick={this.deleteNote}>
                        Delete
                    </Button>
                </Cell>
            </BarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    authorId: state.user.id,
    selectedNote: state.notes.selectedNote
});

const mapDispatchToProps = (dispatch) => ({
    addBlankNote: ({ authorId }) => {
        dispatch(addBlankNote({ authorId }));
    },
    deleteNote: (noteId) => {
        dispatch(deleteNote(noteId));
    }
});

ManageBar.propTypes = {
    authorId: PropTypes.string,
    addBlankNote: PropTypes.func,
    selectedNote: PropTypes.object,
    deleteNote: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBar);
