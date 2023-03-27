import React from 'react';

const Button = ({ children }) => {
    return (
        <>
            <button className="btn btn-secondary">{children}</button>
        </>
    );
};

export default Button;