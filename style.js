document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("github-projects");

    selectElement.addEventListener("change", function() {
        const selectedValue = this.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    });
});