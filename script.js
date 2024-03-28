//create a div container
const body=document.querySelector('body')
const container = document.createElement('div')
container.setAttribute('id','container')
container.style.display=('flex')
container.style.flexWrap=('wrap')
container.style.width=('500px')
container.style.height=('500px')
container.style.flexDirection=('row')
container.style.alignContent=('flex-start')
container.style.alignItems=('stretch')

body.appendChild(container)


var range = document.getElementById('range');
var bubble = document.getElementById('bubble');

range.addEventListener("input", () => {
  setBubble(range, bubble);
});



setBubble(range, bubble);
function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    let grid=document.getElementsByClassName('grid')
    while(grid[0]){
        grid[0].parentNode.removeChild(grid[0])
    }
    
    
    createDivChildren(val)
}


//create container div children
function createDivChildren(divNum = 16) {
    let y=500/divNum
    y=y+'px'
    for (let index = 0; index < divNum*divNum; index++) {
        const divChild=document.createElement('div')
        divChild.classList.add('grid')
        container.appendChild(divChild)    
        divChild.style.minHeight=(y)
        divChild.style.minWidth=(y)
        divChild.style.backgroundColor=('black')
        divChild.style.justifyContent=('center')
        divChild.style.flexGrow=('1')

        
        
    }
    let gridElements=document.getElementsByClassName('grid')
    
    for(let i=0; i<gridElements.length;i++){
        gridElements[i].addEventListener('mouseenter', myFunction)
        
        
    }
function myFunction() {
    let randomColor ='#'+ Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor=(randomColor);
  }

}