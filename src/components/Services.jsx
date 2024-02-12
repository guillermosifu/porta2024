import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
                <h2 className="section_title">Services</h2>
                <span className="section_subtitle">What i offer</span>

            <div className="services_container container grid">
            {/* <!--==================== SERVICES 1====================--> */}
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon" ></i>
                    <h3 className="services_title">Ui/Ux <br/>Designer</h3>
                </div>
                <span className="button button--flex button--small button--link services_button">
                    View More
                    <i className="uil uil-arrow-right button-icon"></i>
                </span>
                <div className="services_modal">
                    <div className="services_modal-content">
                        <h4 className="services_modal-title">Ui/Ux <br/> Designer</h4>
                        <i className="uil uil-times services_modal-close"></i>
                        
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I create ux element interactions.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>   
            {/* <!--==================== SERVICES 2====================--> */}
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon" ></i>
                    <h3 className="services_title">Frontend <br/>Developer</h3>
                </div>
                <span className="button button--flex button--small button--link services_button">
                    View More
                    <i className="uil uil-arrow-right button-icon"></i>
                </span>
                <div className="services_modal">
                    <div className="services_modal-content">
                        <h4 className="services_modal-title">Frontend<br/> Developer</h4>
                        <i className="uil uil-times services_modal-close"></i>
                        
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I create ux element interactions.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
            {/* <!--==================== SERVICES 3====================--> */}
            <div className="services_content">
                <div>
                    <i className="uil uil-pen services_icon" ></i>
                    <h3 className="services_title">Branding <br/>Designer</h3>
                </div>
                <span className="button button--flex button--small button--link services_button">
                    View More
                    <i className="uil uil-arrow-right button-icon"></i>
                </span>
                <div className="services_modal">
                    <div className="services_modal-content">
                        <h4 className="services_modal-title">Branding <br/> Designer</h4>
                        <i className="uil uil-times services_modal-close"></i>
                        
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I create ux element interactions.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p>I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>      
            </div>
            </section>
  )
}

export default Services

