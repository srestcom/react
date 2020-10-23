import React, { Component } from 'react';
import configData from "../../config.json";
import axios from 'axios';

class UploadPicture extends Component {
    state = {
        name: '',
        comment: '',
        yumFactor: 5,
        imageUrl: '',
        errors: {
            name: '',
            comment: '',
            imageUrl: '',
        }
    }

    submit = () => {
        const picture = {
            name: this.state.name,
            comment: this.state.comment,
            yumFactor: this.state.yumFactor,
            imageUrl: this.state.imageUrl
        };
        let errors = {
            name: '',
            comment: '',
            imageUrl: '',
        };
        let error = false;
        if (!this.state.name) {
           errors.name = 'Name is missing!';
           error = true;
        } 
        if (!this.state.imageUrl) {
            errors.imageUrl = 'Please supply a valid image URL!';
            error = true;
        } 
        if (!this.state.comment || this.state.comment.length < 5 || this.state.comment.length > 200) {
            errors.comment = 'Please enter comment between 5 - 200 char long!';
            error = true;
        }
        if( !error ) {
            axios.post(configData.SERVER_URL + '/cakes', picture)
                .then(response => {
                    this.props.history.replace('/');
                })
                .catch(
                    error => {
                        this.setState({error: true});
                    }
                );
        }
        this.setState({errors}, ()=> {
            console.log(this.state);
        })
    }

    render () {
        return (
            <div>
                <h1>Submit a Cake</h1>
                <label>Name*: </label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                {this.state.errors.name && <p className="error">{this.state.errors.name}</p>}
                <br /><label>Comment*: </label>
                <textarea rows="4" value={this.state.comment} onChange={(event) => this.setState({comment: event.target.value})} />
                {this.state.errors.comment && <p className="error">{this.state.errors.comment}</p>}
                <br /><label>URL*: </label>
                <input type="text" value={this.state.imageUrl} onChange={(event) => this.setState({imageUrl: event.target.value})} />
                {this.state.errors.imageUrl && <p className="error">{this.state.errors.imageUrl}</p>}
                <br /><label>Yum Factor*: </label>
                <select value={this.state.yumFactor} onChange={(event) => this.setState({yumFactor: event.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default UploadPicture;