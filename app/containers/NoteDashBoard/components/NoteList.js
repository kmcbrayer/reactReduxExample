import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
        };
    }
    render() {
        const noteItems = this.state.notes.map((note) => (
            <div key={note.id}>{note.title}</div>
        ));

        return (
            <div>
                {noteItems}
            </div>
        );
    }
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
