import React from "react";
import faciimg from '../assets/images/facility.jpg'
import isomimg from '../assets/images/isometric-bedroom.jpg'
import foreimg from '../assets/images/forest.jpg'
import schoimg from '../assets/images/the-school.jpg'
import '../assets/styles/Project.scss';

function Project() {

    return(
    <div className="projects-container" id="projects">
        <h1>3D Modeling</h1>
        <div className="projects-grid">
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={faciimg} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={schoimg} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={isomimg} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={foreimg} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
        
    </div>
    );
}

export default Project;