const formatPhoneNumber = async function formatPhoneNumber(msisdn, format) {
  let s;
  if (msisdn == null || msisdn.length <= 8 || msisdn.length > 12) {
    return null; // invalid
  }

  let ch = msisdn.charAt(0);
  let ch2 = msisdn.charAt(1);
  if (ch == "0") {
    if (format == "FORMAT_MSISDN_VN_VIEW_0XX") {
      return msisdn;
    }
    s = msisdn.substring(1, msisdn.length);
  } else if (
    ch == "8" &&
    ch2 == "4" &&
    (msisdn.length == 11 || msisdn.length == 12)
  ) {
    if (format == "FORMAT_MSISDN_STANDARD_84XX") {
      return msisdn;
    }
    s = msisdn.substring(2, msisdn.length);
  } else {
    if (format == "FORMAT_MSISDN_SHORT_XXX") {
      return msisdn;
    }
    s = msisdn;
  }

  if (format == "FORMAT_MSISDN_STANDARD_84XX") {
    s = "84" + s;
  } else if (format == "FORMAT_MSISDN_SHORT_XXX") {
    return s;
  } else {
    s = "0" + s;
  }

  return s;
};


const slugify = async function slugify(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/!|@|%|\^|\*||∣|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "");
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str.replace(/ /g, '-').toLowerCase();
}

const minify_words = async function minify_words(words_str) {
  let words = words_str.split(" ");
  for (let i = 2; i < words.length; i++) {
    if (i == 2) {
      words[2] = words[i][0];
    } else {
      words[2] += words[i][0];
    }
  }
  words.splice(3, words.length - 3);
  return words.join(" ");
}

module.exports = { formatPhoneNumber, slugify, minify_words };
