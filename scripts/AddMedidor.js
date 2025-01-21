let currentEditingMedidorId = null;

function openNewMedidorModal() {
    document.getElementById('newMedidorModal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function registerMedidor(event) {
    event.preventDefault();
    const id = document.getElementById('medidorId').value;
    const location = document.getElementById('medidorLocation').value;
    const date = document.getElementById('medidorDate').value;
    const state = document.getElementById('medidorState').value;

    const tbody = document.getElementById('medidorTableBody');
    const newRow = `<tr id="medidor-${id}">
        <td>${id}</td>
        <td>${location}</td>
        <td>${date}</td>
        <td class="${state === 'activo' ? 'status-active' : 'status-inactive'}">${state}</td>
        <td>
            <button class="edit-button" onclick="openEditMedidorModal('${id}', '${location}', '${date}', '${state}')">Editar</button>
            <button class="delete-button" onclick="deleteMedidor('${id}')">Eliminar</button>
        </td>
    </tr>`;
    
    tbody.innerHTML += newRow;
    closeModal('newMedidorModal');
}

function openEditMedidorModal(id, location, date, state) {
    currentEditingMedidorId = id;
    document.getElementById('editMedidorId').value = id;
    document.getElementById('editMedidorLocation').value = location;
    document.getElementById('editMedidorDate').value = date;
    document.getElementById('editMedidorState').value = state;
    document.getElementById('editMedidorModal').classList.remove('hidden');
}

function updateMedidor(event) {
    event.preventDefault();
    const id = currentEditingMedidorId;
    const location = document.getElementById('editMedidorLocation').value;
    const date = document.getElementById('editMedidorDate').value;
    const state = document.getElementById('editMedidorState').value;

    const row = document.getElementById(`medidor-${id}`);
    row.cells[1].innerText = location;
    row.cells[2].innerText = date;
    row.cells[3].innerText = state;
    row.cells[3].className = state === 'activo' ? 'status-active' : 'status-inactive';

    closeModal('editMedidorModal');
}

function deleteMedidor(id) {
    const row = document.getElementById(`medidor-${id}`);
    if (row) {
        row.remove();
    }
}