const students = [];

function addStudent() {
    const firstName = document.getElementById('first_name').value.trim();
    const middleName = document.getElementById('middle_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!firstName || !middleName || !lastName || !phone || !address) {
        alert('Please fill in all fields.');
        return;
    }

    const student = { firstName, middleName, lastName, phone, address };
    students.push(student);

    renderStudents();
    clearInputs();
}

function renderStudents() {
    const tableBody = document.getElementById('student-list');
    tableBody.innerHTML = '';

    for (const { firstName, middleName, lastName, phone, address } of students) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${middleName}</td>
            <td>${lastName}</td>
            <td>${phone}</td>
            <td>${address}</td>
        `;
        tableBody.appendChild(row);
    }
}

function clearInputs() {
    document.getElementById('first_name').value = '';
    document.getElementById('middle_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
}