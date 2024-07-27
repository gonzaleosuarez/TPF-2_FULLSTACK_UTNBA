import { Text, Box,} from '@chakra-ui/react'
import React from 'react'
export const SectionContactHeader = () => {
    return (
        <><section className="contact common-background">
        <Box className="box">
            <i className="fa-solid fa-location-dot"></i>
            <Text fontSize='2xl' color= 'white'>Dirección</Text>
            <Text fontSize='sm' color='white'>999 Carter Street</Text>
            <Text fontSize='sm' color='white'>Sailor Springs, IL 62434</Text>
        </Box>
        <Box className="box">
            <i className="fa-solid fa-phone-volume"></i>
            <Text fontSize='2xl' color= 'white'>Telefono</Text>
            <Text fontSize='sm' color='white'>+1 618-689-9409</Text>
            <Text fontSize='sm' color='white'>+1 781-254-8437</Text>
        </Box>
        <Box className="box">
            <i className="fa-solid fa-envelope"></i>
            <Text fontSize='2xl' color= 'white'>Email</Text>
            <Text fontSize='sm' color='white'>gonzaleosuarez@gmail.com</Text>
            <Text fontSize='sm' color='white'>support@example.com</Text>
        </Box>
        <Box className="box">
            <i className="fa-regular fa-comment-dots"></i>
            <Text fontSize='2xl' color='white'>Facebook Chat</Text>
            <Text fontSize='sm' color='white'>Gonzalo Suárez</Text>
        </Box>
    </section></>
    )
}

export default SectionContactHeader;