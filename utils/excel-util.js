var xlsx = require('node-xlsx')
var fs = require('fs')
module.exports = {
    parser(start, end){
        var obj = xlsx.parse(__dirname+'/data.xlsx')
        var excelObj=obj[2].data, length = excelObj.length
        var exportData = []
        for(var i = start; i < end; i ++){
            var arr = [], item = excelObj[i]
            arr.push(item[0], item[1], item[2], item[3], item[4])
            exportData.push(arr)
        }
        return exportData
    },
    writer(exportData){
        var buffer = xlsx.build([
            {
                name: 'sheet1',
                data: exportData
            }
        ])
        fs.writeFileSync('output.xlsx', buffer, {flag: 'a+'})
    }
}