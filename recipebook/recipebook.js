document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipes');

    // Load recipes from local storage
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Display recipes
    const displayRecipes = () => {
        recipeList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Ingredients:</strong></p>
                <p>${recipe.ingredients}</p>
                <p><strong>Instructions:</strong></p>
                <p>${recipe.instructions}</p>
                <button onclick="deleteRecipe(${index})">Delete</button>
            `;
            recipeList.appendChild(li);
        });
    };

    // Add a new recipe
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        const recipe = { title, ingredients, instructions };
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        displayRecipes();

        // Clear form
        recipeForm.reset();
    });

    // Delete a recipe
    window.deleteRecipe = (index) => {
        recipes.splice(index, 1);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        displayRecipes();
    };

    // Initial display of recipes
    displayRecipes();
});
