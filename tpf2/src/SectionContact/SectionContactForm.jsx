import { Text, Box, Input, Textarea, Button} from '@chakra-ui/react'
import React from 'react'
export const SectionContactForm = () => {
    return (
        <section className="contact-form common-background">
            <Box className="info-box">
                <Text fontSize='2xl' style={{ color: 'orangered', marginLeft: '20px'}}>Contactemos</Text>
                <a href="https://www.facebook.com/profile.php?id=61558544442719"><h2><i class="fa-brands fa-facebook"></i>Facebook</h2></a>
                <a href="https://x.com/gonzaleosuarez"><h2><i class="fa-brands fa-x-twitter"></i>X</h2></a>
                <a href="https://www.instagram.com/gonzaleosuarez/"><h2><i class="fa-brands fa-instagram"></i>Instagram</h2></a>
                <a href="https://github.com/gonzaleosuarez"><h2><i class="fa-brands fa-github"></i>Github</h2></a>
                <a href="https://discord.com/channels/@me"><h2><i class="fa-brands fa-discord"></i>Discord</h2></a>

            </Box>
            <Box className="box">
                <Text fontSize='2xl' style={{ color: 'white'}}>Formulario de contacto</Text>
                <Box className="input-group">
                    <Input type="text" placeholder="Nombre" />
                    <Input type="email" placeholder="Email" />
                </Box>
                <Input type="text" placeholder="Asunto" />
                <Textarea placeholder="Mensaje"></Textarea>
                <Button height={'fit-content'}>Enviarme un <br /> mensaje</Button>
            </Box>
        </section>
    )
}

export default SectionContactForm;