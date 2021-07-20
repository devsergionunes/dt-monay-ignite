import React from "react";

import { Dashbord } from "./Components/Dashbord/Dashbord";
import { Header } from "./Components/Header/Header";
import { NewTrasactionModal } from "./Components/NewTransactionModal/NewTransactioModal";
import { TrasactionContextProvider } from "./hooks/useTrasactions";

import { GlobalStyle } from "./style/GlobalStyle";


export function App() {
  const [isNewTrasactionOpenModal, setNewTrasactionOpenModal] = React.useState(false)

  function hendleOpenModal() {
    setNewTrasactionOpenModal(true)
  }
  function hendleCloseModal() {
    setNewTrasactionOpenModal(false)
  }
  return (
    <TrasactionContextProvider>
      <Header OnOpenNewTrasactionModal={hendleOpenModal} />
      <Dashbord />
      <NewTrasactionModal
        isOpen={isNewTrasactionOpenModal}
        onRequestClose={hendleCloseModal}
      />
      <GlobalStyle />
    </TrasactionContextProvider>
  );
}

