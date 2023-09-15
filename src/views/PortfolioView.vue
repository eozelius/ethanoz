<template>
  <div class="portfolio-view">
    <!-- Porfolio Banner: octocat, page title and description -->
    <LegoViewTitle
      :title="'Ethan Ozelius Portfolio'"
      :description="[
        'Open source projects, Games and Demo Apps',
        'These projects keep coding fun for me and allow me to experiment and learn.  I strive to create projects include aesthetically front ends as well as complexly simple back ends '
      ]"
      :imageAltText="'github profile'"
      imageUrl="demos/octocat.png"
    >
      <!-- Github and Linkedin Links -->
      <template v-slot:subtext>
        <div v-for="(profile, i) in portfolioProfiles" :key="i">
          <a :href="profile.link" target="_blank">
            <p>{{ profile.text }}</p>
          </a>
        </div>
      </template>
    </LegoViewTitle>

    <!-- Nextris -->
    <LegoBox
      :title='"Nextris"'
      :description="'Classic tetris game built with Next.js, React and typescript.  Deployed with Vercel'"
      :tags="nextrisTags"
    >
      <!-- picture slot -->
      <template v-slot:picture>
        <a :href="nextrisLink" target="_blank">
          <Picture
            url="demos/nextris.png"
            :altText="`Nextris demo link: ${minesweeperLink}`"
          />
        </a>
      </template>

      <!-- subtext slot -->
      <template v-slot:subtext>
        <p class="view-on-github">
          - View this project on
          <a href="https://github.com/eozelius/nextris" target="_blank">github.</a>
        </p>
      </template>
    </LegoBox>

    <!-- Minesweeper -->
    <LegoBox
      :title='"Minesweeeper"'
      :description="'Classic minesweeper game that is fully customizable for size and difficulty.  Built in Vue.js, dockerized and deployed into AWS with Nginx.'"
      :tags="minesweeperTags"
    >
      <!-- picture slot -->
      <template v-slot:picture>
        <a :href="minesweeperLink" target="_blank">
          <Picture
            url="demos/minesweeper.png"
            :altText="'Minesweeper demo link: https://minesweeper.ethanoz.com'"
          />
        </a>
      </template>

      <!-- subtext slot -->
      <template v-slot:subtext>
        <p class="view-on-github">
          - View this project on
          <a href="https://github.com/eozelius/minesweeper" target="_blank">github.</a>
        </p>
      </template>
    </LegoBox>

    <!-- Ethanoz -->
    <LegoBox
      :title="'ethanoz.com'"
      :description="[
        'Thank you for checking out ethanoz.com! My personal website to experiment with new web technologies and share what\'s going on in my life.',
        'I originally built ethanoz.com in Vue 2, but I have recently upgraded to Vue 3 to leverage the new \'Composition api\', as well as introduced typescript.  While this app may look purely front end, there are a lot of processes running in the background to keep this app running seamlessly.  ethanoz.com is hosted on an AWS linux server inside of EC2, using S3 for routing.',
        'In an effort to make building/running/deploying this app easily across my macbook and linux servers, I created a docker container to run all the required services: node, npm, nginx and certbot.',
        'Stay tuned for an upcoming medium article detailing the architecture!'
        // 'To learn more about what makes ethanoz.com run, check out this project on github.'
      ]"
      :tags="ethanozTags"
    >
      <!-- picture slot -->
      <template v-slot:picture>
        <Picture
          url="demos/ethanoz.png"
          :altText="'image for ethanoz.com'"
        />
      </template>

      <!-- subtext slot -->
      <template v-slot:subtext>
        <p class="view-on-github">
          - View this project on
          <a href="https://github.com/eozelius/ethanoz" target="_blank">github.</a>
        </p>
      </template>
    </LegoBox>

    <!-- Super(fluous) -->
    <LegoBox
      :title="'Everyone likes strings, but you\'ll love Super(fluous)ly Encoded Bytecode!'"
      :description="[
        'The Super(fluous) Encoder scrambles bundles of 4 characters into 32-bit integer values',
        'Forgive the satirical nature of this app, this app is fun play on the questionable hoops that we force people through in interview processes',
        'This is an Angular app with a simple form that encodes/decodes strings into 32-bit interger values.  That\'s it!'
      ]"
      :tags="superfluousTags"
    >
      <!-- picture slot -->
      <template v-slot:picture>
        <a :href="superfluousLink" target="_blank">
          <div class="portfolio-picture">
            <Picture
              url="demos/superfluous.png"
              :altText="'Superfluous Encoder link: https://bit-encoder.ethanoz.com'"
            />
          </div>
        </a>
      </template>

      <!-- subtext slot -->
      <template v-slot:subtext>
        <p class="view-on-github">
          - View this project on
          <a href="https://github.com/eozelius/superfluous" target="_blank">github.</a>
        </p>
      </template>
    </LegoBox>
  </div>
</template>

<script>
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import Picture from '@/components/Picture.vue'
import LegoBox from '@/legos/LegoBox.vue'
import { TAGS } from '@/constants'

export default {
  name: 'PortfolioView',
  components: {
    LegoViewTitle,
    Picture,
    LegoBox
  },

  computed: {
    nextrisLink: () => process.env.VUE_APP_NEXTRIS_URL,
    minesweeperLink: () => process.env.VUE_APP_MINESWEEPER_URL,
    superfluousLink: () => process.env.VUE_APP_SUPERFLUOUS_URL,
    weatherLink: () => process.env.VUE_APP_WEATHER_URL,
    portfolioProfiles: function () {
      return [{
        text: 'github profile',
        link: 'https://github.com/eozelius'
      },
      {
        text: 'linkedin profile',
        link: 'https://www.linkedin.com/in/ethan-ozelius-6884b696'
      }]
    },
    superfluousTags: () => [
      TAGS.typescript,
      TAGS.javascript,
      TAGS.webpack
    ],
    ethanozTags: () => [
      TAGS.vue,
      TAGS.typescript,
      TAGS.docker,
      TAGS.nginx,
      TAGS.AWS
    ],
    weatherTags: () => [
      TAGS.react,
      TAGS.createreactapp,
      TAGS.javascript,
      TAGS.webpack
    ],
    minesweeperTags: () => [
      TAGS.vue,
      TAGS.javascript,
      TAGS.webpack
    ],
    nextrisTags: () => [
      TAGS.react,
      TAGS.typescript,
      TAGS.nextjs,
      TAGS.vercel,
      TAGS.javascript
    ]
  }
}
</script>

<style lang="scss" scoped>
.portfolio-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.view-on-github {
  margin-bottom: 1em;
}
</style>
