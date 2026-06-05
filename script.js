const categoriesContainer = document.getElementById("categories");

document.getElementById("addCategoryBtn").addEventListener("click", () => {

const categoryBox = document.createElement("div");
categoryBox.style.border = "1px solid black";
categoryBox.style.padding = "10px";
categoryBox.style.margin = "10px 0";

categoryBox.innerHTML = `
    <input type="text" placeholder="Category Name">
    <div class="expenses"></div>
    <button class="addExpenseBtn">Add Expense</button>
`;

categoriesContainer.appendChild(categoryBox);

const addExpenseBtn = categoryBox.querySelector(".addExpenseBtn");
const expensesDiv = categoryBox.querySelector(".expenses");

addExpenseBtn.addEventListener("click", () => {
    const expenseInput = document.createElement("input");

    expenseInput.placeholder = "Expense Amount";
    
    expensesDiv.appendChild(expenseInput);
    expensesDiv.appendChild(document.createElement("br"));
    });
});