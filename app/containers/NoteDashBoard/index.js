import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../../redux/Notes/NoteActions';
import NoteList from './components/NoteList';

class NoteDashBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }
    componentWillMount() {
        const authorId = this.props.authorId;
        this.props.fetchNotes({ authorId });
    }
    render() {
        return (
            <div>
                <NoteList notes={this.props.notes} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authorId: state.user.id,
    notes: state.notes.list,
});

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: ({ authorId }) => {
        dispatch(fetchNotes({ authorId }));
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDashBoard));
