var snack1 = {
    name: "Banane et beurre d'amande",
    taste: "Sucré",
    timePrep: 2,
    eatOutdoor: true,
    ingredients: ["1 banane", "1 cuillère à soupe de beurre d'amande"],
    highlightednutrients: ["glucides", "potassium"],
    fastest: true,
    digestibility: "fast",
    repartitionMacros: "HG",
    // Convient pour HIIT ou cardio ou autre si peu de temps
};
var snack2 = {
    name: "Barre de céréales maison",
    taste: "Sucré",
    timePrep: 15,
    eatOutdoor: true,
    ingredients: ["flocons d'avoine", "miel", "amandes", "canneberges séchées"],
    highlightednutrients: [
        "glucides",
        "vitamine B1",
        "vitamine B2",
        "vitamine B3",
    ],
    digestibility: "medium",
    repartitionMacros: "HG",
    //   // Adapté pour le cardio ou plyométrie avec des glucides complexes et un index glycémique moyen.
};
var snack3 = {
    name: "Smoothie mangue et yaourt grec",
    taste: "Sucré",
    timePrep: 5,
    eatOutdoor: false,
    ingredients: ["1 mangue", "100g de yaourt grec", "50 ml d'eau"],
    highlightednutrients: ["proteines", "glucides", "vitamine C"],
    digestibility: "fast",
    repartitionMacros: "HGHP",
    // Bonne option pour un entraînement de force avec un équilibre entre glucides et protéines.
};
var snack4 = {
    name: "Pain complet et œuf dur",
    taste: "Salé",
    timePrep: 10,
    eatOutdoor: true,
    ingredients: ["1 tranche de pain complet", "1 œuf dur"],
    highlightednutrients: ["proteines", "glucides", "fer"],
    digestibility: "medium",
    repartitionMacros: "HGHP",
    // Idéal avant une séance de musculation pour une énergie durable et des protéines.
};
var snack5 = {
    name: "Compote de pommes et galette de riz",
    taste: "Sucré",
    timePrep: 1,
    eatOutdoor: true,
    ingredients: ["100g de compote de pommes", "2 galettes de riz"],
    highlightednutrients: ["glucides", "vitamine C"],
    fastest: true,
    digestibility: "fast",
    repartitionMacros: "HG",
    // Parfait pour un entraînement HIIT ou cardio avec des glucides rapides faciles à digérer.
};
var snack6 = {
    name: "Crêpe protéinée maison",
    taste: "Sucré",
    timePrep: 20,
    eatOutdoor: false,
    ingredients: ["2 œufs", "30g de farine complète", "10g de whey"],
    highlightednutrients: [
        "proteines",
        "glucides",
        "vitamine B1",
        "vitamine B2",
        "vitamine B3",
        "vitamine B5",
        "vitamine B8",
    ],
    digestibility: "medium",
    repartitionMacros: "HGHP",
    // Bon choix pour la musculation ou la plyométrie grâce à son mélange équilibré de macronutriments.
};
var snack7 = {
    name: "Yaourt nature et noix",
    taste: "Sucré-salé",
    timePrep: 2,
    eatOutdoor: true,
    ingredients: ["100g de yaourt nature", "10g de noix"],
    highlightednutrients: ["proteines", "lipides", "calcium"],
    digestibility: "slow",
    repartitionMacros: "HGHP",
    // Convient pour les sports demandant une énergie prolongée comme la musculation.
};
var snack8 = {
    name: "Houmous et bâtonnets de carotte",
    taste: "Salé",
    timePrep: 10,
    eatOutdoor: true,
    ingredients: ["50g de houmous", "100g de carottes crues"],
    highlightednutrients: ["proteines", "glucides", "vitamine A"],
    digestibility: "medium",
    repartitionMacros: "HGHP",
    // Idéal pour la force ou le cardio modéré avec une libération énergétique stable.
};
var snack9 = {
    name: "Sandwich pain d'épices et fromage blanc",
    taste: "Sucré-salé",
    timePrep: 5,
    eatOutdoor: true,
    ingredients: ["2 tranches de pain d'épices", "50g de fromage blanc"],
    highlightednutrients: ["proteines", "glucides", "calcium"],
    digestibility: "fast",
    repartitionMacros: "HGHP",
    // Excellent pour la plyométrie ou le HIIT avec des glucides simples et des protéines.
};
var snack10 = {
    name: "Eau de coco et banane séchée",
    taste: "Sucré",
    timePrep: 1,
    eatOutdoor: true,
    ingredients: ["200ml d'eau de coco", "20g de banane séchée"],
    highlightednutrients: ["sodium", "glucides", "potassium"],
    fastest: true,
    digestibility: "fast",
    repartitionMacros: "HG",
    // Favorise une bonne hydratation et une énergie rapide avant un effort intense comme le HIIT.
};
var snack11 = {
    name: "Quinoa, avocat et œuf dur",
    taste: "Salé",
    timePrep: 15,
    eatOutdoor: false,
    ingredients: ["50g de quinoa", "1/2 avocat", "1 œuf dur"],
    highlightednutrients: ["proteines", "lipides", "vitamine E"],
    digestibility: "slow",
    repartitionMacros: "HGHP",
    // Fournit une énergie stable et prolongée pour des entraînements d'endurance ou de force.
};
var snack12 = {
    name: "Porridge aux graines de chia et fruits rouges",
    taste: "Sucré",
    timePrep: 10,
    eatOutdoor: false,
    ingredients: [
        "40g de flocons d'avoine",
        "10g de graines de chia",
        "50g de fruits rouges",
    ],
    highlightednutrients: ["glucides", "vitamine C"],
    digestibility: "slow",
    repartitionMacros: "HG",
    // Adapté pour des efforts prolongés grâce à sa libération lente d'énergie.
};
var snack13 = {
    name: "Riz complet, poulet et légumes sautés",
    taste: "Salé",
    timePrep: 20,
    eatOutdoor: false,
    ingredients: [
        "50g de riz complet",
        "100g de poulet",
        "50g de légumes sautés",
    ],
    highlightednutrients: ["glucides", "proteines"],
    digestibility: "slow",
    repartitionMacros: "HGHP",
    // Parfait pour les sports de force ou cardio longue durée.
};
var snack14 = {
    name: "Compote maison et amandes",
    taste: "sucré",
    timePrep: 5,
    eatOutdoor: true,
    ingredients: ["100g de compote maison (sans sucre ajouté)", "10g d'amandes"],
    highlightednutrients: ["glucides rapides", "fibres", "vitamine C"],
    digestibility: "fast",
    repartitionMacros: "HG",
};
var snack15 = {
    name: "Pancakes protéinés",
    taste: "sucré",
    timePrep: 20,
    eatOutdoor: false,
    ingredients: [
        "2 œufs",
        "30g de farine complète",
        "10g de whey",
        "100ml de lait d'amande",
    ],
    highlightednutrients: ["protéines", "glucides complexes", "vitamines B"],
    digestibility: "medium",
    repartitionMacros: "HGHP",
};
var snack16 = {
    name: "Bowlcake banane et flocons d’avoine",
    taste: "sucré",
    timePrep: 5,
    eatOutdoor: false,
    ingredients: [
        "1 banane",
        "40g de flocons d'avoine",
        "1 œuf",
        "1 cuillère à café de levure chimique",
    ],
    highlightednutrients: ["glucides complexes", "protéines", "fibres"],
    digestibility: "medium",
    repartitionMacros: "HGHP",
};
var snack17 = {
    name: "Banana bread maison",
    taste: "sucré",
    timePrep: 60,
    eatOutdoor: true,
    ingredients: [
        "2 bananes mûres",
        "150g de farine complète",
        "2 œufs",
        "50g de miel",
        "50g de noix",
    ],
    highlightednutrients: ["glucides complexes", "fibres", "graisses insaturées"],
    digestibility: "medium",
    repartitionMacros: "HGHP",
};
var snack18 = {
    name: "Pain perdu au miel",
    taste: "sucré",
    timePrep: 15,
    eatOutdoor: false,
    ingredients: [
        "1 tranche de pain complet",
        "1 œuf",
        "50ml de lait",
        "1 cuillère à soupe de miel",
    ],
    highlightednutrients: ["glucides complexes", "protéines", "calcium"],
    digestibility: "medium",
    repartitionMacros: "HGHP",
};
var snack19 = {
    name: "Muesli maison aux fruits secs",
    taste: "sucré",
    timePrep: 10,
    eatOutdoor: true,
    ingredients: [
        "50g de flocons d'avoine",
        "10g de raisins secs",
        "10g de noix",
        "50ml de lait d'amande",
    ],
    highlightednutrients: ["fibres", "glucides complexes", "graisses insaturées"],
    digestibility: "medium",
    repartitionMacros: "HG",
};
var snack20 = {
    name: "Cake au thon et légumes",
    taste: "salé",
    timePrep: 45,
    eatOutdoor: true,
    ingredients: [
        "1 boîte de thon (120g)",
        "150g de farine complète",
        "3 œufs",
        "100g de légumes (poivrons, carottes)",
        "100ml de lait",
    ],
    highlightednutrients: ["protéines", "fibres", "glucides complexes"],
    digestibility: "slow",
    repartitionMacros: "HGHP",
};
var snack21 = {
    name: "Wraps au poulet et légumes",
    taste: "salé",
    timePrep: 15,
    eatOutdoor: true,
    ingredients: [
        "1 tortilla complète",
        "100g de poulet grillé",
        "50g de légumes (salade, tomate)",
        "10g de houmous",
    ],
    highlightednutrients: ["protéines", "fibres", "glucides complexes"],
    digestibility: "slow",
    repartitionMacros: "HGHP",
};
var snack22 = {
    name: "English toast avec œuf poché",
    taste: "salé",
    timePrep: 10,
    eatOutdoor: false,
    ingredients: ["1 muffin anglais complet", "1 œuf poché", "10g d’avocat"],
    highlightednutrients: [
        "protéines",
        "glucides complexes",
        "graisses insaturées",
    ],
    digestibility: "medium",
    repartitionMacros: "HGHP",
};
var snackList = [
    snack1,
    snack2,
    snack3,
    snack4,
    snack5,
    snack6,
    snack7,
    snack8,
    snack9,
    snack10,
    snack11,
    snack12,
    snack13,
    snack14,
    snack15,
    snack16,
    snack17,
    snack18,
    snack19,
    snack20,
    snack21,
    snack22,
];
var snackListName = [
    snack1.name,
    snack2.name,
    snack3.name,
    snack4.name,
    snack5.name,
    snack6.name,
    snack7.name,
    snack8.name,
    snack9.name,
    snack10.name,
    snack11.name,
    snack12.name,
    snack13.name,
    snack14.name,
    snack15.name,
    snack16.name,
    snack17.name,
    snack18.name,
    snack19.name,
    snack20.name,
    snack21.name,
    snack22.name,
];
console.log(window.innerWidth);
// VARIABLE
// Sections
var upperSection = document.getElementById("upperSection");
var trainingSection = document.getElementById("trainingSection");
var timeSection = document.getElementById("timeAvailSection");
var snackSection = document.getElementById("snacksSection");
var snackContentSection = document.getElementById("snackContentSection");
var snackNutrientSection = document.getElementById("snackNutrientSection");
var buttomSection = document.getElementById("buttomSection");
// Elements
var trainingTypeInput = document.getElementById("trainingType");
var trainingButton = document.getElementById("validTrainingButton");
var timeInput = document.getElementById("timeAvailInput"); //TO ASSOCIATE LATER TO ANOTHER THING
var restartButton = document.getElementById("restartButton");
var filledProgressionBar = document.getElementById("filled-bar");
var progressionBar = document.getElementById("progression-bar");
var progressionPercentage = document.getElementById("progression-percentage");
var ctaButton = document.getElementById("ctaLinkButton");
var ctaLink = document.getElementById("ctaLink");
var errorMessage = document.getElementById("errorMessage");
//Elements Snack Chosen
var snackChosenName = document.getElementById("snackChosenName");
var snackChosenTaste = document.getElementById("snackChosenTaste");
var snackChosenTime = document.getElementById("snackChosenTime");
var snackChosenOutdoor = document.getElementById("snackChosenOutdoor");
var snackChosenIngredients = document.getElementById("snackChosenIngredients");
var snackChosenNutrients = document.getElementById("snackChosenNutrients");
var richFoodNutrient = document.getElementById("richFood");
// Go back button → don't work see how to correct
// function goBack() {
//   window.history.back();
//   console.log("it works");
// }
// Progression steps
var stepsDone = 0;
// Progression bar (3 steps to do)
var widthBar = 0;
if (window.innerWidth >= 900) {
    widthBar = window.innerWidth * 0.75 * 0.5;
}
else {
    widthBar = window.innerWidth * 0.75 * 0.8;
}
progressionBar.style.setProperty("width", widthBar + "px");
// RESET BUTTON
restartButton.addEventListener("click", function () {
    trainingSection.style.display = "block";
    timeSection.style.display = "none"; //Display at step 2
    snackSection.style.display = "none"; // Display at step 3
    buttomSection.style.display = "none"; //Display this section from step 2 (timSection)
    snackContentSection.style.display = "none";
    snackNutrientSection.style.display = "none";
    snackChosenOutdoor.textContent = "";
    snackChosenOutdoor.style.border = "transparent 0px";
    snackChosenOutdoor.style.padding = "0%";
    snackChosenOutdoor.style.margin = "0%";
    snackListFiltered = [];
});
// BASIC SETUP
timeSection.style.display = "none"; //Display at step 2
snackSection.style.display = "none"; // Display at step 3
buttomSection.style.display = "none"; //Display this section from step 2 (timSection)
snackContentSection.style.display = "none";
snackNutrientSection.style.display = "none";
errorMessage.style.display = "none";
// NOT WORKING YET LIKE I WANT NEED TO FIND A WAY TO MAKE IT WORK ONLY WHEN GO OUT OF SELECTED LIST ALL OPTIONS DISPLAYED + OTH VALUE THAN SELECTIONNER CHOOSEN TO GO NEXT STEP
trainingButton.addEventListener("click", function () {
    timeSection.style.display = "block";
    buttomSection.style.display = "block";
    trainingSection.style.display = "none";
    // TRAINING TYPE PICKED
    var selectTraining = document.querySelector("#trainingType");
    var trainingOutput = selectTraining.value;
    stepsDone = 1;
    var currentWidthBar = widthBar * (stepsDone / 3);
    progressionPercentage.innerText = Math.round(100 * (stepsDone / 3)) + "%";
    filledProgressionBar.style.setProperty("width", currentWidthBar + "px");
});
var snackListFiltered = [];
function snackFilter() {
    snackListFiltered = [];
    var selectTraining = document.querySelector("#trainingType");
    var trainingOutput = selectTraining.value;
    // Create here diff loops to create sub-array diff parameters
    for (var i = 0; i < snackList.length; i++) {
        // ARRAY FOR EACH CRITERIA
        if (trainingOutput === "cardio" || trainingOutput === "HIIT") {
            // Fast timing
            if (Number(timeInput.value) > 0 &&
                Number(timeInput.value) < 1.1 &&
                snackList[i].digestibility === "fast" &&
                snackList[i].repartitionMacros === "HG") {
                snackListFiltered.push(snackList[i]);
            }
            // Medium timing
            else if (Number(timeInput.value) > 1 &&
                Number(timeInput.value) < 3.1 &&
                snackList[i].digestibility === "medium" &&
                snackList[i].repartitionMacros === "HG") {
                snackListFiltered.push(snackList[i]);
            }
            // Slow timing
            else if (Number(timeInput.value) > 3 &&
                snackList[i].digestibility === "slow" &&
                snackList[i].repartitionMacros === "HG") {
                snackListFiltered.push(snackList[i]);
            }
        }
        if (trainingOutput === "Plyometrics" || trainingOutput === "strength") {
            // Fast timing
            if (Number(timeInput.value) > 0 &&
                Number(timeInput.value) < 1.1 &&
                snackList[i].digestibility === "fast" &&
                snackList[i].repartitionMacros === "HGHP") {
                snackListFiltered.push(snackList[i]);
            }
            // Medium timing
            else if (Number(timeInput.value) > 1 &&
                Number(timeInput.value) < 3.1 &&
                snackList[i].digestibility === "medium" &&
                snackList[i].repartitionMacros === "HGHP") {
                snackListFiltered.push(snackList[i]);
            }
            // Slow timing
            else if (Number(timeInput.value) > 3 &&
                snackList[i].digestibility === "slow" &&
                snackList[i].repartitionMacros === "HGHP") {
                snackListFiltered.push(snackList[i]);
            }
        }
    }
}
// SNACKLIST STEP
var snackName = document.querySelectorAll(".snackOption");
var snackLabel = document.querySelectorAll(".snackLabel");
var snackNutrients = document.querySelectorAll(".snackNutrients");
var snackValues = document.querySelectorAll(".nutrientValue");
var snackButton1 = document.getElementById("snackOption1");
var snackButton2 = document.getElementById("snackOption2");
var snackButton3 = document.getElementById("snackOption3");
var snackButton4 = document.getElementById("snackOption4");
//FIND WAY TO JUST SHOW UP NUMBER OF BUTTONS NUMBER ANSWER (max button = 4 if 4< lenght filtered list (to random order also) if less just show 2 or 3 buttons)
function snackChoices() {
    // TRY PUT LENGTH FILTEREDLIST
    var shuffled = snackListFiltered
        .map(function (value) { return ({ value: value, sort: Math.random() }); })
        .sort(function (a, b) { return a.sort - b.sort; })
        .map(function (_a) {
        var value = _a.value;
        return value;
    });
    snackButton1.style.display = "block";
    snackButton2.style.display = "block";
    snackButton3.style.display = "block";
    snackButton4.style.display = "block";
    for (var i = 0; i < Math.min(shuffled.length, 4); i++) {
        snackName[i].textContent = shuffled[i].name;
        console.log("Filtered List: ", snackListFiltered);
        console.log("Shuffled List: ", shuffled);
        if (i > 0) {
            // FOR THE FASTEST ONE
            if (shuffled[i].timePrep < shuffled[i - 1].timePrep) {
                var fastestSnack = snackList[i].fastest === true;
                fastestSnack;
                snackLabel[i].textContent = "(le plus rapide)";
                snackLabel[i - 1].textContent = "";
                // FOR THE CONVENIENT ONE → add case when have both "i" and "i-1" = true → show nothing / no one as the convenient label
                if (shuffled[i].eatOutdoor === false &&
                    shuffled[i - 1].eatOutdoor === true) {
                    snackLabel[i - 1].textContent = "(pratique)";
                    snackLabel[i].textContent = "";
                }
            }
            else if (shuffled[i].timePrep > shuffled[i - 1].timePrep) {
                var fastestSnack = snackList[i - 1].fastest === true;
                fastestSnack;
                snackLabel[i - 1].textContent = "(le plus rapide)";
                snackLabel[i].textContent = "";
                if (shuffled[i].eatOutdoor === true &&
                    shuffled[i - 1].eatOutdoor === false) {
                    snackLabel[i].textContent = "(pratique)";
                    snackLabel[i - 1].textContent = "";
                }
            }
        }
        // SEE TO DO THE SAME IN THE CASE WE HAVE ONLY 2 OR EVEN 1 SNACK??
        if (shuffled.length === 1 && i === 0) {
            snackButton2.style.display = "none";
            snackButton3.style.display = "none";
            snackButton4.style.display = "none";
        }
        else if (shuffled.length === 2 && i === 1) {
            snackButton3.style.display = "none";
            snackButton4.style.display = "none";
        }
        else if (shuffled.length === 3 && i === 2) {
            snackButton4.style.display = "none";
        }
    }
}
timeInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        if (Number(timeInput.value) > 0 && Number(timeInput.value) < 11) {
            //ADD DIFF SECTIONS HIDE OR SHOW THEM TO GO TO THE NEXT STEP
            snackFilter();
            snackChoices();
            timeSection.style.display = "none";
            snackSection.style.display = "block";
            errorMessage.style.display = "none";
            timeInput.value = "";
            stepsDone = 2;
            var currentWidthBar = widthBar * (stepsDone / 3);
            progressionPercentage.innerText = Math.round(100 * (stepsDone / 3)) + "%";
            filledProgressionBar.style.setProperty("width", currentWidthBar + "px");
        }
        else if (typeof timeInput.value !== "number") {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Veuillez entrer une valeur correcte";
        }
        else {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Données pas valide";
        }
    }
});
// To don't have always same snacks just random order new array because only the 4 first will be choosen
// DISPLAY GOOD INFO FOR THE SNACK CHOSEN WHEN CLICKED ON
function snackPick() {
    snackName.forEach(function (button) {
        return button.addEventListener("click", function () {
            var snackChosen = button.innerText;
            snackSection.style.display = "none";
            snackContentSection.style.display = "block";
            stepsDone = 3;
            var currentWidthBar = widthBar;
            progressionPercentage.innerText = Math.round(100 * (stepsDone / 3)) + "%";
            filledProgressionBar.style.setProperty("width", widthBar + "px");
            // ERROR MESSAGE TO TAKE CARE OF BUT NEAR THE GOAL OF HAVING THE GOOD INDEX AND SO AFTER LINKING EACH THINGS WITH INTERFACE DATA CREATED FOR THIS SNACK
            var snackMatch = snackListName.indexOf(snackChosen);
            var name = snackList[snackMatch].name;
            var taste = snackList[snackMatch].taste;
            var time = snackList[snackMatch].timePrep;
            var outdoor = snackList[snackMatch].eatOutdoor;
            var ingredients = snackList[snackMatch].ingredients;
            var nutrients = snackList[snackMatch].highlightednutrients;
            snackChosenName.textContent = name;
            snackChosenTaste.textContent = taste;
            snackChosenTime.textContent = "Pr\u00E9paration: ".concat(time.toString(), " minutes");
            snackChosenIngredients.textContent = "Ingr\u00E9dients: ".concat(ingredients.join(", "));
            snackChosenNutrients.textContent = "Riche en:";
            nutrients.forEach(function (nutrient) {
                var buttonNutrient = document.createElement("button");
                buttonNutrient.textContent = nutrient;
                snackChosenNutrients.appendChild(buttonNutrient);
                buttonNutrient.style.backgroundColor = "transparent";
                buttonNutrient.style.border = "0px";
                buttonNutrient.style.textDecoration = "underline";
                // do here case statement
                buttonNutrient.addEventListener("click", function () {
                    switch (nutrient.toLowerCase()) {
                        //MACRONUTRIENTS
                        case "glucides":
                            richFoodNutrient.textContent =
                                "Aliments riches: féculents, légumineuses, fruits";
                            break;
                        case "lipides":
                            richFoodNutrient.textContent =
                                "Aliments riches: matières grasses, oléagineux, graines";
                            break;
                        case "proteines":
                            richFoodNutrient.textContent =
                                "Aliments riches: produits laitiers, viandes/poissons, légumineuses";
                            break;
                        case "fibres":
                            richFoodNutrient.textContent =
                                "Aliments riches: légumes, céréales complètes, légumineuses";
                            break;
                        // MICRONUTRIENTS
                        // Minerals
                        case "magnesium":
                            richFoodNutrient.textContent =
                                "Aliments riches: amandes, graines de courge, épinards";
                            break;
                        case "potassium":
                            richFoodNutrient.textContent =
                                "Aliments riches: banane, pomme de terre, épinards";
                            break;
                        case "sodium":
                            richFoodNutrient.textContent =
                                "Aliments riches: sel de table, fromage, anchois";
                            break;
                        case "zinc":
                            richFoodNutrient.textContent =
                                "Aliments riches: viande rouge, graines de courge, pois chiches";
                            break;
                        case "fer":
                            richFoodNutrient.textContent =
                                "Aliments riches: viande rouge, lentilles, épinards";
                            break;
                        case "selenium":
                            richFoodNutrient.textContent =
                                "Aliments riches: noix du Brésil, thon, œufs";
                            break;
                        case "cuivre":
                            richFoodNutrient.textContent =
                                "Aliments riches: foie de bœuf, huîtres, noix de cajou";
                            break;
                        case "phosphore":
                            richFoodNutrient.textContent =
                                "Aliments riches: fromage, poisson, poulet";
                            break;
                        case "calcium":
                            richFoodNutrient.textContent =
                                "Aliments riches: lait, yaourt, fromage";
                            break;
                        case "iode":
                            richFoodNutrient.textContent =
                                "Aliments riches: morue, lait, œufs";
                            break;
                        // Vitamins
                        case "vitamine a":
                            richFoodNutrient.textContent =
                                "Aliments riches: foie de morue, carottes, patates douces";
                            break;
                        case "vitamine d":
                            richFoodNutrient.textContent =
                                "Aliments riches: saumon, thon, jaune d'œuf";
                            break;
                        case "vitamine e":
                            richFoodNutrient.textContent =
                                "Aliments riches: amandes, graines de tournesol, avocat";
                            break;
                        case "vitamine k":
                            richFoodNutrient.textContent =
                                "Aliments riches: épinards, brocoli, chou kale";
                            break;
                        case "vitamine c":
                            richFoodNutrient.textContent =
                                "Aliments riches: poivrons rouges, kiwi, fraises";
                            break;
                        case "vitamine b1":
                            richFoodNutrient.textContent =
                                "Aliments riches: porc, graines de tournesol, pois chiches";
                            break;
                        case "vitamine b2":
                            richFoodNutrient.textContent =
                                "Aliments riches: foie de bœuf, amandes, yaourt";
                            break;
                        case "vitamine b3":
                            richFoodNutrient.textContent =
                                "Aliments riches: poulet, thon, cacahuètes";
                            break;
                        case "vitamine b5":
                            richFoodNutrient.textContent =
                                "Aliments riches: champignons, avocat, poulet";
                            break;
                        case "vitamine b6":
                            richFoodNutrient.textContent =
                                "Aliments riches: poulet, banane, pommes de terre";
                            break;
                        case "vitamine b8":
                            richFoodNutrient.textContent =
                                "Aliments riches: œufs, noix, amandes";
                            break;
                        case "vitamine b9":
                            richFoodNutrient.textContent =
                                "Aliments riches: épinards, pois chiches, lentilles";
                            break;
                        case "vitamine b12":
                            richFoodNutrient.textContent =
                                "Aliments riches: foie de bœuf, palourdes, sardines";
                            break;
                    }
                });
            });
            // Then create add event listener common for all the buttons (same class) but put case statement with names buttons (=nutrients name) to assign spec values html "p" to create with the assigned food rich in the nutrient selected
            if (outdoor && outdoor !== null) {
                snackChosenOutdoor.textContent = "Facile à emporter";
                snackChosenOutdoor.style.border = "#2e0927 solid 2px";
                snackChosenOutdoor.style.padding = "10px";
            }
            console.log(snackMatch);
            console.log(snackList[snackMatch].ingredients);
        });
    });
}
snackPick();
function ctaClick() {
    ctaButton.addEventListener("click", function () {
        ctaLink.href = "https://www.bedietonic.com/guide-repas-autour-des-seances/";
    });
}
// DIFF STEPS TO DO//
// 3. Add 10 snacks more in categories where it lacks → just try it out and define (ask Elo for ideas)
