import React, { useState } from 'react'
import cancelIcon from '../images/xmark-solid.svg'
import { useContacts } from '../Contexts/ContactsProvider'
import { useConversations } from '../Contexts/ConversationProvider'

export default function NewConversationModal({modalController}) {

  const [selectedContactIds, setSelectedContactIds] = useState([])
  const { contacts } = useContacts()
  const { createConversation } = useConversations()

  function handleSubmit(e){
    e.preventDefault()

    createConversation(selectedContactIds)
    modalController()
  }
  function handleCheckboxChange(contactId){
    setSelectedContactIds(prev => {
      if (prev.includes(contactId)){
        return prev.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prev, contactId]
      }
    })
  }

  return (
		<div className='modal-conversation'>
      <div className="modal-conversation__header">
        <h3 className='modal-conversation__header__title'>Create Conversation</h3>
        <img className='modal-conversation__header__cancel-icon' src={cancelIcon} onClick={modalController} alt=""/>
      </div>
      <div className="modal-conversation__body">
          <form className='modal-conversation__body__form' onSubmit={handleSubmit}>
            {contacts.map( contact =>  (
              <label className='modal-conversation__body__form__label' key={contact.id}>{contact.name}
                <input 
                      type="checkbox" 
                      checked = {selectedContactIds.includes(contact.id) ? "checked": ""} 
                      onChange = {() => handleCheckboxChange(contact.id)}
                      className='modal-conversation__body__form__input'
                />
                <span className='modal-conversation__body__form__checkmark'></span>
              </label>
            ))}
              <button className='modal-conversation__body__form__button'>Create</button>
          </form>
      </div>
  </div>
  )
}
