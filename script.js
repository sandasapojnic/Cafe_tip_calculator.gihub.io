document.getElementById('calculate-btn').addEventListener('click', calculateBill);
document.getElementById('reset-btn').addEventListener('click', resetForm);

const serviceRadioButtons = document.querySelectorAll('input[name="service"]');
serviceRadioButtons.forEach((radio) => {
    radio.addEventListener('change', updateTipAmount);
});

function calculateBill() {
    const totalBill = parseFloat(document.getElementById('total-bill').value);
    const serviceLevel = parseFloat(document.querySelector('input[name="service"]:checked').value);
    const numberOfPeople = parseInt(document.getElementById('people-count').value);

    if (isNaN(totalBill) || totalBill <= 0) {
        alert("Introdu o sumă validă pentru factura totală.");
        return;
    }

    const tipAmount = totalBill * serviceLevel;
    const totalAmountPerPerson = (totalBill + tipAmount) / numberOfPeople;
    const tipPerPerson = tipAmount / numberOfPeople;

    document.getElementById('tip-per-person').textContent = tipPerPerson.toFixed(2) + " Lei";
    document.getElementById('total-per-person').textContent = totalAmountPerPerson.toFixed(2) + " Lei";
}

function updateTipAmount() {
    const totalBill = parseFloat(document.getElementById('total-bill').value);
    const serviceLevel = parseFloat(document.querySelector('input[name="service"]:checked').value);

    if (!isNaN(totalBill) && totalBill > 0) {
        const tipAmount = totalBill * serviceLevel;
        document.getElementById('tip-amount').textContent = tipAmount.toFixed(2);
    }
}

function resetForm() {
    document.getElementById('total-bill').value = '';
    document.querySelector('input[name="service"]:checked').checked = false;
    document.getElementById('people-count').value = '0';
    document.getElementById('tip-amount').textContent = '0';
    document.getElementById('tip-per-person').textContent = '0 Lei';
    document.getElementById('total-per-person').textContent = '0 Lei';
}