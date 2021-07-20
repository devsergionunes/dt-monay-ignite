import styled from "styled-components";

export const Contenteiner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  margin-top: -4rem;
  
  div {
    background: var(--shape);
    color: var(--text-title);
    padding: .5rem 1rem ;
    border-radius: .2rem;

    header {
      display: flex ;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &.total{
      background:var(--green);
      color: var(--shape);
    }
  }
`