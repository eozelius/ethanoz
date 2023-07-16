<template>
  <div>
    <!-- Picture -->
    <div class="lego-view-title__picture">
      <div v-if="imageUrl">
        <Picture
          :url="imageUrl"
          :altText="imageAltText"
          :circle="true"
        />
      </div>
      <slot v-else name="picture"></slot>
    </div>

    <div class="lego-view-title__text">
      <!-- Title -->
      <h1 class="lego-view-title__title">{{ title }}</h1>

      <!-- Description -->
      <div v-if="Array.isArray(description)">
        <h3
          class="lego-view-title__description"
          v-for="(d, i) in description"
          :key="i"
        >
          {{ d }}
        </h3>
      </div>
      <h3 v-else class="lego-view-title__description">{{ description }}</h3>

      <!-- subtext -->
      <div class="lego-view-title__subtext">
        <div v-if="subtext">
          <div v-if="Array.isArray(subtext)">
            <p v-for="(text, i) in subtext" :key="i">{{ text }}</p>
          </div>

          <div v-else-if="typeof subtext === 'string'">
            <p>{{ subtext }}</p>
          </div>
        </div>
        <slot v-else name="subtext"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Picture.vue'

export default {
  name: 'LegoViewTitle',
  components: {
    Picture
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: [String, Array],
      default: ''
    },
    subtext: {
      type: [String, Array],
      required: false,
      default: ''
    },
    imageUrl: {
      type: String,
      required: false
    },
    imageAltText: {
      type: String,
      default: 'image'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@keyframes slideInFromRight {
  0% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0);
  }
}

.lego-view-title__text {
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 7px;
  box-shadow: 5px 5px 5px $color-dark-gray;
  margin: 5% auto;
  padding: 3% 4%;
  background: $color-lite-gray;
  opacity: .85;
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.lego-view-title__title {
  color: $color-dark-blue;
}

.lego-view-title__description {
  margin: 6% 0 4%;
  color: $color-dark-gray;
  text-align: left;
}

.lego-view-title__subtext p {
  text-align: right;
  margin-bottom: .5em;
}

@media screen and (min-width: 420px) {
  .lego-view-title__picture {
    width: 350px;
    height: 350px;
    margin: 5% 5% 5% 10%;
  }
}
</style>
