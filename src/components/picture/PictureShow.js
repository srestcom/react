import React, { Component } from 'react';
import { Route, NavLink, Switch, BrowserRouter  } from 'react-router-dom';
import Pictures from './Pictures';
import UploadPicture from './UploadPicture';
import PictureDetail from './PictureDetail';

class PictureShow extends Component {
    render () {
        return (
            <BrowserRouter><div>
                <header>
                    <nav>
                        <NavLink to="/" exact>Show all cakes</NavLink>
                        <NavLink to='/upload-picture'>Upload Cake</NavLink>
                    </nav>
                </header>
                <Switch>
                	<Route path="/upload-picture" component={UploadPicture} />
                    <Route path="/picture/:id" component={PictureDetail} />
                    <Route path="/" component={Pictures} />
                </Switch>
            </div></BrowserRouter>
        );
    }
}

export default PictureShow;