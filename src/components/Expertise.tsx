import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const languages = [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL"
];

const lib_frameworks = [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "TailwindCSS",
    "Sass",
    "AWT/Swing",
    "Flask",
    "Tkinter",
    "NumPy"
];

const tools = [
    "Git",
    "VS Code",
    "Visual Studio",
    "Eclipse",
    "MS Office"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">

            <h1>Skills</h1>
                <div className="flex-chips">
                    {languages.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
            
            <h1>Libraries & Frameworks</h1>
                <div className="flex-chips">
                    {lib_frameworks.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>

            <h1>Tools</h1>
                <div className="flex-chips">
                    {tools.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
        </div>
    </div>
    );
}

export default Expertise;