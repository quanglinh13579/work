function hienDiem() {
  let ten = document.getElementById("ten").value;
  let diem = document.getElementById("diem").value;
  let bang = document.getElementById("bang");
  bang.innerHTML += `<tr><td>${ten}</td><td>${diem}</td></tr>`;
}
