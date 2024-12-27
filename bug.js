```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id": ObjectId("651d7d7d7d7d7d7d7d7d7d7d")}, {"$inc": {"counter": "1"}});
```