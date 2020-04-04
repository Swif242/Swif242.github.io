
// contact page variables
const contact = document.getElementById("contact");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const resume = document.getElementById("resume");

// current date
const date = moment().format("MMM-DD-YYYY");
console.log(date);
$("#date").text("Today is " + date);




// contact info revealed when clicked on
$(phone).on("click", function(){
    phone.textContent ="520-302-6653";
    console.log("test")
});

$(email).on("click", function(){
    email.textContent = "JRNels242@gmail.com";
    console.log("test")
});

