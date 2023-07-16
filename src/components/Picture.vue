<template>
  <div class="picture">
    <img
      :class="{
        circle: this.circle,
        'no-shadow': this.noShadow
      }"
      :src="require(`@/assets/images/${this.url}`)"
      :alt="altText"
      :data-test="dataTest"
    />
  </div>
</template>

<script>
export default {
  name: 'PictureComponent',

  props: {
    url: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    circle: {
      type: Boolean,
      default: false
    },
    noShadow: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    dataTest: function () {
      return this.altText.split(' ').map(word => word.toLowerCase()).join('-')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(0);
  }
}

.picture {
  display: flex;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  img {
    width: 250px;
    height: 250px;
    margin: 5% auto;
    border-radius: 5%;
    box-shadow: 5px 5px 5px $color-dark-gray;
  }

  img.circle {
    border-radius: 50%;
  }

  img.no-shadow {
    box-shadow: none;
  }
}

@media screen and (min-width: 420px) {
  .picture {
    img {
      width: 340px;
      height: 340px;
    }
  }
}
</style>
