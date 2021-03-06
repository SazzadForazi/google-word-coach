import React, { Component } from "react";
import './Question.css'


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
// async function demo() {



//   await sleep(2000);


// }



export default class Question extends Component {

    constructor() {
        super();
        this.state = {
            quiz: [
                {
                    question: "which is the flag of bangladesh??",
                    choices: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"],
                    answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png"
                },

                {
                    question: "which is the flag of argintina?",
                    choices: ["https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png", "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg"],
                    answer: "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg"
                },
                {
                    question: "which is the flag of italy?",
                    choices: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png", "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53E6/2F6A/5EBE/3F5A/0752/0A28/100B/04C1/Flag_of_Uruguay.png"],
                    answer: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png"
                }



            ],
            score: 0,
            currentQuestionIndex: 0

        };

    }


    generateQuestion = () => {



        console.log(this.state.quiz)
        let quiz = this.state.quiz;
        let index = this.state.currentQuestionIndex;
        let currentQuestion = quiz[index].question;
        let currentChoice1 = quiz[index].choices[0];
        let currentChoice2 = quiz[index].choices[1];
        // const handleAddUser = e => {
        //     const answer1 = currentChoice1.current.value;
        //     const answer2 = currentChoice2.current.value;
        //     const correctAnsweris = { answer1, answer2 }
        //     fetch('http://localhost:3000/quiz', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(correctAnsweris)
        //     })
        //         .then()
        //     e.preventDefault()
        // }
        let btn1 = (
            <button className="btn gradient-button gradient-button-3" value={currentChoice1} onClick={this.validateAnswer}>

                <img src={currentChoice1} className="img-fluid rounded-start" alt="..." />
            </button>

        );
        // console.log(currentChoice1)
        let btn2 = (
            <button className="btn gradient-button gradient-button-3" value={currentChoice2} onClick={this.validateAnswer}>

                <img src={currentChoice2} className="img-fluid rounded-start" alt="..." />
            </button>
        );

        return (
            <div className="question" id="myDIV">
                <div className="currentQuestion" id="questioncolor" onClick="myFunction()">
                    {currentQuestion}
                </div>

                {btn1}

                <div id="or"><b>or</b></div>

                {btn2}
                <br />
                <p className="gradient-button gradient-button-1" >Score : {this.state.score}</p>
            </div>
        );

    };



    validateAnswer = (e) => {

        let index = this.state.currentQuestionIndex;
        // let value = 10;
        // console.log(e.target.src)
        if (e.target.src === this.state.quiz[index].answer) {
            document.getElementsByTagName("body")[0].style.color = "green";
            setTimeout(() => {
                document.getElementsByTagName("body")[0].style.color = "black";
                this.setState({

                    score: this.state.score + 10,
                    currentQuestionIndex:
                        (this.state.currentQuestionIndex + 10) % this.state.quiz.length
                });

            }, 1000);

        } else {

            document.getElementsByTagName("body")[0].style.color = "red";

            setTimeout(() => {

                document.getElementsByTagName("body")[0].style.color = "black";
                this.setState({

                    score: this.state.score - 10,

                    currentQuestionIndex:
                        (this.state.currentQuestionIndex + 10) % this.state.quiz.length

                });

            }, 1000);
        }
        e.preventDefault();
    };

    render() {
        return <div>{this.generateQuestion()}</div>;
    }


}
