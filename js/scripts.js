// Business logic
// Create a 'Contact' constructor function
function Contact(first,last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
function Address(street,city,county) {
  this.street = street;
  this.city = city;
  this.county = county;
}
// User-interface logic
$(document).ready(function() {
  //appending a large amount of HTML with jQuery, we'll break it into smaller strings on different lines, 
  //using the + operator to concatenate them
  $("#add-address").click(function(){
    $("#new-addresses").append(
        '<div class= "new-address">' +
          '<div class="form-group">' +
            '<label for="new-street">Street:</label>' +
            '<input type="text" class="form-control" id="new-street">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="new-city">City:</label>' +
            '<input type="text" class="form-control" id="new-city">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="new-county">County:</label>' +
            '<input type="text" class="form-control" id="new-county">' +
          '</div>' +
        '</div>' 
    );
  });
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    // Collecting information/input from the form
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    // Saving the collected input in an object
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");  
    
    // Clears the form after hitting the button
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
      // Only shows the title of the contact details e.g "First Name:"
      $("#show-contact").show();
      // Add the contact details to the requires fields
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    }); 
  });
});