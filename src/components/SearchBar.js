import React from "react";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import "../styles/searchBar.css";

class SearchBar extends React.Component {
    state = {
        term: "",
        elevation: 1
    }

    searchOnFocus = (e) => {
        this.setState({
            elevation: 4
        })
    }
    searchOnBlur = (e) => {
        this.setState({
            elevation: 1
        })
    }

    searchTermOnChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    searchOnFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure to we call a callback function from parent component
        this.props.onSearchInputSubmit( this.state.term );
    }

    render() {
        return (
            <Paper component="form" className="search-form" onSubmit={ this.searchOnFormSubmit } elevation={this.state.elevation}>
                <InputBase
                    placeholder="Search Videos"
                    inputProps={{ 'aria-label': 'search videos' }}
                    style={{ flex: 1 }}
                    onFocus={ this.searchOnFocus } 
                    onBlur={ this.searchOnBlur }
                    value={ this.state.term } 
                    onChange={ this.searchTermOnChange }
                />
                <IconButton type="submit" aria-label="search">
                    <i className="material-icons">search</i>
                </IconButton>
            </Paper>
        );
    }
}

export default SearchBar;