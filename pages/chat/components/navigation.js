import React,{useState,useEffect} from 'react';
import {Flex,Text,Input} from '@chakra-ui/react'
//icons import
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Groups2Icon from '@mui/icons-material/Groups2';
import SmsIcon from '@mui/icons-material/Sms';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
//components imports
import Chat_Item from './Chat_Item.js'

export default function Navigation({set_current_state}){
	return(
		<Flex w='30vw' bg='#090F14' h='100vh' direction='column' p='2' gap='4'>
			<Flex align='center' justify='' color='#fff' gap='2'>
				<AccountCircleIcon style={{fontSize:'60px'}}/>
				<Flex direction='column' flex='1'>
					<Text fontWeight='bold'>Dennis Sammy</Text>
					<Text color='#eee'>Sam's Tech</Text>
				</Flex>
				<SettingsIcon style={{fontSize:''}} onClick={(()=>{set_current_state('settings')})} cursor='pointer'/>
			</Flex>
			<Flex gap='2' color='#fff' justify='space-around' mt='2'>
				<Flex direction='column' textAlign='center'>
					<HomeIcon style={{fontSize:'25px',cursor:'pointer'}} onClick={(()=>{set_current_state('home')})}/>
					<Text fontSize='10px'>Home</Text>
				</Flex>
				<Flex direction='column' textAlign='center'>
					<SmsIcon style={{fontSize:'25px',cursor:'pointer'}}/>
					<Text fontSize='10px'>chats</Text>
				</Flex>
				<Flex direction='column' textAlign='center'>
					<Groups2Icon style={{fontSize:'25px',cursor:'pointer'}}/>
					<Text fontSize='10px'>Groups</Text>
				</Flex>
				<Flex direction='column' textAlign='center'>
					<ContactSupportIcon style={{fontSize:'25px',cursor:'pointer'}}/>
					<Text fontSize='10px'>Support</Text>
				</Flex>
			</Flex>
			<Flex>
				<Input variant='flushed' placeholder='Search' color='#fff' cursor='pointer'/>
			</Flex>
			<Flex direction='column' gap='5' h='70vh' overflowY='scroll'>
				<Chat_Item set_current_state={set_current_state}/>
			</Flex>
		</Flex>
	)
}