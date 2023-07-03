function sendMails() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    }; 
    const serviceID = "service_l6vhvua";
    const templateID = "template_sripoqz";

    emailjs.send(serviceID, templateID, params).than(res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully Thank you!");
            })
        .catch(err => console.log(err));
}

