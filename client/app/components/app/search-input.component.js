import React from 'react';

export default class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    handleSearchInputChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Text for search..."
                       onChange={this.handleSearchInputChange}/>
                <button type="button">Search</button>
            </div>
        );
    }
}