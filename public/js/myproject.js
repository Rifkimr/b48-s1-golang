let dataProject = []; // ? Array kosong untuk menampung banyak object data

function addProject(event) {
  event.preventDefault(); //berfungsi untuk halaman web tidak me refres

  let projectName = document.getElementById("input-name-project").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;

  //berfungsi untuk memandingan tanggal yang di berikan dengan tanggal hari ini
  let today = new Date().toISOString().split("T")[0]; // ? split("T")[0] = adalah pemisah antara tanggal dan waktu
  if (endDate > today) {
    /* ? toISOString() = untuk mengubah objek data menjadi string*/
    return alert("Tanggal tidak ditemukan"); // ? new Date()    = Metod  untuk membuat objek Date baru yang mewakili waktu dan tanggal saat ini.
  }

  //mendeklarasikan atau menginisilisasi html yang akan membuat icon
  const jsIcon = `<i class="fa-brands fa-square-js"></i>`;
  const boostrapIcon = `<i class="fa-brands fa-bootstrap"></i>`;
  const golangIcon = `<i class="fa-brands fa-golang"></i>`;
  const reactIcon = `<i class="fa-brands fa-react"></i>`;

  // checked = digunakan untuk memeriksa apakah kotak centang terkait dengan   elemen tersebut dicentang (true) atau tidak (false).
  // jika tercentang maka jsicon akan di tetapkan ke jsicondone,jika tidak maka variabel akan di berinilai string kosong ""
  let jsIconDone = document.getElementById("js-check").checked ? jsIcon : "";
  let boostrapIconDone = document.getElementById("boostrap-check").checked
    ? boostrapIcon
    : "";
  let golangIconDone = document.getElementById("golang-check").checked
    ? golangIcon
    : "";
  let reactIconDone = document.getElementById("react-check").checked
    ? reactIcon
    : "";

  // untuk membuat url gambar agar tampil
  image = image[0] ? URL.createObjectURL(image[0]) : "";
  console.log(image);

  let project = {
    projectName,
    startDate,
    endDate,
    description,
    jsIconDone,
    boostrapIconDone,
    golangIconDone,
    reactIconDone,
    image,
  };

  console.log(project);
  if ((projectName = "")) return alert("project name wajib diisii");

  if (!project.projectName) {
    return alert("Project name wajib di isi...!");
  } else if (!project.startDate) {
    return alert("Stardate wajib di isi");
  } else if (!project.endDate) {
    return alert("Endate wajib di isi?");
  } else if (!project.description) {
    return alert("Description wajib di isi");
  } else if (
    !project.jsIconDone &&
    !project.boostrapIconDone &&
    !project.golangIconDone &&
    !project.reactIconDone
  ) {
    return alert("Minimal Ceklis salah satu Technologi..!");
  } else if (!project.image) {
    return alert("File imagewajib di isi..!");
  }

  dataProject.push(project); // ? untuk mengigorimkan data2 ke dalam array yang di atas
  console.log(dataProject);
  renderListProject();
}

function renderListProject() {
  let listProject = document.getElementById("content");
  listProject.innerHTML = ``;
  for (let i = 0; i < dataProject.length; i++) {
    //converst milisecon
    let minute = 60 * 1000; // 60.000
    let hour = minute * 60; // 3.600.000
    let day = hour * 24; // 86.400.000  = 1 hari
    let week = day * 7; // 86 .399.993
    let mont = week * 4;
    let years = mont * 12;

    let distance =
      new Date(dataProject[i]?.endDate) - new Date(dataProject[i]?.startDate);
    let duration =
      distance < week
        ? `${Math.floor(distance / day)} day`
        : distance < mont
        ? `${Math.floor(distance / week)} week`
        : distance < years
        ? `${Math.floor(distance / mont)} month`
        : `${Math.floor(distance / years)} years`;
    //menambahkan konten baru
    listProject.innerHTML += ` 
           <div class="container-card">
                <img src="${dataProject[i].image}" alt="photo">
                <a href="/projectdetail/${i + 1}" target="_blank">
                    <h4 style="
                        margin: 0;">${dataProject[i].projectName}</h4>
                </a>
                <p>Duration:${duration}</p>
                <p>${dataProject[i].description}</p>
            
                <div class="tech-icont">
                    ${dataProject[i].jsIconDone}
                    ${dataProject[i].boostrapIconDone}
                    ${dataProject[i].golangIconDone}
                    ${dataProject[i].reactIconDone}
                </div>
                <div class="button-change">
                    <button class="edit-button" >Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            </div>
        `;
  }
}
function showFilename() {
  document.getElementById("show-file").innerHTML =
    document.getElementById("input-image").value;
}
