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
            <a href={demoLink} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'inline-block' }}>
                <div className="project-image-wrapper" style={{ position: 'relative' }}>
                    <img src={imageUrl} alt={title} className="project-image"/>
                    {hovered && (
                        <div className="project-info" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    )}
                </div>
            </a>
            <div className="project-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link" style={{ color: '#0077b6', fontSize: '1.25rem' }}>GitHub Link</a>
            </div>
        </div>
    );
};