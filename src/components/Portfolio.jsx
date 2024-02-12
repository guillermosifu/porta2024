import React, { useEffect } from 'react'

import buscador from '../assets/buscador-img.png'
import pokedex from '../assets/pokedex.png'
import Swiper from 'swiper'

const Portfolio = () => {
   
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }, []);


  return (
    <section className="portfolio section" id="portfolio">
    <h2 className="section_title">Portfolio</h2>
    <span className="section_subtitle">Most recent work</span>
    <div className="portfolio_container container swiper-container">
        <div className="swiper-wrapper">
            {/* <!--==================== PORTFOLIO 1====================--> */}
            <div className="portfolio_content grid swiper-slide">
                <img src={buscador} alt="" className="portfolio_img"/>

                <div className="portfolio_data">
                    <h3 className="portfolio_title">React</h3>
                    <p className="portfolio_description">Buscador de imagenes -pixabay</p>
                    <a href="https://catalogo-ten.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                        Demo
                        <i className="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>
            {/* <!--==================== PORTFOLIO 2====================--> */}
            <div className="portfolio_content grid swiper-slide">
                <img src={pokedex} alt="" className="portfolio_img"/>

                <div className="portfolio_data">
                    <h3 className="portfolio_title">pokedex</h3>
                    <p className="portfolio_description">acces: pepe@gmail.com pass: 12345678 </p>
                    <a href="https://pokedex-g8.vercel.app/pokemon" target="_blank" className="button button--flex button--small portfolio_button">
                        Demo 
                        <i className="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>
            {/* <!--==================== PORTFOLIO 3====================--> */}
            <div className="portfolio_content grid swiper-slide">
                <img src="assets/img/traveled.png" alt="" className="portfolio_img"/>

                <div className="portfolio_data">
                    <h3 className="portfolio_title">Turist Page</h3>
                    <p className="portfolio_description">Pagina de guia turistica-carrito de compras </p>
                    <a href="https://traveled-xi.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                        Demo 
                        <i className="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>
            {/* <!--==================== PORTFOLIO 4====================--> */}
            <div className="portfolio_content grid swiper-slide">
                <img src="assets/img/xig.eventos.png" alt="" className="portfolio_img"/>

                <div className="portfolio_data">
                    <h3 className="portfolio_title">Eventos-xig</h3>
                    <p className="portfolio_description">Pagina de eventos y reservas </p>
                    <a href="https://xig-decoraciones.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                        Demo 
                        <i className="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>

            {/* <!--==================== PORTFOLIO 5====================--> */}
            <div className="portfolio_content grid swiper-slide">
                <img src="assets/img/findergithub.png" alt="" className="portfolio_img"/>

                <div className="portfolio_data">
                    <h3 className="portfolio_title">Finder Github</h3>
                    <p className="portfolio_description">Proyect js-API github</p>
                    <a href="https://githubfinder-jade.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                        Demo 
                        <i className="uil uil-arrow-right button_icon"></i>
                    </a>
                </div>
            </div>
         {/* <!--==================== PORTFOLIO 6===================--> */}
         <div className="portfolio_content grid swiper-slide">
            <img src="assets/img/rickymorty.png" alt="" className="portfolio_img"/>

            <div className="portfolio_data">
                <h3 className="portfolio_title">API-RICK</h3>
                <p className="portfolio_description"> Consumos de APIs</p>
                <a href="https://reto-rick-morty.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                    Demo 
                    <i className="uil uil-arrow-right button_icon"></i>
                </a>
            </div>
        </div>
        {/* <!--==================== PORTFOLIO 7===================--> */}
        <div className="portfolio_content grid swiper-slide">
            <img src="assets/img/docs-js.png" alt="" className="portfolio_img"/>

            <div className="portfolio_data">
                <h3 className="portfolio_title">Docs js </h3>
                <p className="portfolio_description">Pagina de estudio con datos e informacion de js </p>
                <a href="https://docs-js-kappa.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                    Demo 
                    <i className="uil uil-arrow-right button_icon"></i>
                </a>
            </div>
        </div>
        {/* <!--==================== PORTFOLIO 1====================--> */}
        <div className="portfolio_content grid swiper-slide">
            <img src="assets/img/ejercicios.png" alt="" className="portfolio_img"/>

            <div className="portfolio_data">
                <h3 className="portfolio_title">Exercises JavaScript </h3>
                <p className="portfolio_description">Aplicando Logicas y algoritmos</p>
                <a href="https://exercises-js.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                    Demo
                    <i className="uil uil-arrow-right button_icon"></i>
                </a>
            </div>
        </div>
        {/* <!--==================== PORTFOLIO 8===================--> */}
        <div className="portfolio_content grid swiper-slide">
            <img src="assets/img/login-model.png" alt="" className="portfolio_img"/>

            <div className="portfolio_data">
                <h3 className="portfolio_title">Login</h3>
                <p className="portfolio_description">Trabajo de login con css y html </p>
                <a href="https://login-model-sand.vercel.app/" target="_blank" className="button button--flex button--small portfolio_button">
                    Demo 
                    <i className="uil uil-arrow-right button_icon"></i>
                </a>
            </div>
        </div>
        </div>
           {/* <!--Add arrows--> */}
           <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        {/* <!--Add pagination--> */}
        <div className="swiper-pagination">

        </div>
</div>
</section>
  )
}

export default Portfolio