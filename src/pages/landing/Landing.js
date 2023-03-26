import React, { useEffect, useState } from 'react';
import hero from './img/hero1.png'
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
import CommonHeader from '../../components/Header';

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

    // if (hasToken(JSON.parse(sessionStorage.getItem('authenticated')))) {
    //     return (
    //         <Redirect to={"/template/dashboard"} />
    //     )
    // }

    return (
        <div className="container-xxl bg-white p-0" style={{ boxSizing: 'border-box' }}>
            <div className="container-xxl position-relative p-0">
                <CommonHeader showLinks /> 
            </div>


            <div style={{ height: '600px', color: dark }} className="container-xxl d-flex flex-column justify-content-sm-around ">
                <div className="container">
                    <div className="row g-5 align-items-center mt-10">
                        <div className='col-lg-1' />
                        <div className="col-lg-5 text-center text-lg-start my-2">
                            {/* <h1 className="mb-4">The </h1> */}
                            <h1><span>The Earth is</span> what we have <span>in COMMON</span></h1>
                            <p className="pb-3">The earth is our shared home, a precious and finite resource that sustains all life. It is up to us to protect and care for it, ensuring its health and longevity for future generations.

We must recognize our interconnectedness with the natural world and the impact of our actions on the environment. By making conscious choices and taking meaningful steps towards sustainability, we can create a brighter and more equitable future for all.</p>
                        </div>
                        {/* <div className='col-lg-1' /> */}
                        <div className='col-lg-6'>
                            <img width={"80%"} src={hero} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-6">
                <div className="container">
                    <div className="mx-auto text-center " style={{ maxWidth: '600px' }}>
                        <h2 className="mb-5">Why Leading Global Consumer Product Company going green?</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                <h5 className="mb-3">Consumer Demand</h5>
                                
                                    <span>Consumers are becoming increasingly aware of the environmental impact of the products they purchase and are actively seeking out more sustainable options. As a result, companies are responding by developing and promoting green products to meet this demand.
</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                    <h5 className="mb-3">Environmental concerns</h5>
                                    <span>Many companies recognize that their operations have a significant impact on the environment and are taking steps to reduce their carbon footprint and other negative effects. This includes using more eco-friendly materials, improving manufacturing processes, and reducing waste and emissions.
</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                    <h5 className="mb-3">Cost savings</h5>
                                    <span>Going green can also be good for business, as it can result in cost savings through reduced energy and resource consumption, as well as improved efficiency.
</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                    <h5 className="mb-3">Brand Reputation</h5>
                                    <span>By promoting their commitment to sustainability and offering green products, companies can improve their brand reputation and attract more environmentally conscious customers.
</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-6"  style={{ backgroundColor: green, color: 'white',borderRadius: '30px'}}>
                <div className="container">
                    <div className="mx-auto text-center " style={{ maxWidth: '600px' }}>
                        <h2 className="py-5">We Provide Solutions On Your Business</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                    <h5 className="mb-3">Monitor Your Green Index</h5>
                                    <span>Monitoring your green index can help you track your progress in becoming more sustainable and identify areas for improvement.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                    <h5 className="mb-3">Define your goals</h5>
                                    <span>Set specific and measurable goals for your sustainability efforts. This could include reducing your carbon footprint, increasing your use of renewable energy sources, or improving your waste reduction efforts.
</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                    <h5 className="mb-3">Analysis and Reporting</h5>
                                    <span>Analyze your data regularly to identify trends and areas for improvement. Use this information to report on your progress to stakeholders, such as customers, investors, or employees.
</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " >
                            <div className="service-item rounded h-100">
                                <div className="p-1">
                                    <h5 className="mb-3">Adjust your strategy</h5>
                                    <span>Use the insights gained from your data analysis to adjust your sustainability strategy and improve your green index over time.
</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="container-xxl py-6" style={{ maxWidth: '1232px', margin: '3rem 0', height: '450px', borderRadius: '30px', marginBottom: '48px' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 " >
                            <h2 className="mb-4">Why People Choose Us? We Are Trusted & Award Wining Agency</h2>
                            <p>people choose trusted and award-winning agencies because they have a track record of delivering high-quality services and solutions, are known for their expertise and experience, have a good reputation, and prioritize building strong relationships with their clients.
</p>
                              </div>
                        <div className="col-lg-7">
                            <div className="row g-5">
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Expertise and Experience</h6>
                                    </div>
                                    <span>Trusted and award-winning agencies are often recognized for their expertise and experience in their respective fields. This means that they have a proven track record of delivering high-quality services and solutions to their clients.
</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Reputation</h6>
                                    </div>
                                    <span>A trusted agency has a good reputation and is known for its ethical business practices, reliability, and professionalism. This reputation can give clients confidence that their project or campaign is in good hands.
</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Awards and Recognitions</h6>
                                    </div>
                                    <span> Winning industry awards and recognition can be a sign of excellence and innovation in the agency's work. This recognition can differentiate the agency from its competitors and give clients a sense of confidence in their ability to deliver results.
</span>
                                </div>
                                <div className="col-sm-6 mb-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Trust and Relationships</h6>
                                    </div>
                                    <span>A trusted agency will prioritize building strong relationships with their clients and earning their trust. This means that they will work closely with clients to understand their needs and deliver customized solutions that meet those needs.
</span>
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



            <div className="container-fluid text-light footer pt-2 fadeIn" style={{ maxWidth: '1232px', margin: 'auto', borderRadius: '30px', marginTop: '2rem', backgroundColor: green, borderRadius: '30px 30px 0 0' }}>
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