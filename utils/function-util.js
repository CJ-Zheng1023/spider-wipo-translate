module.exports = {
    debounce(delay, action){
        var flag = null
        return function(){
            var args = arguments, self = this
            clearTimeout(flag)
            flag = setTimeout(() => {
                action.apply(self, args)
            }, delay)
        }
    }
}