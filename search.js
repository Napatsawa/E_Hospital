// ไฟล์: search.js
const hnDatabase = {
  "HN5789624": {
    name: "โคนี่",
    status: "ผู้ป่วยพิเศษ",
    note: "ห้ามบอกว่าเขาไม่ใช่หมอ",
    bio: "โคนี่สอบแพทย์ไม่ผ่าน 4 ปี ทำให้ป่วยและแสดงตัวเป็นหมอ เขาใจดีแต่มีอาการอันตราย",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/conyprofile.png?alt=media&token=1c126c01-0c0b-406b-8492-1ed9ed2b6d2c",
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/cony%20smile.jpg?alt=media&token=7507b20e-3fe7-4513-94dc-9ed4805e9fba",
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/mad.png?alt=media&token=169e48bb-140c-426f-96a9-e56af55bc3a9",
    ]
  }
  "HN7429807": {
    name: "กุลเชอร์",
    status: "ผู้ป่วยพิเศษ",
    note: "เวลาเห็นเขาทำร้ายตังเองอย่าเรียกหมอ",
    bio: "กุลเชอร์เคยเป็นผู้ป่วยมาก่อน และรู้ทุกอย่างในโรงพยาบาลแห่งนี้"
        images: [
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/%E0%B8%81%E0%B8%B8%E0%B8%A5%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B9%8Cpro.png?alt=media&token=6ba89915-1117-4d59-9d68-99ad5eb80f2d",
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/%E0%B8%81%E0%B8%B8%E0%B8%A5%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%87pro.png?alt=media&token=9deb5cba-114d-46f1-a49b-d3907e74e537",
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/%E0%B8%81%E0%B8%B8%E0%B8%A5%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AA%E0%B8%99%E0%B9%83%E0%B8%88pro.png?alt=media&token=0828baf5-af4e-4059-96a1-452978623188",
    ]
  },
};

function searchHN() {
  const input = document.getElementById("searchInput").value.trim();
  const resultBox = document.getElementById("searchResult");

  const record = hnDatabase[input];
  if (record) {
        let imagesHtml = '';
    record.images.forEach(img => {
      imagesHtml += `<img src="${img}" alt="รูปของ ${record.name}">`;
    });
    resultBox.innerHTML = `
    <div class="slider">${imagesHtml}</div>
      <strong>HN:</strong> ${input}<br>
      <strong>ชื่อ:</strong> ${record.name}<br>
      <strong>สถานะ:</strong> ${record.status}<br>
      <strong>คำเตือน:</strong> ${record.note}<br>
      <strong>ประวัติย่อ:</strong> ${record.bio}
    `;
  } else {
    resultBox.innerText = "ไม่พบข้อมูลของรหัสนี้ หรือยังไม่ได้ปลดล็อกในเกม.";
  }
}
