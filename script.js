// script.js

document.addEventListener("DOMContentLoaded", function() {
    const preTaxTotalInput = document.getElementById("pre-tax-total");
    const numDinersInput = document.getElementById("num-diners");
    const gratuityInput = document.getElementById("gratuity");
    const taxRateSelect = document.getElementById("tax-rate");
  

    const preTaxTotalOutput = document.getElementById("pre-tax-total-output");
    const numDinersOutput = document.getElementById("num-diners-output");
    const totalTipOutput = document.getElementById("total-tip-output");
    const totalTaxOutput = document.getElementById("total-tax-output");
    const totalBillOutput = document.getElementById("total-bill-output");
    const totalPerDinerOutput = document.getElementById("total-per-diner-output");
    const preTaxPercentageOutput = document.getElementById("pre-tax-percentage-output");
  

    function calculateBill() {
      const preTaxTotal = parseFloat(preTaxTotalInput.value);
      const numDiners = parseInt(numDinersInput.value);
      const gratuity = parseInt(gratuityInput.value);
      const taxRate = parseFloat(taxRateSelect.value);
  

      const tipAmount = (preTaxTotal * gratuity) / 100;
      const totalTax = preTaxTotal * taxRate;
      const totalBill = preTaxTotal + tipAmount + totalTax;
      const totalPerDiner = totalBill / numDiners;
      const preTaxPercentage = (preTaxTotal / totalBill) * 100;
  

      preTaxTotalOutput.textContent = preTaxTotal.toFixed(2);
      numDinersOutput.textContent = numDiners;
      totalTipOutput.textContent = tipAmount.toFixed(2);
      totalTaxOutput.textContent = totalTax.toFixed(2);
      totalBillOutput.textContent = totalBill.toFixed(2);
      totalPerDinerOutput.textContent = totalPerDiner.toFixed(2);
      preTaxPercentageOutput.textContent = preTaxPercentage.toFixed(2) + "%";
    }
  

    preTaxTotalInput.addEventListener("input", calculateBill);
    numDinersInput.addEventListener("input", calculateBill);
    gratuityInput.addEventListener("input", calculateBill);
    taxRateSelect.addEventListener("change", calculateBill);
  });
  