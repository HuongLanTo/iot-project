// export interface AqiInfo {
//     id: string;
//     value: string;
//     evaluate: string;
//     comment: string;
//     color: string;
//     v_color: string;
//     img: string;
//     announcement: string;
//     border: string
// };
export const aqiInfo = [
  {
    id: "001",
    value: "0-50",
    evaluate: "Tốt",
    comment: "Chất lượng không khí tốt, không ảnh hưởng tới sức khỏe.",
    color: "#57F83B",
    v_color: "Xanh",
    img: "../../../assets/icon/happy.png",
    announcement: "Không ảnh hưởng tới sức khỏe",
    border: "1px solid #57F83B",
  },
  {
    id: "002",
    value: "51-100",
    evaluate: "Trung bình",
    comment:
      "Chất lượng không khí ở mức chấp nhận được. Tuy nhiên, một số ít người nhạy cảm với ô nhiễm không khí có thể chịu những tác động nhất định tới sức khỏe.",
    color: "#F8D82E",
    v_color: "Vàng",
    img: "../../../assets/icon/smiling.png",
    announcement:
      "Nhóm nhạy cảm có thể chịu những tác động nhất định tới sức khỏe",
    border: "1px solid #F8D82E",
  },
  {
    id: "003",
    value: "101-150",
    evaluate: "Kém",
    comment:
      "Những người nhạy cảm có thể gặp phải các vấn đề về sức khỏe. Những người bình thường ít có khả năng bị ảnh hưởng.",
    color: "#F1923D",
    v_color: "Cam",
    img: "../../../assets/icon/confused.png",
    announcement: "Nhóm nhạy cảm sẽ gặp phải các vấn đề về sức khỏe",
    border: "1px solid #F1923D",
  },
  {
    id: "004",
    value: "151-200",
    evaluate: "Xấu",
    comment:
      "Những người bình thường bắt đầu có các ảnh hưởng tới sức khỏe. Những người nhạy cảm có thể gặp những vấn đề sức khỏe nghiêm trọng hơn.",
    color: "#FF3232",
    v_color: "Đỏ",
    img: "../../../assets/icon/sad.png",
    announcement:
      "Nhóm nhạy cảm sẽ gặp phải các vấn đề nghiêm trọng về sức khỏe. Nhóm người bình thường có thể chịu những tác động nhất định tới sức khỏe",
    border: "1px solid #FF3232",
  },
  {
    id: "005",
    value: "201-300",
    evaluate: "Rất xấu",
    comment:
      "Cảnh báo hưởng tới sức khỏe: mọi người có thể bị ảnh hưởng tới sức khỏe nhiều hơn.",
    color: "Purple",
    v_color: "Tím",
    img: "../../../assets/icon/unhappy.png",
    announcement: "Cảnh báo: mọi người bị ảnh hưởng tới sức khỏe nghiêm trọng",
    border: "1px solid #CC3399",
  },
  {
    id: "006",
    value: "301",
    evaluate: "Nguy hại",
    comment:
      "Cảnh báo khẩn cấp về sức khỏe: Mọi người có thể bị ảnh hưởng nghiêm trọng tới sức khỏe.",
    color: "Brown",
    v_color: "Nâu",
    img: "../../../assets/icon/cry.png",
    announcement: "Cảnh báo: mọi người bị ảnh hưởng tới sức khỏe nghiêm trọng",
    border: "1px solid #A52A2A",
  },
];
