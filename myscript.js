document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".navigation .dropdown");

    dropdowns.forEach(function (dropdown) {
        var parentNavItem = dropdown.previousElementSibling;

        parentNavItem.addEventListener("click", function () {
            var dropdownContent = dropdown;
            dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
        });
    });

    document.addEventListener("click", function (e) {
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(e.target)) {
                dropdown.style.display = "none";
            }
        });
    });
});