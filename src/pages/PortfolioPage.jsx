import Project from '../components/Project';

export default function PortfolioPage() {
    const projects = [
        {
            title: 'Worth The Watch',
            description: 'An app where you can search for movies, leave reviews, and see other user reviews',
            imageUrl: '../public/worth-the-watch-ss.png',
            demoLink: 'https://worth-the-watch-4fed4e43ed4e.herokuapp.com/',
            githubLink: 'https://github.com/ExecutorKarthan/Worth-the-Watch.git'
        },
        {
            title: 'Note Taker',
            description: 'An app for taking notes',
            imageUrl: '../public/note-taker-ss.png',
            demoLink: 'https://note-taker-jwbootcamp-9c71d447c89c.herokuapp.com/',
            githubLink: 'https://github.com/JaredWoodcock/note-taker.git'
        },
        {
            title: 'Weather Dashboard',
            description: 'An app to search for the weather in a specific city, with 5 day forecast',
            imageUrl: '../public/Weather-Dashboard-ss.png',
            demoLink: 'https://jaredwoodcock.github.io/Weather-Dashboard/',
            githubLink: 'https://github.com/JaredWoodcock/Weather-Dashboard.git'
        },
        {
            title: 'Work Day Scheduler',
            description: 'A scheduling app with responsive time slots',
            imageUrl: '../public/Work-Day-Scheduler-ss.png',
            demoLink: 'https://jaredwoodcock.github.io/Work-Day-Scheduler/',
            githubLink: 'https://github.com/JaredWoodcock/Work-Day-Scheduler.git'
        },
        {
            title: 'Coding Quiz',
            description: 'A coding quiz to test your knowledge',
            imageUrl: '../public/Coding-Quiz-ss.png',
            demoLink: 'https://jaredwoodcock.github.io/Coding-Quiz/index.html',
            githubLink: 'https://github.com/JaredWoodcock/Coding-Quiz.git'
        },
        {
            title: 'Password Generator',
            description: 'An app that generates a random password based off of the answered prompts from the user',
            imageUrl: '../public/password-generator-ss.png',
            demoLink: 'https://jaredwoodcock.github.io/password-generator/',
            githubLink: 'https://github.com/JaredWoodcock/password-generator.git'
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