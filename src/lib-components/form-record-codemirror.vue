<template>
  <codemirror
      v-model="textData"
      :name="name"
      :options="codemirrorOption"
      :placeholder="placeholder"
      :merge="merge"
      :events="events"
      :globalOptions="globalOptions"
      :globalEvents="globalEvents"

  />
</template>

<script>

import FormRecordMixin from "@/mixins/form-record";
import CodeMirrorBindMixin from "@/mixins/codemirror-bind";
import {codemirror} from 'vue-codemirror';

export default {
  name: "form-record-codemirror",
  mixins: [FormRecordMixin, CodeMirrorBindMixin],
  components: {
    codemirror
  },
}
</script>

<style scoped>
</style>
