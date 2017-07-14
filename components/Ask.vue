<template>
  <div class="modal" :class="{'is-active': show}">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <notify @close="showNotify = false" v-if="showNotify" message="Bir hata meydana geldi."/>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Sor
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <form @submit.prevent="ask">
              <div class="field">
                <label class="label">Soru</label>
                <p class="control">
                  <textarea v-model="question" class="textarea" required></textarea>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button is-success">
                    <i v-if="loading" class="loader"></i>
                    Paylaş!
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="$emit('close')"></button>
  </div>
</template>

<script>
import { shareQuestion } from '../graph/question'
import Notification from '~components/Notification'

export default {
  components: {'notify': Notification},
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  },
  data () {
    return {
      question: '',
      loading: false,
      showNotify: false
    }
  },
  methods: {
    ask () {
      this.showNotify = false
      this.loading = true
      shareQuestion(this.question, this.$store.state.user.user.id, (quest) => {
        this.loading = false
        if (quest.success) {
          this.$emit('close')
        } else {
          this.showNotify = true
        }
      })
    }
  }
}
</script>
