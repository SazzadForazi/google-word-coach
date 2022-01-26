import React, { Component } from "react";
import './Question.css'
export default class Question extends Component {
    constructor() {
        super();
        this.state = {
            quiz: [
                {
                    question: "Where were the IAAF World Indoor Championships first held?",
                    choices: ["Paris", " Amsterdam"],
                    answer: "Paris"
                },
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
                    question: "A game called ” Mokshapat” was created by the 13th century poet saint Gyandev, It is the original version of which of the following games of today?",
                    choices: ["Ludo", "Snakes & Ladders"],
                    answer: "Snakes & Ladders"
                },
                {
                    question: "Rovers Cup is related to which of the following sports?",
                    choices: ["Tennis", "Football"],
                    answer: "Football"
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
            <button className="btn gradient-button gradient-button-3" value={currentChoice1} onClick={this.validateAnswer}>
                {currentChoice1}
            </button>
        );
        let btn2 = (
            <button className="btn gradient-button gradient-button-3" value={currentChoice2} onClick={this.validateAnswer}>
                {currentChoice2}
            </button>
        );

        return (
            <div className="question" id="myDIV">
                <div onclick="myFunction()">{currentQuestion}</div>

                {btn1}

                <div><b>or</b></div>

                {btn2}
                <br />
                <p className="gradient-button gradient-button-1" >Score : {this.state.score}</p>
            </div>
        );
    };

    validateAnswer = (e) => {

        let index = this.state.currentQuestionIndex;
        if (e.target.value === this.state.quiz[index].answer) {
            this.setState({

                score: this.state.score + 10,
                currentQuestionIndex:
                    (this.state.currentQuestionIndex + 10) % this.state.quiz.length

            });
            document.getElementById("myDIV").style.color = "green";
            // document.getElementsByClassNames("btn").style.background = "green";
        } else {
            this.setState({ score: this.state.score - 10 });
            document.getElementById("myDIV").style.color = "red";
            alert(document.body.style.innerHTML = "Opps!! Incorrect Answer");

        }
        e.preventDefault();
    };

    render() {
        return <div>{this.generateQuestion()}</div>;
    }
}
