var result = `接收的翻译结果----clms:receiving device 
 
执行的翻译结果----clms:execution 
 
并联的翻译结果----clms:parallel connection 
 
集成电路的翻译结果----abs:integrated circuit 
 
n型的翻译结果----clms:n-type 
 
内部的翻译结果----clms: 
p型的翻译结果----clms:p-type 
 
阻抗的翻译结果----clms:impedance 
 
倒数的翻译结果----clms: 
数据通信的翻译结果----clms:data communication 
 
发射的翻译结果----clms:launching device 
 
接近的翻译结果----clms:approach 
 
数据信号的翻译结果----kw:data signal 
 
相关联的翻译结果----clms:associated 
 
无线装置的翻译结果----clms:wireless device 
 
配置的翻译结果----abs:configuration 
 
接收器的翻译结果----abs: 
跨导的翻译结果----clms:transconductance 
 
止的翻译结果----clms: 
芯片的翻译结果----clms: 
串联装置的翻译结果----clms:series connection device 
 
多路分用的翻译结果----clms: 
拓扑结构的翻译结果----clms: 
晶体管的翻译结果----clms:transistor 
 
集成电路的翻译结果----clms:integrated circuit 
 
多路复用的翻译结果----clms:multi-path multiplexing 
 
扩展的翻译结果----clms:expansion 
 
输出摆动的翻译结果----clms:output swing 
 
深的翻译结果----clms:deep 
 
电子装置的翻译结果----abs: 
偏置电流的翻译结果----clms:bias current 
 
输出的翻译结果----clms:output 
 
带宽的翻译结果----clms:bandwidth 
 
延迟装置的翻译结果----clms:delay device 
 
推挽式的翻译结果----clms:push-pull type 
 
电压的翻译结果----clms:voltage 
 
数据信号的翻译结果----abs:data signal 
 
金属氧化物半导体的翻译结果----clms:metal oxide semiconductor 
 
静态值的翻译结果----clms:static value 
 
电压摆动的翻译结果----clms:voltage swing 
 
静态点的翻译结果----clms:static point 
 
节点接近的翻译结果----clms:node approach 
 
箝位电路的翻译结果----clms:clamping circuit 
 
输出级的翻译结果----clms:output stage 
 
截止区的翻译结果----clms:cut-off zone 
 
并行的翻译结果----clms:parallel line 
 
配置的翻译结果----clms:configuration 
 
逻辑低的翻译结果----clms:logic low 
 
模拟节点的翻译结果----clms:simulation node 
 
电子装置的翻译结果----clms:electronic device 
 
箝的翻译结果----clms:clamp 
 
数据信号的翻译结果----clms:data signal 
 
接收器的翻译结果----clms:receiver `

var r = result.replace(/\n/gi, ' ').replace(/[\u4E00-\u9FFF]+/g, '').replace(/----/g, '').replace(/(clms|kw|abs): /g, '')
console.log(r)