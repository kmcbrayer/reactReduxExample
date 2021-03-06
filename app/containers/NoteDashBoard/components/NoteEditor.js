import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleInput = styled.input`
    font-size: 2.5rem;
    font-weight: bold;
    outline: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const BodyInput = styled.textarea`
    height: 100%;
    width: 100%;
    resize: none;
    font-size: 1.3rem;
    outline: none;
    padding: 1em 0 0 0;
    margin: 0;
`;

const NoteEditorContainer = styled.div`
    margin: 0;
    padding-left: 10px;
    height: 93vh;
    width: 70vw;
    float: left;
`;

class NoteEditor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = this.props.note;
    }

    componentWillReceiveProps(nextProps) {
        const currentNoteId = this.props.note && this.props.note.id;
        if (! currentNoteId || currentNoteId !== nextProps.note.id) {
            this.setState(nextProps.note);
        }
    }

    titleChangeKeyUpHandler = (e) => {
        e.preventDefault();
        const title = e.target.value;
        this.setState({ title });
        this.props.noteChangeHandler(this.state);
    };

    bodyChangeKeyUpHandler = (e) => {
        e.preventDefault();
        const body = e.target.value;
        this.setState({ body });
        this.props.noteChangeHandler(this.state);
    };

    render() {
        return (
            <Fragment>
                { this.state && this.state.id ? (
                    <NoteEditorContainer>
                        <TitleInput
                            type="text"
                            value={this.state.title}
                            onChange={this.titleChangeKeyUpHandler}
                            onKeyUp={this.titleChangeKeyUpHandler} />
                        <BodyInput
                            value={this.state.body}
                            onChange={this.bodyChangeKeyUpHandler}
                            onKeyUp={this.bodyChangeKeyUpHandler} />
                    </NoteEditorContainer>
                ) : null }
            </Fragment>
        );
    }
}


NoteEditor.propTypes = {
    note: PropTypes.object,
    noteChangeHandler: PropTypes.func
};

export default NoteEditor;
