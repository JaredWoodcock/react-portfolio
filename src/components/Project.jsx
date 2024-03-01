import { useState } from 'react';

export default function Project({ title, description, imageUrl, demoLink, githubLink }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="project-card m-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <div className="project-image-wrapper">
                    <img src={imageUrl} alt={title} className="project-image" />
                    {hovered && (
                        <div className="project-info">
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    )}
                </div>
            </a>
            <div className="project-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
            </div>
        </div>
    );
};
