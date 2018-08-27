import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Search = styled.input`
    border: 1px solid #90efdf;
    border-radius: 3px;
    height: 35px;
    margin: 5px;
`;

class SearchBar extends React.PureComponent {
    filterNotes = (e) => {
        e.preventDefault();
        const searchText = e.target.value;
        this.props.searchNotes(searchText);
    };

    render() {
        return (
            <Search onKeyUp={this.filterNotes} />
        );
    }
}

SearchBar.propTypes = {
    searchNotes: PropTypes.func.isRequired
};

export default SearchBar;
