<template>
  <component :is="baseTagName" :class="baseTagClass" :style="baseTagStyle">
    <component :is="replayAreaParentTagName" :class="replayAreaParentTagClass" :style="replayAreaParentTagStyle">
      <input v-bind="formBind" v-model="textData" />
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
import FormBindMixin from "@/mixins/form-bind";
export default {
  name: "form-replay-input",
  mixins:[FormReplayMixin, FormBindMixin],
}
</script>

<style scoped>

</style>
