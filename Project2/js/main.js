let filter = document.getElementById("filter")

filter.addEventListener( 'keyup', getNames)

function getNames(){
  let getValue = document.getElementById('filter').value.toUpperCase()
  console.log(getValue)
}

let ul = document.getElementById('names')
let li = ul.querySelectorAll('li.colection-item')

for(let i = 0; i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];
    if( a.innerHTML.toUpperCase().indexOf(filter) > -1){
     li[i].style.display = ''
    }else{
     li[i].style.display = 'none'

    }
}