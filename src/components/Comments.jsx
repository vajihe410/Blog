import React from 'react'
import { useQuery } from '@apollo/client'
//queries
import { GET_POST_COMMENTS } from '../graphQL/queries'

function Comments({slug}) {
    const {loading,data,errors} = useQuery(GET_POST_COMMENTS,{variables:{slug}})
    console.log(data)
  return (
    <div>Comments</div>
  )
}

export default Comments