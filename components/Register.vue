<template lang="html">
  <div class="modal" :class="{'is-active': show}">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <notify @close="showNotify = false" v-if="showNotify" message="Bir hata meydana geldi."/>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Üye Ol
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <form @submit.prevent="register">
              <div class="field">
                <p class="control has-icons-left">
                  <input v-model="name" class="input" type="text" placeholder="Ad Soyad" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input v-model="email" class="input" type="email" placeholder="Email" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input v-model="password" class="input" type="password" placeholder="Parola" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button is-success">
                    <i v-if="loading" class="loader"></i>
                    Üye Ol
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
import { createUser } from '../graph/user'
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
      name: '',
      email: '',
      password: '',
      loading: false,
      showNotify: false
    }
  },
  methods: {
    register () {
      this.loading = true
      createUser(this.name, this.email, this.password, (user) => {
        this.loading = false
        if (user.success) {
          this.$emit('close')
        } else {
          this.showNotify = true
        }
      })
    }
  }
}

</script>
