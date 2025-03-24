/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  const milisec = new Date(date);
  return milisec.getTime();
}

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  const day = new Date(date);
  let hour = day.getHours();
  let minute = day.getMinutes();
  let second = day.getSeconds();
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  if (second < 10) second = `0${second}`;
  const timeStr = `${hour}:${minute}:${second}`;
  return timeStr;
}

/**
 * Returns the name of the day of the week for a given date string.
 *
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  const day = new Date(date);
  const weekday = day.getDay();
  let res;
  if (weekday === 0) {
    res = 'Sunday';
  }
  if (weekday === 1) {
    res = 'Monday';
  }
  if (weekday === 2) {
    res = 'Tuesday';
  }
  if (weekday === 3) {
    res = 'Wednesday';
  }
  if (weekday === 4) {
    res = 'Thursday';
  }
  if (weekday === 5) {
    res = 'Friday';
  }
  if (weekday === 6) {
    res = 'Saturday';
  }
  return res;
}

/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  const day = new Date(date);
  const weekday = day.getDay();
  const msPerDay = 24 * 60 * 60 * 1000;
  let res;
  switch (weekday) {
    case 0:
      res = new Date(day.getTime() + 5 * msPerDay);
      break;
    case 1:
      res = new Date(day.getTime() + 4 * msPerDay);
      break;
    case 2:
      res = new Date(day.getTime() + 3 * msPerDay);
      break;
    case 3:
      res = new Date(day.getTime() + 2 * msPerDay);
      break;
    case 4:
      res = new Date(day.getTime() + 1 * msPerDay);
      break;
    case 5:
      res = new Date(day.getTime() + 7 * msPerDay);
      break;
    case 6:
      res = new Date(day.getTime() + 6 * msPerDay);
      break;
    default:
      break;
  }
  return res;
}

/**
 * Returns the number of days in a specified month and year.
 *
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(month, year) {
  let res;
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    res = 31;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    res = 30;
  }
  if (month === 2 && year % 4 === 0) {
    res = 29;
  }
  if (month === 2 && year % 4 !== 0) {
    res = 28;
  }
  return res;
}

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const date1 = new Date(dateStart);
  const date2 = new Date(dateEnd);
  const day = 1000 * 60 * 60 * 24;
  const timeDiff = date2.getTime() - date1.getTime();
  const dayDiff = Math.round(timeDiff / day) + 1;
  return dayDiff;
}

/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 *
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  const date1 = new Date(date);
  const time1 = date1.getTime();
  const date2 = new Date(period.start);
  const time2 = date2.getTime();
  const date3 = new Date(period.end);
  const time3 = date3.getTime();
  let res;
  if (time1 >= time2 && time1 <= time3) {
    res = true;
  } else res = false;
  return res;
}

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 *
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(date) {
  const data = new Date(date);
  const year = data.getUTCFullYear();
  const month = data.getUTCMonth() + 1;
  const day = data.getUTCDate();
  let hour = data.getUTCHours();
  let minute = data.getUTCMinutes();
  let second = data.getUTCSeconds();
  let res;
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  if (hour < 12) {
    res = `${month}/${day}/${year}, ${hour}:${minute}:${second} AM`;
  }
  if (hour > 12) {
    hour -= 12;
    res = `${month}/${day}/${year}, ${hour}:${minute}:${second} PM`;
  }
  if (hour === 12) {
    res = `${month}/${day}/${year}, ${hour}:${minute}:${second} PM`;
  }
  return res;
}

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 *
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(month, year) {
  const days = getCountDaysInMonth(month, year);
  let res = 0;
  for (let i = 1; i <= days; i += 1) {
    if (
      new Date(year, month - 1, i).getDay() === 6 ||
      new Date(year, month - 1, i).getDay() === 0
    ) {
      res += 1;
    }
  }
  return res;
}

/**
 * Returns the week number of the year for a given date.
 * The first week is the one that falls on January 1.
 * The first day of the week is Monday.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(date) {
  const year = date.getUTCFullYear();
  const startDay = new Date(year, 0, 1);
  const daysAmount = Math.floor(date - startDay) / (1000 * 60 * 60 * 24) + 1;
  let weekNumber;
  if (startDay.getDay() === 1) {
    weekNumber = daysAmount / 7;
  } else if (startDay.getDay() === 2) {
    weekNumber = (daysAmount + 1) / 7;
  } else if (startDay.getDay() === 3) {
    weekNumber = (daysAmount + 2) / 7;
  } else if (startDay.getDay() === 4) {
    weekNumber = (daysAmount + 3) / 7;
  } else if (startDay.getDay() === 5) {
    weekNumber = (daysAmount + 4) / 7;
  } else if (startDay.getDay() === 6) {
    weekNumber = (daysAmount + 5) / 7;
  } else if (startDay.getDay() === 0) {
    weekNumber = (daysAmount + 6) / 7;
  }
  return Math.ceil(weekNumber);
}

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const fridayThe13th = new Date(year, month, 13);
  let res;
  if (day < 13 && fridayThe13th.getDay() === 5) {
    res = fridayThe13th;
  } else {
    for (let i = 0; i <= 11 - month; i += 1) {
      const nextDayThe13 = new Date(year, month + i, 13);
      if (nextDayThe13.getDay() === 5) {
        res = nextDayThe13;
        break;
      }
    }
  }
  return res;
}

/**
 * Returns the quarter of the year for a given date.
 *
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  const mounth = new Date(date);
  const currentMounth = mounth.getMonth();
  let res;
  if (currentMounth === 0 || currentMounth === 1 || currentMounth === 2) {
    res = 1;
  }
  if (currentMounth === 3 || currentMounth === 4 || currentMounth === 5) {
    res = 2;
  }
  if (currentMounth === 6 || currentMounth === 7 || currentMounth === 8) {
    res = 3;
  }
  if (currentMounth === 9 || currentMounth === 10 || currentMounth === 11) {
    res = 4;
  }
  return res;
}

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 *
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */
function getWorkSchedule(/* period, countWorkDays, countOffDays */) {
  throw new Error('Not implemented');
}

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 *
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  const data = new Date(date);
  const year = data.getFullYear();
  let res;
  if (year % 4 === 0) {
    res = true;
  } else res = false;
  return res;
}

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
