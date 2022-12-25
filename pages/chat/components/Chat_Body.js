import React,{useState,useEffect} from 'react';
import {Flex,Text,Input,Button} from '@chakra-ui/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Groups2Icon from '@mui/icons-material/Groups2';
import SmsIcon from '@mui/icons-material/Sms';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { io } from "socket.io-client";

export default function Index(){
	const socket = io("http://localhost:8080");
	const [message,set_message]=useState('')
	const handle_send=()=>{
		console.log(message)
	}
	return(
		<Flex flex='1' h='100vh' direction='column' position='relative'>
			<Header/>
			<Body/>
			<Flex w='100%' position='' bottom='10px' left='5%' p='3' gap='2' align='center'>
				<Input bg='#fff' variant='filled' placeholder='Message' boxShadow='lg' flex='1' onChange={((e)=>{set_message(e.target.value)})}/>
				<SendIcon style={{color:"#009393"}}/>
			</Flex>
		</Flex>
	)
}

const Header=()=>{
	return(
		<Flex h='70px' bg='#fff' boxShadow='lg' w='100%' align='center' p='2' gap='2'>
			<Flex position='relative'>
				<AccountCircleIcon style={{fontSize:'40px'}}/>
				<FiberManualRecordIcon style={{color:"green",fontSize:"12px",position:"absolute",top:'4px',right:'4px'}}/>
			</Flex>
			<Flex direction='column' flex='1'>
					<Text fontWeight='bold' fontSize='14px'>Alexis Sanchez</Text>
					<Text color='grey' fontSize='12px'>Sam's Tech</Text>
				</Flex>
		</Flex>
	)
}

const Body=()=>{
	return(
		<Flex flex='1' overflowY='scroll' bg='#eee' direction='column' p='4' gap='4'>
			{texts.map((text)=>{
				return(
					<Chat text={text} key={text.id}/>
				)
			})}
		</Flex>
	)
}

const Input_tag=({set_message})=>{
	return(
		<Flex w='100%' position='' bottom='10px' left='5%' p='3' gap='2' align='center'>
			<Input bg='#fff' variant='filled' placeholder='Message' boxShadow='lg' flex='1' onChange={((e)=>{set_message(e.target.value)})}/>
			<SendIcon style={{color:"#009393"}}/>
		</Flex>
	)
}

const Chat=({text})=>{
	console.log(text)
	return(
		<Flex gap='2' position='relative' direction={text.id % 2? 'row' : 'row-reverse'}>
			<AccountCircleIcon style={{fontSize:'30px'}}/>
			<Flex 
				bg={text.id % 2? '#fff' : '#009393'}
				color={text.id % 2? '#000' : '#fff'} 
				p='2' 
				borderRadius={text.id % 2? '0px 20px 20px 15px' : '10px 0px 20px 15px'}
				w='220px'
				direction='column'>
				<Text>{text}</Text>
				<Text fontSize='12px' color={text.id % 2? 'grey' : 'black'}>{text.time_stamp}</Text>
			</Flex>
		</Flex>
	)
}

const texts = [
	{
		id: 1,
		image: " ",
		content: "hey sam i really like how you are coding this chat app You can make it okay dont you worry",
		time_stamp:"15:23pm",
	},
	{
		id: 2,
		image:"",
		content:"Appreciate it bro...thanks so much for the motivation.",
		time_stamp:"15:23pm"
	},
	{
		id: 3,
		image:"",
		content: "Sure thing anytime.Good luck then",
		time_stamp:"15:24pm"
	},
	{
		id: 4,
		image:"",
		content:"Aight",
		time_stamp:"15:27pm"
	},
	{
		id: 4,
		image:"",
		content:"Also...",
		time_stamp:"15:23pm"
	},
	{
		id: 5,
		image:"",
		content:"Yes",
		time_stamp:"15:23pm"
	},
]