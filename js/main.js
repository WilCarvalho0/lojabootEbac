document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var telefoneInput = document.getElementById('telefone');
    var mensagemInput = document.getElementById('mensagem');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      var nome = nomeInput.value.trim().substring(0, 40);
      var email = emailInput.value.trim().substring(0, 40);
      var telefone = telefoneInput.value.trim().substring(0, 12);
      var mensagem = mensagemInput.value.trim().substring(0, 120);
      
      
      
      console.log('Nome: ' + nome);
      console.log('E-mail: ' + email);
      console.log('Telefone: ' + telefone);
      console.log('Mensagem: ' + mensagem);
      
      form.reset();
    });
    
    
    nomeInput.addEventListener('input', function() {
      if (nomeInput.value.length > 40) {
        nomeInput.value = nomeInput.value.substring(0, 40);
      }
    });
    

    emailInput.addEventListener('input', function() {
      if (emailInput.value.length > 40) {
        emailInput.value = emailInput.value.substring(0, 40);
      }
    });
    
    
    telefoneInput.addEventListener('input', function() {
      if (telefoneInput.value.length > 12) {
        telefoneInput.value = telefoneInput.value.substring(0, 12);
      }
    });
    
   
    mensagemInput.addEventListener('input', function() {
      if (mensagemInput.value.length > 120) {
        mensagemInput.value = mensagemInput.value.substring(0, 120);
      }
    });
  });
  