import { ApolloClient, InMemoryCache } from "@apollo/client";

const ApolloClientPy = new ApolloClient({
  uri: "http://0.0.0.0:8000/graphql",
  cache: new InMemoryCache(),
});

export default ApolloClientPy;
