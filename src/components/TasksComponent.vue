<template>
  <div>
    <div class="tasks">
      <span v-show="loading">loading...</span>
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
  watch: {
    tasks() {
      this.$store.commit('setTasks', this.tasks);
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