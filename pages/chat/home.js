import React,{useState,useEffect} from 'react';
import {Flex,Text} from '@chakra-ui/react'
import Nav from './components/navigation.js'
import Home from './components/Index.js'
import Chat_Body from './components/Chat_Body.js'
import Settings from './components/settings.js'

export default function Index(){
	console.log('hey')
	const [current_state,set_current_state]=useState('home');

	if (current_state ===  'chat')
	{   
		return(
				<Flex>
					<Nav set_current_state={set_current_state}/>
					<Chat_Body/>
				</Flex>
			)
	}else if (current_state ===  'settings')
	{
		return(
				<Flex>
					<Nav set_current_state={set_current_state}/>
					<Settings salesperson_data={salesperson_data}/>
				</Flex>
			)
	}
	else if (current_state ===  'home')
	{
		return(
				<Flex>
					<Nav set_current_state={set_current_state}/>
					<Home/>
				</Flex>
			)
	}
}

const salesperson_data = {
	first_name: 'Dennis',
	last_name:  'Sammy',
	email_of_salesperson: 'sales@gmail.com',
	mobile_of_salesperson: "0759233322",
	address: 'Juja,Kenya',
}