let enterprises = [
    {
        id: 1,
        name: "Агрофірма Зелений Світ",
        activity: "Вирощування овочів"
    },
    {
        id: 2,
        name: "Молочна ферма Бурьонка",
        activity: "Молочне виробництво"
    },
    {
        id: 3,
        name: "Птахофабрика Золота Курка",
        activity: "Птахівництво"
    }
];

let products = [
    {
        id: 1,
        name: "Помідори",
        shelf_life: "14",
        new_general: "Так"
    },
    {
        id: 2,
        name: "Молоко",
        shelf_life: "5",
        new_general: "Ні"
    },
    {
        id: 3,
        name: "Яйця",
        shelf_life: "30",
        new_general: "Так"
    }
];

let supplies = [
    {
        id: 1,
        enterprise: "Агрофірма Зелений Світ",
        product: "Помідори",
        date: "2025-06-15",
        volume: "500",
        quality: "Відмінно"
    },
    {
        id: 2,
        enterprise: "Молочна ферма Бурьонка",
        product: "Молоко",
        date: "2025-06-16",
        volume: "200",
        quality: "Добре"
    },
    {
        id: 3,
        enterprise: "Птахофабрика Золота Курка",
        product: "Яйця",
        date: "2025-06-17",
        volume: "1000",
        quality: "Відмінно"
    }
];

enterprisesLastId = 3;
productsLastId = 3;
suppliesLastId = 3;

function displayEnterprises() {
    const enterpriseTab = document.getElementById('enterprises');
    const enterpriseSelect = document.getElementById('supplyEnterpriseInput');
    let enterpriseSelectContent = ``;
    let enterpriseTabContent = `
        <h3>Підприємства</h3>
        <button id="addEnterprise" class="btn btn-success" data-toggle="modal" data-target="#enterpriseModal">Додати</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Назва</th>
                    <th>Вид діяльності</th>
                    <th>Дії</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    for (let i = 0; i < enterprises.length; i++) {
        enterpriseSelectContent += `<option value="${enterprises[i].name}">${enterprises[i].name}</option>`;
        
        enterpriseTabContent += `
            <tr>
                <td>${enterprises[i].name}</td>
                <td>${enterprises[i].activity}</td>
                <td>
                    <button data-id="${enterprises[i].id}" class="edit-enterprise btn btn-warning">Редагувати</button>
                    <button data-id="${enterprises[i].id}" class="delete-enterprise btn btn-danger">Видалити</button>
                </td>
            </tr>
        `;
    }
    
    enterpriseTabContent += `</tbody></table>`;
    enterpriseTab.innerHTML = enterpriseTabContent;
    if (enterpriseSelect) {
        enterpriseSelect.innerHTML = enterpriseSelectContent;
    }
}

function displayProducts() {
    const productTab = document.getElementById('products');
    const productSelect = document.getElementById('supplyProductInput');
    let productSelectContent = ``;
    let productTabContent = `
        <h3>Продукція</h3>
        <button id="addProduct" class="btn btn-success" data-toggle="modal" data-target="#productModal">Додати</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Назва</th>
                    <th>Термін зберігання</th>
                    <th>Нова загальна</th>
                    <th>Дії</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    for (let i = 0; i < products.length; i++) {
        productSelectContent += `<option value="${products[i].name}">${products[i].name}</option>`;
        
        productTabContent += `
            <tr>
                <td>${products[i].name}</td>
                <td>${products[i].shelf_life} днів</td>
                <td>${products[i].new_general}</td>
                <td>
                    <button data-id="${products[i].id}" class="edit-product btn btn-warning">Редагувати</button>
                    <button data-id="${products[i].id}" class="delete-product btn btn-danger">Видалити</button>
                </td>
            </tr>
        `;
    }
    
    productTabContent += `</tbody></table>`;
    productTab.innerHTML = productTabContent;
    if (productSelect) {
        productSelect.innerHTML = productSelectContent;
    }
}

function displaySupplies() {
    const supplyTab = document.getElementById('supplies');
    let supplyTabContent = `
        <h3>Поставлення</h3>
        <button id="addSupply" class="btn btn-success" data-toggle="modal" data-target="#supplyModal">Додати</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Підприємство</th>
                    <th>Продукція</th>
                    <th>Дата</th>
                    <th>Обсяг</th>
                    <th>Оцінка якості</th>
                    <th>Дії</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    for (let i = 0; i < supplies.length; i++) {
        supplyTabContent += `
            <tr>
                <td>${supplies[i].enterprise}</td>
                <td>${supplies[i].product}</td>
                <td>${supplies[i].date}</td>
                <td>${supplies[i].volume}</td>
                <td>${supplies[i].quality}</td>
                <td>
                    <button data-id="${supplies[i].id}" class="edit-supply btn btn-warning">Редагувати</button>
                    <button data-id="${supplies[i].id}" class="delete-supply btn btn-danger">Видалити</button>
                </td>
            </tr>
        `;
    }
    
    supplyTabContent += `</tbody></table>`;
    supplyTab.innerHTML = supplyTabContent;
}

displayEnterprises();
displayProducts();
displaySupplies();

//event processors
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-enterprise')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < enterprises.length; i++) {
            if (elementId == enterprises[i].id) {
                enterprises.splice(i, 1);
                break;
            }
        }
        displayEnterprises();
    } else if (e.target.classList.contains('delete-product')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < products.length; i++) {
            if (elementId == products[i].id) {
                products.splice(i, 1);
                break;
            }
        }
        displayProducts();
    } else if (e.target.classList.contains('delete-supply')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < supplies.length; i++) {
            if (elementId == supplies[i].id) {
                supplies.splice(i, 1);
                break;
            }
        }
        displaySupplies();
    } else if (e.target.classList.contains('edit-enterprise')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < enterprises.length; i++) {
            if (elementId == enterprises[i].id) {
                document.getElementById('enterpriseIdInput').value = enterprises[i].id;
                document.getElementById('enterpriseNameInput').value = enterprises[i].name;
                document.getElementById('enterpriseActivityInput').value = enterprises[i].activity;
                document.getElementById('addEnterprise').click();
                break;
            }
        }
    } else if (e.target.classList.contains('edit-product')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < products.length; i++) {
            if (elementId == products[i].id) {
                document.getElementById('productIdInput').value = products[i].id;
                document.getElementById('productNameInput').value = products[i].name;
                document.getElementById('productShelfLifeInput').value = products[i].shelf_life;
                document.getElementById('productNewGeneralInput').value = products[i].new_general;
                document.getElementById('addProduct').click();
                break;
            }
        }
    } else if (e.target.classList.contains('edit-supply')) {
        e.preventDefault();
        let elementId = e.target.getAttribute('data-id');
        for (let i = 0; i < supplies.length; i++) {
            if (elementId == supplies[i].id) {
                document.getElementById('supplyIdInput').value = supplies[i].id;
                document.getElementById('supplyEnterpriseInput').value = supplies[i].enterprise;
                document.getElementById('supplyProductInput').value = supplies[i].product;
                document.getElementById('supplyDateInput').value = supplies[i].date;
                document.getElementById('supplyVolumeInput').value = supplies[i].volume;
                document.getElementById('supplyQualityInput').value = supplies[i].quality;
                document.getElementById('addSupply').click();
                break;
            }
        }
    }
});

document.addEventListener('submit', function (e) {
    if (e.target.id == "enterpriseForm") {
        e.preventDefault();
        let id = document.getElementById('enterpriseIdInput').value;
        let name = document.getElementById('enterpriseNameInput').value;
        let activity = document.getElementById('enterpriseActivityInput').value;
        
        if (id == "") {
            let newEnterprise = {
                id: ++enterprisesLastId,
                name: name,
                activity: activity
            }
            enterprises.push(newEnterprise);
        } else {
            for (let i = 0; i < enterprises.length; i++) {
                if (id == enterprises[i].id) {
                    enterprises[i].name = name;
                    enterprises[i].activity = activity;
                    break;
                }
            }
        }
        displayEnterprises();
        document.getElementById('enterpriseIdInput').value = "";
        document.getElementById('enterpriseForm').reset();
        document.getElementById('closeEnterpriseModal').click();
        
    } else if (e.target.id == "productForm") {
        e.preventDefault();
        let id = document.getElementById('productIdInput').value;
        let name = document.getElementById('productNameInput').value;
        let shelf_life = document.getElementById('productShelfLifeInput').value;
        let new_general = document.getElementById('productNewGeneralInput').value;
        
        if (id == "") {
            let newProduct = {
                id: ++productsLastId,
                name: name,
                shelf_life: shelf_life,
                new_general: new_general
            }
            products.push(newProduct);
        } else {
            for (let i = 0; i < products.length; i++) {
                if (id == products[i].id) {
                    products[i].name = name;
                    products[i].shelf_life = shelf_life;
                    products[i].new_general = new_general;
                    break;
                }
            }
        }
        displayProducts();
        document.getElementById('productIdInput').value = "";
        document.getElementById('productForm').reset();
        document.getElementById('closeProductModal').click();
        
    } else if (e.target.id == "supplyForm") {
        e.preventDefault();
        let id = document.getElementById('supplyIdInput').value;
        let enterprise = document.getElementById('supplyEnterpriseInput').value;
        let product = document.getElementById('supplyProductInput').value;
        let date = document.getElementById('supplyDateInput').value;
        let volume = document.getElementById('supplyVolumeInput').value;
        let quality = document.getElementById('supplyQualityInput').value;
        
        if (id == "") {
            let newSupply = {
                id: ++suppliesLastId,
                enterprise: enterprise,
                product: product,
                date: date,
                volume: volume,
                quality: quality
            }
            supplies.push(newSupply);
        } else {
            for (let i = 0; i < supplies.length; i++) {
                if (id == supplies[i].id) {
                    supplies[i].enterprise = enterprise;
                    supplies[i].product = product;
                    supplies[i].date = date;
                    supplies[i].volume = volume;
                    supplies[i].quality = quality;
                    break;
                }
            }
        }
        displaySupplies();
        document.getElementById('supplyIdInput').value = "";
        document.getElementById('supplyForm').reset();
        document.getElementById('closeSupplyModal').click();
    }
});
