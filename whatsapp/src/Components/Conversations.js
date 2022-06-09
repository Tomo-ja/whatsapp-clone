import React from 'react'
import { useConversations } from '../Contexts/ConversationProvider'



export default function Conversations() {

	const { conversations, selectConversationIndex } = useConversations()


  return (
	<div className='sidebar__content'>
		{conversations.map( (conversation, index ) => (
			<div className= { conversation.selected ? 'sidebar__content__item-selected' : 'sidebar__content__item'} 
				key={index}
				onClick = {() => selectConversationIndex(index)}
			>
				<p className='sidebar__content__item__name'>
					{conversation.recipients.map(r => r.name).join(', ')}
				</p>
			</div>
  		))}
	</div>
  )
}
