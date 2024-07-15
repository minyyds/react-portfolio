import React, { UseState, useState } from 'react'
import "./Qualifications.css"

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">History</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                    onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> 
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">edX Skills Course</h3>
                                <span className="qualification__subtitle">16 Week Front-End Course</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2024
                                </div>
                            </div>

                            <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                        {/* <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 
                                </div>
                            </div> */}
                        </div>

                        <div className="qualification__data">
                            {/* <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                </div>
                            </div>

                            <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div> */}
                        </div>

                        <div className="qualification__data">
                            <div></div>

                        {/* <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div> */}
                            {/* <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calendar">
                                    
                                    <i className="uil uil-calendar-alt"></i>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Virtual Internship</h3>
                                <span className="qualification__subtitle">12 Week Front-End Internship</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> June 24th 2024
                                </div>
                            </div>

                            <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                        {/* <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                </div>
                            </div> */}
                        </div>

                        <div className="qualification__data">
                            {/* <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 
                                </div>
                            </div>

                            <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications;
