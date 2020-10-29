// Supported by https://www.emailjs.com/

function submitInfo(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let template_params = {
    "from_name": name,
    "from_email": email,
    "message_html": message
}

let service_id = "default_service";
let template_id = "template_47gjBkEs";
emailjs.send(service_id, template_id, template_params);
    
alert("Thank you " + name + " for your message! We will contact you at " + email);
document.getElementById("form").reset(); 
return ;
     
  }