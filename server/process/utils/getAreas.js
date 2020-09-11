const moment = require("moment");
const Node = require("../../models/mongo/node");

async function getAreas(type = '') {
  return await Node.find({ status: 1 })
    .select({ location: 1 })
    .populate({
      path: "location",
      populate: { path: "district province", select: "_id name" },
      select: "latitude longitude province district",
    })
    .then((data) => {
      let datetime = moment()
        .subtract(1, "hour")
        .set({ minute: 0, second: 0 })
        .toDate();

      if (['day', 'date'].includes(type)) {
        datetime = moment()
        .subtract(1, "day")
        .set({ minute: 23, second: 0 })
        .toDate();
      }

      let ids = []

      const new_data = data.map((v) => {
        ids.push(String(v.location.district._id))

        return {
          area_id: String(v.location.district._id),
          tem: 0,
          hum: 0,
          pm_25: 0,
          no: 0,
          co: 0,
          co2: 0,
          aqi: 0,
          datetime: datetime,
          area: v.location.district.name,
          lat: v.location.latitude,
          long: v.location.longitude,
        };
      });

      return new_data.filter((v, index) => ids.indexOf(v.area_id) === index)
    });
}

module.exports = getAreas;
