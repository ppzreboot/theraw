exports.server_name = 'server0613'

exports.order_status_map = () => ({
  tosend: '未发货',
  sent: '已发货',
  end: '已完成',
})
exports.order_status_options = () => [
  { label: '未发货', value: 'tosend' },
  { label: '已发货', value: 'sent' },
  { label: '已完成', value: 'end' },
]
