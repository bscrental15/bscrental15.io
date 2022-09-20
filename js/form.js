document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  //WA No
  //let randValue = Math.floor(Math.random() * 100) + 1;
  let tel = "";
  let url = "";
  //if(randValue % 2 == 0) {
  tel = "6282116091165";
  //}else{
  //tel = "6285864040204";
  //}

  let location = document.querySelector("#locationselectio").value;
  let droplocation = document.querySelector("#droplocationselectio").value;
  let tanggal = document.querySelector("#tanggal").value;
  let jam = document.querySelector("#jam").value;
  let numdays = document.querySelector("#daysnum").value;
  let pelayan = document.querySelector("#pelayan").value;
  let layanan = document.querySelector("#layanan").value;
  let tanggapan = document.querySelector("#tanggapan");

  tanggapan.classList.remove("fail");
  tanggapan.classList.remove("send");

  url = `https://api.whatsapp.com/send?phone=${tel}&text=
      *_BSC RENTAL MOBIL_*%0A
      *Rental Murah Se-bandung Raya*%0A
      Kami hadir di kota - kota di Indonesia%0A
      *R E S E R V A S I*%0A
      ------------------------------------------------------%0A%0A
      *Lokasi Penjemputan:*%0A
      ${location}%0A
      *Tanggal Sewa:*%0A
      ${tanggal}%0A
      *Jam:*%0A
      ${jam}%0A
      *Jumlah Hari:*%0A
      ${numdays}%0A
      *Tipe Layanan:*%0A
      ${pelayan}%0A
      *Tipe Mobil:*%0A
      ${layanan}%0A
      *Tujuan Destinasi:*%0A
      ${droplocation}%0A%0A
      Follow us :%0A
      Website : www.bscrental.com%0A
      https://instagram.com/bsc_rental%0A
      https://web.facebook.com/BastianServiceCentre%0A%0A
      Reservation WA (62821-1609-1165)%0A
      Reservation WA (62858-6404-0204)%0A`;

  //if (klien === "" || tanggal === "" || jam === "") {
  if (location === "" || tanggal === "" || jam === "" || numdays === "") {
    tanggapan.classList.add("fail");
    //tanggapan.innerHTML = `Please fill all data, ${klien}`;
    tanggapan.innerHTML = `Silahkan isikan seluruh data dengan lengkap!`;
    return false;
  }
  tanggapan.classList.remove("fail");
  tanggapan.classList.add("send");
  tanggapan.innerHTML = `Reservasi anda telah dikirimkan`;

  window.open(url);
});
