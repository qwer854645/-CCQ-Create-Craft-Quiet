// 首次登录：发放 FTB 任务书
PlayerEvents.loggedIn(event => {
  let player = event.player
  let data = player.persistentData
  if (data.getBoolean('ccq_quest_book_given')) return

  data.putBoolean('ccq_quest_book_given', true)
  player.give('ftbquests:book')
})
