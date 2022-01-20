import React, { Component } from "react";

export default class Question extends Component {
    constructor() {
        super();
        this.state = {
            quiz: [
                {
                    question: "what is the capital city of Kenya?",
                    choices: ["Nairobi", "Kisumu"],
                    answer: "Nairobi"
                },
                {
                    question: "Who what the first president of Kenya?",
                    choices: ["Jomo Kenyatta", "Daniel Moi"],
                    answer: "Jomo Kenyatta"
                },
                {
                    question: "what is the name of a female dog?",
                    choices: ["Bitch", "Cunt"],
                    answer: "Bitch"
                },
                {
                    question: "What election year did president Trump lose to Biden?",
                    choices: [2020, 2014],
                    answer: "2020"
                }
            ],
            score: 0,
            currentQuestionIndex: 0
        };
    }

    generateQuestion = () => {
        let quiz = this.state.quiz;
        let index = this.state.currentQuestionIndex;
        let currentQuestion = quiz[index].question;
        let currentChoice1 = quiz[index].choices[0];
        let currentChoice2 = quiz[index].choices[1];
        let btn1 = (
            <button value={currentChoice1} onClick={this.validateAnswer}>
                {currentChoice1}
            </button>
        );
        let btn2 = (
            <button value={currentChoice2} onClick={this.validateAnswer}>
                {currentChoice2}
            </button>
        );

        return (
            <div className="question">
                <div>{currentQuestion}</div>

                {btn1}

                <div>or</div>

                {btn2}

                <p>Score : {this.state.score}</p>
            </div>
        );
    };

    validateAnswer = (e) => {

        let index = this.state.currentQuestionIndex;
        if (e.target.value === this.state.quiz[index].answer) {
            this.setState({
                score: this.state.score + 1,
                currentQuestionIndex:
                    (this.state.currentQuestionIndex + 1) % this.state.quiz.length

            });
        } else {
            this.setState({ score: this.state.score - 1 });
        }
    };

    render() {
        return <div>{this.generateQuestion()}</div>;
    }
}
