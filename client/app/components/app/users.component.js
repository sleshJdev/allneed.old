import React from 'react';
import axios from 'axios';

export default class UsersTable extends React.Component {

    loadUsers() {
        const url = 'http://localhost:9000/api/users';
        return axios.get(url).then(users => {
            this.setState(() => ({users: users.data}));
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Birthday</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((it, index) =>
                    <tr key={index}>
                        <td>{it.name}</td>
                        <td>{it.surname}</td>
                        <td>{it.birthday}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

