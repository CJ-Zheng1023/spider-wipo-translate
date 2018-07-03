module.exports = {
    /**
     * 延迟执行工具方法
     * @param delay   延迟时间
     * @param action  要执行的动作
     * @returns {Function}
     */
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