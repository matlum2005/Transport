import React, { Component } from 'react'

import './styles/Home.css'
import bgimg from './img/truck-home-2.jpg'
import OurTeam from './OurTeam';
import logo from './img/trucklogo.png'

export class Home extends Component {

    singnUpHandler = () => {
        this.props.history.push('/signup');
    }
    singnInHandler = () => {
        this.props.history.push('/signin');
    }

    render() {
        const { darkMode, toggleDarkMode } = this.props;
        return (
            <>
                <div className={darkMode ? 'dark-mode' : ''}>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                            <div className="container-fluid">
                                <a href="#" className="navbar-brand mb-0 h1 font-weight-bold">
                                    <img src={logo} width="40" height="40" alt="logo" />
                                    &nbsp;Transynk
                                </a>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#aboutus">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#ourteam">Our Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact">Contact Us</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <button className="dark-mode-toggle-navbar" onClick={toggleDarkMode}>
                                            {darkMode ? '☀️' : '🌙'}
                                        </button>
                                        <button className="btn btn-warning font-weight-bold" onClick={this.singnInHandler} type="submit"><i className="fa fa-user-circle fa-lg" aria-hidden="true" /> Login</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <main>
                        <section className="hero-section" id="home">
                            <div className="hero-overlay"></div>
                            <img src={bgimg} className="hero-bg" alt="Transportation background" />
                            <div className="hero-content">
                                <h1 className="hero-title">Welcome to Transynk</h1>
                                <p className="hero-subtitle">Your Trusted Partner in Seamless Transportation Solutions</p>
                                <div className="hero-buttons">
                                    <button className="btn btn-primary btn-lg hero-btn" onClick={() => this.props.history.push('/booking')}>
                                        Book Now <i className="fa fa-truck" aria-hidden="true"></i>
                                    </button>
                                    <button className="btn btn-outline-light btn-lg hero-btn-outline" onClick={this.singnUpHandler}>
                                        Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                    <button className="btn btn-outline-light btn-lg hero-btn-outline" onClick={this.singnInHandler}>
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* About Us Section */}
                        <section className="about-section" id="aboutus">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h2 className="section-title">Who We Are</h2>
                                        <p className="section-subtitle">Connecting Businesses, Delivering Excellence</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4 text-center">
                                        <div className="feature-icon">
                                            <i className="fa fa-truck fa-3x" aria-hidden="true"></i>
                                        </div>
                                        <h4>Reliable Transport</h4>
                                        <p>We provide instant, affordable auto transport services to help your business grow.</p>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="feature-icon">
                                            <i className="fa fa-warehouse fa-3x" aria-hidden="true"></i>
                                        </div>
                                        <h4>Warehousing Solutions</h4>
                                        <p>Customized storage solutions with fulfillment, logistics support, and distribution services.</p>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="feature-icon">
                                            <i className="fa fa-handshake-o fa-3x" aria-hidden="true"></i>
                                        </div>
                                        <h4>Value-Added Services</h4>
                                        <p>Order fulfillment, packaging, assembly, and kitting to meet your specific business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Services Section */}
                        <section className="services-section" id="services">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h2 className="section-title">Our Services</h2>
                                        <p className="section-subtitle">Tailored Solutions for Every Need</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6">
                                        <div className="service-card">
                                            <div className="service-icon">
                                                <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                                            </div>
                                            <h3>Expand Your Business</h3>
                                            <h5 className="text-muted">Register as a Service Provider</h5>
                                            <p>Join our platform to connect with customers and provide exceptional transport services. Grow your business with our extensive network.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="service-card">
                                            <div className="service-icon">
                                                <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                                            </div>
                                            <h3>Transport at Your Doorstep</h3>
                                            <h5 className="text-muted">Join as a Customer</h5>
                                            <p>Access a wide range of transport service providers. Your goods are our responsibility - reliable, secure, and timely delivery.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>

                    <section className="team-section" id="ourteam">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-title">Our Team</h2>
                                    <p className="section-subtitle">Meet the Experts Behind Transynk</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <OurTeam />
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="footer" id="contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <h4>Contact Us</h4>
                                    <p>Get in touch with our team for any inquiries or support.</p>
                                </div>
                                <div className="col-md-3">
                                    <h4>Follow Us</h4>
                                <div className="social-links">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h4>Address</h4>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Khurja, Bulandshahr, UP, 203131</p>
                                </div>
                                <div className="col-md-3">
                                    <h4>Reach Us</h4>
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i> Transynk@gmail.com</p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> +91 8595629739</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                        <div className="copyright">
                            <div className="container">
                                <p className="text-center">© 2024 Transynk. All Rights Reserved.</p>
                            </div>
                        </div>
                </div>
            </>
        )
    }
}

export default Home
