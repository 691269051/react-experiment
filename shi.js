function reverse(str, sign) {
    let strCb = ''
    let flag = 0
    while (str.length) {
        flag = str.lastIndexOf(sign)
        if (flag === -1) {
            strCb = strCb + sign + str
            str = ''
        }
        strCb = strCb + str.slice(flag)
        str = str.slice(0, flag)
    }
    return strCb.slice(1)
}

reverse('qqqq.wwww.ddddd.dddd')
