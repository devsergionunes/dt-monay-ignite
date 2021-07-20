import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Contenteiner = styled.form`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-title);
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.24rem;
    color: var(--text-body);
    outline-color: var(--green);
    transition: border .2s;
    & + input {
      margin-top: 1rem;
    }
    &:hover{
      border: 1px solid #aaa
    }
    &::placeholder{
      color:var(--text-body)
    }
  }

  button[type='submit']{
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    font-weight: 600;
    color:var(--shape);
    margin-top: 1.5rem;
    background: var(--green);
    border: 0;
    border-radius: 0.24rem;
    outline-color: transparent;
    transition: filter .2s;

    &:hover{
      filter: brightness(.9)
    }
  }
`
export const ContentTypeTrasaction = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;
  margin: 1rem 0;
`
interface ButtonTypeTrasactionProps {
  isActive: boolean;
  isColors: 'red' | 'green';
}

const colors = {
  green: '#33CC95',
  red: '#f52f4d'
}
export const ButtonTypeTrasaction = styled.button<ButtonTypeTrasactionProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: ${({isActive, isColors}) => isActive ? transparentize(0.9, colors[isColors] ): 'trasparent'};
  border: 1px solid #d7d7d7;
  border-radius: 0.2rem;

  padding: 0 1rem ;
  height: 3rem;

  &:hover{
    border: 1px solid ${darken("0.2", '#d7d7d7')}
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    color:var(--text-title);
  }
`