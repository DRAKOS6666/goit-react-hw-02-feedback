import React from 'react';
import propTypes from 'prop-types';
import './Section.scss';


function Section ({title, children}) {
    return (<section >
    <h2>{title}</h2>
    {children}
    </section>)
}

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.object.isRequired,
  };

export default Section;
