//buat definisi array
let listPengunjung = [];

//buat definisi objek dari input
const tambahListPengunjung = (ev) => {
  //buat mencegah submit dari button
  ev.preventDefault();
  let listObjectPengunjung = {
    nikMasuk: document.getElementById("nik").value,
    namaMasuk: document.getElementById("nama").value,
    picMasuk: document.getElementById("pic").value,
    kepentinganMasuk: document.getElementById("kepentingan").value,
  };
  //cek kesamaan NIK
  const nikMasuk2 = document.getElementById("nik").value;
  for (let i = 0; i < listPengunjung.length; i++) {
    if (nikMasuk2 == listPengunjung[i].nikMasuk) {
      alert("NIK telah digunakan sebelumnya!");
      return false;
    }
  }

  listPengunjung.push(listObjectPengunjung);
  document.forms[0].reset();

  //simpan di localStorage
  localStorage.setItem("ArsipDaftarPengunjung", JSON.stringify(listPengunjung));

  // buat bikin tabel dari array
  let table = document.getElementById("tabel-pengunjung");
  function buatTable(listPengunjung) {
    let row = "";
    for (let i = 0; i < listPengunjung.length; i++) {
      row += `
        <tr>
            <td>${listPengunjung[i].nikMasuk}</td>
            <td>${listPengunjung[i].namaMasuk}</td>
            <td>${listPengunjung[i].picMasuk}</td>
            <td>${listPengunjung[i].kepentinganMasuk}</td>            
        </tr>        
        `;
    }
    table.innerHTML = row;
  }
  buatTable(listPengunjung);
};

//buat menjalankan fungsi setelah button diclick
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btn")
    .addEventListener("click", tambahListPengunjung);
});
