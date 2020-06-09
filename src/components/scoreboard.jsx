
import React from 'react';
import { Link } from 'react-router-dom';
import { Storage } from './../storage/storage';

export class ScoreBoard extends React.Component {
    state = {
        scoreboard : []
    };

    async componentDidMount() {
        let storage = await new Storage().getData();
        this.setState({
            scoreboard: storage
        });
    }

    render(){
        return (
            <div className="game">
                <h1>Recent game: </h1>
                {/* list of previous games */}
                <ul>
                    {this.state.scoreboard.map((leader, key)=>{
                        return <li key={key}> { leader } </li>
                    })}
                </ul>
                {/* link to start new game */}
                <Link to="/board"></Link>
            </div>
        );
    }
}