module.exports = function getAqi(params) {
  let co_aqi = 0;
  let pm25_aqi = 0;

  if (params.co) {
    // Tìm khoảng so sánh ứng với thông số khí CO đo được từ sensor
    const range = CO.find(
      (v) => params.co >= v.min_range && params.co <= v.max_range
    );

    if (range) {
      // Nếu tìm được khoảng so sánh thì gọi đến method để tính aqi của khí CO
      co_aqi = Math.round(calAqi(range, params.co));
    }
  }

  if (params.pm25) {
    // Tìm khoảng so sánh ứng với thông số bụi(PM 2.5) đo được từ sensor
    const range = PM25.find(
      (v) => params.co >= v.min_range && params.co <= v.max_range
    );

    if (range) {
      // Nếu tìm được khoảng so sánh thì gọi đến method để tính aqi của bụi(PM 2.5)
      pm25_aqi = Math.round(calAqi(range, params.pm25));
    }
  }

  // Chỉ số aqi cuối cùng = Chỉ số aqi lớn nhất trong tất cả các aqi của khí tính được
  return Math.max(co_aqi, pm25_aqi);
};

// Method tính aqi của từng khí
function calAqi(range, env_param) {
  // Hiếu số của khoảng giá trị phù hợp với giá trị sensor đo được
  const range_cal = range.max_range - range.min_range; 

  // Hiệu số của khoảng chỉ số aqi phù hợp với giá trị sensor đo được
  const aqi_cal = range.max_aqi - range.min_aqi; 

  // Hiệu số giữa giá trị lớn nhất của khoảng giá trị phù hợp với giá trị sensor đo được
  const sup_co = range.max_range - env_param; 

  return (aqi_cal / range_cal) * sup_co + range.min_aqi; // Công thức tính chỉ số aqi của khí
}

// Các khoảng giá trị so sánh của khí CO
const CO = [
  {
    min_range: 0.0,
    max_range: 4.4,
    min_aqi: 0,
    max_aqi: 50,
  },
  {
    min_range: 4.5,
    max_range: 9.4,
    min_aqi: 51,
    max_aqi: 100,
  },
  {
    min_range: 9.5,
    max_range: 12.4,
    min_aqi: 101,
    max_aqi: 150,
  },
  {
    min_range: 12.5,
    max_range: 15.4,
    min_aqi: 151,
    max_aqi: 200,
  },
  {
    min_range: 15.5,
    max_range: 30.4,
    min_aqi: 201,
    max_aqi: 300,
  },
  {
    min_range: 30.5,
    max_range: 40.4,
    min_aqi: 301,
    max_aqi: 400,
  },
  {
    min_range: 40.5,
    max_range: 50.4,
    min_aqi: 401,
    max_aqi: 500,
  },
];

// Các khoảng giá trị so sánh với bụi (PM 2.5)
const PM25 = [
  {
    min_range: 0.0,
    max_range: 15.4,
    min_aqi: 0,
    max_aqi: 50,
  },
  {
    min_range: 15.5,
    max_range: 40.4,
    min_aqi: 51,
    max_aqi: 100,
  },
  {
    min_range: 40.5,
    max_range: 65.4,
    min_aqi: 101,
    max_aqi: 150,
  },
  {
    min_range: 65.5,
    max_range: 150.4,
    min_aqi: 151,
    max_aqi: 200,
  },
  {
    min_range: 150.5,
    max_range: 250.4,
    min_aqi: 201,
    max_aqi: 300,
  },
  {
    min_range: 250.5,
    max_range: 350.4,
    min_aqi: 301,
    max_aqi: 400,
  },
  {
    min_range: 350.5,
    max_range: 500.4,
    min_aqi: 401,
    max_aqi: 500,
  },
];
