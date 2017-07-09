<template>
  <main id="wrapper" class="animated slideInRight fast">
    <div class="center-content">
      <h2>{{ fms.login.header }}</h2>
      <p class="subtitle">{{ fms.login.subtitle }}</p>
      <form>
        <input placeholder="Username" type="text" required="">
        <input placeholder="Password" type="password" required="">
      </form> 
      <div class="btn-wrapper first">
        <button 
          type="button" 
          class="btn-rounded primary "
          @click=""
        >{{ fms.login.authenticateBtnText }}</button>
      </div>
      <div class="btn-wrapper">
        <button 
          type="button" 
          class="btn-rounded primary"
          @click="nextRoute"
        >{{ fms.login.goToAppBtnText }}</button>
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
          login: {
            header: 'Authenticate yourself ',
            subtitle: 'key yourself in, to carry forward your experience',
            authenticateBtnText: 'Authenticate',
            goToAppBtnText: 'Experience it now'
          }
        },
        navigator: {
          nextPage: '/landing-page'
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
