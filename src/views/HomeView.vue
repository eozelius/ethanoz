<template>
  <div class="home-view">
    <main>
      <LegoViewTitle
        :title='"Ethan Ozelius"'
        :description='"Just a drifting computer hacker trying to get some sunshine."'
        :subtext="'- Software Engineer learning by building and embracing the unknown.  When I\'m not coding, I\'m probably hiking the Hudson Valley, skating in a hockey game or doing some carpentry.'"
        :image-url="profilePictureUrl"
        image-alt-text="ethan ozelius profile picture"
      />
    </main>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import '@/assets/styles/ethanoz.scss'

export default {
  name: 'HomeView',
  components: {
    LegoViewTitle
  },

  computed: {
    profilePictureUrl: function () {
      const options = [
        'colombia',
        'flushing',
        'hudson',
        'istanbul',
        'mexico'
      ]
      const randomProfilePic = options[Math.floor(Math.random() * options.length)]
      return `profile_pictures/${randomProfilePic}.jpg`
    }
  }
}
</script>
