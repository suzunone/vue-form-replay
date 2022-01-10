<template>
  <div>
    <form method="post" action="./" @submit.prevent>
      <h1>textarea example</h1>
      <div>
        <FormRecordTextarea name="stdin" rows="30" cols="100" save-emit-name="save"
                            @save="saveTextarea"></FormRecordTextarea>
      </div>
      <div>
        <FormReplayTextarea name="stdin" rows="30" cols="100"
                            readonly="true"
                            :replay-data="textareaReplayData"></FormReplayTextarea>
      </div>

      <hr>

      <h1>input type=text example</h1>
      <div>
        <FormRecordInput type="text" name="user_name" replayName="user_name" save-emit-name="save"
                         use-local-strage=true
                         @save="saveInputTypeText"/>
      </div>
      <div>
        <FormReplayInput name="user_name" type="text" readonly="true" :replay-data="inputTypeTextReplayData"/>
      </div>
      <hr>


      <h1>codemirror example</h1>
      <div>
        <FormRecordCodemirror
            name="source_code"
            replayName="source_code"
            :options="{lineNumbers: true,
        mode: 'text/javascript',
        theme: 'idea',}" save-emit-name="save" @save="saveCodemirror"></FormRecordCodemirror>
      </div>
      <div>
        <FormReplayCodemirror
            :options="{
          lineNumbers: true,
        mode: 'text/javascript',
        theme: 'idea',
        readOnly: true,
        }"
            :replay-data="codemirrorReplayData"></FormReplayCodemirror>
      </div>

      <div>
        <button type="submit">submit</button>
      </div>
    </form>


  </div>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js';
import FormRecordTextarea from './form-record-textarea.vue';
import FormRecordCodemirror from './form-record-codemirror.vue';
import FormRecordInput from './form-record-input.vue';
import FormReplayTextarea from './form-replay-textarea.vue';
import FormReplayCodemirror from './form-replay-codemirror.vue';
import FormReplayInput from './form-replay-input.vue';

export default {
  name: "vue-form-replay-sample",
  components: {
    FormRecordTextarea,
    FormRecordInput,
    FormRecordCodemirror,
    FormReplayTextarea,
    FormReplayCodemirror,
    FormReplayInput
  },

  data() {
    return {
      sourceCodePointer: 1,
      userNamePointer: 1,
      textareaReplayData: {},
      inputTypeTextReplayData: {},
      codemirrorReplayData: {},
    };
  },

  methods: {
    saveTextarea(data/*, replayName, tags*/) {
      if (Object.keys(data).length === 0) {
        return;
      }
      this.textareaReplayData = Object.assign({}, this.textareaReplayData, data);
    },

    saveInputTypeText(data/*, replayName, tags*/) {
      if (Object.keys(data).length === 0) {
        return;
      }
      this.inputTypeTextReplayData = Object.assign({}, this.inputTypeTextReplayData, data);
    },

    saveCodemirror(data/*, replayName, tags*/) {
      if (Object.keys(data).length === 0) {
        return;
      }
      this.codemirrorReplayData = Object.assign({}, this.codemirrorReplayData, data);
    }
  }
}
</script>

<style scoped>

</style>
