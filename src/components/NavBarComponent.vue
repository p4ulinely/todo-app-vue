<template>
<div>
  <Menubar :model="menuItems" />
    <!-- <router-link to="/">home</router-link>
    <router-link :to="obtemUsuarioLoggado.id ? '/profile/' + obtemUsuarioLoggado.id : ''">profile</router-link>
    <router-link to="/tasks">tasks</router-link> | 
    <a class="link" v-if="obtemUsuarioLoggado.id" @click="limparUsuario()">sair</a>
    <a class="link" v-else @click="goToLogin()">login</a> -->
  <!-- </Menubar> -->
  <a class="link" v-if="obtemUsuarioLoggado.id" @click="leaveSession()">sair</a>
  <a class="link" v-else @click="goToLogin()">login</a>
</div>

</template>

<script>
import Menubar from 'primevue/menubar';

export default {
  name: 'NavbarComponent',
  components: {
    Menubar
  },
  data() {
    return {
      menuItems: [
        {label: 'Home', url: '/'},
        {label: 'Profile', command: () => this.goToLink('/profile/' + this.$store.getters.userId)},
        // { separator:true },
        {label: 'Tasks', command: () => this.goToLink('/tasks')},
        {label: 'About', command: () => this.goToLink('/about')},
      ],
    }
  },
  computed: {
    obtemUsuarioLoggado() {
      return this.$store.state.userModule.user;
    }
  }, 
  methods: {
    leaveSession() {
      localStorage.clear();

      this.$store.commit('SET_USER', {});
      this.$store.commit('SET_TASKS', {});

      this.$router.push('/');
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToLink(link) {
      this.$router.push(link);
    },
  } 
}
</script>

<style>
  .link {
    cursor: pointer;
  }
</style>