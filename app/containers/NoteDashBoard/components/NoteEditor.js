import React from 'react';
import PropTypes from 'prop-types';

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
                    <div>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.titleChangeKeyUpHandler}
                            onKeyUp={this.titleChangeKeyUpHandler} />
                        <textarea
                            value={this.state.body}
                            onChange={this.bodyChangeKeyUpHandler}
                            onKeyUp={this.bodyChangeKeyUpHandler} />
                    </div>
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
