"use strict";

/**
 * Crée une carte de tarification à partir de données fournies.
 * @param {string} title - Le titre du forfait
 * @param {string} price - Le prix formaté (ex: "9,99 $/mois")
 * @param {string[]} features - La liste des fonctionnalités
 * @returns {HTMLElement} L'élément article représentant la carte
 */
function createPricingCard(title, price, features) {
    var card = document.createElement("article");
    card.className = "pricing-card";

    var titleEl = document.createElement("h2");
    titleEl.className = "title";
    titleEl.textContent = title;

    var priceEl = document.createElement("p");
    priceEl.className = "price";
    var amountSpan = document.createElement("span");
    amountSpan.className = "amount";

    var periodSpan = document.createElement("span");
    periodSpan.className = "period";

    // Découper prix/ période si possible (format attendu: "xx /période")
    var priceParts = price.split("/");
    if (priceParts.length === 2) {
        amountSpan.textContent = priceParts[0].trim();
        periodSpan.textContent = "/" + priceParts[1].trim();
    } else {
        amountSpan.textContent = price;
        periodSpan.textContent = "";
    }

    priceEl.appendChild(amountSpan);
    priceEl.appendChild(periodSpan);

    var list = document.createElement("ul");
    list.className = "features";
    for (var i = 0; i < features.length; i++) {
        var li = document.createElement("li");
        li.textContent = features[i];
        list.appendChild(li);
    }

    var button = document.createElement("button");
    button.className = "btn";
    button.type = "button";
    button.textContent = "Choisir ce forfait";
    button.setAttribute("aria-label", "Choisir le forfait " + title);

    card.appendChild(titleEl);
    card.appendChild(priceEl);
    card.appendChild(list);
    card.appendChild(button);

    // Mettre en avant certaines cartes (ex: Premium)
    if (/premium/i.test(title)) {
        card.classList.add("is-featured");
    }

    return card;
}

(function renderPricing() {
    var grid = document.getElementById("pricingGrid");
    if (!grid) return;

    var plans = [
        {
            title: "Forfait de base",
            price: "9,99 $/mois",
            features: [
                "1 Go de stockage",
                "Assistance de base",
                "Toutes les fonctionnalités principales"
            ]
        },
        {
            title: "Forfait Premium",
            price: "19,99 $/mois",
            features: [
                "50 Go de stockage",
                "Assistance prioritaire 24/7",
                "Fonctionnalités avancées"
            ]
        }
    ];

    for (var i = 0; i < plans.length; i++) {
        var plan = plans[i];
        var card = createPricingCard(plan.title, plan.price, plan.features);
        grid.appendChild(card);
    }
})();

// Expose la fonction pour une réutilisation éventuelle
window.createPricingCard = createPricingCard;
