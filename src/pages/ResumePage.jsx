export default function ResumePage() {
    return (
        <div className="m-5">
            <h2 className="pb-3">Resume</h2>
            {/* Link to download resume */}
            <a style={{ color: '#0077b6' }} href="/JW Resume 2024.pdf" download>Download my resume here</a>

            <div className="mt-5">
                <h4>Front-End Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h4>Back-End Proficiencies</h4>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
};