<template>
  <div class="box-container">
    <!-- Title -->
    <h3 class="box-title">{{ title }}</h3>

    <!-- Description -->
    <div v-if="Array.isArray(description)">
      <p
        class="box-description"
        v-for="(d, i) in description"
        :key="i"
      >
        {{ d }}
      </p>
    </div>
    <p v-else class="box-description">{{ description }}</p>

    <!-- Picture -->
    <div class="box-picture">
      <div v-if="imageUrl">
        <Picture
          :url="imageUrl"
          :alt-text="imageAltText"
        />
      </div>
      <slot v-else name="picture"></slot>
    </div>

    <!-- Subtext -->
    <div class="box-subtext">
      <div v-if="subtext">
        <!-- Just one string subtext item -->
        <p v-if="typeof subtext === 'string'">{{ subtext }}</p>

        <!-- Array of string subtext items -->
        <p v-else v-for="(s, i) in subtext" :key="i">{{ s }}</p>
      </div>
      <slot v-else name="subtext"></slot>
    </div>

    <!-- Tags -->
    <div v-if="tags.length" class="box-tags">
      <span
        v-for="tag in tags"
        :key="tag"
        class="tag"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Picture'

export default {
  name: 'LegoBox',

  components: {
    Picture
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: [String, Array],
      default: ''
    },
    subtext: {
      type: [String, Array],
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    imageAltText: {
      type: String,
      default: 'image'
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@import '../assets/styles/mixins.scss';

.box-container {
  @include bluebox;

  .box-title {
    color: $color-dark-blue;
    margin-bottom: 1em;
  }

  .box-picture {
    margin-bottom: 1em;
  }

  .box-description {
    padding: 0 4% 10%;
  }

  .box-subtext p {
    padding: 0 4% 10%
  }

  .box-subtext a {
    color: $color-dark-aqua;
  }

  .tag {
    @include tag;
  }
}
</style>
