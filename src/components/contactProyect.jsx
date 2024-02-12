import React from 'react'
import Perfil2 from '../assets/project.jpeg'
const ContactProyect = () => {
  return (
    <section className="project section">
    <div className="project_bg">
        <div className="project_container container grid">
            <div className="project_data">
                <h2 className="project_title">You have a new Project</h2>
                <p className="project_description">Contact me now and get a 30% discount</p>
                <a href="#contact" className="button button--flex button--white">
                    Contact me <i className="uil uil-message project_icon button_icon"></i>
                </a>
            </div>

            <img src={Perfil2 } alt="" className="project_img"/>
        </div>
    </div>
</section>
  )
}

export default ContactProyect;