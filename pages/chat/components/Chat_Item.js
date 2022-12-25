import React,{useState,useEffect} from 'react';
import {Flex,Text} from '@chakra-ui/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Groups2Icon from '@mui/icons-material/Groups2';
import SmsIcon from '@mui/icons-material/Sms';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Chat_Item({set_current_state}){
	return(
		<Flex align='center' justify='space-between' color='#fff' gap='2' w='100%' p='1' cursor='pointer' onClick={(()=>{set_current_state('chat')})}>
				<Flex position='relative'>
					<AccountCircleIcon style={{fontSize:'50px'}}/>
					<FiberManualRecordIcon style={{color:"green",fontSize:"12px",position:"absolute",top:'4px',right:'4px'}}/>
				</Flex>
				<Flex direction='column' flex='1'>
					<Flex gap='2' align='center'>
						<Text fontWeight='bold'>Dennis Sammy</Text>
						<Text color='grey' fontSize='14px'>17:50pm</Text>
					</Flex>
					<Text color='#eee' fontSize='14px'>Sam's Tech</Text>
				</Flex>
				<FiberManualRecordIcon style={{color:"#009393",fontSize:"15px"}}/>
		</Flex>
	)
}