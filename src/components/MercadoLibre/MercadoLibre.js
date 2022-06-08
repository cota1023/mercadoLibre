import React, { useEffect, useState } from 'react'

const MercadoLibre = () => {

  const [products, setProducts] = useState([])
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
     e.preventDefault()
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then(response => {
        return response.json()
      })
      .then(res => {
        setProducts(res.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>Mercado Libre</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit' >Buscar</button>
      </form>
      <ul>
        {products.map(prod => {
          return (
            <li key={prod.id}>
              <p>{prod.title}</p>
              <img src={prod.thumbnail} alt={prod.title}></img>
              <p>{`$ ${prod.price}`}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default MercadoLibre