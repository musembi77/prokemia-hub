import React from 'react'
import {Flex,Text,Button,Image} from '@chakra-ui/react'

export default function Index({set_current_state}){
	return(
		<Flex flex='1' h='100vh' direction='column' bg='#eee' align='center' justify='center'>
			<Image h='100%' w='100%' objectFit='cover' alt='photo' src='/wp1.jpg'/>
			<Flex position='absolute' bottom='25vh' direction='column' bg='#fff' boxShadow='dark-lg' p='2' borderRadius='5' textAlign='center' gap='2'>
				<Text fontSize='28px' fontWeight='bold'>Prokemia Hub</Text>
				<Text>Connecting Salespeople from all over.</Text>
				<Text>Share and connect</Text>
				<Button bg='#009393' color='#fff'>Join the prokemia hub group</Button>
			</Flex>
		</Flex>
	)
}