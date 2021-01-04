import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            <span className="header__logo">alphabetiza</span>
            <div>
            <span className="header__icon"> <FontAwesomeIcon icon={faSignInAlt} size="lg" /> </span>
            <span className="header__icon"> <FontAwesomeIcon icon={faUserPlus} size="lg" /> </span>
            </div>
        </header>
    )
}
