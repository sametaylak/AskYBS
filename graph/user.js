import {graph} from './'

function createUser (name, email, password, callback) {
  var create = graph(`mutation {
    createUser(
      name: "${name}"
      authProvider: {
        email: {
          email: "${email}"
          password: "${password}"
        }
      }
    ) {
      id,
      name,
      email
    }
  }`)

  create().then((user) => {
    callback({success: true, data: user})
  }).catch((user) => {
    callback({success: false})
  })
}

function signIn (email, password, callback) {
  var sign = graph(`mutation {
    signinUser(email: {
      email: "${email}"
      password: "${password}"
    }) {
      token,
      user {
        id,
        name,
        email
      }
    }
  }`)

  sign().then((user) => {
    callback({success: true, data: user.signinUser})
  }).catch((user) => {
    callback({success: false})
  })
}

export { createUser, signIn }
