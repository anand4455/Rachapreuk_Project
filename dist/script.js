Date.prototype.addMinutes = function(minutes) {
  this.setMinutes(this.getMinutes() + minutes);
  return this;
};

new Vue({
  el: '#app1',
  data() {
    return {
      diffMinutes: 0,
      curTime: new Date(0),
      realClock: [
        { max: 23, current: 0, degree: 0 },
        { max: 59, current: 0, degree: 0 },
        { max: 59, current: 0, degree: 0 }
      ],
    }
  },
  computed: {
    computedRealClock() {
      const { realClock } = this;
      return realClock.map((clock) => ({
        ...clock,
        nextFormat: `0${clock.current + 1 > clock.max ? 0 : clock.current + 1}`,
        currentFormat: `0${clock.current}`,
        ifTens: parseInt(clock.current / 10) !== parseInt((clock.current + 1) / 10)
      }));
    }
  },
  methods: {
    /**
     * index: 0 - hour, 1 - minute, 2 - second
     */
    flip(newVal, index = 2) {
      const clock = this.realClock[index];
      if (clock.degree < 180) {
        clock.degree += 4;
        requestAnimationFrame(() => {
          this.flip(newVal, index);
        });
      } else {
        clock.degree = 0;
        clock.current = newVal;
      }
    },
    timeFlies() {
      const newTime = new Date().addMinutes(this.diffMinutes);
      if (newTime.getHours() !== this.curTime.getHours()) {
        requestAnimationFrame(() => {
          this.flip(newTime.getHours(), 0);
        });
      }
      if (newTime.getMinutes() !== this.curTime.getMinutes()) {
        requestAnimationFrame(() => {
          this.flip(newTime.getMinutes(), 1);
        });
      }
      if (newTime.getSeconds() !== this.curTime.getSeconds()) {
        requestAnimationFrame(() => {
          this.flip(newTime.getSeconds(), 2);
        });
      }
      this.curTime = newTime;
      requestAnimationFrame(this.timeFlies);
    },
  },
  created() {
    this.timeFlies();
  }
})

new Vue({
  el: '#app2',
  data() {
    return {
      diffMinutes: 15,
      curTime: new Date(0),
      realClock: [
        { max: 23, current: 0, degree: 0 },
        { max: 59, current: 0, degree: 0 },
        { max: 59, current: 0, degree: 0 }
      ],
    }
  },
  computed: {
    computedRealClock() {
      const { realClock } = this;
      return realClock.map((clock) => ({
        ...clock,
        nextFormat: `0${clock.current + 1 > clock.max ? 0 : clock.current + 1}`,
        currentFormat: `0${clock.current}`,
        ifTens: parseInt(clock.current / 10) !== parseInt((clock.current + 1) / 10)
      }));
    }
  },
  methods: {
    /**
     * index: 0 - hour, 1 - minute, 2 - second
     */
    flip(newVal, index = 2) {
      const clock = this.realClock[index];
      if (clock.degree < 180) {
        clock.degree += 4;
        requestAnimationFrame(() => {
          this.flip(newVal, index);
        });
      } else {
        clock.degree = 0;
        clock.current = newVal;
      }
    },
    timeFlies() {
      const newTime = new Date().addMinutes(this.diffMinutes);
      if (newTime.getHours() !== this.curTime.getHours()) {
        requestAnimationFrame(() => {
          this.flip(newTime.getHours(), 0);
        });
      }
      if (newTime.getMinutes() !== this.curTime.getMinutes()) {
        requestAnimationFrame(() => {
          this.flip(newTime.getMinutes(), 1);
        });
      }
      if (newTime.getSeconds() !== this.curTime.getSeconds()) {
        requestAnimationFrame(() => {
          this.flip(newTime.getSeconds(), 2);
        });
      }
      this.curTime = newTime;
      requestAnimationFrame(this.timeFlies);
    },
  },
  created() {
    this.timeFlies();
  }
})