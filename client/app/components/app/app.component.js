import React from 'react';
import Clock from './clock.component';
import Users from './users.component';
import SearchInput from "./search-input.component";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Clock/>
                </div>
                <div>
                    <SearchInput/>
                </div>
                <div>
                    <Users/>
                </div>
            </div>

        );
    }

}

