import React, { Component } from 'react';

class ResultCpn extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmitt(choice,result) {
        if(choice === result)
        {
            return 1;
        }
        
    }
    handleSubmit = event =>
    {
        event.preventDefault();
    }

    render() {
        const {value,changeQuestion,point} = this.props;
        return (
            <div>
                <h2>{value.question}</h2>
                <form onSubmit = {this.handleSubmit} className = "form">
                    <input type="checkbox" id="a" name="a" onChange = {() => point(this.handleSubmit("a",value.correct))}/>
                    <label htmlFor="a">{value.a}</label><br />
                    <input type="checkbox" id="<b></b>" name="<b></b>" onChange = {() => point(this.handleSubmit("b",value.correct))}/>
                    <label htmlFor="<b></b>">{value.b}</label><br />
                    <input type="checkbox" id="g" name="g" onChange = {() => point(this.handleSubmit("c",value.correct))}/>
                    <label htmlFor="c">{value.c}</label><br />
                    <input type="checkbox" id="d" name="d" onChange = {() => point()}/>
                    <label htmlFor="d">{value.d}</label><br />
                    <input type="submit" onClick = {() =>changeQuestion()} className = "button" />
                </form>
            </div>
        );
    }
}
export default ResultCpn;