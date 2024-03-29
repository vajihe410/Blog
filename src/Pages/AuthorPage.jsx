import React from 'react'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
//queries
import { GET_AUTHOR_INFO } from '../graphQL/queries';

function AuthorPage() {
    const {slug} = useParams();
    const {loading,data,errors} = useQuery(GET_AUTHOR_INFO,{variables:{slug:slug}})
  return (
    <div>AuthorPage</div>
  )
}

export default AuthorPage