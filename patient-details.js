// patient-details.js
document.addEventListener("DOMContentLoaded", function () {
    const patientDetailsList = document.getElementById("patient-details-list");

    // Simulated patient data for demonstration purposes
    const patients = [
        { name: "John Doe", age: 35, sex: "Male", temperature: 98.6, spo2: 95, heartRate: 75, bloodPressure: "120/80", height: "175 cm", weight: "70 kg" },
        { name: "Jane Smith", age: 28, sex: "Female", temperature: 98.4, spo2: 98, heartRate: 68, bloodPressure: "110/70", height: "160 cm", weight: "55 kg" },
        // Add more patient data as needed
    ];

    // Loop through patients and display their details
    patients.forEach(patient => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${patient.name}</strong><br>
            Age: ${patient.age}
        `;
        patientDetailsList.appendChild(listItem);
    });
});
