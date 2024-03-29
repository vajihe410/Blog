import React from 'react'
import { useQuery } from '@apollo/client'
//queries
import { GET_AUTHORS_INFO } from '../graphQL/queries'

function Authors() {
  const {loading,data,error} = useQuery(GET_AUTHORS_INFO)
  return (
    <div>Authors</div>
  )
}

export default Authors