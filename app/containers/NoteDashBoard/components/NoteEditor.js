import React from 'react';
import PropTypes from 'prop-types';

class NoteEditor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.note
        };
    }
    render() {
        const note = this.state.note;
        return (
            <div>
                { note ? (
                    <div>
                        <h1>{note.title}</h1>
                        <p>{note.body}</p>
                    </div>
                ) : null }
            </div>
        );
    }
}

NoteEditor.propTypes = {
    note: PropTypes.object,
};

export default NoteEditor;
