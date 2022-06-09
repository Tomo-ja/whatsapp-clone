import React, { useState, useCallback } from 'react'
import { useConversations } from '../Contexts/ConversationProvider'

export default function OpenConversation() {

	const [ text, setText ] = useState("")
	const { sendMessage, selectedConversation } = useConversations()

	const setRef = useCallback(node => {
		if (node){
			node.scrollIntoView({ smooth: true })
		}
	}, [])

	function handleSubmit(e){
		e.preventDefault()

		sendMessage(selectedConversation.recipients.map(r=> r.id), text)
		setText("")
	}

  return (
	<div className='conversation'>
		<div className='conversation__record' >
			{selectedConversation.messages.map((message, index) => {
				const lastMessage = selectedConversation.message.length -1 === index
				return (
					<div key={index} ref = { lastMessage ? setRef : null} className={`conversation__record__group${message.fromMe && "-fromMe"}`}>
						<div className='conversation__record__group__message'>
							{message.text}
						</div>
						<div className='conversation__record__group__name'>
							{message.fromMe ? "You": message.senderName}
						</div>
					</div>
				)
			})}
		</div>
		<form onSubmit={handleSubmit} className='conversation__form'>
			<textarea 
				required
				value={ text }
				onChange ={ e => setText(e.target.value)}
				className='conversation__form__textArea'
			/>
			<button className='conversation__form__button' type='submit'>Send</button>
		</form>
	</div>
  )
}
