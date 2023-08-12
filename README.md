# Penyo Portal RD

Penyo Portal RD 是 Penyo Portal 存储在 MongoDB 中的 raw data。

## 表设计

|表名|描述|
|-|-|
|articles|文章表。|
|collections|收藏品表。|
|projects|项目表。|
|programs|节目表。|

*文章的记录：*

```json
{
    "id": "示例 ID",
    "title": "示例标题",
    "date": {
        "$date": "1970-01-01T00:00:00.000Z"
    },
    "category": "主题长文章 | 随笔杂谈 | 评论 | 技术参考",
    "body": "示例正文。"
}
```

*收藏品的记录：*

```json
{
    "category": "figure",
    "name": "示例名称",
    "subtitle": "示例副标题",
    "description": "示例描述。",
    "picture": {
        "url": "./sample.jpg"
    },
    "detail": {
        "url": "https://example.com"
    }
}
```

*项目的记录：*

```json
{
    "name": "示例名称",
    "description": "示例描述。",
    "picture": {
        "url": "./sample.jpg"
    },
    "detail": {
        "url": "https://example.com"
    }
}
```

*节目的记录：*

```json
{
    "name": "示例名称",
    "translatedName"?: "示例译名",
    "originalSinger": "示例歌手",
    "releaseDate": {
        "$date": "1970-01-01T00:00:00.000Z"
    },
    "urls": [
        [ "示例服务商名", "https://example.com" ]
    ]
}
```
