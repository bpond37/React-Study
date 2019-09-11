import React, {Component} from './node_modules/react'
import CountButton from './CountButton';

export default class CountDisplay extends Component{

    state= {count : 1}

    increase = () => {
        console.log("increase")
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
            <div>
                <h1>count: {this.state.count}</h1>
                <CountButton increase={this.increase}></CountButton>
            </div>
        )
    }

}