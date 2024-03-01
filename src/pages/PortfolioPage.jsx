import Project from '../components/Project';

export default function PortfolioPage() {
    const projects = [
        {
            title: 'Project 1',
            description: '',
            imageUrl: '',
            demoLink: '',
            githubLink: ''
        },
        {
            title: 'Project 2',
            description: '',
            imageUrl: '',
            demoLink: '',
            githubLink: ''
        },
        {
            title: 'Project 3',
            description: '',
            imageUrl: '',
            demoLink: '',
            githubLink: ''
        },
        {
            title: 'Project 4',
            description: '',
            imageUrl: '',
            demoLink: '',
            githubLink: ''
        },
        {
            title: 'Project 5',
            description: '',
            imageUrl: '',
            demoLink: '',
            githubLink: ''
        },
        {
            title: 'Project 6',
            description: '',
            imageUrl: '',
            demoLink: '',
            githubLink: ''
        },
    ];

    return (
        <div className='m-5'>
            <h2 className="pb-3">Portfolio</h2>
            <div className="text-center project-list">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
};