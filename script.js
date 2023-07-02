const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const itemPrices = document.querySelectorAll(".price");
  let totalPrice = 0;

  itemPrices.forEach((price) => {
    totalPrice += parseInt(price.textContent);
  });

  const table = document.querySelector("table");
  const newRow = table.insertRow();
  const newCell = newRow.insertCell();
  newCell.setAttribute("colspan", "2");
  newCell.textContent = "Total Price: " + totalPrice;
};

getSumBtn.addEventListener("click", getSum);

