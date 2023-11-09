<template>
<div>
  <router-link to="/">home</router-link>
  <router-link :to="obtemUsuarioLoggado.id ? '/profile/' + obtemUsuarioLoggado.id : '#'">profile</router-link>
  <router-link to="/tasks">tasks</router-link>
  <a v-show="obtemUsuarioLoggado.id" @click="limparUsuario()">sair</a>
  <!-- <a v-show="!obtemUsuarioLoggado.id" href="/login">login</a> -->
</div>

</template>

<script>

export default {
  name: 'NavbarComponent',
  data() {
    return {
      // usuarioLoggado: this.$store.state.user,

    }
  },
  computed: {
    obtemUsuarioLoggado() {
      return this.$store.state.user;
    }
  }, 
  methods: {
    limparUsuario() {
      this.$store.commit('setUser', {});
      this.$router.push('/login');
    }
  } 
}
</script>