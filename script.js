//create a div container
const body=document.querySelector('body')
const container = document.createElement('div')
container.setAttribute('id','container')
container.style.display=('flex')
container.style.flexWrap=('wrap')
container.style.width=('500px')
container.style.height=('500px')
container.style.backgroundColor=('blue')
container.style.flexDirection=('row')
container.style.alignContent=('flex-start')
container.style.alignItems=('stretch')
let x=16
body.appendChild(container)
createDivChildren(x)


//create container div children
function createDivChildren(divNum = 16) {
    let y=500/x
    y=y+'px'
    for (let index = 0; index < divNum*divNum; index++) {
        const divChild=document.createElement('div')
        divChild.classList.add('grid')
        container.appendChild(divChild)    
        divChild.style.minHeight=(y)
        divChild.style.minWidth=(y)
        divChild.style.backgroundColor=('red')
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