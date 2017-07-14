import Vuex from 'vuex'
import { graph } from '../graph'

const allUsers = graph.query(`{
  allUsers {
    name
    id
  }
}`)

const allQuestions = graph.query(`{
  allQuestions {
    id
    quest
    user {
      id
      name
    }
    whoLiked {
      id
      name
    }
    comments {
      id
      text
      user {
        id
        name
      }
    }
  }
}`)

const store = () => new Vuex.Store({
  state: {
    users: [],
    questions: [],
    user: {},
    loggedIn: false
  },
  getters: {
    users: state => state.users,
    user: state => state.user,
    loggedIn: state => state.loggedIn,
    questions: state => state.questions,
    recentQuestions: state => state.questions.map((e, i, a) => a[(a.length - 1) - i]),
    getQuestById: state => id => state.questions.filter(
      questions => questions.id === id
    )[0]
  },
  actions: {
    async allUsers ({ commit }) {
      const users = await allUsers()
      commit('SET_USERS', users.allUsers)
    },
    async allQuestions ({ commit }) {
      const questions = await allQuestions()
      commit('SET_QUESTIONS', questions.allQuestions)
    },
    async setUser ({ commit }, user) {
      commit('SET_USER', user)
    },
    async unsetUser ({ commit }) {
      commit('UNSET_USER', {})
    }
  },
  mutations: {
    SET_USERS (state, result) {
      state.users = result
    },
    SET_QUESTIONS (state, result) {
      state.questions = result
    },
    SET_USER (state, result) {
      state.user = result
      state.loggedIn = true
    },
    UNSET_USER (state, result) {
      state.user = result
      state.loggedIn = false
    }
  }
})

export default store
