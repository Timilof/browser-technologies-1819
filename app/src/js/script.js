var fieldset = Array.from(document.querySelectorAll("fieldset"));
var listo = document.querySelector("main")
var formt = document.querySelector("form")
var cop = document.querySelector(".copi")
var rem = document.querySelector(".remover")
var subby = document.querySelector(".subm")
var mail = document.querySelector('.linkTo');

rem.addEventListener('click', emptied);
cop.addEventListener('click', copyer);
// subby.classlist.remove('hidden');
subby.classList.add('none');
listo.classList.remove('none');
// document.querySelectorAll('.item ').forEach(function(temp) {
//   temp.addEventListener('click', clickedItem)
// })

fieldset.forEach(field=>{
    field.querySelectorAll("input[type='checkbox']").forEach(checkbox=>{
        checkbox.addEventListener("click", clickedItem)
    })
})

function copyer() {
  var copyText = document.getElementById("listInput");
  copyText.select();
  document.execCommand("copy");
}

function emptied(){
var texter = document.getElementById("listInput");
texter.innerHTML = '';
formt.reset();
mail.href = "mailto:tostilovver_420@gmail.com?&amp;subject=Mijn%20tosti%20boodschappenlijst%20&amp;body=You'll%20need%20these%20items%20to%20make%20your'e%20tostie:"
}

function clickedItem(){
var items = this.value
var holder = document.querySelector('.boodscappenlist');
if(this.checked){
  var newLink = '∙'+items+'%20%0D%0A'
  mail.href += newLink
var elemet =
`
${items}
`
holder.insertAdjacentHTML('beforeend', elemet)
// this.removeEventListener("click", clickedItem)
}
}
