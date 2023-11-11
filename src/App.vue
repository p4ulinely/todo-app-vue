<template>
<div>
  <p>To-Do APP <span class="pi pi-bookmark-fill"></span></p>
  <NavbarComponent />
  <Divider />
  <router-view />
  <Divider />
  <p>Version: {{$store.state.appInfo.version}}<span v-show="$store.getters.logged"></span></p>
</div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import Divider from 'primevue/divider';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    Divider
  },
  beforeCreate() {
		this.$store.commit('INITIALISE_STORE');
	}
}
</script>

<style>
#app {

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
