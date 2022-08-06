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
            </div>
        )
    }
}
export default personContainer