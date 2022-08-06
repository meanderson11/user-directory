import React, {Component} from 'react'

class PersonInformation extends Component{
    constructor(){
        super()
        this.state= {}
    }
    
    render(){
        
        return (
            <div className='card'>
                <h1 className = 'id'>{this.props.currentPerson.id}/25</h1>
                <h1 className='name'>{this.props.currentPerson.name.first} {this.props.currentPerson.name.last}</h1>
                    <span className='info'>
                        <h3>From:  {this.props.currentPerson.city}</h3>
                        <h3>Job Title:  {this.props.currentPerson.title}</h3>
                        <h3>Employer:  {this.props.currentPerson.employer}</h3>
                    </span>
                    <span className='movies'>
                        <h3>Favorite Movies:</h3>
                        <div className='movie-list'>
                            <p>1. {this.props.currentPerson.favoriteMovies[0]}</p>
                            <p>2. {this.props.currentPerson.favoriteMovies[1]}</p>
                            <p>3. {this.props.currentPerson.favoriteMovies[2]}</p>
                        </div>
                    </span>
            </div>
            )
        }
    }

export default PersonInformation;