import React, {Component} from 'react';
import Counter from '../components/Counter';
import PropTypes from 'prop-types';

class CounterPageContainer extends Component {
    constructor(props) {

        super(props);
        this.state ={
            countValue:0,
            parity:'even',
            countScreen: {

            border:'1px solid red',
            maxWidth:'200px',
            width:'100%',
            padding:'5px',
            textAlign:'center',
            margin: '10px auto',
        }

        }
    }
    handleIncrement =() =>{
    this.setState((state)=>{
        const countValue = state.countValue+1;
        let parity= ''
        let countScreen ={}
        if(countValue%2==0) {
            parity='even'
            countScreen= {
                border:'1px solid red',
                maxWidth:'200px',
                width:'100%',
                padding:'5px',
                textAlign:'center',
                margin: '10px auto',
            }
        } else {
            parity ='odd'
            countScreen= {
                border:'1px solid blue',
                maxWidth:'200px',
                width:'100%',
                padding:'5px',
                textAlign:'center',
                margin: '10px auto',
            }
        }
        return {
            ...state,
            countValue,
            parity,
            countScreen
        }
    })
    }

    handleDecrement =() =>{
        this.setState((state)=>{
            let countValue = state.countValue-1;
            if (countValue<0) {
                countValue=0
            }
            let parity= ''
            let countScreen ={}
            if(countValue%2==0) {
                parity='even'
                countScreen= {
                    border:'1px solid red',
                    maxWidth:'200px',
                    width:'100%',
                    padding:'5px',
                    textAlign:'center',
                    margin: '10px auto',
                }
            } else {
                parity ='odd'
                countScreen= {
                    border:'1px solid blue',
                    maxWidth:'200px',
                    width:'100%',
                    padding:'5px',
                    textAlign:'center',
                    margin: '10px auto',
                }
            }
            return {
                ...state,
                countValue,
                parity,
                countScreen
            }
        })
    }
    handleReset = () =>{
        this.setState({countValue: 0,parity:'even'})
        this.setState({countScreen: {
                border:'1px solid red',
                maxWidth:'200px',
                width:'100%',
                padding:'5px',
                textAlign:'center',
                margin: '10px auto',
            }})
    }
    render() {
        return (
            <Counter countValue={this.state.countValue} parity={this.state.parity} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleReset={this.handleReset} countScreen={this.state.countScreen}/>
        );
    }
}


export default CounterPageContainer;
