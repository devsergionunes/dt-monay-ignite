import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models: {
    trasaction: Model
  },
  seeds(server) {
    server.db.loadData({
      trasactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'entrada',
          value:'5000',
          category: 'trabalho',
          cratedAt: new Date('05/19/2021')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'saida',
          value:'1100',
          category: 'casa',
          cratedAt: new Date('05/05/2021')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transaction', () => {
      return this.schema.all('trasaction')
    })
    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('trasaction', data)
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
