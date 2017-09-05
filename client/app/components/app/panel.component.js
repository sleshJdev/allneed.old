import React from 'react';

export default class Panel extends React.Component {

    render() {
        return (
            <div style={{margin: '10px', border: '1px solid'}}>
                {props.children}
            </div>
        );
    }

}