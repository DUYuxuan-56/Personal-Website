import React, { Component } from 'react';
import CustomizedTransition from './customizedTransition';
import ControlledCarosel from './controlledCarousel';


class Profile extends Component {
    state = {
        main_title: "Profile Page",
        main_description: "This page is mainly used for profile display!",
        footer_contact: "Github Page",
        footer_address: "https://www.google.com/",
    };
    render() { 
        return (
          <React.Fragment>
            <CustomizedTransition timeout={20000} classNames={"page"} >

              <main role="main" className="row inner cover">

                <div className="col-sm">
                  <h1 className="cover-heading">{this.state.main_title}</h1>
                  <p className="lead">{this.state.main_description}</p>
                  <p className="lead">
                    <a href="/" className="btn btn-lg btn-secondary">Home</a>
                  </p>
                </div>     

                <div className="col-sm">
                  <ControlledCarosel />
                </div>

              </main>
            </CustomizedTransition>
          
          <footer className="mastfoot mt-auto">
            <div className="inner">
            <p>{this.state.footer_contact} <a href={this.state.footer_address}>{ this.state.main_title }</a></p>
            </div>
            </footer>
          </React.Fragment>
        );
    }
}
 
export default Profile;