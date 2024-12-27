```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("651d7d7d7d7d7d7d7d7d7d7d")}, {"$inc": {"counter": 1}});
```