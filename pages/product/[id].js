import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      Este es el id del producto: {router.query.id}
    </div>
  )
}

export default ProductItem;