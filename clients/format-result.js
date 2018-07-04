var result = `选的翻译结果----clms:magnetic separator

包的翻译结果----clms:bag

通信的翻译结果----clms:communication

示的翻译结果----clms:demonstration instrument

括的翻译结果----clms:bracken

剩余的翻译结果----clms:rest

表的翻译结果----clms:watch

项的翻译结果----clms:item

链接的翻译结果----clms:link

信道的翻译结果----abs:channel

操的翻译结果----clms:operation

接收的翻译结果----clms:receiving device

信道的翻译结果----kw:channel

提供商的翻译结果----clms:provider

信的翻译结果----clms:message

提供商的翻译结果----abs:provider

费的翻译结果----clms:fee

标识是否的翻译结果----clms:identifying whether or not

余额的翻译结果----clms:balance

道的翻译结果----clms:channel

触发的翻译结果----abs:trigger

客户的翻译结果----clms:customer

预付的翻译结果----clms:prepaid card

跃的翻译结果----clms:jump

应的翻译结果----clms:stress

充值的翻译结果----kw:filling value

同时激活的翻译结果----clms:simultaneous activation

户的翻译结果----clms:household

逻辑确定的翻译结果----clms:logical determination

信道确定的翻译结果----clms:channel determination

电信服务的翻译结果----clms:telecommunication service

电信服务的翻译结果----abs:telecommunication service

后付费的翻译结果----clms:post-payment

货币值的翻译结果----clms:currency value

内容操作的翻译结果----clms:content operation

值的翻译结果----clms:value

支付量的翻译结果----clms:payment amount

自动充值的翻译结果----clms:automatic recharging

相对应的翻译结果----clms:corresponding

后付的翻译结果----clms:rear pair

存储的翻译结果----clms:storage

账户的翻译结果----abs:account

查询链接的翻译结果----clms:query link

费客的翻译结果----clms:fisher

量的翻译结果----clms:measuring instrument

计费系统的翻译结果----clms:billing system

建立的翻译结果----clms:building

执行触发的翻译结果----clms:executing a trigger

调度条件的翻译结果----clms:
预付费的翻译结果----abs:prepaid card

执行日期的翻译结果----clms:execution date

筹资的翻译结果----abs:financing material

阈值量的翻译结果----clms:
响应的翻译结果----clms:response

信道配置的翻译结果----clms:
成功的翻译结果----clms:success

执行的翻译结果----clms:execution

充值的翻译结果----abs:filling value

扣除的翻译结果----clms:deduction

逻辑的翻译结果----clms:
激活的翻译结果----clms:activation

调节的翻译结果----clms:adjustment

被激活的翻译结果----clms:
账户的翻译结果----clms:account

相关联的翻译结果----clms:
充值状态的翻译结果----clms:charge state

确定应用的翻译结果----clms:determination application

活跃的翻译结果----clms:active

信道激活的翻译结果----clms:
配置记录的翻译结果----clms:configuration record

充值量的翻译结果----clms:recharge amount

日历日期的翻译结果----clms:calendar date

存储表示的翻译结果----clms:storage representation

数据字段的翻译结果----clms:data field

充的翻译结果----clms:filling machine

定期调度的翻译结果----clms:periodic scheduling

筹资的翻译结果----clms:financing material

预付费的翻译结果----clms:prepaid card

可操作的翻译结果----clms:operable

信道的翻译结果----clms:channel

调度的翻译结果----clms:scheduling

触发的翻译结果----clms:trigger

标识符的翻译结果----clms:identifier

值支付的翻译结果----clms:value payment

充值条件的翻译结果----clms:recharging conditions

付费账户的翻译结果----clms:payment account

充值的翻译结果----clms:filling value

客户账户的翻译结果----clms:customer account`

var r = result.replace(/\n/gi, ' ').replace(/[\u4E00-\u9FFF]+/g, '').replace(/----/g, '').replace(/(clms|kw|abs): /g, '')
console.log(r)