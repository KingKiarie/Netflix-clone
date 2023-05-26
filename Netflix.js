const Parent = document.querySelector('.parent-list')

parent.addEventListener('click', function(event){

    const sublist= event.target.querySelector('.sub-List')

    if(event.target.tagName === 'LI'){
        sublist.classList.toggle('hidden')
    }
    
})