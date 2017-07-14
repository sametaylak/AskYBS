import graphql from 'graphql.js'

/* eslint-disable no-underscore-dangle */
class GraphQLProvider {
  constructor (url, options) {
    this.url = url
    this.setOptions(options)
  }

  setOptions (options) {
    this.options = options
    this.createGraphQLInstance()
  }

  createGraphQLInstance () {
    this.graph = graphql(this.url, this.options)
  }

  install (Vue) {
    const self = this
    Vue.mixin({
      created () {
        this._graph = self.graph
      }
    })
    Object.defineProperty(Vue.prototype, '$graph', {
      get () {
        return this._graph
      }
    })
  }
}

export default GraphQLProvider
