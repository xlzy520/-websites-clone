<template>
  <div class="bg-cover" id="gravity">
    <div class="planet">
      <div
        class="number"
        v-if="gameStatus === 1"
        :style="{ backgroundImage: numberImg }"
      ></div>
    </div>

    <p class="line1-title" v-if="line === 1">
      备注：飞行器进入此轨道逐渐获得加速度
    </p>
    <p class="line2-title" v-if="line === 2">备注：飞行器进入此轨道逐渐减速</p>
    <p class="notice-title">{{ notice }}</p>
    <div class="game-end" v-if="line === 4"></div>
    <div class="ops-bar" v-if="gameStatus !== 1">
      <div class="btn btn1" @click="onLine1"></div>
      <div class="btn btn2" @click="onLine2"></div>
      <div class="btn btn3" @click="onReset"></div>
      <div class="btn btn4" @click="onGomeOver"></div>
    </div>
  </div>
</template>

<script>
// import anime from "animejs";
import P5 from "p5";
import { bezierCalculate, calcRadianBetweenPoints } from "../../../utils/bezier";

const imgArr = [
  "url(./static/img/gravity/n1.png)",
  "url(./static/img/gravity/n2.png)",
  "url(./static/img/gravity/n3.png)",
];

const t = 6000;

const p1 = "朋友们，飞行器为什么获得加速度呢？ 马上为您解答";
const p2 = "朋友们，飞行器为什么会减速呢？ 马上为您解答";

export default {
  data() {
    return {
      timer: null,
      count: 3,
      gameStatus: 1, // 1-未开始 2-进行中 3-结束
      line: 0,
      // isHidden: false, // 是否隐藏飞行器
      clockwiseLine: [],
      clockwiseLineRadian: [],
      counterclockwiseLine: [],
      counterclockwiseLineRadian: [],
      isStart: false,
      p5Obj: {},
      index: 0,
      time: 0,
    };
  },
  computed: {
    numberImg: function () {
      return imgArr[this.count - 1];
    },
    notice: function () {
      if (this.line === 1) {
        return p1;
      }

      if (this.line === 2) {
        return p2;
      }
      return "";
    },
  },
  mounted() {
    new P5(this.canvasInit);
    this.init();
  },
  methods: {
    getLine() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const planet = document.querySelector(".planet");
      const radius = Math.ceil(planet.clientWidth / 2) + 40;
      const aircraftTop = height * 0.3

      const line1 = [];
      line1.push([width / 2 , aircraftTop - 40]);
      line1.push([width / 2 + radius + 80, aircraftTop]);
      line1.push([width / 2 + radius + 80, aircraftTop + radius * 2]);
      line1.push([width / 2 + 40, aircraftTop + 80 + radius * 2]);
      line1.push([0, aircraftTop]);

      const line2 = [];
      line2.push([width / 2 - 40, aircraftTop]);
      line2.push([width / 2 - radius - 80, aircraftTop + radius / 2]);
      line2.push([width / 2 - radius - 80, aircraftTop + radius * 1.5]);
      line2.push([width / 2 - 40, aircraftTop + 40 + radius * 2]);
      line2.push([width, aircraftTop + 40]);

      this.clockwiseLine = bezierCalculate(line1, 500);
      this.clockwiseLineRadian = calcRadianBetweenPoints(this.clockwiseLine)
      this.counterclockwiseLine = bezierCalculate(line2, 500);
      this.counterclockwiseLineRadian = calcRadianBetweenPoints(this.counterclockwiseLine)
    },
    canvasInit(p5) {
      this.p5Obj = p5;
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.getLine();

      let img = null;

      p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent("gravity");
        img = p5.loadImage("/static/img/gravity/aircraft.png");
      };

      p5.draw = () => {
        p5.clear();
        if (this.isStart && this.index < this.clockwiseLine.length) {

          if (this.line === 1) {
            this.time += 0.1
            p5.translate(
              this.clockwiseLine[this.index][0],
              this.clockwiseLine[this.index][1]
            );
            p5.rotate(this.clockwiseLineRadian[this.index])

            this.index = Math.ceil(this.time * this.time / 2)
          } else if (this.line === 2) {
            this.time += 0.012
            p5.translate(
              this.counterclockwiseLine[this.index][0],
              this.counterclockwiseLine[this.index][1]
            );
            p5.rotate(this.counterclockwiseLineRadian[this.index])
            const t = Math.ceil(3 - this.time * this.time)
            this.index += t > 0 ? t : 1
          }
          p5.image(img, 0, 0, 40, 40);
        } else if (this.isStart && this.index >= this.clockwiseLine.length) {
          this.gameEnd(() => {
            p5.translate(width / 2, height * 0.3 - 40);
            p5.image(img, 0, 0, 40, 40);
            this.index = 0;
            this.time = 0
          });
          this.isStart = false;
        }

        if (!this.isStart && this.index === 0) {
          p5.translate(width / 2, height * 0.3 - 40);
          p5.image(img, 0, 0, 40, 40);
        }
      };
    },
    init() {
      // 读秒
      const timer = () => {
        this.timer = setTimeout(() => {
          if (this.count > 1) {
            this.count -= 1;
            timer();
          } else {
            clearTimeout(this.timer);
            this.gameStatus = 2;
            // this.start();
          }
        }, 1000);
      };
      timer();
    },
    start() {
      this.onLine1();
    },
    onLine1() {
      this.index = 0
      this.line = 1;
      this.isStart = true;
    },
    onLine2() {
      this.index = 0
      this.line = 2;
      this.isStart = true;
    },
    gameEnd(callback) {
      this.line = 4;
      callback();
    },
    onReset() {
      this.line = 0;
      this.gameStatus = 2;
      this.index = 0
      this.time = 0
      this.isStart = false
    },
    onGomeOver() {
      this.$router.push("./\u0020");
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-cover {
  background-image: url("/static/img/gravity/bg/bg3.png");
  background-position: center center;
  position: relative;
  overflow: hidden;
}

.planet {
  background-image: url("/static/img/gravity/planet.png");
  width: 310px;
  height: 310px;
  background-size: contain;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  // animation: spin 3s linear infinite normal;
}

.number {
  width: 120px;
  height: 180px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.ops-bar {
  width: 1205px;
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;

  .btn {
    width: 210px;
    height: 118px;
    background-size: contain;
    cursor: pointer;
  }
  .btn1 {
    background-image: url("/static/img/gravity/ops-btn1.png");
  }
  .btn2 {
    background-image: url("/static/img/gravity/ops-btn2.png");
  }
  .btn3 {
    background-image: url("/static/img/gravity/ops-btn3.png");
  }
  .btn4 {
    background-image: url("/static/img/gravity/ops-btn4.png");
  }
}
.cls-1 {
  fill: #9e3724;
}
.line-target {
  width: 71.8px;
  height: 54.9px;
  position: absolute;
  top: 0%;
  left: 0%;
}
.line-start {
  transform: none !important;
  top: 20%;
  left: 50%;
}
.line-active {
  opacity: 0;
}

.line-inactive {
  display: none;
}

.game-end {
  background-image: url("/static/img/gravity/game-end.png");
  background-size: contain;
  width: 1543px;
  height: 512px;
  position: absolute;
  top: 165px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes spin {
  0% {
    transform: translateX(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}

.line1-title {
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  position: absolute;
  right: 100px;
  top: 150px;
}

.line2-title {
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  position: absolute;
  left: 100px;
  top: 150px;
}

.notice-title {
  font-size: 36px;
  color: #ff0000;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 70%;
}
</style>
