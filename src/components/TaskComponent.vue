<template>
  <div>
    <h2>{{task.title}}</h2>
    <h5>{{task.date}}</h5>
    <h5>{{task.msg}}</h5>
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
  }
}
</script>
<style scoped>
  
</style>