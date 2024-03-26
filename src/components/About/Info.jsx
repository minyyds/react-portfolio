import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Goals</h3>
                <span className="about__subtitle">Adapt and Learn</span>
            </div>

            <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4 Projects</span>
            </div>

            <div className="about__box">
                <i className='bx bx-bullseye about__icon'></i>
                <h3 className="about__title">Prospects</h3>
                <span className="about__subtitle">Aspiring Intern</span>
            </div>
            
        </div>
    )
}

export default Info;