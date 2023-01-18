/**
 *
 * @param num 数量
 * @returns 单位转换后数量
 */
export const getUnitTransition = (num: number | string) => {
  if (typeof num === 'string') {
    num = parseInt(num);
  }
  if (num > 10000) {
    num = (num / 10000).toFixed(2) + '万';
  } else if (num > 100000000) {
    num = (num / 100000000).toFixed(2) + '亿';
  }
  return num;
};

/**
 * @param time 时间
 * @returns 转换后的时间
 */
export const getTimeTransition = (time: number): string => {
  time = time / 1000;
  let m: number | string = Math.floor(time / 60);
  let s: number | string = Math.floor(time / 60) % 60;
  if (s < 10) {
    s = s.toString().padStart(2, '0');
  }
  if (m < 10) {
    m = m.toString().padStart(2, '0');
  }
  return m + ':' + s;
};
