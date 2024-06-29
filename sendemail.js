document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (e) {
      e.preventDefault();

      let params = {
        name: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('assunto').value,
        message: document.getElementById('mensagem').value
      };

      emailjs.send('service_ruq5la5', 'template_ncabg1m', params).then(
        function() {
          Toastify({
            text: "E-mail enviado com sucesso!",
            duration: 3000, // Duração do toast em milissegundos
            close: true, // Mostrar botão de fechar
            gravity: "top", // Posição do toast
            position: "right", // Posição do toast
            backgroundColor: "#4CAF50", // Cor de fundo do toast
          }).showToast();

          // Limpar os campos do formulário
          document.getElementById('nome').value = '';
          document.getElementById('email').value = '';
          document.getElementById('assunto').value = '';
          document.getElementById('mensagem').value = '';
        },
        function(error) {
          Toastify({
            text: "Houve um erro ao enviar o e-mail: " + error,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "#f44336",
          }).showToast();
        }
      );
    });
});

