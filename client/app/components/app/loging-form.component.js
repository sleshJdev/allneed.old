import React from 'react';

export default class LoginForm extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Username:</label>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                    <div>
                        <label>Password:</label>
                        <div>
                            <input type="password"/>
                        </div>
                    </div>
                    <div>
                        <button type="button">Log In</button>
                    </div>
                </form>
            </div>
        );
    }

}