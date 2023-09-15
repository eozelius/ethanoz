<template>
  <div id="medium_article_container">
    <div :class="{ 'article-inner': true, 'truncated': shouldShowReadMore }">
      <div class="overlay" @click="readMore">
        <p @click="readMore">read more</p>
      </div>

      <div class="content">
        <!-- Title -->
        <h2 class="medium-article__title">{{ article?.title }}</h2>

        <!-- Tags -->
        <div class="medium-article__tags-container" v-if="tags.length">
          <span
            v-for="tag in tags"
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Main article image -->
        <img
          v-if="article.mainImagePath"
          :src="require(`@/assets/images/medium/${getIsMobile ? 'small': 'large'}/${article.mainImagePath}`)"
          :alt="`${article?.title} image`"
          class="medium-article__banner-image"
        />

        <!-- Medium.com link and publish date -->
        <div class="medium-article__link-and-publish-date-container">
          <p class="medium-article-link" v-if="article.mediumLink">
            <a
              class="medium-article-link"
              :href="article.mediumLink"
              target="_blank"
            >
              read this article on medium
            </a>
          </p>

          <p
            v-if="article.publishDate"
            class="publish-date"> - published {{ article.publishDate }}</p>
        </div>

        <!-- paragraphs -->
        <div
          v-for="(p, i) in article.paragraphs"
          :key="i"
          class="medium-article__paragraph"
        >
          <!-- codeBlock -->
          <h6 v-if="p.type === 'codeBlock'">github gist coming soon...</h6>

          <!-- <vue-embed-gist
            v-if="p.type === 'codeBlock'"
            :gist-id="p.gistId"
            :gist-file="p.gistFile"
          /> -->

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
    </div>
  </div>
</template>

<script>
import isMobile from '@/utils/isMobile'
// import VueEmbedGist from 'vue-embed-gist'

export default {
  name: 'MediumArticle',

  // components: {
  //   VueEmbedGist
  // },

  data: function () {
    return {
      addMobileClass: isMobile(),
      size: isMobile() ? 'small' : 'large',
      truncated: true
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
    },
    shouldTruncateOverride: {
      type: Boolean,
      default: () => true
    }
  },

  computed: {
    getIsMobile () {
      return isMobile()
    },
    shouldShowReadMore () {
      if (this.shouldTruncateOverride === false) {
        return false
      } else {
        return this.truncated
      }
    }
  },

  methods: {
    readMore () {
      this.truncated = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/colors.scss';
  @import '../assets/styles/mixins.scss';

  #medium_article_container {
    @include bluebox(large) {
      max-width: 1150px;
    };
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 4% 0 0 0;
    width: 94%;

    .article-inner {
      display: flex;
      flex-direction: column;
    }

    .overlay {
      order: 2;
      visibility: hidden;
      padding-top: 2em;
      margin-top: 0;
      background: rgb(137,179,190);
      background: linear-gradient(0deg, rgba(137,179,190,1) 31%, rgba(230,238,240,0.80015756302521) 100%);
      height: 50px;
      cursor: pointer;
    }

    .article-inner.truncated {
      .content {
        height: 2000px;
        overflow: hidden;
      }

      .overlay {
        visibility: visible;
      }
    }
  }

  .medium-article__title {
    color: $color-dark-blue;
    padding: 2%;
    margin-bottom: 1em;
  }

  .medium-article__tags-container {
    margin-bottom: 15%;

    .tag {
      @include tag;
    }
  }

  .medium-article__banner-image {
    width: 80%;
    align-self: center;
    margin-bottom: 13%;
  }

  .medium-article__image {
    width: 90%;
    align-self: center;
  }

  .medium-article__link-and-publish-date-container {
    margin-bottom: 15%;

    .publish-date,
    .medium-article-link {
      text-align: right;
      margin: 0 5% 1% 0;
      color: $color-solarized-dark-blue;

      a {
        margin: 0;
      }
    }
  }

  .medium-article__paragraph {
    padding: 0 2% 6%;
  }
</style>
