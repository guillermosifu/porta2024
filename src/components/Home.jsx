import React from 'react'
import perfil from "../assets/perfil.png"

const Home  = () => {
  return (
    
    <section className="home section" id="home">
    <div className="home_container container grid">
        <div className="home_content grid">
            <div className="home_social">
                <a href="https://www.linkedin.com/in/guillermo-s-a20304194" target="_blank" className="home_social-icon">
                    <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://www.dribbble.com/" target="_blank" className="home_social-icon">
                    <i className="uil uil-dribbble"></i>
                </a>

                <a href="https://github.com/guillermosifu" target="_blank" className="home_social-icon">
                    <i className="uil uil-github-alt"></i>
                </a>

            </div>
        
        <div className="home_img">
            <svg className="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            </mask>
            <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                <image className="home_blob-img" x='-20' y='-25' href={perfil}/>
            </g>
        </svg>
        </div> 

        <div className="home_data">
                <h1 className="home_title">Hi, I'm Guillermo</h1>
                <h3 className="home_subtitle">Frontend Developer</h3>
                <p className="home_description">Experiencia de alto nivel en diseño web y conocimiento, produciendo un trabajo de calidad.</p>
            <a href="#contact" className="button button--flex">
                Contact me <i className="uil uil-message button_icon"></i>
            </a>
        </div>
    </div>

    <div className="home_scroll">
        <a href="#about" className="home_scroll-button button--flex">
            <i className="uil uil-mouse-alt home_scroll-mouse">
                <span className="home_scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home_scroll-arrow"></i>
            </i>
        </a>
    </div>
</div>
</section> 
  )
}


export default Home;