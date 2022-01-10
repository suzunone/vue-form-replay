<template>
  <input v-bind="formBind" v-model="textData" @submit="onSubmit" />
</template>

<script>
import FormRecordMixin from "@/mixins/form-record";
import FormBindMixin from "@/mixins/form-bind";
export default {
  name: "form-record-input",
  mixins:[FormRecordMixin, FormBindMixin],
}
</script>

<style scoped>

</style>
