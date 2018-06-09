import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';

import { addBlankNote, deleteNote } from '../../redux/Notes/NoteActions';
import { userLogOut } from '../../redux/User/UserActions';

const Button = styled.button`
    background-color: #95d212;
    border-radius: 3px;
    height: 30px;
    min-width: 70px;
    margin: 5px;
    font-weight: bold;
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

    userLogOut = () => {
        this.props.userLogOut();
        this.history.push('/login');
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
                    <Button onClick={this.userLogOut}>
                        Log Out
                    </Button>
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
    userLogOut: PropTypes.func
};

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
    },
    userLogOut: () => {
        dispatch(userLogOut());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageBar);
