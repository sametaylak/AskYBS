<template>
  <section class="container" style="padding:2em">
    <h1 class="title">Popüler Sorular</h1>

    <div class="box" v-for="question in allQuestions">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ question.user.name }}</strong>
              <br>
              {{ question.quest }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-heart"></i></span>
              </a>
            </div>
            <div class="level-right">
              <a class="level-item">
                <nuxt-link :to="{ name: 'quest-id', params: { id: question.id }}">Detay</nuxt-link>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created () {
    this.allQuestions = this.questions
    this.currentUser = this.user
  },
  data () {
    return {
      allQuestions: null,
      currentUser: null
    }
  },
  computed: {
    ...mapGetters([
      'questions',
      'user'
    ]),
    link (val) {
      return '/quest/' + val
    }
  },
  watch: {
    user () {
      this.currentUser = this.user
    }
  }
}

</script>
