<template>
  <div>
   <p>To-Do APP</p> 
   <hr>
   <div class="tasks">
    <span v-show="loading">loading...</span>
    <div v-for="(task, idx) in tasks" v-bind:key="idx" class="task">
      <TaskComponent v-bind:task="task" />
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
  mounted() {
    setTimeout(() => {
      this.tasks = [
        {
          title: 'title1',
          date: new Date(Date.now()),
          msg: 'msg 111111111....',
        },
        {
          title: 'title2',
          date: new Date(Date.now()),
          msg: 'msg 111111111....',
        },
        {
          title: 'title3',
          date: new Date(Date.now()),
          msg: 'msg 111111111....',
        },
      ];
      this.loading = false;
    }, 1000);
  } 
}
</script>
<style scoped>
  
</style>