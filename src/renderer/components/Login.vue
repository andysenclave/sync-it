<template>
  <main id="wrapper">
    <div class="center-content">
      <h1>Yello,</h1>
      <p class="subtitle">Welcome to this genius of an app</p>
      <div>
        <input 
          type="button" 
          class="bttn-black bttn-royal bttn-unite bttn-md"
          value="Get Started"
        />
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>
