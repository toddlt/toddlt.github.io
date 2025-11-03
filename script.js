var can = document.getElementById("myCanVas");
var myCan = can.getContext("2d");
var img1 = new Image();
img1.src = "volunteer.jpg";
var img2 = new Image();
img2.src = "donation.jpg";

function volunteer(id) {
  myCan.drawImage(img1, 0, 0, 2800, 3960);

  var btn1 = document.getElementById("btn1");
  btn1.disabled = true;

  var name = document.getElementById("name1");
  var hour = document.getElementById("hour");
  myCan.font = "150px 微软雅黑";
  myCan.fillText(name.value, 1420 - myCan.measureText(name.value).width/2, 1520);
  myCan.font = "60px 微软雅黑";
  myCan.fillText(hour.value, 1890 - myCan.measureText(hour.value).width/2, 1720);
  myCan.font = "50px 微软雅黑";
  myCan.fillText(hour.value, 2330 - myCan.measureText(hour.value).width/2, 2520);

  var date = document.getElementById("date1");
  var parts = date.value.split('-');
  myCan.font = "60px 微软雅黑";
  myCan.fillText(parts[0], 1970, 3770);
  myCan.fillText(parts[1], 2250, 3770);
  myCan.fillText(parts[2], 2460, 3770);

  // fetch('https://gen.jiyuncorp.com:8000/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: name.value,
  //     type: 'volunteer',
  //     duration: parseInt(hour.value),
  //     date: date.value,
  //     goods_cn: '',
  //     goods_en: '' 
  //   }),
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));

  var canvasElement = document.getElementById(id);
  var MIME_TYPE = "image/jpeg";
  var imgURL = canvasElement.toDataURL(MIME_TYPE, 0.8);
  var dlLink = document.createElement('a');
  dlLink.download = name.value+"-志愿者证书";
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
  btn1.disabled = false;
}

function donation(id) {
  myCan.drawImage(img2, 0, 0, 2800, 3960);

  var btn2 = document.getElementById("btn2");
  btn2.disabled = true;

  var name = document.getElementById("name2");
  var goods_cn = document.getElementById("goods_cn");
  var goods_en = document.getElementById("goods_en");

  myCan.font = "150px 微软雅黑";
  myCan.fillText(name.value, 1420 - myCan.measureText(name.value).width/2, 1650);
  myCan.font = "50px 微软雅黑";
  myCan.fillText(goods_cn.value, 830 - myCan.measureText(goods_cn.value).width/2, 1870);
  myCan.font = "50px 微软雅黑";
  myCan.fillText(goods_en.value, 1180 - myCan.measureText(goods_en.value).width/2, 2550);

  var date = document.getElementById("date2");
  var parts = date.value.split('-');
  myCan.font = "60px 微软雅黑";
  myCan.fillText(parts[0], 1870, 3785);
  myCan.fillText(parts[1], 2150, 3785);
  myCan.fillText(parts[2], 2360, 3785);

  // fetch('https://gen.jiyuncorp.com:8000/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: name.value,
  //     type: 'donation',
  //     duration: 0,
  //     date: date.value,
  //     goods_cn: goods_cn.value,
  //     goods_en: goods_en.value 
  //   }),
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));

  var canvasElement = document.getElementById(id);
  var MIME_TYPE = "image/jpeg";
  var imgURL = canvasElement.toDataURL(MIME_TYPE, 0.8);
  var dlLink = document.createElement('a');
  dlLink.download = name.value+"-捐赠者证书";
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
  btn2.disabled = false;
}

// function export_excel() {
//   fetch("https://gen.jiyuncorp.com:8000/")
//     .then(response => {
//       // 检查请求是否成功
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(`请求失败，状态码：${response.status}`);
//     })
//     .then(data => {
//       // 创建工作簿
//       const workbook = XLSX.utils.book_new();
//       // 创建工作表并添加表头
//       const worksheet = XLSX.utils.aoa_to_sheet([]);

//       let rows = [['ID', '名字', '证书类型', '服务时长', '日期', '物资中文', '物资英文']];

//       if (data.length > 0) {
//         data.forEach(item => {
//           const row = [
//             item[0] || '',
//             item[1] || '',
//             item[2] || '',
//             item[3] || '',
//             item[4] || '',
//             item[5] || '',
//             item[6] || ''
//           ];
//           rows.push(row);
//         });
//       } else {
//         console.log('没有数据可以添加到工作表');
//       }
//       XLSX.utils.sheet_add_aoa(worksheet, rows);

//       // 将工作表添加到工作簿
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'records');
//       // 生成Excel文件
//       XLSX.writeFile(workbook, 'records.xlsx');
//       console.log('数据已保存到Excel文件。');
//     })
//     .catch(error => {
//       console.error('请求或处理失败:', error);
//     });
// }
