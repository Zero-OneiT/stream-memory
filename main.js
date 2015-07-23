var stream = require('stream');
var util = require('util');
var Writable = stream.Writable || require('readable-stream').Writable;

function MemStrm(options) {

	if (!(this instanceof MemStrm)) {
		return new MemStrm(options);
	}

	Writable.call(this, options);
	this.memStore = new Buffer('');
}

util.inherits(MemStrm, Writable);

MemStrm.prototype.getStore = function(name){
  return this.memStore;
};

MemStrm.prototype._write = function (chunk, enc, callback) {

	var buffer = (Buffer.isBuffer(chunk)) ?
		chunk :
		new Buffer(chunk, enc);


	this.memStore = Buffer.concat([this.memStore, buffer]);
	callback();
};


module.exports = MemStrm;
