<template>
  <div>
    <h2>Login</h2>
    <button @click="doLogin()">simular login</button>
  </div>
</template>
  
  <script>
  export default {
    name: 'LoginView',
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
      doLogin() {
        console.log(this.$route.meta.requiresAuth);
        // this.$route.meta.requiresAuth = true;
        // console.log(this.$route.meta.requiresAuth)
        // this.$router.push({name: '/profile/', params: {id: this.obtemUsuarioLoggado.id }})
        this.$router.push({name: 'tasks', meta: { requiresAuth: true }});
      }
    }
  }
  </script>