import React from 'react'
import TestimonioImg from "../assets/testimonial1.jpg"
const Testimonios = () => {
  return (
    <section class="testimonial section">
                <h2 class="section_title">Testimonial</h2>
                <span class="section_subtitle">My client saying</span>

                <div class="testimonial_container container swiper">
                    <div class="swiper-wrapper">
                         {/* <!--==================== TESTIMONIAL 1 ====================--> */}
                        <div class="testimonial_content swiper-slide">
                            <div class="testimonial_data">
                                <div class="testimonial_header">
                                    <img src={TestimonioImg} alt="" class="testimonial_img"/>
                                    <div>
                                        <h3 class="testimonial_name">Marco Araujo</h3>
                                        <span class="testimonial_client">Client</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>

                                </div>
                            </div>
                            <p class="testimonia_description"> I get a good impression, I carry 
                                out my project with all the possible quality and attention 
                                and support 24 hours a day.

                            </p>
                        </div>

                        {/* <!--==================== TESTIMONIAL 2 ====================--> */}
                        <div class="testimonial_content swiper-slide">
                            <div class="testimonial_data">
                                <div class="testimonial_header">
                                    <img src={TestimonioImg} alt="" class="testimonial_img"/>
                                    <div>
                                        <h3 class="testimonial_name">Fernando Cangana</h3>
                                        <span class="testimonial_client">Client</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>

                                </div>
                            </div>
                            <p class="testimonia_description"> I get a good impressionant 
                                out my project with all the possible quality and atter support
                                24 hours a day.
                            </p>
                        </div>

                        {/* <!--==================== TESTIMONIAL 3 ====================--> */}
                        <div class="testimonial_content swiper-slide">
                            <div class="testimonial_data">
                                <div class="testimonial_header">
                                    <img src={TestimonioImg} alt="" class="testimonial_img"/>
                                    <div>
                                        <h3 class="testimonial_name">George Rod</h3>
                                        <span class="testimonial_client">Client</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>
                                    <i class="uil uil-star testimonial_icon-star"></i>

                                </div>
                            </div>
                            <p class="testimonial_description"> I get a good impressionant 
                                out my project with all the possible quality and atter support
                                24 hours a day.
                            </p>
                        </div>
                    </div>
                     {/* <!-- Add Pagination --> */}
                    <div class="swiper-pagination swiper-pagination-testimonial"></div>
                </div>
            </section>
  )
}

export default Testimonios