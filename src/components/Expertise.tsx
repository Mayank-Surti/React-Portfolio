import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labels = [
    "Java",
    "Python",
    "C#",
    "C/C++",
    "TypeScript",
    "Javascript",
    "HTML",
    "CSS",
    "SQL",
    "React",
    "TailwindCSS",
    "Sass",
    "AWT/Swing",
    "Flask",
    "Tkinter",
    "NumPy"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
                <div className="flex-chips">
                    {labels.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
        </div>
    </div>
    );
}

export default Expertise;