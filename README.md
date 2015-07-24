# Stream Memory

This is a NPM package to convert any string to a stream, is used to create a memory stream between two streaming. This is useful when you don't want to create a file from stream and after passed to another stream process.

The case where I use this is in this two cases:

1. Create a request for get am image from other pipe and passed it directly to a pdf converter.
2. Create a streaming json for websocket implementation from node to angular.
