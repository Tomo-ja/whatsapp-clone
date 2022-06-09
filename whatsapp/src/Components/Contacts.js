import React from 'react'
import { useContacts } from '../Contexts/ContactsProvider'

export default function Contacts() {

	const { contacts } = useContacts()

  return (
	<div className='sidebar__content'>
		{contacts.map(contact => (
			<div className='sidebar__content__item' key={contact.id}>
				<p className='sidebar__content__item__name'>{contact.name}</p>
			</div>
		))}
	</div>
  )
}
