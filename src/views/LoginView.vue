<template>
  <div>
    <h2>Login</h2>
    <!-- <button @click="doLogin()">simular login</button> -->
    <ButtonComponent severity="secondary" @click="doLogin()" label="simular login" />
    <ButtonComponent severity="info" @click="cadastrar()" label="cadastrar" />
  </div>
</template>
  
<script>
  import Button from 'primevue/button';

  export default {
    name: 'LoginView',
    components: {
      ButtonComponent: Button,
    },
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
        this.$route.meta.requiresAuth = true;
        console.log(this.$route.meta.requiresAuth)
        // this.$router.push({name: '/profile/', params: {id: this.obtemUsuarioLoggado.id }})
        this.$router.push({name: 'tasks', meta: { requiresAuth: true }});
      },
      cadastrar() {
        console.log('cadastar..')
      }
    }
  }
</script>