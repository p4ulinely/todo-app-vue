<template>
  <div 
    @dblclick="$emit('toggle-reminder', task.id)" 
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h2>{{task.title}}</h2>
    <h5>{{task.date}}</h5>
    <h5>{{task.msg}}</h5>
    <h5><a @click="$emit('delete-task', task.id)">X</a></h5>
  </div>
</template>
<script>
export default {
  name: 'TaskComponent',
  data() {
    return {
      
    }
  },
  props: {
    task: Object
  },
  methods: {

  },
  emits: ['toggle-reminder', 'delete-task']
}
</script>

<style scoped>
  .task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: antiquewhite;
    border-color: cadetblue;
    border-style: solid;
    border-width: thin;
    padding: 5px 20px;
    margin-top: 5px;
    cursor: pointer;
  }

  .task.reminder {
    border-left: 10px solid cadetblue;
  }
</style>