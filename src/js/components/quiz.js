import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateStoreState } from '../actions';

export class Quiz extends PureComponent {
  render() {
    const { isQuestion, quizQuestion } = this.props;
    return (
      <div className="quiz">
        {(isQuestion && quizQuestion) && (
          <div className="quiz__dialogue">
            <h2 className="quiz__title">{quizQuestion.text}</h2>
            {quizQuestion.choices.map((choice, index) => {
              const submitAnswer = () => this.submitAnswer(choice);
              return (
                <button 
                  key={`quiz-choice-${index}`} 
                  className="quiz__choice"
                  onClick={submitAnswer}
                >{choice}</button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  submitAnswer = choice => {
    const { quizQuestion: { correctAnswer }, updateStoreState, score } = this.props;
    const isCorrectAnswer = choice === correctAnswer;
    updateStoreState({
      isQuestion: false,
      score: isCorrectAnswer ? score + 1 : score,
      isCorrectAnswer,
    });
  }
}

Quiz.propTypes = {
  updateStoreState: PropTypes.func,
  quizQuestion: PropTypes.object,
  isQuestion: PropTypes.bool,
  score: PropTypes.number,
}

function mapStateToProps({quizQuestion, isQuestion, score}) {
  return {
    quizQuestion,
    isQuestion,
    score,
  }
}

export default connect(mapStateToProps, {
  updateStoreState,
})(Quiz);
