import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Search = styled.input`
    border: 1px solid #90efdf;
    border-radius: 3px;
    height: 35px;
    margin: 5px;
    padding-left: 5px;
    
    ::placeholder {
        background: url('search-50.png') no-repeat;
        background-size: 20px 20px;
    }
`;

class SearchBar extends React.PureComponent {
    filterNotes = (e) => {
        e.preventDefault();
        const searchText = e.target.value;
        this.props.searchNotes(searchText);
    };

    // placeholder space is to force icon to show
    render() {
        return (
            <Search placeholder=" " onKeyUp={this.filterNotes} />
        );
    }
}

SearchBar.propTypes = {
    searchNotes: PropTypes.func.isRequired
};

export default SearchBar;
