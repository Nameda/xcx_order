

function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
const promise = (cb, opt = {}) => {
    return new Promise((resolve, reject) => {
        let obj = {
            success(res) { resolve(res); },
            fail(res) { reject(res); }
        };
        opt = Object.assign(opt, obj);
        typeof cb === 'function' && cb(opt);
    })
}

module.exports = {
    formatTime: formatTime,
    promise
}