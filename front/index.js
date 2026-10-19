console.log("Hello from back end");
async function chargerDonnees() {
    try {
        const reponse = await fetch('http://localhost:4000/api/hello')
        const data = await reponse.json()
        document.getElementById('resultat').textContent = data.message
    } catch (erreur) {
        console.error('Erreur :', erreur)
    }
}

chargerDonnees()