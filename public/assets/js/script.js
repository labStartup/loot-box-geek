/* index.php
**** Instruções para abrir e fechar modal do formulários de login e cadastro ****
*/
let openModal = document.querySelectorAll(".open-modal");

openModal.forEach(button => {

    // Se houver um evento de click
    button.addEventListener('click', () => {

        // Vou pegar o atributo data-modal
        const modal = button.dataset.modal;
        // Pegar o id do dialog que tem o nome igual ao valor inserido no atributo data-modal:
        const modalId = document.getElementById(modal);
        
        modalId.showModal();
    });
});

// Agora o mesmo para fechar o modal aberto
const closeModal = document.querySelectorAll('.close-modal');

closeModal.forEach(button =>{
    button.addEventListener('click', ()=>{

        const modal = button.dataset.modal;
        const modalId = document.getElementById(modal);

        modalId.close();
    });
});

// Código para botões de navegação dentro do modal
const navModal = document.querySelectorAll(".nav-modal");

navModal.forEach(button =>{
    // Se houver um click neste button
    button.addEventListener('click', ()=>{        
        // Verifica o valor do atributo data-modal
        const modalGoOpen = button.dataset.modal;
        
        // Pegar o modal que queremos abrir
        const modalId = document.getElementById(modalGoOpen);
        
        
        if (modalGoOpen == "modal-1"){
            // console.log("Vamos abrir o login");
            const modalGoClose = document.getElementById("modal-2");
            
            // Vamos fechar este modal:
            modalGoClose.close();

            // Agora vamos abrir o modal-1
            modalId.showModal();


        }
        else{
            // console.log("Vamos abrir o cadastro");
            const modalGoClose = document.getElementById("modal-1");
            // Vamos fechar este modal:
            modalGoClose.close();

            // Agora vamos abrir o modal-1
            modalId.showModal();
        }
    });
});
