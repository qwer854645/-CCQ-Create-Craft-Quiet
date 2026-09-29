// 雷石东语：语言由 ccq_core pack.mcmeta 注册；翻译由本脚本从 kubejs/assets 注入

ClientEvents.lang('zh_ls', event => {
  let index = JsonIO.read('kubejs/assets/kubejs/lang/leishidong_index.json')
  if (index == null || index.files == null) {
    console.error('[雷石东语] 找不到索引 kubejs/assets/kubejs/lang/leishidong_index.json')
    return
  }

  let files = 0
  let keys = 0
  let list = index.files
  for (let i = 0; i < list.length; i++) {
    let data = JsonIO.read(list[i])
    if (data == null) continue
    files++
    try {
      if (data.entrySet) {
        let it = data.entrySet().iterator()
        while (it.hasNext()) {
          let entry = it.next()
          let k = entry.getKey()
          let v = entry.getValue()
          if (k == null || v == null) continue
          let ks = String(k)
          let vs = String(v)
          if (ks.length === 0 || vs.length === 0) continue
          event.add(ks, vs)
          keys++
        }
      } else {
        event.addAll(data)
      }
    } catch (err) {
      console.error('[雷石东语] 加载失败 ' + list[i] + ': ' + err)
    }
  }

  console.info('[雷石东语] kubejs 补充加载 ' + files + ' 个文件，共 ' + keys + ' 条')
})
