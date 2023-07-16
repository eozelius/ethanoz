<template>
  <main>
    <LegoViewTitle
      :title="'Musings of a drifting hacker'"
      :description="'I write, usually with a technical twist, hopefully funny, but if nothing else it\'s saved on the internet forever.'"
      image-url="medium/logo.png"
      image-alt-text="medium.com logo"
    >
      <!-- Link to Medium profile -->
      <template v-slot:subtext>
        <a :href="'https://medium.com/@e.ozelius'" target="_blank">
          <p>medium profile</p>
        </a>
      </template>
    </LegoViewTitle>

    <div class="articles-container">
      <MediumArticle
        v-for="(article, i) in articles"
        :key="i"
        :article="article"
        :tags="article.tags"
      />
    </div>
  </main>
</template>

<script>
import MediumArticle from '@/components/MediumArticle'
import LegoViewTitle from '@/legos/LegoViewTitle.vue'
import articles from '@/data/articles'

export default {
  name: 'MediumView',

  components: {
    LegoViewTitle,
    MediumArticle
  },

  computed: {
    articles: function () {
      return articles.en
    }
  }
}

</script>

<style lang="scss" scoped>
.articles-container {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
}
</style>
