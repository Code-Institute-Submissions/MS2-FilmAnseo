function sendMail(contactForm){
    emailjs.send("service_xm6go8k","template_bk2ro5o",{
from_name: contactForm.name.value,
from_email: contactForm.email_address.value,
add_film: contactForm.film_add_name.value,
add_location: contactForm.film_add_location.value,
add_message: contactForm.message_text.value,
})
    .then( 
       function(response){
           console.log("Successful", response);
       },
       function(error){
          console.log("Failed", error);
       });
       return false;
}

