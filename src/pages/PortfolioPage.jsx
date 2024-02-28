import React from 'react';
import Project from '../components/Project';

const PortfolioPage = () => {
    const projects = [
        {
            title: 'Project 1',
            description: '',
            demoLink: '',
            githubLink: ''
        },
        {
            title: 'Project 2',
            description: '',
            demoLink: '',
            githubLink: ''
        },
    ];

    return (
        <div>
            <h2>Portfolio</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;