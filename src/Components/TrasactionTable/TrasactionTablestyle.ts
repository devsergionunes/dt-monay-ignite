import styled from "styled-components";

export const Contenteiner = styled.div`
  margin-top: 3rem;

  table {
    width: 100%;
    border-spacing:0 0.5rem;
    
    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      padding: .75rem 1.5rem
    }
    td {
      padding: .75rem 1.5rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      &:first-child{
        border-radius: 0.25rem 0 0 0.25rem;
        color: var(--text-title)
      }
      &:last-child{
        border-radius: 0 0.25rem 0.25rem 0;
      }
      &.entrada{
        color: var(--green)
      }
      &.saida{
        color: var(--red)
      }
    }
  }

`