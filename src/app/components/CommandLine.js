import React from 'react';

const CommandLine = (props) => {
    const command = props.command;

    return (
        <div style={{ paddingTop: 10 }}>
            <p>
                <span className="prefix">Hacker</span>@<span className="secondary">Bazootainment</span>:~$ {command}
            </p>
        </div>
    );
};

export default CommandLine;