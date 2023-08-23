document.addEventListener("DOMContentLoaded", function () {
    const patientForm = document.getElementById("patient-form");
    const viewDetailsButton = document.getElementById("view-details");

    patientForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
    });

    viewDetailsButton.addEventListener("click", function () {
        window.location.href = "patient-details.html";
    });
});

