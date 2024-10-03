// Initial element targeting using querySelector
const calcBill = document.querySelector("#calculate-btn");
const resetFormElem = document.querySelector("#reset-btn");
const totalBillElem = document.querySelector("#total-bill");
const numberOfPeopleElem = document.querySelector("#people-count");
const serviceRadioButtons = document.querySelectorAll('input[name="service"]');
const tipAmountElem = document.querySelector("#tip-amount");
const tipPerPersonElem = document.querySelector("#tip-per-person");
const totalPerPersonElem = document.querySelector("#total-per-person");

// Add event listener to radio buttons
serviceRadioButtons.forEach((radio) => {
  radio.addEventListener("change", updateTipAmount);
});

// Function to calculate the bill
function calculateBill() {
  const totalBill = Number(totalBillElem.value);
  let serviceLevel = document.querySelector('input[name="service"]:checked');
  const numberOfPeople = Number(numberOfPeopleElem.value);

   if (serviceLevel)
   {
      serviceLevel =  Number(serviceLevel.value);
   }

  // Validate the total bill amount
  if (isNaN(totalBill) || totalBill <= 0 || numberOfPeople <= 0) {
    alert("Please enter a valid total bill amount or number of people.");
    return;
  }
  
  // Calculate the tip and total amount per person
  const tipAmount = totalBill * serviceLevel;
  const totalAmountPerPerson = (totalBill + tipAmount) / numberOfPeople;
  const tipPerPerson = tipAmount / numberOfPeople;

  // Display the results
  tipPerPersonElem.textContent = tipPerPerson.toFixed(2) + " Lei";
  totalPerPersonElem.textContent = totalAmountPerPerson.toFixed(2) + " Lei";
}

// Function to update the tip amount when a service level is selected
function updateTipAmount() {
  const totalBill = Number(totalBillElem.value);
  const serviceLevel = Number(
    document.querySelector('input[name="service"]:checked').value
  );

  // Check total bill and update the tip amount
  if (!isNaN(totalBill) && totalBill > 0) {
    const tipAmount = totalBill * serviceLevel;
    tipAmountElem.textContent = tipAmount.toFixed(2);
  }
}

// Function to reset the form
function resetForm() {
  // Reset all values
  const radioButtonChecked = document.querySelector('input[name="service"]:checked');
  if (radioButtonChecked) {
    radioButtonChecked.checked = false;
  }
  totalBillElem.value = "";
  numberOfPeopleElem.value = "0";
  tipAmountElem.textContent = "0";
  tipPerPersonElem.textContent = "0 Lei";
  totalPerPersonElem.textContent = "0 Lei";
}

// Event listeners for "Calculate" and "Reset" buttons
calcBill.addEventListener("click", calculateBill);
resetFormElem.addEventListener("click", resetForm);
