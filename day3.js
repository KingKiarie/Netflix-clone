const parent-list= document.querySelector('.parent-list')

parent-list.addEventListener('click'function(e){
    console.log(e.target)
    if(e.target === 'Li'){
        const sublist= document.querySelectorAll('.sub-list')
        sublist.forEach(function(sub){
            sublist.classList.toggle('hidden')

        })
        
    }
})