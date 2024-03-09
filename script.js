// Fetch vegetables from backend and display them
window.onload = function() {
    fetch('http://localhost:3000/vegetables')
        .then(response => response.json())
        .then(data => displayVegetables(data));
};

function displayVegetables(vegetables) {
    const vegetableList = document.getElementById('vegetable-list');
    vegetables.forEach(vegetable => {
        const vegetableItem = document.createElement('div');
        vegetableItem.innerHTML = `
            <h2>${vegetable.name}</h2>
            <p>Price: $${vegetable.price}</p>
            <button onclick="buyVegetable('${vegetable.id}')">Buy</button>
        `;
        vegetableList.appendChild(vegetableItem);
    });
}

function buyVegetable(vegetableId) {
    fetch(`http://localhost:3000/buy/${vegetableId}`, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}