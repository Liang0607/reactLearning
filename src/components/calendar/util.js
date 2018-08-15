/*给日期加0，如'2014-2-3'改为'2014-02-03', 
  用法：t.replace(reg_date_fomat, '-0') */
var reg_date_fomat = /-(?=(\w(\W|\b)))/g;

//是否是闰年，闰年返回1，否则返回0
function is_leap(year) {
	let res;
	return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
}
//返回12个月的天数数组
function dayNum(year) {
	return ['', 31, 28 + is_leap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
//处理时间，获取到一个包含年月日时分秒和星期的对象
function getDetailTime(date) {
	let time = date ? new Date(date) : new Date();
	let year = time.getFullYear();
	let month = time.getMonth() + 1;
	let day = time.getDate();
	let weekDay = time.getDay();
	let hour = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	return {
		year: year,
		month: month,
		day: day,
		weekDay: weekDay,
		hour: hour,
		minutes: minutes,
		seconds: seconds
	}
}
//处理该月天数，以及之前和之后的日期
function getCells(time) {
	var arr = [], year = time.year, month = time.month;
	let days = dayNum(year)[month];
	let lastMonth = month == 1 ? (year - 1) + '-12' : year + '-' + (month - 1);
	let lastMonthDays = (month == 1 ? 31 : dayNum(year)[month - 1]);
	let nextMonth = month == 12 ? (year + 1) + '-1' : year + '-' + (month + 1);
	let firstDayisWeek = getDetailTime(year + '-' + month).weekDay;
	let rows = Math.ceil((days + firstDayisWeek) / 7);
	let total = rows < 6 ? (rows + 1)*7 : rows*7;	/*一共多少行，小于6行，则加一*/
	for (let i = firstDayisWeek - 1; i > -1; i--) {
		let obj = {};
		obj.time = lastMonth + '-' + (lastMonthDays - i);
		obj.text = lastMonthDays - i;
		obj.type = 'last';
		arr.push(obj);
	}
	for (let i = 1, len = days + 1; i < len; i++ ) {
		let obj = {};
		obj.time = year + '-' + month + '-' + (i);
		obj.text = i;
		obj.type = 'cur';
		arr.push(obj);
	}
	for (let i = 0, len = total - days - firstDayisWeek; i < len; i++) {
		let obj = {};
		obj.time = nextMonth + '-' + (i + 1);
		obj.text = i + 1;
		obj.type = 'next';
		arr.push(obj);
	}
	return arr;
}
/*把天数数组分割成7个一组的一个二维数组 */
function dealTimes(date) {
	let t = getDetailTime(date), o = getCells(t);
	return splitArr(o, 7);
}
//分割数组，如[1,2,3,4,5,6]分割成[[1,2], [3,4], [5,6]]
function splitArr(arr, n) {
	let i = 0, len = arr.length / n;
	let ar = [];
	for (; i < len; i++) {
		ar.push(arr.slice(i*n, (i + 1)*n));
	}
	return ar;
}

export {
	getCells,
	getDetailTime,
	dealTimes,
	reg_date_fomat
}