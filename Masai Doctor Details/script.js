
// Function to determine the role based on experienc
function determineRole(experience) {
    return experience > 3 ? 'Senior' : (experience >= 1 && experience <= 3 ? 'Junior' : 'Fresher');
}

// Function to create a table row for masai-doctor-records
function createRow(doctorData) {
    let tableBody = document.getElementById('doctorRecords');
    let newRow = document.createElement('tr');

    Object.values(doctorData).forEach(value => {
        let cell = document.createElement('td');
        cell.textContent = value;
        newRow.appendChild(cell);
    });

    // Add role cell
    let roleCell = document.createElement('td');
    roleCell.textContent = determineRole(doctorData.experience);
    newRow.appendChild(roleCell);

    // Add delete button cell in tble
    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        tableBody.removeChild(newRow);
    });
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    // Add the new row to the table
    tableBody.appendChild(newRow);
}

// Event listner for the docter form submmision
document.getElementById('doctorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve the form data 
    let name = document.getElementById('name').value;
    let doctorId = document.getElementById('doctor_id').value;
    let specialization = document.getElementById('specialization').value;
    let experience = document.getElementById('experience').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;

    // Creating doctor data object
    let doctorData = {
        name: name,
        doctorId: doctorId,
        specialization: specialization,
        experience: experience,
        email: email,
        mobile: mobile
    };

    // Creating a new row in the table
    createRow(doctorData);

    // Reset form
    document.getElementById('doctorForm').reset();
});

// Event listner of the filter change
document.getElementById('filter').addEventListener('change', function () {
    let selectedSpecialization = this.value;
    let tableRows = document.querySelectorAll('#doctorRecords tr');

    tableRows.forEach(row => {
        let specializationCell = row.querySelector('td:nth-child(3)');
        row.style.display = (selectedSpecialization === '' || specializationCell.textContent === selectedSpecialization) ? '' : 'none';
    });
});




