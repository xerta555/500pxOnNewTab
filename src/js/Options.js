const options = {

    toggleVisibility(el, condition) {
        condition ? el.classList.remove('hidden') : el.classList.add('hidden');
    },

};

let admOptionValue = document.getElementById("local").value;
{
    if (nameSelect) {
        admOptionValue = document.getElementById("local").value;
        if (admOptionValue == nameSelect.value) {
            document.getElementById("admDivCheck").style.display = "block";
        }
        else {
            document.getElementById("admDivCheck").style.display = "none";
        }
    }
    else {
        document.getElementById("admDivCheck").style.display = "none";
    }
}
