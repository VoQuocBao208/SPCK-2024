// Form
const former = document.getElementById("Form");
console.log(former)
const email = document.getElementById("floatingInput");
const SĐT = document.getElementById("floatingNumber");
const password = document.getElementById("floatingPassword");
const mess = document.getElementById("floatingTextarea2");

function form(e) {
  e.preventDefault();
  if (
    email.value === "" ||
    password.value === "" ||
    SĐT.value === "" ||
    mess.value === ""
  ) {
    alert("Thiếu thông tin");
  } else {
    alert(`Thông tin của bạn:
      email:${email.value}
      SĐT:${SĐT.value}
      Password:${password.value}
      Ý kiến khách hàng:${mess.value}`);

    email.value = "";
    password.value = "";
    SĐT.value = "";
    mess.value = "";
  }
}

former.addEventListener("submit", form);
