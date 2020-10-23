import React, { Component } from 'react';
import configData from "../../config.json";
import axios from 'axios';

class PictureDetail extends Component {
    state = {
        picture: null
    }

    componentDidMount () {
        this.loadData();
    }

    loadData () {
        if ( !this.state.picture || (this.state.picture && this.state.picture.id !== this.props.match.params.id) ) {
            axios.get(configData.SERVER_URL + '/cakes/' + this.props.match.params.id )
                .then( response => {
                    this.setState( { picture: response.data } );
                } );
        }
    }

    render () {
        let picture = <p>Loading...!</p>;
        if ( this.state.picture ) {
            picture = (
                <div>
                    <h1>{this.state.picture.name}</h1>
                    <p><img width='100%' src={this.state.picture.imageUrl} alt={this.state.picture.name} /></p>
                    <p>{this.state.picture.comment}</p>
                </div>
            );
        }
        return (
            picture
        );
    }
}

export default PictureDetail;