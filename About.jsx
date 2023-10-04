import './About.css';
import miImagen from '../assets/IMG_3349.jpg';

const About = () => (
    <>
        <div className='about--container'>
            <img id='miFoto' src={miImagen} alt="foto de mi" style={{ width: '300px', height: '400px'}} />
            <h1>About ME</h1>
            <h2>Hugo Hernández</h2>
            <h3>hugo@mail.com</h3>
            <p>Egresado de Ingeniería Geofísica con una pasión 
                por la exploración y el análisis de datos.</p>
        </div>
    </>
)

export default About;


