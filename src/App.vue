<template>
  <div
    id="app"
    :style="{ backgroundImage: 'url(' + require('@/assets/images/backgrounds/' + backgroundImageUrl) + ')' }"
  >
    <EthanOzHeader />
    <router-view />
    <EthanOzFooter />
  </div>
</template>

<script>
import EthanOzHeader from '@/components/Header'
import EthanOzFooter from '@/components/Footer'
import isMobile from '@/utils/isMobile'
import '@/assets/styles/reset.scss'
import '@/assets/styles/ethanoz.scss'

export default {
  name: 'App',
  components: {
    EthanOzHeader,
    EthanOzFooter
  },

  computed: {
    backgroundImageUrl: function () {
      const size = isMobile() ? 'small' : 'large'
      const options = [
        'colorado',
        'budapest',
        'colombia',
        'nyc',
        'peru',
        'sabaneta',
        'salento'
      ]
      const randomBackground = options[Math.floor(Math.random() * options.length)]
      return `${size}/${randomBackground}.jpg`
    }
  }
}
</script>

<style lang="scss">
#app {
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
