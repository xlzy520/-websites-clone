<template>
  <div class="bg-cover">
    <div class="text">
      <p>
        引力弹弓就是利用行星的重力场来给太空探测船加速，将它甩向
        下一个目标，也就是把行星当作“引力助推器”。
      </p>
      <p>
        引力弹弓就是利用行星或其他天体的相对运动和引力改变飞行
        器的轨道和速度,以此来节省燃料，时间，和成本
      </p>
    </div>
    <div class="start-game" @click="goNextPage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goNextPage() {
      this.$router.push("./\u000A");
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-cover {
  background-image: url("/static/img/gravity/bg/bg2.png");
  background-position: center center;
  position: relative;
  overflow: hidden;
}

.start-game {
  width: 449px;
  height: 113px;
  background-image: url("/static/img/gravity/start-btn2.png");
  background-size: contain;
  position: absolute;
  bottom: 86px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.text {
  width: 1395px;
  margin: 80px auto 0;
  font-size: 48px;
  font-weight: bold;
  line-height: 82px;
  color: #fff;

}
</style>
