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

module.exports = { formatPhoneNumber };
