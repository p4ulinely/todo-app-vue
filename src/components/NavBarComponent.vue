<template>
<div>
  <router-link to="/">home</router-link>
  <router-link :to="obtemUsuarioLoggado.id ? '/profile/' + obtemUsuarioLoggado.id : ''">profile</router-link>
  <router-link to="/tasks">tasks</router-link> | 
  <a class="link" v-if="obtemUsuarioLoggado.id" @click="limparUsuario()">sair</a>
  <a class="link" v-else @click="gotoLogin()">login</a>
</div>

</template>

<script>

export default {
  name: 'NavbarComponent',
  data() {
    return {

    }
  },
  computed: {
    obtemUsuarioLoggado() {
      return this.$store.state.userModule.user;
    }
  }, 
  methods: {
    limparUsuario() {
      this.$store.commit('setUser', {});
      this.$router.push('/');
    },
    gotoLogin() {
      this.$router.push('/login');
    }
  } 
}
</script>

<style>
  .link {
    cursor: pointer;
  }
</style>