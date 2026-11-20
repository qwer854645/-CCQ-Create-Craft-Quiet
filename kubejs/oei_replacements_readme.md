# OEI 物品统一规则

适用于 OneEnoughItem 1.0.10。读取器递归读取 replacements 下 JSON，顶层可为规则数组。matchItems 为来源列表，resultItems 为统一目标，rules 可控制数据与标签处理。本目录使用固定物品 ID，不使用标签来源，也没有重复来源或替换链；文件改名、按用途合并不影响物品映射。

每条 _comment 为维护说明；当前读取器只提取 matchItems/resultItems/rules，忽略此说明字段。使用严格 JSON，不使用 // 注释。

OEI 参与配方数据、物品标签的替换，并在 ItemStack 创建时应用统一映射，同时扩展相关匹配。因此检查配方覆盖范围时，应先解析 OEI 目标 ID，再判断是否缺少配方，不应按源 ID 直接重复补配方。

food_crops：农作物与种子/稻穗；food_cooking：面粉面团和熟食；food_brewing：啤酒花；food_crates：储藏箱；metal_sheets：金属板；metal_steel：钢材；gems：宝石；legacy_review：保留待审的旧规则。

后续按用户要求停用 netherexp 两条规则（原文保留于 oei_disabled_rules.md），并将曲奇来源修正为 expandeddelight:chocolate_cookie，保留目标 minecraft:air。当前生效 27 个来源映射，已由 OEI 原生读取器验证。未修改模组、OEI缓存或cf。
