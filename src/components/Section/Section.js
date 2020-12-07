import React from 'react';
import propTypes from 'prop-types';
import './Section.scss';


function Section ({title, children}) {
    return <section >
    <h2>{title}</h2>
    {children}
    </section>;
}

Section.propTypes = {
    title: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    total: propTypes.func.isRequired,
    positivePercentage: propTypes.func.isRequired,
  };
  
  Section.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

export default Section;
