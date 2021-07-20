import React, { FormEvent } from 'react'
import Modal from 'react-modal'
import { Contenteiner, ContentTypeTrasaction, ButtonTypeTrasaction } from './NewTransactionModalstyle'

import closeModalImg from '../../assests/closeModal.svg'
import entradaImg from '../../assests/entradas.svg'
import saidaImg from '../../assests/saidas.svg'
import { useTrasactions } from '../../hooks/useTrasactions'

Modal.setAppElement('#root')

interface TrasactionModalProps {
  isOpen: boolean;
  onRequestClose:() => void;
}

export function NewTrasactionModal({ isOpen, onRequestClose }: TrasactionModalProps) {
  const { createNewTrasaction } = useTrasactions()

  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [type, setType] = React.useState('entrada');
  const [category, setCategory] = React.useState('');

  async function hendlaSubmitForm(event: FormEvent) {
    event.preventDefault();
    if (!title || !category || value === 0) {
      window.alert('Verifique os dados e tente novamente')
      return null 
    }
    const data = { 
      title,
      value,
      type,
      category,
    }
    await createNewTrasaction(data);
    onRequestClose();
    setCategory('')
    setTitle('')
    setType('entrada')
    setValue(0)
  }
  
  return (
    <Modal
      overlayClassName='overlay-react-modal'
      className='content-react-modal'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='btn-close-modal'
      >
        <img src={closeModalImg} alt="fechar modal" />
      </button>
      <Contenteiner onSubmit={hendlaSubmitForm}>
        <h2>Cadastrar trasaçao</h2>
        <input
          type="text"
          placeholder='Titulo'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="number"
          placeholder='Valor'
          value={value !== 0 ? value : ''}
          onChange={({ target }) => setValue(+target.value)}
        />
        <ContentTypeTrasaction>
          <ButtonTypeTrasaction
            type='button'
            onClick={() => setType('entrada')}
            isActive={type === 'entrada'}
            isColors='green'
          >
            <img src={entradaImg} alt="entrada" />
            <span>Entrada</span>
          </ButtonTypeTrasaction>
          <ButtonTypeTrasaction
            type='button'
            onClick={() => setType('saida')}
            isActive={type === 'saida'}
            isColors='red'
          >
            <img src={saidaImg} alt="saida" />
            <span>Saidas</span>
          </ButtonTypeTrasaction>
        </ContentTypeTrasaction>
        <input
          type="text"
          placeholder='Categoria'
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Contenteiner>
      </Modal>
  )
}