import React, {useRef} from 'react'
import cancelIcon from '../images/xmark-solid.svg'
import { useContacts } from '../Contexts/ContactsProvider'


export default function NewContactModal({modalController}) {

  const idRef = useRef()
  const nameRef = useRef()
  const { createContact } = useContacts()

  function handleSubmit(e){
      e.preventDefault()
      createContact(idRef.current.value, nameRef.current.value)
      modalController()
  }


  return (
	<div className='modal-contact'>
      <div className="modal-contact__header">
        <h3 className='modal-contact__header__title'>Create Contact</h3>
        <img className='modal-contact__header__cancel-icon' src={cancelIcon} onClick={modalController} alt=""/>
      </div>
      <div className="modal-contact__body">
          <form className='modal-contact__body__form' onSubmit={handleSubmit}>
              <label className='modal-contact__body__form__label'>ID</label>
              <input className='modal-contact__body__form__input' type='text' ref={idRef} required />
              <label className='modal-contact__body__form__label'>Name</label>
              <input className='modal-contact__body__form__input' type='text' ref={nameRef} required />
              <button className='modal-contact__body__form__button'>Create</button>
          </form>
      </div>
  </div>
  )
}
