<template>
  <div class="home-view">
    <main>
      <div id="article-container">
        <div :class="{ 'article-inner': true, 'truncated': truncated }">
          <div class="overlay" @click="readMore">
            <h3>read more</h3>
          </div>

          <div class="content">
            <p>The Lorm alphabet is a method of tactile signing named after Hieronymus Lorm, who developed it in the late 19th century. Letters are spelled by tapping or </p>

            <p>s a portable communication device allowing deaf-blind users to send and receive messages over a distance. It can interpret Lorm* Alphabet</p>

            <p>The Lorm alphabet is a method of tactile signing named after Hieronymus Lorm, who developed it in the late 19th century. Letters are spelled by tapping or stroking different parts of the listener's hand. The Lorm alphabet is mostly used in German-speaking countries, the Netherlands, Czech Republic, Poland and Georgia.</p>

            <p>HIERONYMUS (pseudonym of Heinrich Landesmann; 1821-1902), Austrian poet and novelist. The son of a prosperous Moravian merchant, Lorm was born in</p>

            <p>Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage</p>

            <p>8 Keys Doubleshot LOL Keycaps QWER ASDF Arrow 123456 Keycaps OEM Profile for Cherry MX Mechanical Keyboard Gaming DIY Replacement+Keycap Remover Free (Blue).</p>
          </div>
        </div>
      </div>

      <LegoViewTitle
        :title='"Ethan Ozelius"'
        :description="'Software Engineer delivering professional code for 10 years.  I\'m passionate about leaving codebases better than I found them, while helping teammates grow.'"
        :subtext="'I am actively searching for new employment opportunities after I was affected by company wide layoffs.  I am eager to contribute to a highly collaborative team that fosters an environment of innovation and camaraderie.  I value focused companies that learn from both success and especially failure, make data informed decisions.'"
        :image-url="profilePictureUrl"
        image-alt-text="ethan ozelius profile picture"
      />
      <div class="what-have-i-been-up-to-lately">
        <MediumArticle
          :article="whatHaveIBeenUpToLately"
          :shouldAbridgeOverride="false"
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

  methods: {
    readMore () {
      this.truncated = false
    }
  },

  data: () => ({
    truncated: true
  }),

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
#article-container {
  width: 100%;
  display: flex;
  justify-content: center;

  .article-inner {
    display: flex;
    flex-direction: column;
    width: 75%;
    background-color: beige;
    padding: 2%;
    align-self: center;
  }

  .overlay {
    order: 2;
    visibility: hidden;
  }

  .article-inner.truncated {
    .content {
      height: 150px;
      overflow: hidden;
    }

    .overlay {
      visibility: visible;
    }
  }
}

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
