import { Text, Box,} from '@chakra-ui/react'
import React from 'react'
export const SectionAbout = () => {
    return (
        <section id="about" className="about">
        <Text fontSize='4xl' textAlign="center" textColor='white' style={{marginBottom: '80px'}}>Sobre Mi</Text>
        <Box className="flex-container">
            <Box>
                <img src="assets/pexels-cottonbro-2773562.jpg" alt=""/>
            </Box>
            <Box className="text-container">
                <Text  fontSize='4xl' style={{ color: 'salmon', marginTop:'-15px'}} >¡Hola!</Text >
                <p>Soy un estudiante con algo de experiencia previa en C# y Java. Actualmente me estoy enfocando principalmente en el desarrollo web, trabajando con HTML, CSS y JavaScript para crear sitios web atractivos y funcionales.</p>
                <Box className="about-container">
                    <Box className="info-box">
                        <Text  fontSize='2xl' style={{ color: 'salmon'}}>Nombre:</Text >
                        <p>Gonzalo Leonel Suárez</p>
                    </Box>
                    <Box className="info-box">
                        <Text  fontSize='2xl' style={{ color: 'salmon'}}>Email:</Text >
                        <p>gonzaleosuarez@gmail.com</p>
                    </Box>
                    <Box className="info-box">
                        <Text  fontSize='2xl' style={{ color: 'salmon'}}>Telefono:</Text >
                        <p>+1 908-736-1801</p>
                    </Box>
                    <Box className="info-box">
                        <Text  fontSize='2xl' style={{ color: 'salmon'}}>Twitter:</Text >
                        <p>gonzaleosuarez</p>
                    </Box>
                </Box>
                <Box className="contact-container">
                    <Text  fontSize='2xl' style={{ color: 'white', marginTop: '20px'}} className="contact-me">CONTACTAME <i className="fa-solid fa-arrow-right"></i></Text >
                    <button className="download-cv"><p style={{color: 'white'}}><i className="fa-solid fa-download"></i> DESCARGAR CV</p></button>
                </Box>
            </Box>
        </Box>
        <Box className= "image-box">
            <Text fontSize='3xl' style={{ color: 'white'}} className='image-box-text'>Trabajemos juntos en tu proximo proyecto</Text >
            <img src="assets/pexels-iliescu-victor-95204-306198.jpg" alt=""/>
        </Box>
    </section>
    );
}

export default SectionAbout;