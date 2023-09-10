document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evită comportamentul implicit de trimitere a formularului
  
    // Obține valorile introduse în câmpurile formularului
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
  
    // Aici poți adăuga cod pentru a prelucra sau afișa datele introduse
    console.log('Nume:', name);
    console.log('Mesaj:', message);
  
    // Poți să închizi modalul aici dacă dorești, de exemplu:
    $('#myModal').modal('hide');
  });


  function loadPage(pageUrl) {
    window.open(pageUrl, "_blank");
  };



  document.addEventListener('DOMContentLoaded', function () {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
});

