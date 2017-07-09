<template>
  <main id="wrapper" class="animated slideInRight fast">
    <div class="center-content">
      <h1>{{ fms.start.header }}</h1>
      <p class="subtitle">{{ fms.start.subtitle }}</p>
      <div class="btn-wrapper first">
        <button 
          type="button" 
          class="btn-rounded primary"
          @click="nextRoute"
        >{{ fms.start.btnText }}</button>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'start',
    data: function () {
      return {
        fms: {
          start: {
            header: 'Yello,',
            subtitle: 'Welcome to this genius of an app',
            btnText: 'Get Started'
          }
        },
        navigator: {
          nextPage: '/login'
        }
      }
    },
    methods: {
      nextRoute () {
        console.log('wtf', this.navigator)
        this.$router.push(this.navigator.nextPage)
      }
    }
  }
</script>
