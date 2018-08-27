const options = {

    toggleVisibility(el, condition) {
        condition ? el.classList.remove('hidden') : el.classList.add('hidden');
    },

};

let typeSelect = document.getElementById("type")
typeSelect.addEventListener("change", function () {
    let admOptionValue = document.getElementById("local").value;
    if (admOptionValue == typeSelect.value) {
        document.getElementById("admDivCheck").style.display = "block";
    }
    else {
        document.getElementById("admDivCheck").style.display = "none";
    }
});
