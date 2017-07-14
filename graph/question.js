import {graph} from './'

function shareQuestion (quest, userId, callback) {
  var create = graph(`mutation {
    createQuestion(
      quest: "${quest}",
      userId: "${userId}"
    ) {
      id,
      quest,
      user {
        id,
        name
      }
    }
  }`)

  create().then((quest) => {
    callback({success: true, data: quest})
  }).catch((user) => {
    callback({success: false})
  })
}

function sendComment (text, questionId, userId, callback) {
  var create = graph(`mutation {
  createComment(
    text: "${text}"
    questionId: "${questionId}"
    userId: "${userId}"
  ) {
    id
    text
    user {
      id
      name
    }
  }
}`)

  create().then((comment) => {
    callback({success: true, data: comment})
  }).catch((comment) => {
    callback({success: false})
  })
}

export { shareQuestion, sendComment }
