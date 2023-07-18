<template>
  <div class="home-view">
    <main>
      <LegoViewTitle
        :title='"Ethan Ozelius"'
        :description="'Software Engineer delivering professional code for 10 years. I\'m passionate about leaving codebases better than I found them, while helping teammates grow.'"
        :subtext="'I am actively searching for new employment opportunities after I was affected by company wide layoffs.  I am eager to contribute to a highly collaborative team that fosters an environment of innovation and camaraderie.  I value focused companies that learn from both success and especially failure, make data informed decisions'"
        :image-url="profilePictureUrl"
        image-alt-text="ethan ozelius profile picture"
      />

    </main>
    <LegoBox
      :title="`What have I been up to lately?  Aside from coding :)`"
      :description="
        [
          `I spend a lot of time outdoors, hiking with my beautiful wife and 2 energetic dogs.  I love activies that combine physical exercise with mental discipline, in particular rock climbing and meticulously improving my golf game.`,
          `Since becoming a homeowner, I'm learning to appreciate the endless upkeep and improving an old home, I especially love carpentry and furiture projects.`
        ]"
    >
      <!-- picture slot -->
      <template v-slot:picture>
        <div class="portfolio-picture">
          <Picture
            url="profile_pictures/colorado_family.jpg"
            :altText="'One big happy Colorado family!'"
          />
        </div>
      </template>

    </LegoBox>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import LegoBox from '@/legos/LegoBox.vue'
import Picture from '@/components/Picture.vue'
import '@/assets/styles/ethanoz.scss'

export default {
  name: 'HomeView',
  components: {
    LegoViewTitle,
    LegoBox,
    Picture
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

<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
