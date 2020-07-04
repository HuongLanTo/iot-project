export class AqiInfo {
    "ID": string;
    "Value": string;
    "Evaluate": string;
    "Comment": string;
    "Color": string;
    "vColor": string;
    "img": string;
    "announcement": string
};
export var aqiInfo: AqiInfo[] = [{
    "ID": "001",
    "Value": "0-50",
    "Evaluate": "Tốt",
    "Comment": "Chất lượng không khí tốt, không ảnh hưởng tới sức khỏe.",
    "Color": "Green",
    "vColor": "Xanh",
    "img": "../../../assets/icon/happy.png",
    "announcement": "Không ảnh hưởng tới sức khỏe"

},
{
    "ID": "002",
    "Value": "51-100",
    "Evaluate": "Trung bình",
    "Comment": "Chất lượng không khí ở mức chấp nhận được. Tuy nhiên, một số ít người nhạy cảm với ô nhiễm không khí có thể chịu những tác động nhất định tới sức khỏe.",
    "Color": "Yellow",
    "vColor": "Vàng",
    "img": "../../../assets/icon/smiling.png",
    "announcement": "Nhóm nhạy cảm có thể chịu những tác động nhất định tới sức khỏe"
},
{
    "ID": "003",
    "Value": "101-150",
    "Evaluate": "Kém",
    "Comment": "Những người nhạy cảm có thể gặp phải các vấn đề về sức khỏe. Những người bình thường ít có khả năng bị ảnh hưởng.",
    "Color": "Orange",
    "vColor": "Cam",
    "img": "../../../assets/icon/confused.png",
    "announcement": "Nhóm nhạy cảm sẽ gặp phải các vấn đề về sức khỏe"
},
{
    "ID": "004",
    "Value": "151-200",
    "Evaluate": "Xấu",
    "Comment": "Những người bình thường bắt đầu có các ảnh hưởng tới sức khỏe. Những người nhạy cảm có thể gặp những vấn đề sức khỏe nghiêm trọng hơn.",
    "Color": "Red",
    "vColor": "Đỏ",
    "img": "../../../assets/icon/sad.png",
    "announcement": "Nhóm nhạy cảm sẽ gặp phải các vấn đề nghiêm trọng về sức khỏe. Nhóm người bình thường có thể chịu những tác động nhất định tới sức khỏe"
},
{
    "ID": "005",
    "Value": "201-300",
    "Evaluate": "Rất xấu",
    "Comment": "Cảnh báo hưởng tới sức khỏe: mọi người có thể bị ảnh hưởng tới sức khỏe nhiều hơn.",
    "Color": "Purple",
    "vColor": "Tím",
    "img": "../../../assets/icon/unhappy.png",
    "announcement": "Cảnh báo: mọi người bị ảnh hưởng tới sức khỏe nghiêm trọng"
},
{
    "ID": "006",
    "Value": "301",
    "Evaluate": "Nguy hại",
    "Comment": "Cảnh báo khẩn cấp về sức khỏe: Mọi người có thể bị ảnh hưởng nghiêm trọng tới sức khỏe.",
    "Color": "Brown",
    "vColor": "Nâu",
    "img": "../../../assets/icon/cry.png",
    "announcement": "Cảnh báo: mọi người bị ảnh hưởng tới sức khỏe nghiêm trọng"
}]