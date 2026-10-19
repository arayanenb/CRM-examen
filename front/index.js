const API_URL = 'https://crm-examen-chi.vercel.app'

async function chargerDonnees() {
    try {
        const reponse = await fetch(API_URL + '/api/hello')
        const data = await reponse.json()
        document.getElementById('resultat').textContent = data.message
    } catch (erreur) {
        console.error('Erreur :', erreur)
    }
}

chargerDonnees()