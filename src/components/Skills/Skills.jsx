import React from 'react'
import "./Skills.css"
import Languages from './Languages'
import FrameLibPkg from './FrameLibPkg'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Current Technical Level</span>

            <div className="skills__container container grid">
                <Languages />
                <FrameLibPkg />
            </div>
        </section>
    )
}

export default Skills