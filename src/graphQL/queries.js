import { gql } from "@apollo/client"

const GET_BLOGES_INFO = gql `
    query{
        posts{
            author{
                name
                avatar{
                    url
                }
            }
            title
            slug
            id
            coverPhoto{
                url
            }
        }
    }
`
export {GET_BLOGES_INFO}