export default {
  props: {
    replayName: {
      type: String,
      default: Math.random().toString(32).substring(2)
    },
    watcherEmitName: {
      type: String
    },
    saveEmitName: {
      type: String
    },
    interval: {
      type: [String, Number],
      default: 5000
    },
    dataValue: {
      type: String
    },
  },
  data() {
    return {
      textData: '',
      timer: null,
    };
  },
  methods: {
    onSubmit() {
      let date = new Date();
      this.saveDB(date.getTime(), this.textData, this.textData);
      this.save();
    },

    save() {
      let data = this.getAll();
      if (this.saveEmitName) {
        this.$emit(this.saveEmitName, data, this.replayName,  this.$el);
      }
    },

    getAll() {
      let logKey = localStorage.getItem(this.replayName);
      let lastLogKey = localStorage.getItem(this.lastLogKey) * 1;
      if (!logKey) {
        logKey = 0;
        lastLogKey = 0;
      } else {
        localStorage.setItem(this.lastLogKey, logKey);
      }

      logKey = logKey * 1;

      let res = {};
      for (let i = lastLogKey + 1; i <= logKey; i++) {
        let staageKey = this.replayName + '-' + String(i);
        let logData = localStorage.getItem(staageKey);
        if (!logData) {
          continue;
        }
        logData = JSON.parse(logData);
        res[logData.key] = logData.data;

        localStorage.removeItem(staageKey);
      }

      return res;

    },

    saveDB(key, newData, oldData) {
      let data = {'oldData': oldData, 'newData': newData,};
      let logKey = localStorage.getItem(this.replayName);
      if (!logKey) {
        logKey = 0;
        localStorage.setItem(this.lastLogKey, '1');
      }
      logKey = String((logKey * 1) + 1);

      localStorage.setItem(this.replayName, logKey);
      localStorage.setItem(this.replayName + '-' + logKey, JSON.stringify({'key': key, 'data': data}));
    }
  },
  computed: {
    lastLogKey() {
      return this.replayName + '-last-log';
    }
  },
  watch: {
    textData(newData, oldData) {
      let date = new Date();
      this.saveDB(date.getTime(), newData, oldData);
      if (this.watcherEmitName) {
        this.$emit(this.watcherEmitName, newData, oldData);
      }
    }
  },

  created() {
    let date = new Date();
    this.saveDB(date.getTime(), '', '');
  },
  mounted() {
    if (this.dataValue) {
      this.textData = this.dataValue;
    }

    this.timer = setInterval(this.save, this.interval * 1);
  }
};
