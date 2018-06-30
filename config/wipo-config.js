module.exports = {
    main: {
        hostname: 'patentscope.wipo.int',
        port: 80,
        path: '/translate/translate.jsf',
        method: 'GET',
        headers: {
            'Host': 'patentscope.wipo.int',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            'Cookie': '_ga=GA1.2.1036694106.1530277665; _gid=GA1.2.38006842.1530277665; '
        }

    },
    translation: {
        hostname: 'patentscope.wipo.int',
        port: 80,
        path: '/translate/translate.jsf',
        method: 'POST',
        headers: {
            'Referer': 'http://patentscope.wipo.int/translate/translate.jsf',
            'Host': 'patentscope.wipo.int',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Origin': 'http://patentscope.wipo.int',
            'Faces-Request': 'partial/ajax',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7,ko;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache'
        }
    }

}