<template>
  <div>
    <h2>Login</h2>
    <!-- <button @click="doLogin()">simular login</button> -->
    <ButtonComponent severity="secondary" @click="doLogin()" :loading="gettingLogin" label="simular login" />
    <ButtonComponent severity="info" @click="cadastrar()" label="cadastrar" />
  </div>
</template>
  
<script>
  import Button from 'primevue/button';
  import httpInstance from '../services/http.js';

  export default {
    name: 'LoginView',
    components: {
      ButtonComponent: Button,
    },
    data() {
      return {
        gettingLogin: false,
      }
    },
    computed: {
      obtemUsuarioLoggado() {
        return this.$store.state.userModule.user;
      }
    },
    methods: {
      doLogin() {
        this.gettingLogin = true;

        httpInstance.get('getUser')
          .then(async response => {
            this.$store.commit('setUser', response.data[0]);
            
            var tasksResponse = await httpInstance.get('getTasks');
            // console.log(tasksResponse.data)
            this.$store.commit('setTasks', tasksResponse.data);

            this.$router.push('/');
          })
          .catch(err => {
            console.error('error:', err)
          })
          .finally(() => {
            this.gettingLogin = false;
          })
      },
      cadastrar() {
        console.log('cadastar..')
      }
    }
  }
</script>