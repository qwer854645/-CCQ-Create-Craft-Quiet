# 已停用的 OEI 规则

按用户要求停用 netherexp 的两条替换；原始规则保留如下。说明文件位于 data 外，OEI 不会读取。恢复时再放回 replacements 的 JSON 数组。

```json
[
  {
    "_comment": "原有 netherexp 生疣猪肉规则，保留映射；源模组当前是否存在应以注册表为准。",
    "matchItems": [
      "netherexp:hogham"
    ],
    "resultItems": "mynethersdelight:hoglin_loin"
  },
  {
    "_comment": "原有 netherexp 熟生疣猪肉规则，保留映射；源模组当前是否存在应以注册表为准。",
    "matchItems": [
      "netherexp:cooked_hogham"
    ],
    "resultItems": "mynethersdelight:cooked_loin"
  }
]
```
