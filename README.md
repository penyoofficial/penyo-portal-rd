# Penyo Portal RD

Penyo Portal RD 是 Penyo Portal 存储在 MongoDB 中的 raw data。

## 表设计

|表名|描述|
|-|-|
|articles|文章表。|

*文章的记录：*

```json
{
    "id": "示例ID",
    "title": "示例标题",
    "date": {
        "$date": "1970-01-01T00:00:00.000+00:00"
    },
    "category": "主题长文章|随笔杂谈|评论|技术参考",
    "body": "<p>示例正文。</p>"
}
```
