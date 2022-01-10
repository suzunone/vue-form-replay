<template>
  <component :is="baseTagName" :class="baseTagClass" :style="baseTagStyle">
    <component :is="replayAreaParentTagName" :class="replayAreaParentTagClass" :style="replayAreaParentTagStyle">
      <codemirror :options="formBind" v-model="textData"></codemirror>
    </component>
    <component :is="rangeParentTagName" :class="rangeParentTagClass" :style="rangeParentTagStyle">
      <input type="range" :class="dataRangeClass" :style="dataRangeStyle" v-model="pointer" min="0" :max="lastFlame">
    </component>

    <component :is="currentTimeTagName" :class="currentTimeTagClass" :style="currentTimeTagStyle">
      {{timeFormat(currentTime)}}
    </component>

    <component :is="totalTimeTagName" :class="totalTimeTagClass" :style="totalTimeTagStyle">
      {{timeFormat(totalTime)}}
    </component>

  </component>

</template>

<script>

import FormReplayMixin from "@/mixins/form-replay";
import CodeMirrorBindMixin from "@/mixins/codemirror-bind";
import { codemirror } from 'vue-codemirror';

export default {
  name: "form-replay-codemirror",
  mixins:[FormReplayMixin, CodeMirrorBindMixin],
  components: {
    codemirror
  },
}
</script>

<style scoped>
</style>
