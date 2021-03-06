<template>
  <div :class="{ 'medium-article__container': true, 'abridged': abridged }">
    <div v-if="abridged" class="medium-article__overlay">
      <div class="overlay__read-more-container">
        <p @click="toggleAbridged">{{ $t('medium.more') }}</p>
      </div>
    </div>

    <h2 class="medium-article__title">{{ article.title }}</h2>

    <div class="medium-article__tags-container" v-if="tags.length">
      <span
        v-for="tag in tags"
        :key="tag"
        class="tag"
      >
        {{ tag }}
      </span>
    </div>

    <img
      :src="require(`@/assets/images/medium/${getIsMobile ? 'small': 'large'}/${article.mainImagePath}`)"
      :alt="`${article.title} image`"
      class="medium-article__banner-image"
    />

    <div class="medium-article__link-and-publish-date-container">
      <p class="medium-article-link" v-if="article.mediumLink">
        <a
          class="medium-article-link"
          :href="article.mediumLink"
          target="_blank"
        >
          {{ $t('medium.readOnMedium') }} medium
        </a>
      </p>

      <p class="publish-date"> - {{ $t('medium.published') }} {{ article.publishDate }}</p>
    </div>

    <div
      v-for="(p, i) in article.paragraphs"
      :key="i"
      class="medium-article__paragraph"
    >
      <!-- codeBlock -->
      <vue-embed-gist
        v-if="p.type === 'codeBlock'"
        :gist-id="p.gistId"
        :gist-file="p.gistFile"
      />

      <!-- text -->
      <p v-if="p.type === 'text'">
        {{ p.text }}
      </p>

      <!-- image -->
      <img
        v-if="p.type === 'image'"
        :src="require(`@/assets/images/medium/${getIsMobile ? 'small': 'large'}/${p.url}`)"
        :alt="p.altText"
        class="medium-article__image"
      />

      <span
        v-if="p.dots"
        class="dots">
        ...
      </span>
    </div>
  </div>
</template>

<script>
import isMobile from '@/utils/isMobile'
import VueEmbedGist from 'vue-embed-gist'

export default {
  name: 'MediumArticle',

  components: {
    VueEmbedGist
  },

  data: function () {
    return {
      addMobileClass: isMobile(),
      size: isMobile() ? 'small' : 'large',
      abridged: true
    }
  },

  props: {
    article: {
      type: Object,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    getIsMobile () {
      return isMobile()
    }
  },

  methods: {
    toggleAbridged () {
      this.abridged = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@import '../assets/styles/mixins.scss';
@import 'https://github.githubassets.com/assets/gist-embed-52b3348036dbd45f4ab76e44de42ebc4.css';

.medium-article__container {
  @include bluebox;
}

.tag {
  @include tag;
}

.medium-article__title {
  color: $color-dark-blue;
  margin-bottom: 1em;
}

.medium-article__description {
  padding: 0 4% 10%;
}

.medium-article__banner-image {
  width: 90%;
  align-self: center;
  margin-bottom: 13%;
}

.medium-article__paragraph {
  padding: 0 2% 10%;
}

.medium-article__image {
  width: 90%;
  align-self: center;
}

.medium-article__tags-container {
  margin-bottom: 15%;
}

.medium-article__link-and-publish-date-container {
  margin-bottom: 15%;

  .publish-date,
  .medium-article-link {
    text-align: right;
    margin: 0 5% 3% 0;
    color: $color-solarized-dark-blue;

    a {
      margin: 0;
    }
  }
}

.medium-article__overlay {
  display:flex;
  width: 110%;
  margin-left: -5%;
  position: relative;
  height: 95px;
  top: 1970px;
  right: 0;
  left: 0;
  background: rgb(137,179,190);
  background: linear-gradient(0deg, rgba(137,179,190,1) 31%, rgba(230,238,240,0.80015756302521) 100%);
}

.overlay__read-more-container {
  align-self: center;
  width: 100%;

  p {
    cursor: pointer;
    text-align: right;
    margin: 0 5% 0 0;

    &:hover {
      font-size: 1.45em;
    }
  }
}

.abridged {
  height: 2000px;
  overflow: hidden;
}
</style>
