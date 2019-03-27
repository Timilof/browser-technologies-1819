// function copyElementText(id) {
//     var text = document.getElementById(pick).innerText;
//     var elem = document.createElement("textarea");
//     document.body.appendChild(elem);
//     elem.value = text;
//     elem.select();
//     document.execCommand("copy");
//     document.body.removeChild(elem);
// }
const fieldset = Array.from(document.querySelectorAll("fieldset"));

// document.querySelectorAll('.item ').forEach(function(temp) {
//   temp.addEventListener('click', clickedItem)
// })

fieldset.forEach(field=>{
    field.querySelectorAll("input[type='checkbox'] + label").forEach(checkbox=>{
        checkbox.addEventListener("click", clickedItem)
    })
})

function clickedItem(){
// let items = this.querySelector("p").textContent;
console.log(this);
// console.log('testing 1 2 1 2');

//
// const holder = document.querySelector('.boodscappenlist');
//
// const elemet =
//   `
//
//   <p>${items}</p>
// `
// holder.insertAdjacentHTML('beforeend', elemet)
}
