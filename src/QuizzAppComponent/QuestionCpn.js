import React, { Component } from 'react';
import ResultCpn from './ResultCpn';

class QuestionCpn extends Component {
    constructor(state) {
        super(state);
        this.state = {
            quizData : [
                {
                    question: "Which language runs in a web browser?",
                    a: "Java",
                    b: "C",
                    c: "Python",
                    d: "JavaScript",
                    correct: "d",
                },
                {
                    question: "What does CSS stand for?",
                    a: "Central Style Sheets",
                    b: "Cascading Style Sheets",
                    c: "Cascading Simple Sheets",
                    d: "Cars SUVs Sailboats",
                    correct: "b",
                },
                {
                    question: "What does HTML stand for?",
                    a: "Hypertext Markup Language",
                    b: "Hypertext Markdown Language",
                    c: "Hyperloop Machine Language",
                    d: "Helicopters Terminals Motorboats Lamborginis",
                    correct: "a",
                },
                {
                    question: "What year was JavaScript launched?",
                    a: "1996",
                    b: "1995",
                    c: "1994",
                    d: "none of the above",
                    correct: "b",
                }
            ],
            currentQuestion: 0,
            point: 0,
        }
    }
    changeQuestion = () => {
        if(this.state.currentQuestion <= 3)  
        {
            let temp = this.state.currentQuestion + 1;
            this.setState({currentQuestion: temp})
        } 
        else if(this.state.currentQuestion === 3)
        {
            this.setState({currentQuestion: 0})
        }
        console.log(this.state.currentQuestion)
    }
    point = (sPoint) => {
        this.setState({point: + sPoint})
        console.log(this.state.point)
    }
    render() {
        return (
            <div className = "quizz">
               {
                   <ResultCpn 
                    value = {this.state.quizData[this.state.currentQuestion]}
                    changeQuestion = {this.changeQuestion}
                    point = {this.point}
                   />
               } 
            </div>
        );
    }
}

export default QuestionCpn;