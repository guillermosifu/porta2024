import React from "react";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className="qualification_button button--flex qualification_active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
        </div>
        <div className="qualification_sections">
          {/* <!--==================== QUALIFICATION CONTENT 1====================--> */}
          <div
            className="qualification_content qualification_active"
            data-content
            id="education"
          >
            {/* <!--==================== QUALIFICATION 1====================--> */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Enginner</h3>
                <span className="qualification_subtitle">Peru - Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2015-2017
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            {/* <!--==================== QUALIFICATION 2====================--> */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">Platzi - Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018-2019
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 3====================--> */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Ed Team - Institute</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019-2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            {/* <!--==================== QUALIFICATION 4====================--> */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                {/* <!--      <span className="qualification_line"></span>-->  */}
              </div>
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">
                  CodigoTecsup - Institute
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019-2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
