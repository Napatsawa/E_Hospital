// ไฟล์: search.js
const hnDatabase = {
  "HN5789624": {
    name: "โคนี่",
    status: "ผู้ป่วยพิเศษ",
    note: "ห้ามบอกว่าเขาไม่ใช่หมอ",
    bio: "โคนี่สอบแพทย์ไม่ผ่าน 4 ปี ทำให้ป่วยและแสดงตัวเป็นหมอ เขาใจดีแต่มีอาการอันตราย",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/cony%20smile%20(1).png?alt=media&token=86b81b53-b0d1-48ae-b957-1b7564fbf521",
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/cony%20smile.jpg?alt=media&token=7507b20e-3fe7-4513-94dc-9ed4805e9fba",
      "https://firebasestorage.googleapis.com/v0/b/myfairytale-v9mv.appspot.com/o/mad.png?alt=media&token=169e48bb-140c-426f-96a9-e56af55bc3a9",
    ]
  },
  "HN7429807": {
    name: "กุลเชอร์",
    status: "ผู้ป่วยพิเศษ",
    note: "เวลาเห็นเขาทำร้ายตังเองอย่าเรียกหมอ",
    bio: "กุลเชอร์เคยเป็นผู้ป่วยมาก่อน และรู้ทุกอย่างในโรงพยาบาลแห่งนี้"
  }
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
