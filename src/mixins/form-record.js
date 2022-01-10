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
    useLocalStrage: {
      type: [String, Boolean],
      default: false
    },
  },
  data() {
    return {
      textData: '',
      timer: null,
      changeLog: {}
    };
  },
  methods: {
    /**
     * on submit event.
     */
    onSubmit() {
      clearInterval(this.timer);
      let date = new Date();
      this.saveChangeLog(date.getTime(), this.textData, this.textData);
      this.save();
      localStorage.removeItem(this.replayName);
      localStorage.removeItem(this.lastLogKey);
    },

    /**
     * on onUnload event.
     */
    onUnload() {
      this.onSubmit();
    },

    /**
     * Save log.
     */
    save() {
      let data = this.getAll();
      if (this.saveEmitName) {
        this.$emit(this.saveEmitName, data, this.replayName,  this.$el);
      }
    },

    /**
     * Get all logs.
     * @returns {{}}
     */
    getAll() {
      if (!this.useLocalStrage) {
        let changeLog = JSON.parse(JSON.stringify(this.changeLog));
        this.changeLog = {};
        return changeLog;
      }

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
      for (let i = lastLogKey; i <= logKey; i++) {
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

    /**
     * save change log
     * @param key
     * @param newData
     * @param oldData
     */
    saveChangeLog(key, newData, oldData) {
      if (this.useLocalStrage) {
        this.saveDB(key, newData, oldData);
        return;
      }

      this.changeLog[key] = {'oldData': oldData, 'newData': newData,};
    },

    /**
     * save in localStorage
     * @param key
     * @param newData
     * @param oldData
     */
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
      this.saveChangeLog(date.getTime(), newData, oldData);
      if (this.watcherEmitName) {
        this.$emit(this.watcherEmitName, newData, oldData);
      }
    }
  },
  destroyed () {
    window.removeEventListener("unload", this.onUnload);
    clearInterval(this.timer);
  },
  created() {
    let date = new Date();
    this.saveChangeLog(date.getTime(), '', '');
    window.addEventListener("unload", this.onUnload);
  },
  mounted() {
    if (this.dataValue) {
      this.textData = this.dataValue;
    }

    this.timer = setInterval(this.save, this.interval * 1);
  }
};
