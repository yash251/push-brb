import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/39471/brb-subgraph/v0.0.1",
  cache: new InMemoryCache(),
});

export default client;