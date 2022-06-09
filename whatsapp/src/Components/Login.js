import React, {useRef} from 'react'
import { v4 as uuidV4} from 'uuid'

export default function Login({onIdSubmit}) {

	const idRef = useRef()

	function handleSubmit(e){
		e.preventDefault()

		onIdSubmit(idRef.current.value)
	}

	function createNewId(){
		onIdSubmit(uuidV4())
	}
  return (
	<div className='login'>
		<form className='login__form' onSubmit={handleSubmit}>
			<label className='login__form__label'>Enter Your ID</label>
			<input className='login__form__input' ref={idRef} type='text' required/>
			<button className='login__form__button login__form__button-submit' type='submit'>Login</button>
			<button className='login__form__button login__form__button-create' onClick={createNewId}>Create A New ID</button>
		</form>
	</div>
  )
}
