let dataMasuk = localStorage.getItem("dataParkIn")
  ? JSON.parse(localStorage.getItem("dataParkIn"))
  : [];
let dataParkir = localStorage.getItem("rekapParkir")
  ? JSON.parse(localStorage.getItem("rekapParkir"))
  : [];
// let rekapBiaya = localStorage.getItem("rekapBill")
//   ? JSON.parse(localStorage.getItem("rekapBill"))
//   : [];

let jenisBiaya = [
  { jenis: "Mobil", menitSatu: 5000, menitLain: 3000 },
  { jenis: "Motor", menitSatu: 3000, menitLain: 1000 },
];
localStorage.setItem("biayaParkir", JSON.stringify(jenisBiaya));

let dataLogin = [
  { posisi: "Administrator", password: "admin123" },
  { posisi: "Operator1", password: "operate123" },
];
localStorage.setItem("dataAkun", JSON.stringify(dataLogin));

let bayarParkir;

function loginPARKIR(event) {
  event.preventDefault();
  const posisiMasuk = document.getElementById("posisi").value;
  const passMasuk = document.getElementById("password").value;
  if (
    posisiMasuk == dataLogin[0].posisi &&
    passMasuk == dataLogin[0].password
  ) {
    location.href = "/day04_1_agustus24/adminPage.html";
  } else if (
    posisiMasuk == dataLogin[1].posisi &&
    passMasuk == dataLogin[1].password
  ) {
    location.href = "/day04_1_agustus24/indexIn.html";
  } else {
    alert("password salah");
  }
}

const masukParkir = (event) => {
  event.preventDefault();
  let waktu = new Date();
  let objMasuk = {
    jenis: document.getElementById("jenis").value,
    noPlat: document.getElementById("noPlat").value,
    waktuIn: waktu,
  };

  const noPlat2 = document.getElementById("noPlat").value;
  for (let i = 0; i < dataMasuk.length; i++) {
    if (
      noPlat2 == dataMasuk[i].noPlat ||
      jenis.value == null ||
      noPlat.value == null
    ) {
      alert("No. kendaraan sudah ada sebelumnya!");
      return false;
    }
  }
  dataMasuk.push(objMasuk);
  localStorage.setItem("dataParkIn", JSON.stringify(dataMasuk));
  alert("Input Success!");
  document.forms[0].reset();
};

const tabPark = (dataMasuk) => {
  let tabelPark = document.getElementById("tabel-parkir1");
  let row = "";
  for (let i = 0; i < dataMasuk.length; i++) {
    row += `
        <tr>
        <td>${dataMasuk[i].jenis}</td>
        <td>${dataMasuk[i].noPlat}</td>
        <td>${dataMasuk[i].waktuIn}</td>
        <td><button class="tombolHitung" onclick="countBill('${dataMasuk[i].noPlat}')">Hitung</button></td>
        <td id="${dataMasuk[i].noPlat}"></td>
        <td><button class="tombolDelete" onclick="delBill('${dataMasuk[i].noPlat}', this.value)">Selesai</button></td>
        `;
  }
  tabelPark.innerHTML = row;
};

const countBill = (tombolHitung) => {
  let prosTime, prosCeil, prosBill;
  for (let i = 0; i < dataMasuk.length; i++) {
    if (tombolHitung == dataMasuk[i].noPlat) {
      let waktuMasuk = new Date(dataMasuk[i].waktuIn);
      prosTime = Date.now() - waktuMasuk;
      prosCeil = Math.ceil(prosTime / 60 / 1000);
      if (dataMasuk[i].jenis == jenisBiaya[0].jenis) {
        prosBill =
          (prosCeil - 1) * jenisBiaya[0].menitLain + jenisBiaya[0].menitSatu;
      } else if (dataMasuk[i].jenis == jenisBiaya[1].jenis) {
        prosBill =
          (prosCeil - 1) * jenisBiaya[1].menitLain + jenisBiaya[1].menitSatu;
      }
    }
  }
  console.log(prosBill);
  for (let i = 0; i < dataMasuk.length; i++) {
    if (tombolHitung == dataMasuk[i].noPlat) {
      document.getElementById(dataMasuk[i].noPlat).innerHTML = prosBill;
    }
  }
  bayarParkir = prosBill;
  // rekapBiaya.shift();
  // rekapBiaya.push(prosBill);
  // localStorage.setItem("rekapBill", JSON.stringify(rekapBiaya));
};

const cariData = () => {
  var kataMasuk, prosesFilter, tableMuncul, data, td, i, txtValue;
  kataMasuk = document.getElementById("kataKunci");
  prosesFilter = kataMasuk.value.toUpperCase();
  tableMuncul = document.getElementById("tabel-parkir1");
  data = tableMuncul.getElementsByTagName("tr");
  for (i = 0; i < data.length; i++) {
    td = data[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(prosesFilter) > -1) {
        data[i].style.display = "";
      } else {
        data[i].style.display = "none";
      }
    }
  }
};

const delBill = async (tombolDelete) => {
  let waktuKeluar = new Date();
  for (let i = 0; i < dataMasuk.length; i++) {
    if (tombolDelete == dataMasuk[i].noPlat) {
      objParkir = {
        jenPark: dataMasuk[i].jenis,
        platPark: dataMasuk[i].noPlat,
        inPark: dataMasuk[i].waktuIn,
        outPark: waktuKeluar,
        totalBill: bayarParkir,
      };
    }
  }
  console.log(objParkir);
  dataParkir.push(objParkir);
  localStorage.setItem("rekapParkir", JSON.stringify(dataParkir));
  for (let i = 0; i < dataMasuk.length; i++) {
    if (tombolDelete == dataMasuk[i].noPlat) {
      dataMasuk = dataMasuk.filter(
        (person) => person.noPlat != dataMasuk[i].noPlat
      );
    }
  }
  let prosesFirst = await localStorage.setItem(
    "dataParkIn",
    JSON.stringify(dataMasuk)
  );
  location.reload();
};

dataAkun = JSON.parse(localStorage.getItem("dataAkun"));

const kelolaAkun = (dataAkun) => {
  let tabelListAkun = document.getElementById("tabelAkun");
  let row = "";
  for (let i = 0; i < dataAkun.length; i++) {
    row += `
    <tr>
            <td>${dataAkun[i].posisi}</td>
            <td>${dataAkun[i].password}</td>            
            <td><button class ="tombolEditAkun" onclick="editDataAkun('${dataAkun[i]}')"">Edit Password</button></td>     
    </tr>
    `;
  }
  tabelListAkun.innerHTML = row;
};

const editDataAkun = (tombolEditAkun) => {
  for (let i = 0; i < dataAkun.length; i++) {
    if (tombolEditAkun == dataAkun[i]) {
      let AkunEditMasuk = prompt("Masukan password baru:", "");
      if (AkunEditMasuk == null || AkunEditMasuk == "") {
        alert("password tidak jadi dirubah");
      } else {
        dataAkun[i].password = AkunEditMasuk;
        localStorage.setItem("dataAkun", JSON.stringify(dataAkun));
      }
    }
  }
};

listHarga = JSON.parse(localStorage.getItem("biayaParkir"));

const kelolaHarga = (listHarga) => {
  let tabelListHarga = document.getElementById("tabelHarga");
  let row = "";
  for (let i = 0; i < listHarga.length; i++) {
    row += `
    <tr>
            <td>${listHarga[i].jenis}</td>
            <td>${listHarga[i].menitSatu}</td>
            <td><button class ="tombolEditHarga1" onclick="editDataHarga1('${listHarga[i]}')"">Edit</button></td> 
            <td>${listHarga[i].menitLain}</td>             
            <td><button class ="tombolEditHarga2" onclick="editDataHarga2('${listHarga[i]}')"">Edit</button></td>     
    </tr>
    `;
  }
  tabelListHarga.innerHTML = row;
};

const editDataHarga1 = (tombolEditHarga1) => {
  for (let i = 0; i < listHarga.length; i++) {
    if (tombolEditHarga1 == listHarga[i]) {
      let HargaEditMasuk1 = Number(
        prompt("Masukan harga baru untuk menit kesatu:", "")
      );
      if (HargaEditMasuk1 == null) {
        alert("harga tidak jadi dirubah");
      } else {
        listHarga[i].menitSatu = HargaEditMasuk1;
        localStorage.setItem("biayaParkir", JSON.stringify(listHarga));
      }
    }
  }
};

const editDataHarga2 = (tombolEditHarga2) => {
  for (let i = 0; i < listHarga.length; i++) {
    if (tombolEditHarga2 == listHarga[i]) {
      let HargaEditMasuk2 = Number(
        prompt("Masukan harga baru untuk menit selanjutnya:", "")
      );
      if (HargaEditMasuk2 == null) {
        alert("harga tidak jadi dirubah");
      } else {
        listHarga[i].menitLain = HargaEditMasuk2;
        localStorage.setItem("biayaParkir", JSON.stringify(listHarga));
      }
    }
  }
};

const rekapOperator = (dataParkir) => {
  let tabelRekap = document.getElementById("laporanOperator");
  let row = "";
  for (let i = 0; i < dataParkir.length; i++) {
    row += `
        <tr>
        <td>${dataParkir[i].jenPark}</td>
        <td>${dataParkir[i].platPark}</td>
        <td>${dataParkir[i].inPark}</td>
        <td>${dataParkir[i].outPark}</td>
        <td>${dataParkir[i].totalBill}</td>
        `;
  }
  tabelRekap.innerHTML = row;
};

function pindahHalaman(event) {
  event.preventDefault();
  location.href = "/day04_1_agustus24/login.html";
}

const buatChart = (dataParkir) => {
  let ctx = document.getElementById("myChart1");
  let hitungMobil = 0;
  let hitungMotor = 0;
  dataParkir.forEach((jenPark, i) => {
    if (jenPark.type == "Mobil") {
      hitungMobil++;
    }
    if (jenPark.type == "Motor") {
      hitungMotor++;
    }
  });

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "pie",

    // The data for our dataset
    data: {
      labels: ["Mobil", "Motor"],
      datasets: [
        {
          label: "Biaya Parkir",
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          data: [hitungMobil, hitungMotor],
        },
      ],
    },

    // Configuration options go here
    options: {},
  });
};
