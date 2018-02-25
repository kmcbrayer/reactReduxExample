import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { addBlankNote } from '../../redux/Notes/NoteActions';


const AddButton = styled.button`
    background-color: LightGreen;
    border-radius: 3px;
    height: 30px;
    width: 70px;
    margin: 5px;
`;

const BarWrapper = styled.div`
    border-bottom: 1px solid LightGreen;
    width: 100vw;
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

    render() {
        return (
            <BarWrapper>
                <AddButton onClick={this.addNote}>
                    Add
                </AddButton>
            </BarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    authorId: state.user.id
});

const mapDispatchToProps = (dispatch) => ({
    addBlankNote: ({ authorId }) => {
        dispatch(addBlankNote({ authorId }));
    },
});

ManageBar.propTypes = {
    authorId: PropTypes.string,
    addBlankNote: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBar);
