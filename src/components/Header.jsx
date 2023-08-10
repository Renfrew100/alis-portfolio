import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './button.jsx';
import './header.css';

export const Header = ({ home, projects, workexperience, about, resume }) => (
    <header>
            {(
                <>
                <a href="/"><Button onClick = {home} size="large" label="Home" /></a>
                <a href="/projects"><Button onClick = {projects} size="large" label="About" /></a>
                <a href="/work experience"><Button onClick = {workexperience} size="large" label="Work Experience" /></a>
                <a href="/about"><Button onclick = {about} size="large" label="Projects"/></a>
                <a href="/resume"><Button onclick = {resume} size="large" label="My Resume"/></a>
                </>
            )}
    </header>
);

Header.propTypes = {
    user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    }),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
};
  
Header.defaultProps = {
    user: null,
};
