export default {
  props: {
    codemirrorOption: {
      type: [Array, Object]
    },
  },
  data() {
    return {
      formBind: {}
    };
  },

  watch: {
    codemirrorOption: {
      handler: function (newData) {
        this.formBind = newData;
      },
      deep: true,
      immediate: true
    }
  },
  created() {
  },
};
