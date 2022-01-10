<template>
  <textarea v-bind="formBind" v-model="textData" @submit="onSubmit"></textarea>
</template>

<script>
import FormRecordMixin from "@/mixins/form-record";
import FormBindMixin from "@/mixins/form-bind";
export default {
  name: "form-record-textarea",
  mixins:[FormRecordMixin, FormBindMixin],
}
</script>

<style scoped>

</style>
