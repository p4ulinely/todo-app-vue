<template>
  <div>
   <p>To-Do APP</p> 
   <hr>
   <div class="tasks">
    <span v-show="loading">loading...</span>
    <div v-for="(task, idx) in tasks" v-bind:key="idx">
      <TaskComponent 
        v-bind:task="task"
        v-on:delete-task="deleteTask"
        v-on:toggle-reminder="toggleReminder" />
    </div>
   </div>
  </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';

export default {
  name: 'MainComponent',
  components: {
    TaskComponent,
  },
  data() {
    return {
      tasks: [],
      loading: true
    }
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
      this.tasks = [
        {
          id: 1,
          title: 'title1',
          date: new Date(Date.now()),
          msg: 'msg 111111111....',
          reminder: true
        },
        {
          id: 2,
          title: 'title2',
          date: new Date(Date.now()),
          msg: 'msg 111111111....',
          reminder: false
        },
        {
          id: 3,
          title: 'title3',
          date: new Date(Date.now()),
          msg: 'msg 111111111....',
          reminder: true
        },
      ];
      this.loading = false;
    }, 1000);
  } 
}
</script>

<style scoped>
  
</style>