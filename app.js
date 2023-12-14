document.querySelector('#btn').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("text here ")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                    ${document.querySelector('#newtask input').value}
    
                <button class="delete">
                      
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}