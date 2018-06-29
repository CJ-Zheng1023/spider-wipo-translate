module.exports = {
    main: {
        hostname: 'patentscope.wipo.int',
        port: 80,
        path: '/translate/demoNmt.jsf',
        method: 'GET',
        headers: {
            'Host': 'patentscope.wipo.int',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            'Cookie': '_ga=GA1.2.1036694106.1530277665; _gid=GA1.2.38006842.1530277665; ABIW=balancer.cms31; wipo_language=zh; '
        }

    },
    translation: {
        hostname: 'patentscope.wipo.int',
        port: 80,
        path: '/translate/demoNmt.jsf',
        method: 'POST',
        headers: {
            'Referer': 'http://patentscope.wipo.int/translate/demoNmt.jsf',
            'Host': 'patentscope.wipo.int',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            //'Cookie': '_ga=GA1.2.1036694106.1530277665; _gid=GA1.2.38006842.1530277665; ABIW=balancer.cms31; wipo_language=zh; JSESSIONID=B5AB70E9DA22389157AC635F05348472.smt2'
            //'Cookie': 'JSESSIONID=A152EACA0F9D589968A0D7BDD5381194.smt4; _ga=GA1.2.1036694106.1530277665; _gid=GA1.2.38006842.1530277665; ABIW=balancer.cms31; wipo_language=zh'
        }
    }

}