document.getElementById("reviewForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const nom = document.getElementById("name").value;
    const type = document.getElementById("service").value;
    const note = document.getElementById("rating").value;
    const commentaire = document.getElementById("comment").value;

    alert(
        "Merci " + nom +
        "\nType : " + type +
        "\nNote : " + note + "/5" +
        "\nAvis enregistré !"
    );

    this.reset();

});

