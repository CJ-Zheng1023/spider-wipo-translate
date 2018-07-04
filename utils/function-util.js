var userAgents = require('../config/user-agent')
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
    },
    /**
     * 随机抽取一个user agent
     * @returns {*}
     */
    randomUserAgent(){
        return userAgents[parseInt(Math.random() * userAgents.length)]
    },
    /**
     * 随机生成min和max范围内的数
     * @param min
     * @param max
     * @returns {number}
     */
    randomNumber(min, max){
        return Math.floor(min + Math.random() * ( max - min + 1))
    },
    /**
     * 随机生成IP
     * @returns {string}
     */
    randomIp(){
        return `${this.randomNumber(1, 255)}.${this.randomNumber(1, 255)}.${this.randomNumber(1, 255)}.${this.randomNumber(1, 255)}`
    }
}