import styled from "styled-components";

export const Contenteiner = styled.header`
  width: 100%;
  background: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  
  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: var(--shape);
    background: var(--blue-light);
    padding: 0 2rem;
    height: 2rem;
    border:0;
    border-radius: 0.3rem;
    transition: filter .2s;
    
  }
  button:hover {
    filter: brightness(0.875);
  }
`