const API_URL = 'https://crm-examen-chi.vercel.app'

async function chargerDonnees() {
    try {
        const reponse = await fetch(API_URL + '/api/test')
        const data = await reponse.json()
        document.getElementById('resultat').textContent = data.message
    } catch (erreur) {
        console.error('Erreur :', erreur)
        document.getElementById('resultat').textContent = 'Erreur de connexion au back'
    }
}

chargerDonnees()