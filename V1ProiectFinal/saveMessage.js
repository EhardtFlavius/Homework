// Funcția pentru a trimite mesajul la server
function saveMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const data = {
        name: name,
        message: message
    };

    // Trimiteți datele către serverul JSON folosind o cerere POST
    fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status === 201) {
            alert("Mesajul a fost trimis cu succes!");
        } else {
            alert("A apărut o eroare la trimiterea mesajului.");
        }
    })
    .catch(error => {
        console.error("Eroare:", error);
    });
}

// Adăugați un ascultător de eveniment pentru butonul "Submit"
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", saveMessage);