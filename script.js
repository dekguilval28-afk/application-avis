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

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAdOcIWZylYbyt6Wb4lMnX0f8yS_Tt_cnU",
    authDomain: "avis-camping-caristes.firebaseapp.com",
    projectId: "avis-camping-caristes",
    storageBucket: "avis-camping-caristes.firebasestorage.app",
    messagingSenderId: "1023687367692",
    appId: "1:1023687367692:web:50e593a47e5018b456a229",
    measurementId: "G-DXQDQFK3T6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
