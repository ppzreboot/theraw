Component({
  properties: {
    options: Array,
    placeholder: String,
    value: {
      type: null,
      optionalTypes: [String, Number, Object], // null: Object
    },
  },
  data: {
    label: null,
  },
  observers: {
    value() {
      this.update_label()
    }
  },
  methods: {
    onchange(evt) {
      this.triggerEvent('change', this.data.options[evt.detail.value].value)
    },
    update_label() {
      const val = this.data.value
      const opts = this.data.options
      const option = opts.find(item => item.value == val)

      this.setData({
        label: (option?.label ?? this.data.placeholder) || '请选择'
      })
    }
  },
  lifetimes: {
    ready() {
      this.update_label()
    },
  },
})
