import React, { useEffect, useState } from 'react';
import hero from './img/hero.png'
import about from './img/3381601.jpg'
import newsLetter from './img/newsletter.png'
import { Redirect } from 'react-router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,

} from 'reactstrap';
import styled from 'styled-components';
import hasToken from '../../services/authService';

function Landing() {
    const green = '#00B98E'
    const light = '#F3F6F8'
    const dark = '#0E2E50'

    const LoginLink = styled.a`
        color: ${light} !important;
        font-weight: bold;
    `

    const SignUpLink = styled.a`
        color: ${light} !important;
    `

    const StyledNav = styled.nav`
        background-color: ${green};
        max-width: 1232px; 
        margin: auto;
        border-radius: 0  0 30px 30px;
    `

    // if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
    //     return (
    //         <Redirect to={"/template/dashboard"} />
    //     )
    // }

    return (
        <div className="container-xxl bg-white p-0" style={{ boxSizing: 'border-box' }}>
            <div className="container-xxl position-relative p-0">
                <StyledNav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 d-flex flex-row justify-content-between">
                    <div className="navbar-brand p-0">
                        <h3 className="m-0" style={{ color: light }}><p>Evergreen</p><p>Solutions</p></h3>
                    </div>
                    <div className="justify-self-end">
                        <div className="navbar-nav ms-auto py-0">
                            <LoginLink href="/login" className="nav-item nav-link active">Login</LoginLink>
                            <SignUpLink href="/signup" className="nav-item nav-link active">Sign up</SignUpLink>
                        </div>
                    </div>
                </StyledNav>

            </div>


            <div style={{ height: '600px', color: dark }} className="container-xxl d-flex flex-column justify-content-sm-around ">
                <div className="container">
                    <div className="row g-5 align-items-center mt-10">
                        <div className='col-lg-1' />
                        <div className="col-lg-5 text-center text-lg-start my-2">
                            <h1 className="mb-4">We Help To Push Your Business To The Top Level</h1>
                            <p className="pb-3">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                        </div>
                        {/* <div className='col-lg-1' /> */}
                        <div className='col-lg-6'>
                            <img width={"80%"} src={hero} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl" style={{ backgroundColor: green, maxWidth: '1232px', margin: 'auto', height: '450px', borderRadius: '30px', color: light, marginBottom: '48px' }}>
                <div className="container">
                    <div className="row g-5 d-flex align-items-center">
                        <div className="col-lg-6 " style={{ padding: '0 0 0 28px' }}>
                            <img width="83.33%" src={about} />
                        </div>
                        <div className="col-lg-6 my-3" >
                            <h2 className="mb-4">Award Wining Consultancy Agency For Your Business</h2>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod</p>
                            <div className="row g-3 mb-4">
                                <div className="col-12 d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i className="text-white"></i>
                                    </div>
                                    <div className="ms-4 mb-4">
                                        <h6>Business Planning</h6>
                                        <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i className="text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <h6>Financial Analaysis</h6>
                                        <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-xxl py-6">
                <div className="container">
                    <div className="mx-auto text-center " style={{ maxWidth: '600px' }}>
                        <h2 className="mb-5">We Provide Solutions On Your Business</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-5">
                                    <h5 className="mb-3">Business Research</h5>
                                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-5">
                                    <h5 className="mb-3">Stretagic Planning</h5>
                                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-5">
                                    <h5 className="mb-3">Market Analysis</h5>
                                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-5">
                                    <h5 className="mb-3">Financial Analaysis</h5>
                                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-5">
                                    <h5 className="mb-3">legal Advisory</h5>
                                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-5">
                                    <h5 className="mb-3">Tax & Insurance</h5>
                                    <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl my-6 " style={{ backgroundColor: green, maxWidth: '1232px', margin: 'auto', height: '350px', borderRadius: '30px', color: light, marginBottom: '48px' }}>
                <div className="container px-lg-5">
                    <div className="row align-items-center" style={{ height: '250px' }}>
                        <div className="col-12 col-md-6">
                            <h3 className="text-white">Ready to get started</h3>
                            <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                            <div className="position-relative w-100 mt-3">
                                <input className="form-control border-0 rounded-pill w-80 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: '48px' }} />
                                <button style={{ margin: 0, padding: 0, paddingTop: '10px', color: light }} type="button" className="btn shadow-none position-absolute left-0 end-0 mt-1 me-2">Connect</button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                            <img className="img-fluid mt-5" style={{ maxHeight: '250px' }} src={newsLetter} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-6" style={{ maxWidth: '1232px', margin: 'auto', height: '450px', borderRadius: '30px', marginBottom: '48px' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 " >
                            <h2 className="mb-4">Why People Choose Us? We Are Trusted & Award Wining Agency</h2>
                            <p>Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et sadipscing rebum amet takimata amet, sed accusam eos eos dolores dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
                            <p>Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-5">
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Best In Industry</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">99% Success Rate</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Award Winning</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">100% Happy Client</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Professional Advisors</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">24/7 Customer Support</h6>
                                    </div>
                                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid text-light footer pt-2 fadeIn" style={{ maxWidth: '1232px', margin: 'auto', borderRadius: '30px', marginTop: '2rem', backgroundColor: dark, borderRadius: '30px 30px 0 0' }}>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;