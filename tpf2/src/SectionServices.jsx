import { Grid, GridItem, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'

export const SectionServices = () => {

    const services = [
        {
            'i': 'icon-coral fa-solid fa-pen-ruler',
            'title': 'Web Desing',
            'text': 'Ofrezco servicios de diseño web con habilidades intermedias, creando interfaces atractivas y funcionales. Mi enfoque se basa en desarrollar diseños cohesivos que satisfagan las necesidades de mis clientes, utilizando principios de diseño como la jerarquía visual y la paleta de colores. Estoy comprometido a seguir mejorando mis habilidades para ofrecer experiencias digitales de alta calidad'
        },
        {
            'i': 'fa-solid fa-camera-retro icon-coral',
            'title': 'Photography',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident rem inventore, ipsum, illo quo odit eius praesentium repellat cum enim omnis rerum tenetur temporibus incidunt ex consequatur voluptatibus officiis!'
        }, {
            'i': 'fa-solid fa-video icon-coral',
            'title': 'Video Editing',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolorem vitae repudiandae mollitia delectus deleniti voluptates. Architecto dicta nostrum tenetur quam, adipisci nobis tempora numquam assumenda mollitia amet! Aperiam, ducimus.'

        }, {
            'i': 'fa-regular fa-pen-to-square icon-coral',
            'title': 'Copy Writing',
            text: 'Sé redactar mensajes persuasivos para diferentes plataformas digitales, conectando con la audiencia para lograr resultados.'
        },
        {
            'i': 'fa-regular fa-pen-to-square icon-coral',
            'title': 'Content Writing',
            text: 'Sé redactar mensajes persuasivos para diferentes plataformas digitales, conectando con la audiencia para lograr resultados.'
        },
        {
            'i': 'fa-solid fa-code icon-coral',
            'title': 'Web Development',
            text: 'Sé redactar mensajes persuasivos para diferentes plataformas digitales, conectando con la audiencia para lograr resultados.'
        }
    ]

    return (
        <section id="services" class="services">
            <div>
                <h1>Mis Servicios</h1>
            </div>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} bgColor={'#020414'} class="grid-container" style={{ padding: '100px', marginTop: '-550px'}}>
                {
                    services.map((service) => {
                        return (
                            <GridItem style={{ margin: '10px', padding: '10px', fontSize: '1em'}} class="grid">
                                <i class={service.i}></i>
                                <Text fontSize='xl' color={'white'} >{service.title}</Text>
                                <Text fontSize='sm' color={'grey'}>{service.text}</Text>
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </section>
    );
}

export default SectionServices;