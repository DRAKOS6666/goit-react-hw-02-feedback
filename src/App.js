import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

export default class App extends Component {
  static defaultProps = { good: 0, neutral: 0, bad: 0 };
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = event => {
    const btnName = event.target.name;
    this.setState(prevState => {
      return {
        [btnName]: (prevState[btnName] + 1),
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((good * 100) / total) + '%';
    return (
      <>
        <Section title="Please leave feedback" >
          <FeedbackOptions
          options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtn}
          />
        </Section>

        <Section title="Statistics" >
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
