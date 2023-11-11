<template>
  <div>
    <h2>Tasks <span class="pi pi-tablet"></span></h2>
    <div class="tasks">
      <span v-show="loading"><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i></span>
        <TaskComponent
          v-for="(task, idx) in tasks" v-bind:key="idx"
          v-bind:task="task"
          v-on:delete-task="deleteTask"
          v-on:toggle-reminder="toggleReminder"
        />
    </div>
  </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';

export default {
  name: 'TasksComponent',
  components: {
    TaskComponent
  },
  data() {
    return {
      tasks: [],
      loading: true
    }
  },
  computed: {
    // getMyTasks() {
    //   return this.$store.state.userModule.tasks;
    // }
  },
  watch: { // maybe do this when leaving the component, to save resources
    tasks() {
      this.$store.commit('SET_TASKS', this.tasks);
    },
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map(t => t.id === id ? {...t, reminder: !t.reminder} : t);
    }
  },
  mounted() {
    setTimeout(() => {
      this.tasks = this.$store.state.userModule.tasks;
      this.loading = false;
    }, 500);
  } 
}
</script>

<style scoped>
  
</style>