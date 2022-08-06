import React, { Component } from 'react'
import PersonDetail from './personDetail'
import data from './data'

class personContainer extends Component {
    constructor(){
        super()
        
        this.state = {
            currentIndex: 0,
        }
    }

    nextPerson(){
        let index = this.state.currentIndex
        if(index < data.length - 1){
        this.setState({currentIndex: index + 1 })
        }   
    }

    previousPerson(){
        let index = this.state.currentIndex
        if(index > 0){
        this.setState({currentIndex: index - 1 })
        }
    }
    


    render(){
        return(
            <div>
                <PersonDetail
                currentPerson={data[this.state.currentIndex]}
                />
                <div className='buttons'>
                    <h3 onClick={() => this.previousPerson()}>{'<'} Prev</h3>
                    <h3 onClick={() => this.nextPerson()}>Next {'>'}</h3>
                </div>
                <div className="buttons-1">
                <button onClick={() => {this.setState({ editing: true });
              }}>Edit</button>
            <button onClick={() => {this.setState({ deleting: true });
              }}>Delete</button>
            <button onClick={() => {this.setState({ new: true });
              }}>New</button>
            </div>
            </div>
        )
    }
}

export default personContainer