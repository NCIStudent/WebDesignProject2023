document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting
    
    var beverage = document.getElementById("beverage").value;
    var size = document.getElementById("size").value;
    var quantity = document.getElementById("quantity").value;
    var milk = document.getElementById("milk").value;
    
    // Calculation per unit for the selection of the user depending on the values selected
    var costPerUnit;
    switch (beverage) {
      case "americano":
        switch (size) {
          case "small":
            costPerUnit = 2.60;
            break;
          case "medium":
            costPerUnit = 3.20;
            break;
          case "large":
            costPerUnit = 3.85;
            break;
        }
        break;
      case "latte":
        switch (size) {
          case "small":
            costPerUnit = 3.0;
            break;
          case "medium":
            costPerUnit = 3.60;
            break;
          case "large":
            costPerUnit = 4.25;
            break;
          default:
            costPerUnit = 3.5;
        }
        break;
        case "cappucino":
        switch (size) {
          case "small":
            costPerUnit = 3.0;
            break;
          case "medium":
            costPerUnit = 3.60;
            break;
          case "large":
            costPerUnit = 4.25;
            break;
        
        }
        break;
        case "drip-coffee":
        switch (size) {
          case "small":
            costPerUnit = 3.0;
            break;
          case "medium":
            costPerUnit = 3.60;
            break;
          case "large":
            costPerUnit = 4.25;
            break;
        
        
        }
        break;
        case "flat-white":
            switch (size) {
              case "small":
                costPerUnit = 2.70;
                break;
            }
            break;
      // add more cases if the shop expands and wish to add more drinks to the menu
     
    }

    //equation to calculate the total of the users input
    var total = quantity * costPerUnit;
    
    // display the result as an alert
    alert("Your order has been submitted to the store for collection and your total cost is: €" + total);
  });

    // js code for the contact us.html form validation needs to be ticked or else it will prevent the form submission.
  function checkTerms() {
    if (document.getElementById("terms").checked) {
      alert("Thank you for accepting the terms and conditions.");
    } else {
      alert("You must accept the terms and conditions to submit the form.");
      event.preventDefault();
    }
  }