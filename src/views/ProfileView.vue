<template>
<div>
  <h2>Profile <span class="pi pi-user"></span></h2>
  <div v-if="!obtemUsuarioLoggado.id">not logged...</div>
  <div v-else-if="obtemIdProfileRota() !== obtemUsuarioLoggado.id">invalid profile...</div>
  <div v-else> {{obtemUsuarioLoggado.id}} | {{obtemUsuarioLoggado.name}} | {{obtemUsuarioLoggado.email}} | tasks: {{$store.getters.tasksLength}}</div>
</div>
</template>

<script>

export default {
  name: 'ProfileView',
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
      this.$store.commit('setUser', {})
    },
    obtemIdProfileRota() {
      return this.$route.params.id;
    }
  },
  mounted() {
    console.log('requiresAuth', this.$route.meta.requiresAuth)
  },
}
</script>