import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTION, RESET} from './actions';

function score(state = 0, action = {}) {
    switch(action.type) {
        case SUBMIT:
            let score = 0;
            action.questions.forEach((question) => {
                if(question.answer !== undefined && question.userAnswer !== undefined){
                    if(question.userAnswer.toLowerCase().trim() === question.answer.toLowerCase().trim()){
                        score ++;
                    }
                }
            })
            return score;
        case RESET:
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return true;
        case RESET:
            return false;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
			if (action.isNext){
				return state+1;
			} 
            return state-1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return {
                    ...question,
                    userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer
                };
            });
        case INIT_QUESTION:
            return action.questions;
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;