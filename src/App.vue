<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" >
*{
  list-style: none;
}
html,body,#app{
  width: 100%;
  height: 100%;
  background: #f0f2f5
}
</style>
