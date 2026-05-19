// Vegetable database with recipes
const vegetableRecipes = {
    'potato': {
        name: 'Potato',
        emoji: '🥔',
        recipes: [
            { name: 'Aloo Gobi', difficulty: 'easy' },
            { name: 'Aloo Parathas', difficulty: 'medium' },
            { name: 'Bombay Aloo', difficulty: 'easy' }
        ]
    },
    'tomato': {
        name: 'Tomato',
        emoji: '🍅',
        recipes: [
            { name: 'Tamater Ki Sabzi', difficulty: 'easy' },
            { name: 'Shahi Tamater', difficulty: 'medium' },
            { name: 'Tamater Pyaz Ki Sabzi', difficulty: 'easy' }
        ]
    },
    'onion': {
        name: 'Onion',
        emoji: '🧅',
        recipes: [
            { name: 'Pyaz Ki Sabzi', difficulty: 'easy' },
            { name: 'Crispy Fried Onions', difficulty: 'medium' },
            { name: 'Pyaz Pakora', difficulty: 'easy' }
        ]
    },
    'spinach': {
        name: 'Spinach',
        emoji: '🥬',
        recipes: [
            { name: 'Palak Paneer', difficulty: 'medium' },
            { name: 'Saag Aloo', difficulty: 'easy' },
            { name: 'Palak Sabzi', difficulty: 'easy' }
        ]
    },
    'broccoli': {
        name: 'Broccoli',
        emoji: '🥦',
        recipes: [
            { name: 'Broccoli Fry', difficulty: 'easy' },
            { name: 'Broccoli and Potato', difficulty: 'medium' },
            { name: 'Garlic Broccoli', difficulty: 'easy' }
        ]
    },
    'cauliflower': {
        name: 'Cauliflower',
        emoji: '🥬',
        recipes: [
            { name: 'Gobi Matar', difficulty: 'easy' },
            { name: 'Aloo Gobi', difficulty: 'easy' },
            { name: 'Crispy Gobi', difficulty: 'medium' }
        ]
    },
    'carrot': {
        name: 'Carrot',
        emoji: '🥕',
        recipes: [
            { name: 'Gajar Matar', difficulty: 'easy' },
            { name: 'Gajar Aloo', difficulty: 'easy' },
            { name: 'Gajar Sabzi', difficulty: 'easy' }
        ]
    },
    'pea': {
        name: 'Peas',
        emoji: '🟢',
        recipes: [
            { name: 'Matar Paneer', difficulty: 'medium' },
            { name: 'Matar Aloo', difficulty: 'easy' },
            { name: 'Matar Tamater', difficulty: 'easy' }
        ]
    },
    'cucumber': {
        name: 'Cucumber',
        emoji: '🥒',
        recipes: [
            { name: 'Kheere Ka Salad', difficulty: 'easy' },
            { name: 'Kheere Ki Sabzi', difficulty: 'easy' },
            { name: 'Spiced Cucumber', difficulty: 'easy' }
        ]
    },
    'bell pepper': {
        name: 'Bell Pepper',
        emoji: '🫑',
        recipes: [
            { name: 'Shimla Mirch Sabzi', difficulty: 'easy' },
            { name: 'Shimla Mirch Aloo', difficulty: 'easy' },
            { name: 'Stuffed Bell Pepper', difficulty: 'medium' }
        ]
    },
    'eggplant': {
        name: 'Eggplant',
        emoji: '🍆',
        recipes: [
            { name: 'Baingan Bharta', difficulty: 'medium' },
            { name: 'Baingan Fry', difficulty: 'easy' },
            { name: 'Baingan Tamater', difficulty: 'easy' }
        ]
    },
    'green beans': {
        name: 'Green Beans',
        emoji: '🫘',
        recipes: [
            { name: 'Beans Fry', difficulty: 'easy' },
            { name: 'Beans Aloo', difficulty: 'easy' },
            { name: 'Beans with Coconut', difficulty: 'medium' }
        ]
    },
    'pumpkin': {
        name: 'Pumpkin',
        emoji: '🎃',
        recipes: [
            { name: 'Sitafal Ki Sabzi', difficulty: 'easy' },
            { name: 'Pumpkin Aloo', difficulty: 'easy' },
            { name: 'Spiced Pumpkin', difficulty: 'medium' }
        ]
    },
    'okra': {
        name: 'Okra',
        emoji: '🫔',
        recipes: [
            { name: 'Bhindi Fry', difficulty: 'medium' },
            { name: 'Bhindi Masala', difficulty: 'medium' },
            { name: 'Crispy Bhindi', difficulty: 'medium' }
        ]
    },
    'cabbage': {
        name: 'Cabbage',
        emoji: '🥬',
        recipes: [
            { name: 'Bandh Gobhi Sabzi', difficulty: 'easy' },
            { name: 'Cabbage Aloo', difficulty: 'easy' },
            { name: 'Cabbage Fry', difficulty: 'easy' }
        ]
    },
    'mushroom': {
        name: 'Mushroom',
        emoji: '🍄',
        recipes: [
            { name: 'Mushroom Fry', difficulty: 'easy' },
            { name: 'Mushroom Masala', difficulty: 'medium' },
            { name: 'Garlic Mushroom', difficulty: 'easy' }
        ]
    },
    'zucchini': {
        name: 'Zucchini',
        emoji: '🫒',
        recipes: [
            { name: 'Zucchini Fry', difficulty: 'easy' },
            { name: 'Zucchini Aloo', difficulty: 'easy' },
            { name: 'Zucchini Sabzi', difficulty: 'easy' }
        ]
    },
    'radish': {
        name: 'Radish',
        emoji: '🔴',
        recipes: [
            { name: 'Mooli Aloo', difficulty: 'easy' },
            { name: 'Mooli Sabzi', difficulty: 'easy' },
            { name: 'Radish Fry', difficulty: 'easy' }
        ]
    },
    'beet': {
        name: 'Beet',
        emoji: '🟣',
        recipes: [
            { name: 'Chukandar Sabzi', difficulty: 'easy' },
            { name: 'Beet Aloo', difficulty: 'easy' },
            { name: 'Roasted Beets', difficulty: 'medium' }
        ]
    }
};

let classifier = null;
let imageLoaded = false;

// Initialize ML5 classifier
async function initializeClassifier() {
    try {
        classifier = await ml5.imageClassifier('MobileNet');
    } catch (error) {
        console.error('Error initializing classifier:', error);
        showError('Failed to load the AI model. Please refresh the page.');
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeClassifier();
    setupEventListeners();
});

function setupEventListeners() {
    const uploadBox = document.getElementById('uploadBox');
    const imageInput = document.getElementById('imageInput');
    const resetBtn = document.getElementById('resetBtn');

    // Click to upload
    uploadBox.addEventListener('click', () => imageInput.click());

    // File input change
    imageInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleImageUpload(e.target.files[0]);
        }
    });

    // Drag and drop
    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleImageUpload(e.dataTransfer.files[0]);
        }
    });

    // Reset button
    resetBtn.addEventListener('click', resetApp);
}

function handleImageUpload(file) {
    if (!file.type.startsWith('image/')) {
        showError('Please upload a valid image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            analyzeImage(img);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

async function analyzeImage(img) {
    if (!classifier) {
        showError('AI model is still loading. Please wait...');
        return;
    }

    showLoading();
    
    try {
        const results = await classifier.classify(img);
        processResults(img, results);
    } catch (error) {
        console.error('Error classifying image:', error);
        showError('Error analyzing the image. Please try again.');
        hideLoading();
    }
}

function processResults(img, results) {
    hideLoading();

    // Get the top result
    const topResult = results[0];
    const label = topResult.label.toLowerCase();
    
    // Find matching vegetable
    let vegetable = null;
    let confidence = topResult.confidence;

    for (const [key, value] of Object.entries(vegetableRecipes)) {
        if (label.includes(key)) {
            vegetable = value;
            break;
        }
    }

    if (!vegetable) {
        // Try partial matching
        for (const [key, value] of Object.entries(vegetableRecipes)) {
            if (key.includes(label.split(' ')[0]) || label.split(' ')[0].includes(key)) {
                vegetable = value;
                break;
            }
        }
    }

    if (!vegetable) {
        showError('Could not identify a vegetable in the image. Please try with a clearer vegetable image.');
        return;
    }

    displayResults(img, vegetable, confidence);
}

function displayResults(img, vegetable, confidence) {
    // Set image preview
    const previewImage = document.getElementById('previewImage');
    previewImage.src = img.src;

    // Set vegetable name
    document.getElementById('vegetableName').textContent = 
        `${vegetable.emoji} ${vegetable.name}`;

    // Set confidence
    document.getElementById('confidence').textContent = 
        `Confidence: ${(confidence * 100).toFixed(1)}%`;

    // Display recipes
    const sabjiList = document.getElementById('sabjiList');
    sabjiList.innerHTML = '';

    vegetable.recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'sabji-card';
        card.innerHTML = `
            <div class="sabji-name">🍛 ${recipe.name}</div>
            <span class="sabji-difficulty difficulty-${recipe.difficulty}">
                ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)} Level
            </span>
        `;
        sabjiList.appendChild(card);
    });

    // Show results
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('uploadBox').style.display = 'none';
}

function showLoading() {
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('uploadBox').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    document.getElementById('uploadBox').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'none';
}

function resetApp() {
    document.getElementById('uploadBox').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('imageInput').value = '';
}