import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleInput = styled.input`
    font-size: 2.5rem;
    font-weight: bold;
    outline: none;
    padding: 0;
    margin: 0;
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

const EditorWrapper = styled.div`
    width: 100%;
    height: 93vh; //quick and dirty for now
    padding: 0;
    margin: 0;
`;

class NoteEditor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = this.props.note;
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
            <div>
                { this.state.id ? (
                    <EditorWrapper>
                        <TitleInput
                            type="text"
                            value={this.state.title}
                            onChange={this.titleChangeKeyUpHandler}
                            onKeyUp={this.titleChangeKeyUpHandler} />
                        <BodyInput
                            value={this.state.body}
                            onChange={this.bodyChangeKeyUpHandler}
                            onKeyUp={this.bodyChangeKeyUpHandler} />
                    </EditorWrapper>
                ) : null }
            </div>
        );
    }
}


NoteEditor.propTypes = {
    note: PropTypes.object,
    noteChangeHandler: PropTypes.func
};

export default NoteEditor;
