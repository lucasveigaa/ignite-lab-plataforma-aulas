import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3i0kv0dv801z71ukv178d/master',
    cache: new InMemoryCache()
})