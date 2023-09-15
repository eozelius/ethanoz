<template>
  <div class="home-view">
    <main>
      <LegoViewTitle
        :title='"Ethan Ozelius"'
        :description="'Software Engineer delivering professional code for 9 years.  I\'m passionate about leaving codebases better than I found them, while helping teammates grow.'"
        :subtext="'I am actively searching for new employment opportunities after I was affected by company wide layoffs.  I am eager to contribute to a highly collaborative team that fosters an environment of innovation and camaraderie.  I value focused companies that learn from both success and especially failure, make data informed decisions.'"
        :image-url="profilePictureUrl"
        image-alt-text="ethan ozelius profile picture"
      />
      <div class="what-have-i-been-up-to-lately">
        <MediumArticle
          :article="whatHaveIBeenUpToLately"
          :shouldTruncateOverride="false"
        />
      </div>
    </main>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import MediumArticle from '@/components/MediumArticle.vue'
import '@/assets/styles/ethanoz.scss'

const whatHaveIBeenUpToLately = {
  title: 'What have I been up to lately?  Aside from coding :)',
  // mainImagePath: '',
  // mediumLink: '',
  // publishDate: 'July 18th 2023',
  paragraphs: [
    {
      type: 'text',
      text: 'I spend a lot of time outdoors, hiking with my beautiful wife and 2 energetic dogs.'
    },
    {
      type: 'image',
      url: 'what-have-i-been-up-to-lately/colorado_family.jpg',
      altText: 'photo of myself on a hike with my wife and dogs.'
    },
    {
      type: 'text',
      text: 'I love activies that combine physical exercise with mental discipline, in particular rock climbing and meticulously improving my golf game.'
    },
    {
      type: 'image',
      url: 'what-have-i-been-up-to-lately/smooth-7.gif',
      altText: 'gif of my golf swing on the range.'
    },
    {
      type: 'text',
      text: 'Since becoming a homeowner, I\'m learning to appreciate the endless upkeep and improving an old home, I especially love carpentry and furiture projects.  This is a walnut capsule that I made on my lathe, super happy with how it came out.'
    },
    {
      type: 'image',
      url: 'what-have-i-been-up-to-lately/walnut_box_2.jpg',
      altText: 'second image of a walnut box I turned on my lathe'
    }
  ]
}

export default {
  name: 'HomeView',
  components: {
    LegoViewTitle,
    MediumArticle
  },

  computed: {
    whatHaveIBeenUpToLately: function () {
      return whatHaveIBeenUpToLately
    },
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

.what-have-i-been-up-to-lately {
  display: flex;
  justify-content: center;
}
</style>
