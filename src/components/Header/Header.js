import React from 'react';

function Header(props) {
    const { headerMessage } = props;
    return (
        <header>
            <h1>{headerMessage}</h1>
        </header>
    );
}

export default Header;
