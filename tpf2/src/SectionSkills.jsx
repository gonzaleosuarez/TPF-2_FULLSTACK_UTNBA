import { Text, Box, Button } from '@chakra-ui/react'
import React from 'react'

export const SectionSkills = () => {
    return (
        <section id="skills" className="skills">
        <Text fontSize='4xl' textAlign="center" textColor='white' style={{marginTop:'-50px', marginBottom: '50px'}}>Mis Habilidades</Text>
        <Box className="flex-container-skills">
            <Box>
            <Text fontSize='2xl' style={{color: 'white'}}>Cada dia es un nuevo reto</Text>
            <br />
            <Text fontSize='md'>Mis habilidades en desarrollo web abarcan HTML, CSS y JavaScript, donde puedo crear interfaces atractivas y funcionales. También tengo experiencia en C# y Java, lo que me proporciona una comprensión sólida de la lógica de programación y la orientación a objetos.</Text>
            <br />
            <Text fontSize='md'>Además de mi enfoque en el desarrollo web, también he cultivado habilidades en la resolución de problemas y el trabajo en equipo a través de proyectos colaborativos. Mi capacidad para comunicarme efectivamente y adaptarme a nuevos desafíos me permite contribuir de manera significativa en entornos de desarrollo ágiles y dinámicos.</Text>
            <Button><p style={{color: 'white'}}>CONTACTAME</p></Button>
            </Box>
            <Box className="skills-bar">
                <Text fontSize='xl' style={{color: 'white', marginBottom: '60px'}}>Diseño Web</Text>
                <Text fontSize='xl' style={{color: 'white', marginBottom: '60px'}}>Desarrollo de Aplicaciones</Text>
                <Text fontSize='xl' style={{color: 'white', marginBottom: '60px'}}>Coding</Text>
                <Text fontSize='xl' style={{color: 'white', marginBottom: '60px'}}>Copywriting</Text>
            </Box>
        </Box>
    </section>
    );
}

export default SectionSkills;

/*
export const SectionSkills = () => {
    return (
        <Box >

            <Text fontSize="5xl">Mis Habilidades</Text>
            <Box class="flex-container-skills">
                <Box>
                    <Text fontSize="2xl">Cada dia es un nuevo reto</Text>
                    <p>Mis habilidades en desarrollo web abarcan HTML, CSS y JavaScript, donde puedo crear interfaces atractivas y funcionales. También tengo experiencia en C# y Java, lo que me proporciona una comprensión sólida de la lógica de programación y la orientación a objetos.</p>
                    <p>Además de mi enfoque en el desarrollo web, también he cultivado habilidades en la resolución de problemas y el trabajo en equipo a través de proyectos colaborativos. Mi capacidad para comunicarme efectivamente y adaptarme a nuevos desafíos me permite contribuir de manera significativa en entornos de desarrollo ágiles y dinámicos.</p>
                    <button class="skills-contact-button"><a href="https://www.instagram.com/gonzaleosuarez/">CONTACTAME </a></button>
                </Box>
                <Box class="skills-bar">
                    <Text fontSize="2xl">Diseño Web</Text>
                    <Text fontSize="2xl">Desarrollo de Aplicaciones</Text>
                    <Text fontSize="2xl">Coding</Text>
                    <Text fontSize="2xl">Copywriting</Text>
                </Box>
            </Box>
        
        </Box>
    );
}


*/