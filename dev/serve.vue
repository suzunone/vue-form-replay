<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueFormReplaySample } from '@/entry.esm';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/idea.css';


export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  VueFormReplaySample,
  // }
});
</script>

<template>
  <div id="app">
    <vue-form-replay-sample />
  </div>
</template>
