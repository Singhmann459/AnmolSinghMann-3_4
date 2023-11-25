let usdToCad = true;

function toggleConversion() {
  usdToCad = !usdToCad;
  const toggleBtn = document.getElementById('toggleBtn');
  if (usdToCad) {
    toggleBtn.textContent = 'USD to CAD';
  } else {
    toggleBtn.textContent = 'CAD to USD';
  }
}

function convert() {
  const amount = parseFloat(document.getElementById('amount').value);
  const usdToCadRate = 1.36; // 
  const cadToUsdRate = 1 / usdToCadRate; // Conversion rate from CAD to USD

  if (!isNaN(amount)) {
    let convertedAmount = 0;
    if (usdToCad) {
      convertedAmount = amount * usdToCadRate;
      convertedAmount = Math.round(convertedAmount * 1000) / 1000; // Round to three decimal places
      document.getElementById('result').innerText = `${amount.toFixed(2)} USD is approximately ${convertedAmount.toFixed(3)} CAD`;
    } else {
      convertedAmount = amount * cadToUsdRate;
      convertedAmount = Math.round(convertedAmount * 100) / 100; // Round to two decimal places
      document.getElementById('result').innerText = `${amount.toFixed(2)} CAD is approximately ${convertedAmount.toFixed(2)} USD`;
    }
  } else {
    document.getElementById('result').innerText = 'Please enter a valid amount';
  }
}
