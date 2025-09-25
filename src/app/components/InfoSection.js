import React from 'react';
import pkg from '../../../package.json';

const InfoSection = () => {
    return (
        <span>
            <p>Welkom bij {pkg.name}. (Version {pkg.version})</p>
            <p>----</p>
            <p>Kan jij het raadsel oplossen en het geheime codewoord vinden?</p>
            <p>----</p>
            <p>Voor een lijst met commando{"'"}s die je kan gebruiken type `<span className="secondary">help</span>`.</p>
        </span>
    );
};

export default InfoSection;