# MongoDB $inc operator type error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The error occurs when using a string value instead of a numeric value for the increment.

## Bug
The bug lies in the use of the `$inc` operator.  The `$inc` operator expects a numeric value.  When a string is supplied, MongoDB will not perform the increment correctly.  This might lead to unexpected results or an error, depending on the MongoDB version and settings.

## Solution
The solution involves ensuring that the increment value passed to the `$inc` operator is a number (integer or float).