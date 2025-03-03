import React from "react";
import seamimg from '../assets/images/seam-carving-ss.png'
import verbimg from '../assets/images/verbatim-ss.png'
import straimg from '../assets/images/stratagem-ss.png'
import faciimg from '../assets/images/facility.jpg'
import '../assets/styles/Project.scss';

function Project() {

    return(
    <div className="projects-container" id="projects">
        <h1>Programming Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://mayank-surti.github.io/Verbatim/" target="_blank" rel="noreferrer"><img src={verbimg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mayank-surti.github.io/Verbatim/" target="_blank" rel="noreferrer"><h2>Verbatim</h2></a>
                <p>An audio-to-text transcriber web application made in React to provide a user-friendly interface. Used a machine learning model to accurately convert spoken language into text.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/Mayank-Surti/Seam-Carving" target="_blank" rel="noreferrer"><img src={seamimg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Mayank-Surti/Seam-Carving" target="_blank" rel="noreferrer"><h2>Seam Carving</h2></a>
                <p>A seam carving application built with Python that uses dynamic programming to intelligently resize images by adding or removing seams. Users can upload images and receive the resized output directly through the interface.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/Mayank-Surti/Stratagem" target="_blank" rel="noreferrer"><img src={straimg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Mayank-Surti/Stratagem" target="_blank" rel="noreferrer"><h2>Stratagem</h2></a>
                <p>A local multiplayer turn-based strategy game in Java, featuring an interactive 2D graphical interface using AWT and Swing for game mechanics. Built a custom game engine to handle logic.</p>
            </div>
        </div>
        
    </div>
    );
}

export default Project;