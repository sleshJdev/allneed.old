import React from 'react';

export default class Panel extends React.Component {

    render() {
        return (
            <div style={{padding: '20px 40px', border: '1px solid red'}}>
                {this.props.children}
            </div>
        );
    }

}