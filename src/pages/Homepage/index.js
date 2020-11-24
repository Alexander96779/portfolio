/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import cogoToast from 'cogo-toast';
import emailjs from 'emailjs-com';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import profile from '../../assets/images/profile3.png';
import profile1 from '../../assets/images/profile1.jpg';
import frontend from '../../assets/images/frontend.png';
import backend from '../../assets/images/backend.png';
import other from '../../assets/images/other.png';
import homepage from '../../assets/images/homepage.JPG';
import otta from '../../assets/images/otta1.JPG';
import otta1 from '../../assets/images/otta2.JPG';
import otta2 from '../../assets/images/otta3.JPG';
import otta3 from '../../assets/images/otta4.JPG';
import broadcaster from '../../assets/images/broadcaster.JPG';
import broadcaster1 from '../../assets/images/broadcaster1.JPG';
import broadcaster2 from '../../assets/images/broadcaster2.JPG';
import broadcaster3 from '../../assets/images/broadcaster3.JPG';
import broadcaster4 from '../../assets/images/broadcaster4.JPG';
import stationery from '../../assets/images/stationery.PNG';
import stationery1 from '../../assets/images/stationery2.JPG';
import stationery2 from '../../assets/images/stationery3.JPG';
import stationery4 from '../../assets/images/stationery4.JPG';
import stationery5 from '../../assets/images/stationery5.JPG';
import './style.scss';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.showSuccessMessage = this.showSuccessMessage.bind(this);
        this.showErrorMessage = this.showErrorMessage.bind(this);

    }

    showErrorMessage = (message) => {
        cogoToast.error(message, { position: 'top-right' });
    };

    showSuccessMessage = (message) => {
        cogoToast.success(message, { position: 'top-right' });
    };

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

    sendEmail(e) {
        e.preventDefault();
        const { name, email, address, message } = this.state;
        if(name !== '' && email !== '' && address !== '' && message !== '') {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRegex.test(email)){
        emailjs.sendForm('gmail', 'template_a9td3jr', e.target, 'user_yOsMnI6s9zxuSo8zJj7Ve')
          .then((result) => {
              console.log(result.text);
              this.showSuccessMessage('Message sent, Thank you!');
          }, (error) => {
              console.log(error.text);
              this.showErrorMessage('Message not send, try again later');
          });
        } else {
        this.showErrorMessage('Invalid Email');
        }
        } else {
            this.showErrorMessage('All fields are required');
        }
        e.target.reset();
      }
    render() {
    const { name, email, address, message } = this.state;

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
                        new skills through a good working environment. I also like solving real world
                        problems by writing clean and well tested codes to ensure sustainability of built
                        applications.
                    </p>
                    <p className="lead"><b>I am currently building web apps at<a href="https://www.reg.rw/index.php?id=2" className="text-danger text-decoration-none" target="_blank" rel="noopener noreferrer"> REG/EUCL</a>.</b></p>
                    <a href="#contact" className="btn btn-light btn-rounded">
                        Interested? Hire me
                    </a>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section id="skills" className="py-4 text-center">
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
            <a href="https://docs.google.com/document/d/1Qbgg6aYPuDEm9DWhmYQL71oJY9VUqRHw05YHCc7EgBU/edit?usp=sharing" className="btn btn-dark" target="_blank" rel="noopener noreferrer">Check out my CV.</a>
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
                    <p className="text-center lead">PHP</p>
                    <p className="text-center lead">PostgreSQL/MySQL/NoSQL</p>
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
                      <div className="card-header">
                      <h5>Broadcaster</h5>
                      </div>
                        <div className="card-body">
                        <div id="slider1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
            <img src={broadcaster} className="img-fluid w-100 mb-3" alt="First Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={broadcaster1} alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={broadcaster2} alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={broadcaster3} alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={broadcaster4} alt="Third Slide" />
            </div>
          </div>
          <a href="#slider1" className="carousel-control-prev" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a href="#slider1" className="carousel-control-next" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
                    <p>Broadcaster enables any/every citizen to bring any form of 
                    corruption to the notice of appropriate authorities and the general public.
                    </p>
                    <p><b>Technologies used:</b></p>
                    <p>- Javascript(ReactJs, Redux, NodeJs, Express Js for REST API ), PostgreSQL(Sequelize),
                    HTML, SASS, CSS.
                    </p>
                        </div>
                        <div className="card-footer">
                    <a href="https://github.com/Alexander96779/bc-frontend" className="btn btn-dark btn-block" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i> View Code
                    </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 py-1">
                    <div className="card bg-light">
                    <div className="card-header">
                    <h5 className="text-left">Stationery MIS</h5>
                      </div>
                        <div className="card-body">
                        <div id="slider2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
            <img src={stationery} className="img-fluid w-100 mb-3" alt="First Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={stationery1} alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={stationery2} alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={stationery4} alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={stationery5} alt="Third Slide" />
            </div>
          </div>
          <a href="#slider2" className="carousel-control-prev" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a href="#slider2" className="carousel-control-next" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
                    <p>Stationery management system enables stationeries to manage transactions 
                    and their properties easily and allows customers to buy school materials online.
                    </p>
                    <p><b>Technologies used:</b></p>
                    <p>- Javascript(React Js, Redux), Firebase(Cloud Firestore), Bootstrap, CSS, HTML.
                    </p>
                  </div>
                    <div className="card-footer">
                    <a href="https://github.com/Alexander96779/stationary-firebase" className="btn btn-dark btn-block" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i> View Code
                    </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 py-1">
                    <div className="card bg-light">
                      <div className="card-header">
                      <h5 className="text-left">Tours and Travel MIS</h5>
                      </div>
                        <div className="card-body">
                        <div id="slider3" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
            <img src={homepage} alt="First Slide" className="img-fluid w-100 mb-3 ml-0" />            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={otta} alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={otta1} alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={otta2} alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img className="img-fluid w-100 mb-3" src={otta3} alt="Third Slide" />
            </div>
          </div>
          <a href="#slider3" className="carousel-control-prev" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a href="#slider3" className="carousel-control-next" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
                    <p>Online tours and travel agency management system allows tourists to book trips,
                    pay and be able to visit desired places here in Rwanda.
                    </p>
                    <p><b>Technologies used:</b></p>
                    <p>- PHP, Bootstrap, CSS, HTML, MySQL.</p>
                  </div>
                  <div className="card-footer">
                  <a href="https://github.com/Alexander96779/" className="btn btn-dark btn-block" target="_blank" rel="noopener noreferrer">
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
            <img src={profile1} alt="" className="img-fluid rounded-circle w-50 mb-3" />
            <p className="lead text-left text-white">
                Feel free to send me an email, let's talk about software development. Use this form to
                send me a message. <i className="fa fa-arrow-right"></i> 
            </p>
            <p className="text-white">You can also find me on the following channels.</p>
            <a href="https://www.linkedin.com/in/alexandre-niyigena-0238171a5/" className="navbar-brand text-white" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Alexander96779" className="navbar-brand text-white" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="mailto:niyialexp@gmail.com?subject=Job Opportunity" className="navbar-brand text-white" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="text-left">Get In Touch</h3>
                    <form onSubmit={this.sendEmail}>
                        <div className="input-group form-group">
                        <div className="input-group input-group-lg">
                        <span className="input-group-text"><i className="fa fa-user-circle"></i></span>
                <input type="text" className="form-control" placeholder="Name" 
                name="name" 
                value={name}
                onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-lg">
                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                <input type="email" className="form-control" placeholder="Email"
                name="email" 
                value={email}
                onChange={this.handleChange}
                 />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-lg">
                <span className="input-group-text"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                <input type="text" className="form-control" placeholder="Country or City"
                name="address" 
                value={address}
                onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-lg">
                <span className="input-group-text"><i className="fa fa-pencil"></i></span>
                <textarea className="form-control" placeholder="Message" rows="5"
                name="message" 
                value={message}
                onChange={this.handleChange}></textarea>
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