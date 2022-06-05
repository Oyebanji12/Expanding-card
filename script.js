

var panels= document.querySelectorAll('.panel');

panels.forEach((panel) => {
 panel.addEventListener('click', () => {
     removeActiveClasses()
    panel.classList.add('active')
 })
})

function removeActiveClasses(){
    panels.forEach((panel) =>{
    panel.classList.remove('active')
    }
    
    
    )}





/*
const panells = document.querySelectorAll('.panel');

panells.forEach(function (panel){
    
panel.addEventListener('click', function () {
    removeActiveClasses();
    panel.classList.add('active')
    
})
})

function removeActiveClasses(){
    panells.forEach(function(panel) {
        panel.classList.remove('active');
        
    })
    
}
*/
