const event = require('events')

// let bool = event === event.EventEmitter
// console.log(bool)


// class MyEmitter extends event {
// }
// const myEmitter = new  MyEmitter();
// myEmitter.on('event', () => { 
//   console.log('an event occurred!');
// });

// myEmitter.emit('event');


//直接生成类
// const MyEmitter = require('events').EventEmitter;
// const myEmitter = new MyEmitter();
// myEmitter.once('event', function(a, b) {
//  console.log(a, b, this); 
// });
// myEmitter.emit('event', 'a', 'b');
// myEmitter.emit('event', 'aa', 'ab');


// console.log(event === event.EventEmitter);
// class myEmiter extends event{}
// const myEmitterData = new myEmiter();
// myEmitterData.on('data',function(data){
//   setTimeout(function(){
//     console.time('data事件执行了');
//     for(var i = 0 ; i< 100000; i++)
//       for(var j = 0 ; j< 100000; j++);
//     console.timeEnd('data事件执行了');
//   },2000)
// });
// myEmitterData.on('data1',(data1)=>{
//   console.log("data1事件开始执行...");
// });
// myEmitterData.emit('data',{a:1});
// myEmitterData.emit('data1',{a:1});

class myEmiter extends event{}
const myEmitterData = new myEmiter();

var b  = () => {
  console.log('max config');
}

myEmitterData.on('data',function(e){
  console.log(e);
});
// myEmitterData.removeListener('data');
function deal(e){
  console.log(e);
}
myEmitterData.on('data',b);
myEmitterData.setMaxListeners(1);

console.log(myEmitterData.getMaxListeners());

myEmitterData.emit('data','hello data!');
myEmitterData.on('data1',deal);
myEmitterData.removeListener('data1',deal);
myEmitterData.emit('data1','hello data1!');

console.log(myEmitterData.listeners('data'));
console.log(myEmitterData.listenerCount('data'));
console.log(myEmiter.defaultMaxListeners);