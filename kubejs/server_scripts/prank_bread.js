/**
 * 可疑的面包：吃下 5 秒后在玩家处（抬高 2 格）生成 4 只闪电苦力怕，
 * 并连续三次用红色消息输出「<玩家名> 你被骗了~」
 */
ItemEvents.foodEaten('ccq_core:prank_bread', (event) => {
  const player = event.player
  const server = event.server

  server.scheduleInTicks(100, () => {
    if (!player || !player.isAlive()) {
      return
    }

    const name = player.username
    const offsets = [
      [1.0, 0.0],
      [-1.0, 0.0],
      [0.0, 1.0],
      [0.0, -1.0],
    ]
    for (const [dx, dz] of offsets) {
      server.runCommandSilent(
        `execute as ${name} at @s run summon minecraft:creeper ~${dx} ~2 ~${dz} {powered:1b}`
      )
    }

    const msg = Text.of(`${name} 你被骗了~`).red()
    for (let i = 0; i < 3; i++) {
      server.tell(msg)
    }
  })
})
