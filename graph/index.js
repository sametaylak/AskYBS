import Vue from 'vue'
import GraphQLProvider from './GraphQLProvider'

const DEFAULT_API_URL = 'https://api.graph.cool/simple/v1'

const API_URL = DEFAULT_API_URL

const graphConnection = new GraphQLProvider(`${API_URL}/cj4m0hek2vzb10148i3zvenlb`, {
  asJSON: true
})

Vue.use(graphConnection)

export default graphConnection

export const { graph, gql, setOptions } = graphConnection
