import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../Contexts/ConversationProvider'

export default function Dashboard({ id }) {
	const { selectedConversation } = useConversations()

  return (
	<div className='App__inner'>
		<Sidebar id={ id } />
		{ selectedConversation && <OpenConversation /> }
	</div>
  )
}
