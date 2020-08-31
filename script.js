//js untuk ganti menu
//definisi dari array ganti menu halaman
let listPage = [
  "addEmpPage",
  "addDeptPage",
  "assignDeptPage",
  "listEmpPage",
  "listDeptPage",
];
//fungsi buat ganti menu halaman
function changeMenuTo(menuNav) {
  for (let i = 0; i < listPage.length; i++) {
    if (listPage[i] == menuNav) {
      // show page
      let classPage = document.getElementById(menuNav).classList;
      classPage.remove("hide-page");
      continue;
    }
    // hide page
    let classPage = document.getElementById(listPage[i]).classList;
    classPage.add("hide-page");
  }
}
changeMenuTo("addEmpPage");

//js untuk add employee
//definisi dari array employee
let arrayEmployee = [];
//buat definisi fungsi inputan dalam objek
const tambahListEmployee = (ev) => {
  //buat mencegah submit dari button
  ev.preventDefault();
  let objectEmployee = {
    nikMasuk: document.getElementById("nik").value,
    namaMasuk: document.getElementById("nama").value,
    tempatlahirMasuk: document.getElementById("tempatlahir").value,
    tanggallahirMasuk: document.getElementById("tanggallahir").value,
    genderMasuk: document.getElementById("gender").value,
    goldarahMasuk: document.getElementById("goldarah").value,
    alamatMasuk: document.getElementById("alamat").value,
    agamaMasuk: document.getElementById("agama").value,
    statusnikahMasuk: document.getElementById("statusnikah").value,
    kewarganegaraanMasuk: document.getElementById("kewarganegaraan").value,
  };
  //cek kesamaan NIK
  const nikMasuk2 = document.getElementById("nik").value;
  for (let i = 0; i < arrayEmployee.length; i++) {
    if (nikMasuk2 == arrayEmployee[i].nikMasuk) {
      alert("NIK telah digunakan sebelumnya!");
      return false;
    }
  }
  //buat array
  arrayEmployee.push(objectEmployee);
  document.forms[0].reset();
  //simpan di localStorage
  localStorage.setItem("ArsipAddEmployee", JSON.stringify(arrayEmployee));
  alert("Data Employee Berhasil ditambahkan");
};
//buat menjalankan fungsi setelah button diclick
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn1").addEventListener("click", tambahListEmployee);
});

//js untuk add department
//definisi dari array department
let arrayDepartment = [];
//buat definisi fungsi inputan dalam objek
const tambahListDepartment = (e) => {
  //buat mencegah submit dari button
  e.preventDefault();
  let objectDepartment = {
    namaDepartemenMasuk: document.getElementById("namadepartemen").value,
  };
  //cek kesamaan nama dept
  const namaDepartemenMasuk2 = document.getElementById("namadepartemen").value;
  for (let i = 0; i < arrayDepartment.length; i++) {
    if (namaDepartemenMasuk2 == arrayDepartment[i].namaDepartemenMasuk) {
      alert("Nama Departemen sudah tersedia sebelumnya!");
      return false;
    }
  }
  //buat array
  arrayDepartment.push(objectDepartment);
  document.forms[0].reset();
  //simpan di localStorage
  localStorage.setItem("ArsipAddDepartment", JSON.stringify(arrayDepartment));
  alert("Data Department Berhasil ditambahkan");
};
//buat menjalankan fungsi setelah button diclick
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btn2")
    .addEventListener("click", tambahListDepartment);
});

//js untuk add position
//definisi dari array position
let arrayPosition = [];
//buat definisi fungsi inputan dalam objek
const tambahListPosition = (e) => {
  //buat mencegah submit dari button
  e.preventDefault();
  let objectPosition = {
    posisiMasuk: document.getElementById("posisi").value,
  };
  //cek kesamaan posisi
  const posisiMasuk2 = document.getElementById("posisi").value;
  for (let i = 0; i < arrayPosition.length; i++) {
    if (posisiMasuk2 == arrayPosition[i].posisiMasuk) {
      alert("Posisinya sudah tersedia sebelumnya!");
      return false;
    }
  }
  //buat array
  arrayPosition.push(objectPosition);
  document.forms[0].reset();
  //simpan di localStorage
  localStorage.setItem("ArsipAddPosition", JSON.stringify(arrayPosition));
  alert("Data Position Berhasil ditambahkan");
};
//buat menjalankan fungsi setelah button diclick
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn3").addEventListener("click", tambahListPosition);
});

//ambil data dari localstorage
let ambilArrayEmployee = localStorage.getItem("ArsipAddEmployee");
arrayEmployee2 = JSON.parse(ambilArrayEmployee);
let ambilArrayDepartment = localStorage.getItem("ArsipAddDepartment");
arrayDepartment2 = JSON.parse(ambilArrayDepartment);
let ambilArrayPosition = localStorage.getItem("ArsipAddPosition");
arrayPosition2 = JSON.parse(ambilArrayPosition);

//bantuan tombol
let angkaList = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
let tombolList = [
  "t0",
  "t1",
  "t2",
  "t3",
  "t4",
  "t5",
  "t6",
  "t7",
  "t8",
  "t9",
  "t10",
  "t11",
  "t12",
  "t13",
  "t14",
  "t15",
  "t16",
  "t17",
  "t18",
  "t19",
  "t20",
];
// definisikan tabel assignment1

//js utk munculkan proyeksi assignment
const lihatProyeksiAssignment = (arrayEmployee2) => {
  let tabelAssignment1 = document.getElementById("tabel-assignment");
  let row = "";
  for (let i = 0; i < arrayEmployee2.length; i++) {
    row += `
    <tr>
            <td>${arrayEmployee2[i].nikMasuk}</td>
            <td>${arrayEmployee2[i].namaMasuk}</td>
            <td><button class ="tombolAksi" onclick="tampilkanDetail('t${angkaList[i]}')">
            Tampilkan</button></td>
            <td><select class="pilihDept1"></select></td>
            <td><select class="pilihDept2"></select></td>
            <td><button class ="tombolAssign" onclick="buatAssign('t${angkaList[i]}')">
            Assign</button></td>
    </tr>
    `;
  }
  tabelAssignment1.innerHTML = row;
};

//function cari data nama
const cariData = () => {
  var kataMasuk, prosesFilter, tableMuncul, data, td, i, txtValue;
  kataMasuk = document.getElementById("kataKunci");
  prosesFilter = kataMasuk.value.toUpperCase();
  tableMuncul = document.getElementById("tabel-assignment");
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



function tampilkanDetail(tombolAksi) {
  for (let i = 0; i < arrayEmployee2.length; i++) {
    if (tombolAksi == tombolList[i]) {
      alert(
        "NIK:\n" +
          arrayEmployee2[i].nikMasuk +
          "\nNama:\n" +
          arrayEmployee2[i].namaMasuk +
          "\nTTL:\n" +
          arrayEmployee2[i].tempatlahirMasuk +
          ", " +
          arrayEmployee2[i].tanggallahirMasuk +
          "\nGender:\n" +
          arrayEmployee2[i].genderMasuk +
          "\nGolongan Darah:\n" +
          arrayEmployee2[i].goldarahMasuk +
          "\nAlamat:\n" +
          arrayEmployee2[i].alamatMasuk +
          "\nAgama:\n" +
          arrayEmployee2[i].agamaMasuk +
          "\nStatus Nikah:\n" +
          arrayEmployee2[i].statusnikahMasuk +
          "\nKewarganegaraan:\n" +
          arrayEmployee2[i].kewarganegaraanMasuk
      );
    }
  }
}

// definisikan tabel assignment pilihan1
let pilihan1 = document.getElementsByClassName("pilihDept1");
const tambahPilihan1 = (arrayDepartment2) => {
  let wor = "";
  for (let i = 0; i < arrayDepartment2.length; i++) {
    wor += `<option class ="tombolPilihDept" onclick="buatPilihanDept('t${angkaList[i]}')">
    ${arrayDepartment2[i].namaDepartemenMasuk}
    </option>`;
  }
  for (let j = 0; j < pilihan1.length; j++) {
    pilihan1[j].innerHTML = wor;
  }
};


// definisikan tabel assignment pilihan2
let pilihan2 = document.getElementsByClassName("pilihDept2");
const tambahPilihan2 = (arrayPosition2) => {
  let wor = "";
  for (let i = 0; i < arrayPosition2.length; i++) {
    wor += `<option class ="tombolPilihPos" onclick="buatPilihanPos('t${angkaList[i]}')">
    ${arrayPosition2[i].posisiMasuk}
    </option>`;
  }
  for (let j = 0; j < pilihan2.length; j++) {
    pilihan2[j].innerHTML = wor;
  }
};


let arrayPilihanDept = [];
function buatPilihanDept(tombolPilihDept) {
  for (let j = 0; j < arrayDepartment2.length; j++) {
    if (tombolPilihDept == tombolList[i]) {
      let objectDept = {
        deptEmp: arrayDepartment2[i].namaDepartemenMasuk,
      };
      arrayPilihanDept.push(objectDept);
      localStorage.setItem("ArsipDept", JSON.stringify(arrayPilihanDept));
    }
  }
}

let arrayPilihanPos = [];
function buatPilihanPos(tombolPilihPos) {
  for (let j = 0; j < arrayPosition2.length; j++) {
    if (tombolPilihPos == tombolList[i]) {
      let objectPos = {
        posEmp: arrayPosition2[i].posisiMasuk,
      };
      arrayPilihanPos.push(objectPos);
      localStorage.setItem("ArsipPos", JSON.stringify(arrayPilihanPos));
    }
  }
}

let arrayEmp2 = [];
function buatAssign(tombolAssign) {
  for (let i = 0; i < arrayEmployee2.length; i++) {
    if (tombolAssign == tombolList[i]) {
      let objectEmp = {
        nikEmp: arrayEmployee2[i].nikMasuk,
        namaEmp: arrayEmployee2[i].namaMasuk,
        tempatlahirEmp: arrayEmployee2[i].tempatlahirMasuk,
        tanggallahirEmp: arrayEmployee2[i].tanggallahirMasuk,
        genderEmp: arrayEmployee2[i].genderMasuk,
        goldarahEmp: arrayEmployee2[i].goldarahMasuk,
        alamatEmp: arrayEmployee2[i].alamatMasuk,
        agamaEmp: arrayEmployee2[i].agamaMasuk,
        statusnikahEmp: arrayEmployee2[i].statusnikahMasuk,
        kewarganegaraanEmp: arrayEmployee2[i].kewarganegaraanMasuk,
      };
      arrayEmp2.push(objectEmp);
      localStorage.setItem("ArsipEmp", JSON.stringify(arrayEmp2));
      alert(
        "Assignment untuk " + arrayEmployee2[i].namaMasuk + " berhasil dibuat"
      );
    }
  }
}

//ambil data dari localstorage
let ambilarrayEmp2 = localStorage.getItem("ArsipEmp");
ambilEmp2 = JSON.parse(ambilarrayEmp2);
// let ambilarrayPilihanPos = localStorage.getItem("ArsipPos");
// ambilPilihanPos = JSON.parse(ambilarrayPilihanPos);
// let ambilarrayPilihanDep = localStorage.getItem("ArsipDept");
// ambilPilihanDep = JSON.parse(ambilarrayPilihanDep);

// definisikan tabel assignment1

//js utk munculkan proyeksi assignment
const lihatTabelEmployee = (ambilEmp2, ambilPilihanPos, ambilPilihanDep) => {
  let tabelEmployeeFix = document.getElementById("tabel-employee");
  let row = "";
  for (let i = 0; i < ambilEmp2.length; i++) {
    row += `
    <tr>
            <td>${ambilEmp2[i].nikEmp}</td>
            <td>${ambilEmp2[i].namaEmp}</td>
            <td>${ambilEmp2[i].tempatlahirEmp}</td>
            <td>${ambilEmp2[i].tanggallahirEmp}</td>
            <td>${ambilEmp2[i].genderEmp}</td>
            <td>${ambilEmp2[i].goldarahEmp}</td>
            <td>${ambilEmp2[i].alamatEmp}</td>
            <td>${ambilEmp2[i].statusnikahEmp}</td>
            <td>${ambilEmp2[i].kewarganegaraanEmp}</td>
            <td>${ambilPilihanPos[i].posisiMasuk}</td>
            <td>${ambilPilihanDep[i].namaDepartemenMasuk}</td>
            <td><button class ="tombolDelete" onclick="deleteDataEmployee('t${angkaList[i]}')">
            Delete</button></td>
    </tr>
    `;
  }
  tabelEmployeeFix.innerHTML = row;
};


function deleteDataEmployee(tombolDelete) {
  for (let i = 0; i < ambilEmp2.length; i++) {
    if (tombolDelete == tombolList[i]) {
      ambilEmp2 = ambilEmp2.filter((person) => person != ambilEmp2[i]);
      localStorage.setItem("ArsipEmp", JSON.stringify(ambilEmp2));
      ambilPilihanPos = ambilPilihanPos.filter(
        (person) => person.posisiMasuk != ambilPilihanPos[i].posisiMasuk
      );
      localStorage.setItem("ArsipPos", JSON.stringify(ambilPilihanPos));
      ambilPilihanDep = ambilPilihanDep.filter(
        (person) =>
          person.namaDepartemenMasuk != ambilPilihanDep[i].namaDepartemenMasuk
      );
      localStorage.setItem("ArsipDept", JSON.stringify(ambilPilihanDep));
    }
  }
}

// definisikan tabel
let tabelDepartment = document.getElementById("tabel-department");
//js utk munculkan proyeksi assignment
const lihatDaftarDepartment = (arrayDepartment2) => {
  let row = "";
  for (let i = 0; i < arrayDepartment2.length; i++) {
    row += `
    <tr>
            <td>${arrayDepartment2[i].namaDepartemenMasuk}</td>            
            <td><button class ="tombolEditDept" onclick="editDataDept('t${angkaList[i]}')"">Edit</button></td>            
            <td><button class ="tombolDelDept" onclick="delDataDept('t${angkaList[i]}')"">Delete</button></td>
    </tr>
    `;
  }
  tabelDepartment.innerHTML = row;
};


function editDataDept(tombolEditDept) {
  for (let i = 0; i < arrayDepartment2.length; i++) {
    if (tombolEditDept == tombolList[i]) {
      let deptBaruMasuk = prompt("Masukan nama Departemen baru:", "");
      if (deptBaruMasuk == null || deptBaruMasuk == "") {
        alert("data tidak jadi dirubah");
      } else {
        arrayDepartment2[i].namaDepartemenMasuk = deptBaruMasuk;
        localStorage.setItem(
          "ArsipAddDepartment",
          JSON.stringify(arrayDepartment2)
        );
      }
    }
  }
}

function delDataDept(tombolDelDept) {
  for (let i = 0; i < arrayDepartment2.length; i++) {
    if (tombolDelDept == tombolList[i]) {
      arrayDepartment2 = arrayDepartment2.filter(
        (person) =>
          person.namaDepartemenMasuk != arrayDepartment2[i].namaDepartemenMasuk
      );
      localStorage.setItem(
        "ArsipAddDepartment",
        JSON.stringify(arrayDepartment2)
      );
    }
  }
}

// definisikan posisi

//js utk munculkan proyeksi assignment
const lihatDaftarPosition = (arrayPosition2) => {
  let tabelPosition = document.getElementById("tabel-position");
  let row = "";
  for (let i = 0; i < arrayPosition2.length; i++) {
    row += `
    <tr>
            <td>${arrayPosition2[i].posisiMasuk}</td>            
            <td><button class ="tombolEditPos" onclick="editDataPos('t${angkaList[i]}')"">Edit</button></td>            
            <td><button class ="tombolDelPos" onclick="delDataPos('t${angkaList[i]}')"">Delete</button></td>
    </tr>
    `;
  }
  tabelPosition.innerHTML = row;
};


function editDataPos(tombolEditPos) {
  for (let i = 0; i < arrayPosition2.length; i++) {
    if (tombolEditPos == tombolList[i]) {
      let posBaruMasuk = prompt("Masukan nama Position baru:", "");
      if (posBaruMasuk == null || posBaruMasuk == "") {
        alert("data tidak jadi dirubah");
      } else {
        arrayPosition2[i].posisiMasuk = posBaruMasuk;
        localStorage.setItem(
          "ArsipAddPosition",
          JSON.stringify(arrayPosition2)
        );
      }
    }
  }
}
function delDataPos(tombolDelPos) {
  for (let i = 0; i < arrayPosition2.length; i++) {
    if (tombolDelPos == tombolList[i]) {
      arrayPosition2 = arrayPosition2.filter(
        (person) => person.posisiMasuk != arrayPosition22[i].posisiMasuk
      );
      localStorage.setItem("ArsipAddPosition", JSON.stringify(arrayPosition2));
    }
  }
}
