import React, { Component } from 'react';
import configData from "../../config.json";
import axios from 'axios';

class Pictures extends Component {

    state = {
        pictures: [],
        error: false
    }

    componentDidMount () {
        axios.get( configData.SERVER_URL + '/cakes' )
            .then(
            	response => {
                    this.setState({pictures: response.data});
                    configData.data = response.data;
           		}
           	)
            .catch(
            	error => {
                	this.setState({error: true});
            	}
            );
    }

    selectPicture = ( id ) => {
        this.props.history.push( '/picture/' + id );
    }   

    render () {
        let pictures = <p>Something is wrong!</p>;
        if (!this.state.error) {
            pictures = this.state.pictures.map(picture => {
                return <li key={picture.id}>
                    <div>
                        <a onClick={this.selectPicture.bind(this, picture.id)}>{picture.name}</a>: <img src={picture.imageUrl} width="200px" alt={picture.name} />
                    </div>
                </li>
            });
        }
        return (
            <div>
                <ul>
    			    {pictures}
                </ul>
            </div>
        );
    }
}

export default Pictures;