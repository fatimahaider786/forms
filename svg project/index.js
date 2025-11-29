function changeCarColor(){
    const ColorSelector=document.getElementById('color-selector')
    const newColor = ColorSelector.value;
    const carBodyElement=document.getElementById('car-body')
    if(carBodyElement){
        carBodyElement.setAttribute('fill',newColor)
    }
    else{
        console.error("Error:'car-body' id wala element nhi mila" )
    }
}
function startMoving(){
    const carContainer=document.getElementById('car-container')
    carContainer.classList.toggle('is-moving')
}