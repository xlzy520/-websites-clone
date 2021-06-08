<template>
  <div class="bg-cover">
    <PreAudio :url="url" ref="audio" />
    <div class="start-game" @click="goNextPage"></div>
  </div>
</template>

<script>
import PreAudio from '@/components/preAudio.vue'
import mp3 from '@static/media/gravity.mp3'
export default {
  components: {
    PreAudio,
  },
  data() {
    return {
      url: mp3,
    }
  },
  methods: {
    goNextPage() {
      // this.$refs.audio.play()
      // setTimeout(() => {
      //   this.$router.push("./\u0009")
      // }, 2000);
      this.$router.push("./\u0009")
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-cover {
  background-image: url("/static/img/gravity/bg/bg1.png");
  background-position: center center;
  position: relative;
}

.start-game {
  width: 533px;
  height: 127px;
  background-image: url("/static/img/gravity/start-btn.png");
  background-size: contain;
  position: absolute;
  bottom: 135px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>
