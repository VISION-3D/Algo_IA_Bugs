/**
 * Crée une carte de tarification dynamiquement
 * @param {string} title - Le titre du forfait
 * @param {string} price - Le prix (ex: "9,99")
 * @param {Array<string>} features - Liste des fonctionnalités
 * @param {boolean} featured - Si la carte est mise en avant (optionnel)
 * @returns {HTMLElement} - L'élément DOM de la carte
 */
function createPricingCard(title, price, features, featured = false) {
    // Créer l'élément principal de la carte
    const cardElement = document.createElement('div');
    cardElement.className = `pricing${featured ? ' featured' : ''}`;
    
    // Créer le titre
    const titleElement = document.createElement('h2');
    titleElement.className = 'title';
    titleElement.textContent = title;
    
    // Créer le prix
    const priceElement = document.createElement('div');
    priceElement.className = 'price';
    priceElement.innerHTML = `<span class="currency">€</span>${price}<span class="period">/mois</span>`;
    
    // Créer la liste des fonctionnalités
    const featuresElement = document.createElement('ul');
    featuresElement.className = 'features';
    
    features.forEach(feature => {
        const listItem = document.createElement('li');
        listItem.textContent = feature;
        featuresElement.appendChild(listItem);
    });
    
    // Créer le bouton
    const buttonElement = document.createElement('button');
    buttonElement.className = 'btn';
    buttonElement.textContent = 'Choisir ce forfait';
    
    // Ajouter un gestionnaire d'événement au bouton
    buttonElement.addEventListener('click', () => {
        alert(`Vous avez sélectionné le forfait: ${title}`);
    });
    
    // Assembler tous les éléments
    cardElement.appendChild(titleElement);
    cardElement.appendChild(priceElement);
    cardElement.appendChild(featuresElement);
    cardElement.appendChild(buttonElement);
    
    return cardElement;
}

/**
 * Initialise les cartes de tarification
 */
function initializePricingCards() {
    const container = document.getElementById('pricing-cards-container');
    
    // Données des forfaits
    const pricingPlans = [
        {
            title: 'Forfait de Base',
            price: '9,99',
            features: [
                '1 Go de stockage',
                'Assistance de base',
                'Toutes les fonctionnalités principales',
                'Accès mobile',
                'Support par email'
            ],
            featured: false
        },
        {
            title: 'Forfait Premium',
            price: '19,99',
            features: [
                '10 Go de stockage',
                'Assistance prioritaire',
                'Fonctionnalités avancées',
                'Accès multi-plateforme',
                'Support 24/7',
                'Analyses détaillées',
                'API personnalisée'
            ],
            featured: true
        },
        {
            title: 'Forfait Entreprise',
            price: '49,99',
            features: [
                'Stockage illimité',
                'Gestionnaire de compte dédié',
                'Toutes les fonctionnalités',
                'Intégrations personnalisées',
                'Support technique prioritaire',
                'Formation incluse',
                'SLA garanti'
            ],
            featured: false
        }
    ];
    
    // Générer les cartes
    pricingPlans.forEach(plan => {
        const card = createPricingCard(
            plan.title,
            plan.price,
            plan.features,
            plan.featured
        );
        container.appendChild(card);
    });
}

// Initialiser les cartes quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initializePricingCards);