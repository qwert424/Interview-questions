// 参数归一化 就是对多种情况进行归一成一种情况最多的情况 实现代码的可读性和可维护性

// 例子：实现日期的格式化
function formateDate(date, formatter, isPad = false) {
    // 针对第二个参数formatter的多种情况 我们写一个辅助函数 来对函数进行归一化处理
    formatter = getFormatter(formatter);
    const dataInfo = isPad ? {
        yyyy: date.getFullYear().toString().padStart(4, '0'),
        MM: (date.getMonth() + 1).toString().padStart(2, '0'),
        dd: date.getDate().toString().padStart(2, '0'),
        HH: date.getHours().toString().padStart(2, '0'),
        mm: date.getMinutes().toString().padStart(2, '0'),
        ss: date.getSeconds().toString().padStart(2, '0'),
        ms: date.getMilliseconds().toString().padStart(3, '0'),
    } : {
        yyyy: date.getFullYear(),
        MM: date.getMonth() + 1,
        dd: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds(),
        ms: date.getMilliseconds(),
    }
    return formatter(dataInfo)
}

// 参数归一化 统一返回函数
function getFormatter(formatter) {
    if (typeof formatter === 'function') {
        return formatter;
    } else if (typeof formatter !== 'string') {
        throw new Error('formatter参数类型错误');
    }
    if (formatter === 'data') {
        formatter = 'yyyy-MM-dd'
    }
    if (formatter === 'datatime') {
        formatter = 'yyyy-MM-dd HH:mm:ss'
    }
    return (dateInfo) => {
        const { yyyy, MM, dd, HH, mm, ss, ms } = dateInfo
        return formatter.replace('yyyy', yyyy).replace('MM', MM).replace('dd', dd).replace('HH', HH).replace('mm', mm).replace('ss', ss).replace('ms', ms);
    }
}

//2024-1-19
formateDate(new Date(), 'data');

//2024-1-19 14:9:34
formateDate(new Date(), 'datatime');

//2024-01-19
formateDate(new Date(), 'data', true);

//2024-01-19 14:09:34
formateDate(new Date(), 'datatime', true);

//2024年01月19日 14:09:34.336
formateDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss.ms', true);

//2024年1月19日 14:9:34.336
formateDate(new Date('2022/1/1'), (dateInfo) => {
    const { year } = dateInfo;
    const thisYear = new Date().getFullYear();
    if (year < thisYear) {
        return `${thisYear - year}年前`
    } else if (thisYear < year) {
        return `${year - thisYear}年后`
    }
    return '今年'
});