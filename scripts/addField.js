// search for the button
//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
// When you click the button
.addEventListener('click', cloneField)
//executar uma acao          
// perform an action
function cloneField(){
    //dulplicar os campos. Quais campos??
    // duplicates the fields. Which fields ??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // take the fields. What fields?
    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    // for each field clear    
    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        // take the field of the moment and clean it
        field.value = ""
    })



    
    //colocar na pagina. onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

    