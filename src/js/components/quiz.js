import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateStoreState } from '../actions';

export class Quiz extends PureComponent {
  render() {
    const {
      isQuestion,
      quizQuestion,
      hasAnswered,
      chosenAnswerIndex,
      isCorrectAnswer,
    } = this.props;
    return (
      <div className={`quiz${isQuestion ? ' quiz--active' : ''}`}>
        {(isQuestion && quizQuestion) && (
          <div className="quiz__dialogue">
            <h2 className="quiz__title">{quizQuestion.text}</h2>
            {quizQuestion.choices.map((choice, index) => {
              const submitAnswer = () => this.submitAnswer(choice);
              const isCorrectButton = isCorrectAnswer && index === chosenAnswerIndex;
              const isIncorrectButton = !isCorrectAnswer && index === chosenAnswerIndex;
              let buttonClassName = 'quiz__button';
              if (isCorrectButton) {
                buttonClassName += ' quiz__button--correct';
              } else if (isIncorrectButton) {
                buttonClassName += ' quiz__button--incorrect';
              }
              return (
                <button 
                  key={`quiz-choice-${index}`} 
                  className={buttonClassName}
                  onClick={submitAnswer}
                  disabled={hasAnswered}
                >{choice}</button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  submitAnswer = choice => {
    const { quizQuestion: { correctAnswer, choices }, updateStoreState, score } = this.props;
    const isCorrectAnswer = choice === correctAnswer;
    updateStoreState({
      hasAnswered: true,
      score: isCorrectAnswer ? score + 1 : score,
      isCorrectAnswer,
      chosenAnswerIndex: choices.indexOf(choice),
    });
    setTimeout(() => {
      this.props.updateStoreState({
        isQuestion: false,
        hasAnswered: false,
        chosenAnswerIndex: null,
        isCorrectAnswer: null,
      });
      this.props.scrollContainer.focus();
    }, 1000);
  }
}

Quiz.propTypes = {
  updateStoreState: PropTypes.func,
  quizQuestion: PropTypes.object,
  isQuestion: PropTypes.bool,
  hasAnswered: PropTypes.bool,
  isCorrectAnswer: PropTypes.bool,
  chosenAnswerIndex: PropTypes.number,
  score: PropTypes.number,
}

function mapStateToProps({
  quizQuestion,
  isQuestion,
  score,
  hasAnswered,
  chosenAnswerIndex,
  isCorrectAnswer,
  scrollContainer,
}) {
  return {
    quizQuestion,
    isQuestion,
    score,
    hasAnswered,
    chosenAnswerIndex,
    isCorrectAnswer,
    scrollContainer,
  }
}

export default connect(mapStateToProps, {
  updateStoreState,
})(Quiz);
