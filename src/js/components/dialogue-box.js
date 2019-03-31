import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateStoreState } from '../actions';
import { INITIAL_STATE } from '../reducer';

export class DialogueBox extends PureComponent {
  render() {
    const {
      quizQuestion,
      isDisabledButtons,
      chosenAnswerIndex,
      isCorrectAnswer,
      scrollPercent,
      score,
    } = this.props;
    const hasScrolledFull = scrollPercent > 95;
    const isActiveDialogue = quizQuestion || hasScrolledFull;
    return (
      <div className={`quiz${isActiveDialogue ? ' quiz--active' : ''}`}>
        {hasScrolledFull ? (
          <div className="quiz__dialogue">
            <h2 className="quiz__title">You reached the bottom.</h2>
            <p>Your score is {score}</p>
            <button className="quiz__button" onClick={this.resetGame}>
              Play again
            </button>
          </div>
        ) : quizQuestion ? (
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
                  disabled={isDisabledButtons}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }

  resetGame = () => {
    this.props.updateStoreState(INITIAL_STATE);
    this.props.scrollContainer.scrollTop = 0;
    this.props.scrollContainer.focus()
  }

  submitAnswer = choice => {
    const { quizQuestion: { correctAnswer, choices }, updateStoreState, score } = this.props;
    const isCorrectAnswer = choice === correctAnswer;
    updateStoreState({
      isDisabledButtons: true,
      score: isCorrectAnswer ? score + 1 : score,
      isCorrectAnswer,
      chosenAnswerIndex: choices.indexOf(choice),
    });
    setTimeout(() => {
      this.props.updateStoreState({
        quizQuestion: null,
        isDisabledButtons: false,
        chosenAnswerIndex: null,
        isCorrectAnswer: null,
      });
      this.props.scrollContainer.focus();
    }, 1000);
  }
}

DialogueBox.propTypes = {
  updateStoreState: PropTypes.func,
  quizQuestion: PropTypes.object,
  isDisabledButtons: PropTypes.bool,
  isCorrectAnswer: PropTypes.bool,
  chosenAnswerIndex: PropTypes.number,
  score: PropTypes.number,
  scrollPercent: PropTypes.number,
  score: PropTypes.number,
}

function mapStateToProps({
  quizQuestion,
  score,
  isDisabledButtons,
  chosenAnswerIndex,
  isCorrectAnswer,
  scrollContainer,
  scrollPercent,
}) {
  return {
    quizQuestion,
    score,
    isDisabledButtons,
    chosenAnswerIndex,
    isCorrectAnswer,
    scrollContainer,
    scrollPercent,
  }
}

export default connect(mapStateToProps, {
  updateStoreState,
})(DialogueBox);
