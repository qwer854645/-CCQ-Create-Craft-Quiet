# Create Craft & Quiet

NeoForge 1.21.1 整合包配置仓库。本仓库保存整合包的自定义内容（配置、KubeJS 脚本、资源包等），**不包含** `mods/` 目录中的模组 jar 文件。

## 环境要求

| 项目 | 版本 |
|------|------|
| Minecraft | 1.21.1 |
| NeoForge | 21.1.233（见 `Create_Craft&Quiet.json`） |
| 启动器 | HMCL（推荐） |

## 仓库内容

- `config/` — 模组配置文件
- `kubejs/` — KubeJS 脚本、汉化资源与数据包
- `defaultconfigs/` — 默认配置
- `Create_Craft&Quiet.json` — 版本/启动清单
- `modlist.txt` — 模组列表（文件名）

## 使用方法

### 已有 HMCL 整合包实例

1. 克隆本仓库到本地
2. 将仓库中的 `config/`、`kubejs/` 等目录覆盖到 HMCL 整合包实例目录
3. 根据 `modlist.txt` 安装缺失的模组 jar 到 `mods/` 目录
4. 用 HMCL 启动 `Create_Craft&Quiet` 版本

### 从本仓库新建实例

1. 在 HMCL 中创建 NeoForge 1.21.1 实例
2. 将本仓库内容复制到实例目录
3. 安装 `modlist.txt` 中列出的全部模组
4. 首次启动前确保 NeoForge 版本与 `Create_Craft&Quiet.json` 一致

## 注意事项

- 模组 jar 因体积与版权原因未纳入版本控制，请自行从 Modrinth / CurseForge 或原有整合包备份中获取
- 个人存档、日志、崩溃报告等运行时文件已在 `.gitignore` 中排除
- 无对应模组的 KubeJS 汉化已移至 `kubejs/assets_orphan/`
- `resourcepacks/`、`shaderpacks/`、`tlm_custom_pack/` 未纳入本仓库，需在游戏实例中自行维护

## 第三方资源归属

`kubejs/data/minecraft/structure/end_city/` 下的结构文件（`.nbt`）来自 CurseForge 资源包 [**Vanilla Better End City**](https://www.curseforge.com/minecraft/texture-packs/vanilla-better-end-city)，版权归原作者所有。本仓库仅引用其结构数据以覆盖原版末地城生成，不包含该资源包的其他素材。

## 许可

本仓库中的自定义脚本与配置遵循各模组原作者的许可。模组本身及上述第三方资源包版权归各自作者所有。
