export default {
  props: {
    replayData: {
      type: [Object],
      default: () => ({})
    },

    baseTagName: {
      type: String,
      default: 'div'
    },
    baseTagClass: {
      type: [String, Object, Array],
      default: () => ({})
    },

    baseTagStyle: {
      type: String,
      default: ''
    },

    replayAreaParentTagName: {
      type: String,
      default: 'div'
    },
    replayAreaParentTagClass: {
      type: [String, Object, Array],
      default: () => ({})
    },

    replayAreaParentTagStyle: {
      type: String,
      default: ''
    },


    rangeParentTagName: {
      type: String,
      default: 'div'
    },

    rangeParentTagClass: {
      type: [String, Object, Array],
      default: () => ({})
    },
    rangeParentTagStyle: {
      type: String,
      default: ''
    },


    currentTimeTagName: {
      type: String,
      default: 'div'
    },
    currentTimeTagClass: {
      type: [String, Object, Array],
      default: () => ({})
    },
    currentTimeTagStyle: {
      type: String,
      default: ''
    },

    totalTimeTagName: {
      type: String,
      default: 'div'
    },
    totalTimeTagClass: {
      type: [String, Object, Array],
      default: () => ({})
    },
    totalTimeTagStyle: {
      type: String,
      default: ''
    },

    dataRangeClass: {
      type: [String, Object, Array],
      default: () => ({})
    },

    dataRangeStyle: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      pointer: 0,
      lastFlame: 100,
      times: [],
      firstTime: 0,
      lastTime: 0,
      totalTime: 0,
      textData: '',
      currentTime: 0
    };
  },
  methods: {
    timeFormat(time) {
      time = Math.round(time / 1000);
      
      let hour = 0;
      if (time >= (60 * 60)) {
        hour = Math.floor(time / (60 * 60));
        time = time - (60 * 60 * hour);
      }

      let minute = 0;
      if (time >= 60) {
        minute = Math.floor(time / 60);
        time = time - (60 * minute);
      }

      let res = '';

      if (this.totalTime >= (60 * 60)) {
        res = String(hour).padStart(2, '0') + ':';
      }

      return res + String(minute).padStart(2, '0') + ':' + String(time).padStart(2, '0');
    }
  },
  watch: {
    pointer: {
      handler: function (newData) {
        let key = this.times[newData];
        this.textData = this.replayData[key].newData;

        this.currentTime = (key - this.firstTime);
      },
      immediate: false
    },
    replayData: {
      handler: function (newData) {
        this.times = Object.keys(newData);
        this.lastFlame = this.times.length - 1;
        this.firstTime = this.times.slice(0, 1)[0];
        this.lastTime = this.times.slice(-1)[0];
        this.totalTime = this.lastTime - this.firstTime;
      },
      deep: true,
      immediate: true
    }
  },
  created() {
  },
  mounted() {
  }
};
