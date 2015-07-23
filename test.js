var Memory = require('./');

var testing = {
    first: 1,
    second: '2',
    third: '3'
};

var MemStream = new Memory();

MemStream.write(JSON.stringify(testing));
var data = '';


MemStream.on('finish', function(){
    console.log(MemStream.getStore().toString());
});


MemStream.end();


