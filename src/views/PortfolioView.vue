<template>
  <div class="portfolio-view">
    <!-- Porfolio Banner: octocat, page title and description -->
    <LegoViewTitle
      :title="'Ethan Ozelius Portfolio'"
      :description="'Open source projects, Games and Demo Apps'"
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
        <p>
          - View this project on
          <a href="https://github.com/eozelius/vue-minesweeper" target="_blank">github.</a>
        </p>
      </template>
    </LegoBox>

    <!-- Super(fluous) -->
    <LegoBox
      :title="'Everyone likes strings, but you\'ll love Super(fluous)ly Encoded Bytecode!'"
      :description="'The Super(fluous) Encoder scrambles bundles of 4 characters into 32-bit integer values'"
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
        <p>
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
    ]
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

.portfolio-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
