import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4og2p0802of01z4bcnygdhg/master',
    cache: new InMemoryCache()
})