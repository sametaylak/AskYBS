<template>
  <div class="container" style="padding: 2em" v-if="quest">
    <h1 class="title">Soru Başlığı</h1>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ quest.user.name }}</strong>
            <br>
            {{ quest.quest }}
          </p>
        </div>
      </div>
    </article>
    <br>
    <h3 class="subtitle">Yorumlar</h3>
    <article class="media" v-for="comment in quest.comments">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ comment.user.name }}</strong>
            <br>
            {{ comment.text }}
          </p>
        </div>
      </div>
    </article>
    <article class="media" v-if="loggedIn">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <form @submit.prevent="submit">
          <div class="field">
            <p class="control">
              <textarea v-model="comment" class="textarea" placeholder="Yorum..." required></textarea>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button">Yorum Yap</button>
            </p>
          </div>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { sendComment } from '../../graph/question'

export default {
  data () {
    return {
      quest: null,
      comment: ''
    }
  },
  created () {
    this.allQuestions()
  },
  watch: {
    questions () {
      this.quest = this.getQuestById(this.$route.params.id)
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'loggedIn',
      'questions',
      'getQuestById'
    ])
  },
  methods: {
    ...mapActions([
      'allQuestions'
    ]),
    submit () {
      sendComment(this.comment, this.quest.id, this.user.user.id, (user) => {
        if (user.success) {
          this.comment = ''
          this.allQuestions()
        } else {
          this.comment = ''
        }
      })
    }
  }
}
</script>
