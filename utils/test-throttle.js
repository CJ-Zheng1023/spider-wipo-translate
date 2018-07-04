var throttle = function(cycle, action){
    var flag = 0
    return function(){
        var current = +new Date()
        if(current - flag > cycle){
            flag = current
            return action.apply(this, arguments)
        }else{
            return false
        }
    }
}
var watcher = function(index){
    var r = Math.floor(Math.random() * 10)
    console.log(r)
    return index === r
}
var throttler = throttle(3000, watcher)
var flag = true
while(flag){
    flag = !throttler(3)
}
console.log('done')