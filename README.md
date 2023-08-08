# Penyo Portal RD

Penyo Portal RD 是 Penyo Portal 存储在 MongoDB 中的 raw data。

## 表设计

|表名|描述|
|-|-|
|articles|文章表。|
|collections|收藏品表。|

*文章的记录：*

```json
{
    "id": "示例ID",
    "title": "示例标题",
    "date": {
        "$date": "1970-01-01T00:00:00.000+00:00"
    },
    "category": "主题长文章|随笔杂谈|评论|技术参考",
    "body": "示例正文。"
}
```

*收藏品的记录：*

```json
{
    "category": "figure",
    "name": "示例名称",
    "subtitle": "示例副标题",
    "description": "示例描述",
    "picture": {
        "url": "./sample.jpg"
    },
    "detail": {
        "url": "https://example.com"
    }
}
```
