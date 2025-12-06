async function sendMail(event) {

  event.preventDefault();

  let params = {
    first: document.getElementById("first").value,
    last: document.getElementById("last").value,
    email: document.getElementById("email").value,
    tel: document.getElementById("phone").value,
    size: document.querySelector('input[name="size"]:checked')?.value,
    state: document.querySelector('input[name="state"]:checked')?.value,
    desc: document.getElementById("desc").value,
    payment: document.querySelector('input[name="payment"]:checked')?.value,
    username: document.getElementById("username").value
  };

  const allFilled = Object.values(params).every(
    value => value !== null && value !== ""
  );

  if (!allFilled) {
    alert("Please fill out all fields.");
    return;
  } else {

    emailjs
     .send("service_gmail", "template_ga6dnyn", params)
     .then(() => {
        sessionStorage.setItem("formData", JSON.stringify(params));
        window.location.href = "thankyou.html";
        console.log("Success!");
        alert("Order sent sucsefully!");
     })
     .catch((error) => {
       console.error("EmailJS Error:", error);
       alert("Failed to send email.");
     });
    
  }

}

