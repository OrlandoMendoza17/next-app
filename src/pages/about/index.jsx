import { useRouter } from 'next/router'
import React from 'react'

const About = () => {
  const router = useRouter()

  return (
    <div>
      Estás en about
      <button
        style={{ display: "block" }}
        onClick={() => router.push({
          pathname: "/product",
          query: {id: "14,520,000,000"}
        })}
      >
        Ir a products
      </button>
    </div>
  )
}

export default About;