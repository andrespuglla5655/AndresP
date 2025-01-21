const gateways = [
  ];
  
  function openNewGatewayModal() {
    document.getElementById('newGatewayModal').classList.remove('hidden');
  }
  
  function registerGateway(event) {
    event.preventDefault();
    const id = document.getElementById('gatewayId').value;
    const location = document.getElementById('location').value;
    const state = document.getElementById('initialState').value;
    const configDate = document.getElementById('configDate').value;
  
    gateways.push({ id, location, state, configDate });
    updateGatewayTable();
    closeModal('newGatewayModal');
    alert('Nuevo gateway registrado');
  }
  
  function openEditModal(id, location, state, configDate) {
    document.getElementById('editGatewayModal').classList.remove('hidden');
    document.getElementById('editGatewayId').value = id;  // Asigna el ID
    document.getElementById('editLocation').value = location;
    document.getElementById('editInitialState').value = state;
    document.getElementById('editConfigDate').value = configDate;
  }
  
  function updateGateway(event) {
    event.preventDefault();
    const id = document.getElementById('editGatewayId').value;
    const location = document.getElementById('editLocation').value;
    const state = document.getElementById('editInitialState').value;
    const configDate = document.getElementById('editConfigDate').value;
  
    const gatewayIndex = gateways.findIndex(gateway => gateway.id == id);
    if (gatewayIndex !== -1) {
      gateways[gatewayIndex] = { id, location, state, configDate };
      updateGatewayTable();
      closeModal('editGatewayModal');
      alert('Gateway actualizado');
    }
  }
  
  function removeGateway(id) {
    const gatewayIndex = gateways.findIndex(gateway => gateway.id == id);
    if (gatewayIndex !== -1) {
      gateways.splice(gatewayIndex, 1);
      updateGatewayTable();
      alert('Gateway eliminado');
    }
  }
  
  function updateGatewayTable() {
    const tableBody = document.getElementById('gatewayTableBody');
    tableBody.innerHTML = ''; // Limpiar la tabla
    gateways.forEach(gateway => {
      const row = `<tr class="table-row">
        <td>${gateway.id}</td>
        <td>${gateway.location}</td>
        <td><span class="status-${gateway.state}">${gateway.state}</span></td>
        <td>${gateway.configDate}</td>
        <td>
          <button class="edit-button" onclick="openEditModal(${gateway.id}, '${gateway.location}', '${gateway.state}', '${gateway.configDate}')">
            <i class="bx bx-edit"></i> Editar
          </button>
          <button class="delete-button" onclick="removeGateway(${gateway.id})">
            <i class="bx bx-trash"></i> Eliminar
          </button>
        </td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
  }