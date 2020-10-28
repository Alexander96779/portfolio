import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import profile from '../../assets/images/person3.jpg';
import frontend from '../../assets/images/frontend.png';
import backend from '../../assets/images/backend1.jpg';
import other from '../../assets/images/backend.jpg';
import homepage from '../../assets/images/homepage.JPG';
import broadcaster from '../../assets/images/broadcaster.JPG';
import stationery from '../../assets/images/stationery.PNG';
import './style.scss';

class LandingPage extends Component {
    render() {
        return(
<div>
        <Navbar />
    <section id="about" className="py-5 bg-dark">
        <div className="text-white">
            <div className="container">
                <div className="row">
                <div className="col-md-4 ">
                <img src={profile} alt="" className="img-fluid rounded-circle w-100 mb-3" />
                </div>
                <div className="col-md-8">
                    <h1 className="text-muted text-center">About Me</h1>
                    <p>Hello my name is</p>
                    <h3>Alexandre NIYIGENA</h3>
                    <p>I am a full stack software engineer specialized in both backend
                        and frontend development for web applications. I am a graduate from
                        Adventist University of Central Africa. I like challenges and learning
                        new skills through a good working environment. I also lke solving real world
                        problems by writing clean and well tested codes to ensure sustainability of built
                        applications.
                    </p>
                    <a href="#contact" className="btn btn-light btn-rounded">
                        Interested? Hire me
                    </a>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section id="skills" className="py-5 text-center">
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="info-header mb-5">
            <h1 className="text-dark text-center text-muted">
              Skills Overview
            </h1>
            <p className="lead">
              Here is a quick overview of my technical skills and set of tools that I use while working. 
              If you want to read more about my skills.
            </p>
            <p>
            <a href="https://docs.google.com/document/d/1Qbgg6aYPuDEm9DWhmYQL71oJY9VUqRHw05YHCc7EgBU/edit?usp=sharing" className="btn btn-dark">Check out my CV.</a>
            </p>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 py-4">
                    <div className="card bg-light">
                        <div className="card-body">
                <img src={frontend} alt="" className="img-fluid rounded-circle w-25 mb-3" />
                    <h5 className="text-center">Frontend</h5>
                    <p className="text-center lead">React JS</p>
                    <p className="text-center lead">HTML/SASS/CSS</p>
                    <p className="text-center lead">Bootstrap</p>
                    <p className="text-center lead">Webpack</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 py-4">
                    <div className="card bg-light">
                        <div className="card-body">
                <img src={backend} alt="" className="img-fluid rounded-circle w-25 mb-3" />
                    <h5 className="text-center">Backend</h5>
                    <p className="text-center lead">Node JS/Express</p>
                    <p className="text-center lead">Java/Springboot</p>
                    <p className="text-center lead">Firebase/Firestore</p>
                    <p className="text-center lead">PHP/Plain</p>
                    <p className="text-center lead">PostgreSQL/MySQL</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 py-4">
                    <div className="card bg-light">
                        <div className="card-body">
                <img src={other} alt="" className="img-fluid rounded-circle w-25 mb-3" />
                    <h5 className="text-center">Other</h5>
                    <p className="text-center lead">DevOps</p>
                    <p className="text-center lead">Unit testing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="projects" className="my-2 bg-dark">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="info-header mb-3">
            <h1 className="text-dark text-center text-muted">
              Featured projects
            </h1>
            </div>
        </div>
        </div>
        <div className="row">
                <div className="col-lg-4 col-md-6 py-1">
                    <div className="card bg-light">
                        <div className="card-body">
                <img src={broadcaster} alt="" className="img-fluid w-100 mb-3" />
                    <h5 className="text-left">Broadcaster</h5>
                    <p>Broadcaster enables any/every citizen to bring any form of 
                    corruption to the notice of appropriate authorities and the general public.
                    </p>
                    <a href="https://github.com/Alexander96779/bc-frontend" className="btn btn-dark btn-block">
                        <i className="fa fa-github"></i> View Code
                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 py-1">
                    <div className="card bg-light">
                        <div className="card-body">
                <img src={stationery} alt="" className="img-fluid w-100 mb-3" />
                    <h5 className="text-left">Stationary MS</h5>
                    <p>Stationery management system enables stationeries to manage transactions 
                    and their properties easily and allows customers to buy school materials online.
                    </p>
                    <a href="https://github.com/Alexander96779/stationary-firebase" className="btn btn-dark btn-block">
                        <i className="fa fa-github"></i> View Code
                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 py-1">
                    <div className="card bg-light">
                        <div className="card-body">
                <img src={homepage} alt="" className="img-fluid w-100 mb-3 ml-0" />
                    <h5 className="text-left">Tours and Travel MS</h5>
                    <p>Online tours and travel agency management system allows tourists to book trips,
                    pay and be able to visit desired places here in Rwanda.
                    </p>
                    <a href="https://github.com/Alexander96779/" className="btn btn-dark btn-block">
                        <i className="fa fa-github"></i> View Code
                    </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </section>
    <section id="contact" className="py-5 bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-dark">
                        <div className="card-body">
            <img src={profile} alt="" className="img-fluid rounded-circle w-50 mb-3" />
            <p className="lead text-left text-white">
                If you are interested and would like to hire me, use this <i className="fa fa-arrow-right"></i> form to
                contact me.
            </p>
            <p className="text-white">You can also find me on the following channels.</p>
            <a href="https://www.linkedin.com/in/alexandre-niyigena-0238171a5/" className="navbar-brand text-white">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Alexander96779" className="navbar-brand text-white">
                <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="mailto:niyialexp@gmail.com?subject=Job Opportunity" className="navbar-brand text-white">
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="text-left">Get In Touch</h3>
                    <form>
                        <div className="input-group form-group">
                        <div className="input-group input-group-lg">
                        <span className="input-group-text"><i className="fa fa-user-circle"></i></span>
                <input type="text" className="form-control" placeholder="Name" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-lg">
                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-lg">
                <span className="input-group-text"><i className="fa fa-pencil"></i></span>
                <textarea className="form-control" placeholder="Message" rows="5"></textarea>
              </div>
            </div>
            <input type="submit" value="Send" className="btn btn-dark btn-block btn-lg" />
          </form>
            </div>
            </div>
        </div>
    </section>
 <Footer />
</div>
        );
    }
}

export default LandingPage;