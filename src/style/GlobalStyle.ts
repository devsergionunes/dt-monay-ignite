import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #f52f4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --green: #33CC95;

    --text-title: #363f5f;
    --text-body: #969cb3;
    
    --background: #f0f2f5;
    --shape: #fff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body , button , textarea, input {
    font-family: 'Poppins';
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    cursor: not-allowed;
  }

  .overlay-react-modal{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    background: rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-react-modal{
    width: 100%;
    max-width: 500px;
    position: relative;
    padding: 2.5rem;
    border-radius: .24rem;
    background: var(--background);
  }
  .btn-close-modal{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter .2s;
    
    &:hover{
      filter: brightness(.8);
    }
  }
`