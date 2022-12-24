<template>
  <nav-bar></nav-bar>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { useHead } from 'unhead'
export default {
  components: {
    NavBar
  },
  setup() {
    useHead({
      title: 'My awesome site'
    })
  },
}
</script>

<style>

.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

#nprogress .bar {
  background: var(--nprogress-bar) !important;
  height: 3px !important;
}

#nprogress .peg {
  box-shadow: var(--nprogress-peg) !important;
}

#nprogress .spinner-icon{
  border-top-color: var(--main-color) !important;
  border-left-color: var(--main-color) !important;
}
</style>
