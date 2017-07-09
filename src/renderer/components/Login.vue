<template>
  <main id="wrapper">
    <div class="center-content">
      <h1>Yello,</h1>
      <p class="subtitle">Welcome to this genius of an app</p>
      <div>
        <button 
          type="button" 
          class="btn-rounded primary animate"
        >{{ fms.start.btnText }}</button>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'login',
    data: function () {
      return {
        fms: {
          start: {
            btnText: 'Get Started'
          }
        }
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
