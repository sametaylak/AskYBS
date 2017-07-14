<template>
  <div>
    <section class="hero is-info is-large">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <h1>#AskYBS</h1>
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div v-if="!loggedIn" class="nav-right nav-menu">
              <a class="nav-item" @click="register = true">
                Üye Ol
              </a>
              <span class="nav-item" @click="login = true">
                <a class="button is-info is-inverted">
                  <span class="icon">
                    <i class="fa fa-sign-in"></i>
                  </span>
                  <span>Giriş Yap</span>
                </a>
              </span>
            </div>
            <div v-if="loggedIn" class="nav-right nav-menu">
              <span class="nav-item">
                <a class="button is-info is-inverted">
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>Hesabım</span>
                </a>
              </span>
              <span class="nav-item">
                <a @click="ask = true" class="button is-primary">
                  <span class="icon">
                    <i class="fa fa-question"></i>
                  </span>
                  <span>Sor</span>
                </a>
              </span>
              <span class="nav-item">
                <a @click="signOut" class="button is-primary is-outlined">Çıkış Yap</a>
              </span>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body" style="padding-bottom:6em;padding-top:6em">
        <div class="container has-text-centered">
          <h1 class="title">
            #AskYBS
          </h1>
          <h2 class="subtitle">
            Yönetim Bilişim Sistemlerine dair tüm sorularınız ve cevaplarınız
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li><nuxt-link to="/popular">Popüler</nuxt-link></li>
              <li><nuxt-link to="/recent">Son Eklenenler</nuxt-link></li>
              <li><nuxt-link to="/members">Üyeler</nuxt-link></li>
              <li><nuxt-link to="/images">Görseller</nuxt-link></li>
              <li><nuxt-link to="/about">Bölüm Hakkında</nuxt-link></li>
              <li><nuxt-link to="/contact">İletişim</nuxt-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nuxt/>
    <login v-if="login" :show="login" @close="login = false" />
    <register v-if="register" :show="register" @close="register = false" />
    <ask  v-if="ask" :show="ask" @close="ask = false"/>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import LogIn from '~components/LogIn'
  import Register from '~components/Register'
  import Ask from '~components/Ask'

  export default {
    components: {
      'login': LogIn,
      'register': Register,
      'ask': Ask
    },
    created () {
      this.allQuestions()
      this.allUsers()
    },
    data () {
      return {
        login: false,
        register: false,
        ask: false
      }
    },
    computed: mapGetters([
      'user',
      'loggedIn'
    ]),
    methods: {
      ...mapActions([
        'allUsers',
        'allQuestions',
        'unsetUser'
      ]),
      signOut () {
        this.unsetUser()
      }
    }
  }

</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
</style>
