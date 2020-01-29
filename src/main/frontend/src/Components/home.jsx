import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import NavBar from './navBar'

class Home extends Component {
    state = {
        header_title: "UW",
        main_title: "University Of Waterloo",
        main_description: "The University of Waterloo (commonly referred to as Waterloo, UW, or UWaterloo) is a public research university with a main campus in Waterloo, Ontario, Canada. The main campus is on 404 hectares (998 acres) of land adjacent to Uptown Waterloo and Waterloo Park.",
        footer_contact: "Github Page",
        footer_address: "https://www.google.com/"
    };
    render() { 
        return (
          <React.Fragment>
            <header className="masthead mb-auto">
              <div className="inner">
                <h3 className="masthead-brand">{this.state.main_title}</h3>
                <NavBar />
              </div>
            </header>

            <CSSTransition
              in={true}
              appear={true}
              timeout={2000}
              classNames='fade'
            >
              <main role="main" className="inner cover">
                <h1 className="cover-heading">{this.state.main_title}</h1>
                <p className="lead">{this.state.main_description}</p>
                <p className="lead">
                  <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                </p>
              </main>

            </CSSTransition>


            <footer className="mastfoot mt-auto">
              <div className="inner">
                <p>{this.state.footer_contact} <a href={this.state.footer_address}>{ this.state.main_title }</a></p>
              </div>
            </footer>


          </React.Fragment>
        );
    }
}
 
export default Home;