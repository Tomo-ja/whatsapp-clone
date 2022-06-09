import React, { useState } from 'react'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'


export default function Sidebar({ id }) {

	const [activeConversations	, setActiveConversations] = useState(true)
	const [modalOpen, setModalOpen] = useState(false)

	function toggleModalDisplay(){
		setModalOpen(prevState => !prevState)
	}
	function toggleSidebarContent(){
		setActiveConversations(prevState => !prevState)
	}

  return (
	<div>
		<div className='sidebar'>
			<ul className='sidebar__nav'>
				<li className={ activeConversations ? 'sidebar__nav__item-active' : 'sidebar__nav__item'} onClick={toggleSidebarContent}>Conversations</li>
				<li className={ activeConversations ? 'sidebar__nav__item' : 'sidebar__nav__item-active'} onClick={toggleSidebarContent}>Contacts</li>
			</ul>
			{activeConversations ?
				<Conversations />
			:
				<Contacts />
			}
			<div className='sidebar__userId'>
				Your id: <br />{id}
			</div>
			<button onClick={toggleModalDisplay} className='sidebar__newButton'>
				New {activeConversations ? 'Conversation' : 'Contact' }
			</button>
		</div>

		{modalOpen && <div className='background-modal'></div>}

		{modalOpen && (activeConversations ? 
					<NewConversationModal modalController={toggleModalDisplay}/> :
					<NewContactModal modalController={toggleModalDisplay}/>)
		}
		
	</div>
  )
}
