// translator.js
document.getElementById("language-hindi").addEventListener("click", function () {
    translatePageContent("hi");
});

document.getElementById("language-english").addEventListener("click", function () {
    translatePageContent("en");
});

// Function to translate page content
function translatePageContent(targetLanguage) {
    const elementsToTranslate = document.querySelectorAll(".translatable");

    elementsToTranslate.forEach((element) => {
        const textToTranslate = element.textContent.trim();

        if (textToTranslate) {
            translateText(textToTranslate, targetLanguage, element);
        }
    });
}

// Function to call LibreTranslate API and get translated text
function translateText(text, targetLanguage, element) {
    const apiUrl = "https://libretranslate.com/translate";

    // Prepare the request data
    const data = {
        q: text,
        source: "en", // Default source language (English)
        target: targetLanguage, // Target language (either 'hi' or 'en')
        format: "text"
    };

    // Use Fetch API to send translation request
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const translatedText = data.translatedText;
        element.textContent = translatedText;
    })
    .catch(error => {
        console.error("Error translating text:", error);
        alert("Something went wrong. Please try again.");
    });
}
