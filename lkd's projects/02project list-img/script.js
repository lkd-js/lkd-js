const list = document.getElementById('list');
const lis = document.querySelectorAll('#list li');


index = 0;
var timer = setInterval(()=>{
    trans();
    index++;
    index > lis.length-1? index = 0:''
},1500)

function trans(){
    lis.forEach((v,i)=>{
        i === index?v.classList.add('active'): v.classList = []
    })
}

list.onmouseenter = function(){
    clearInterval(timer)
}
list.onmouseleave = function(){
    clearInterval(timer);
    timer = setInterval(()=>{
        trans();
        index++;
        index > lis.length-1? index = 0:''
    },1500)
}

let n;
let lock = true;
list.onclick = function(e){
    if(!lock) return;
    lock = false;
    if(e.target.tagName.toLowerCase() === 'li'){
        n = e.target.getAttribute('data-n');
        index = Number(n);
        trans()
    }
    setTimeout(()=>lock = true,1000)
}