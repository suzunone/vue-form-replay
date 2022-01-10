export default {
  props: {
    name: {
      type: String,
      default: 'codemirror'
    },
    placeholder: {
      type: String,
      default: ''
    },
    merge: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({})
    },
    events: {
      type: Array,
      default: () => ([])
    },
    globalOptions: {
      type: Object,
      default: () => ({})
    },
    globalEvents: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      codemirrorOption: {}
    };
  },

  watch: {
    options: {
      handler(options) {
        this.codemirrorOption = Object.assign({}, {}, options);
      },
      deep: true,
      immediate: true
    }
  },
  created() {
  },
};
