import { useRouter } from 'next/router';
import React from 'react'

const Product = () => {

  const router = useRouter()
  console.log(router)

  return (
    <div>
      Estás en product
      <button
        style={{ display: "block" }}
        onClick={() => router.reload()}
      >
        Recarga la página
      </button>
    </div>
  )
}

export default Product;