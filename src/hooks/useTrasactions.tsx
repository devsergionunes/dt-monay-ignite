import React, { createContext, useContext, ReactNode } from 'react';
import { api } from '../services/api'

const TrasactionContext = createContext<TrasactionContextValue>(
  {} as TrasactionContextValue
);

interface TrasactionContextProps {
  children : ReactNode
}
interface TrasactionType {
  id: string,
  title: string,
  type: string,
  value: number,
  category: string,
  cratedAt:string
  
}

interface TrasactionContextValue {
  trasactions: TrasactionType[],
  createNewTrasaction: (Trasaction : TrasactionInput) => Promise<void>;
}
type TrasactionInput = Pick<TrasactionType, 'title' | 'type' | 'value' | 'category'>;

export function TrasactionContextProvider(props: TrasactionContextProps) {
  const [trasactions, setTrasactions] = React.useState<TrasactionType[]>([])
  
  React.useEffect(() => {
    api.get('transaction')
      .then(response => setTrasactions(response.data.trasactions))
      .catch( error => console.log(error))
  }, [])
  
  async function createNewTrasaction(trasaction: TrasactionInput) {
    try {
      const { data } = await api.post('/transaction', trasaction);
      setTrasactions([
        ...trasactions,
        {
          ...data.trasaction,
          cratedAt : new Date()
        }
      ])
    } catch (erro){
      console.log(Error(erro))
    }
  }

  return (
    <TrasactionContext.Provider value={{ trasactions, createNewTrasaction }}>
      {props.children}
    </TrasactionContext.Provider>
  )
}

export function useTrasactions() {
  const context = useContext(TrasactionContext);
  return context;
}