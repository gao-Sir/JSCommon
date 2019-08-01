/**
 * 
 * @authors Your Name (gaoshili1990@163.com)
 * @date    2019-08-01 11:00:33
 * @version 1.0
 */


/**
  * 判断文件是否为对应的格式
  * 
  * @param fileName 需要判断的文件名或者文件路径
  * 
  * @param format 文件格式，字符串或数组
  * 
  * @return 返回bool值 true, false
  */

  function fileFormat(fileName, format) {
    if (fileName == undefined || format == undefined) {
      return false;
    }
    
    if (typeof fileName != 'string') {
      return false;
    }
    
    let fileNames = fileName.split('.');
    if (fileNames.length <= 0) {
      return false;
    }

    let fileFormat = fileNames[fileNames.length - 1];
    if (Array.isArray(format)) {
      return format.includes(fileFormat);
    } else {
      if (typeof format != 'string') {
        return false;
      } else {
        if (fileFormat == format) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  let ret = fileFormat('123.pdf', 'pdf');
  console.log('ret = ', ret);

  let ret1 = fileFormat('123.png', ['png', 'pdf']);
  console.log('ret1 = ', ret1);