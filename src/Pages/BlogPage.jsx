import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
//components
import Loader from '../components/Loader'
//querise
import { GET_POST_INFO } from '../graphQL/queries'

function BlogPage() {
  const {slug} = useParams()
  const {loading,data,errors} = useQuery(GET_POST_INFO,{
    variables:{slug}
  })

  if(loading) return <Loader/>
  if(errors) return <h1>Errors</h1>
  console.log(data)
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage