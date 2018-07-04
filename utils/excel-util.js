var xlsx = require('node-xlsx')
var fs = require('fs')
var ADDITION = 1
module.exports = {
    /**
     * 读取excel某一行数据
     * @param line  行号
     * @returns {Array}
     */
    parser(line){
        var obj = xlsx.parse(__dirname + '/data.xlsx')
        var excelObj=obj[2].data

        var exportData = []
        var arr = [], item = excelObj[Number(line) + ADDITION]
        arr.push(item[0], item[1], item[2], item[3], item[4])
        exportData.push(arr)
        return exportData
    },
    /**
     * 写入到excel
     * @param exportData 要写入的数据
     */
    writer(exportData){
        var buffer = xlsx.build([
            {
                name: 'sheet1',
                data: exportData
            }
        ])
        fs.writeFileSync(__dirname + '/output.xlsx', buffer, {flag: 'w'})
    }
}