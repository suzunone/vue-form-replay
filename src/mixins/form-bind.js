export default {
  props: {
    name: {
      type: String
    },
    dataClass: {
      type: String, Array, Object
    },
    dataId: {
      type: String
    },
    rows: {
      type: String
    },
    type: {
      type: String
    },
    cols: {
      type: String
    },
    autocomplete: {
      type: String
    },
    autofocus: {
      type: String
    },
    disabled: {
      type: String
    },
    maxlength: {
      type: String
    },
    minlength: {
      type: String
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: String
    },
    required: {
      type: String
    },
    spellcheck: {
      type: String
    },
    wrap: {
      type: String
    },
    dataStyle: {
      type: String
    },

    accept: {
      type: String
    },
    alt: {
      type: String
    },
    capture: {
      type: String
    },
    checked: {
      type: String
    },
    dirname: {
      type: String
    },
    form: {
      type: String
    },
    formaction: {
      type: String
    },
    formenctype: {
      type: String
    },
    formmethod: {
      type: String
    },
    formnovalidate: {
      type: String
    },
    formtarget: {
      type: String
    },
    height: {
      type: String
    },
    list: {
      type: String
    },
    max: {
      type: String
    },
    min: {
      type: String
    },
    multiple: {
      type: String
    },
    pattern: {
      type: String
    },
    size: {
      type: String
    },
    src: {
      type: String
    },
    step: {
      type: String
    },
    width: {
      type: String
    },

    value: {
      type: String
    },
  },
  data() {
    return {
      formBind: {}
    };
  },

  created() {
    if (this.dataClass) {
      this.formBind['class'] = this.dataClass;
    }
    if (this.name) {
      this.formBind['name'] = this.name;
    }
    if (this.dataId) {
      this.formBind['id'] = this.dataId;
    }
    if (this.dataStyle) {
      this.formBind['style'] = this.dataStyle;
    }
    if (this.rows) {
      this.formBind['rows'] = this.rows;
    }
    if (this.type) {
      this.formBind['type'] = this.type;
    }
    if (this.cols) {
      this.formBind['cols'] = this.cols;
    }
    if (this.autocomplete) {
      this.formBind['autocomplete'] = this.autocomplete;
    }
    if (this.autofocus) {
      this.formBind['autofocus'] = this.autofocus;
    }
    if (this.disabled) {
      this.formBind['disabled'] = this.disabled;
    }
    if (this.maxlength) {
      this.formBind['maxlength'] = this.maxlength;
    }
    if (this.minlength) {
      this.formBind['minlength'] = this.minlength;
    }
    if (this.placeholder) {
      this.formBind['placeholder'] = this.placeholder;
    }
    if (this.readonly) {
      this.formBind['readonly'] = this.readonly;
    }
    if (this.required) {
      this.formBind['required'] = this.required;
    }
    if (this.spellcheck) {
      this.formBind['spellcheck'] = this.spellcheck;
    }
    if (this.wrap) {
      this.formBind['wrap'] = this.wrap;
    }

    if (this.accept) {
      this.formBind['accept'] = this.accept;
    }
    if (this.alt) {
      this.formBind['alt'] = this.alt;
    }
    if (this.capture) {
      this.formBind['capture'] = this.capture;
    }
    if (this.checked) {
      this.formBind['checked'] = this.checked;
    }
    if (this.dirname) {
      this.formBind['dirname'] = this.dirname;
    }
    if (this.form) {
      this.formBind['form'] = this.form;
    }
    if (this.formaction) {
      this.formBind['formaction'] = this.formaction;
    }
    if (this.formenctype) {
      this.formBind['formenctype'] = this.formenctype;
    }
    if (this.formmethod) {
      this.formBind['formmethod'] = this.formmethod;
    }
    if (this.formnovalidate) {
      this.formBind['formnovalidate'] = this.formnovalidate;
    }
    if (this.formtarget) {
      this.formBind['formtarget'] = this.formtarget;
    }
    if (this.height) {
      this.formBind['height'] = this.height;
    }
    if (this.list) {
      this.formBind['list'] = this.list;
    }
    if (this.max) {
      this.formBind['max'] = this.max;
    }
    if (this.min) {
      this.formBind['min'] = this.min;
    }
    if (this.multiple) {
      this.formBind['multiple'] = this.multiple;
    }
    if (this.pattern) {
      this.formBind['pattern'] = this.pattern;
    }
    if (this.size) {
      this.formBind['size'] = this.size;
    }
    if (this.src) {
      this.formBind['src'] = this.src;
    }
    if (this.step) {
      this.formBind['step'] = this.step;
    }
    if (this.width) {
      this.formBind['width'] = this.width;
    }

    if (this.value) {
      this.formBind['value'] = this.value;
    }
  },
};
