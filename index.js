function sendData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

     axios
      .get("https://crudcrud.com/api/0dc02674e5ae4f929b93daf47768f7cc/appointmentdata", {
        name: name,
        email: email,
        phone: phone,
      })
      .then(function (response) {
       console.log(response);
        alert("Data sent successfully!");
      })
       .catch(function (error) {
        console.log(error);
        alert("An error occurred while sending the data.");
      });

    data={
        name: name,
        email: email,
        phone: phone
    }
    
      
  }