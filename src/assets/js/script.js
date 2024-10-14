document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    // Remove a classe de erro se houver ao clicar no botão (reseta estado visual)
    itemInput.classList.remove('input-error');

    if (itemValue !== '') {
        const items = document.querySelectorAll('#itemList li');
        let itemExists = false;

        items.forEach(function(item) {
            if (item.firstChild.textContent === itemValue) {
                itemExists = true;
            }
        });

        if (!itemExists) {
            const li = document.createElement('li');  
            li.textContent = itemValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.onclick = function() {
                // Animação de exclusão
                li.style.animation = 'shrinkOut 0.5s forwards';
                setTimeout(() => li.remove(), 500); 
            };

            li.appendChild(deleteButton);
            document.getElementById('itemList').appendChild(li);

            itemInput.value = '';

            li.style.animation = 'growIn 0.5s forwards';
        } else {
            alert('Este item já foi adicionado à lista.');
            itemInput.classList.add('input-error'); 
        }
    } else {
        alert('Por favor, adicione um item.');
        itemInput.classList.add('input-error'); 
    }
});

document.getElementById('itemInput').addEventListener('input', function() {
    this.classList.remove('input-error');
});
