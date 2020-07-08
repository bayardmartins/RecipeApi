function RecipePuppy () { 
    return ({
    "title": "Recipe Puppy",
    "version": 0.1,
    "href": "http:\/\/www.recipepuppy.com\/",
    "results": [
      {
        "title": "Roasted Garlic Grilling Sauce \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
        "href": "http:\/\/www.kraftfoods.com\/kf\/recipes\/roasted-garlic-grilling-sauce-56344.aspx",
        "ingredients": "garlic, onions, hot sauce",
        "thumbnail": "http:\/\/img.recipepuppy.com\/634118.jpg"
      },
      {
        "title": "Steamed Mussels I",
        "href": "http:\/\/allrecipes.com\/Recipe\/Steamed-Mussels-I\/Detail.aspx",
        "ingredients": "garlic, mussels, onions",
        "thumbnail": "http:\/\/img.recipepuppy.com\/29318.jpg"
      },
      {
        "title": "Braised Beef and Onions",
        "href": "http:\/\/www.epicurious.com\/recipes\/food\/views\/Braised-Beef-and-Onions-232969",
        "ingredients": "allspice, garlic, onions",
        "thumbnail": "http:\/\/img.recipepuppy.com\/103021.jpg"
      },
      {
        "title": "Dashi Basic Korean Kelp Stock Recipe",
        "href": "http:\/\/www.grouprecipes.com\/508\/dashi-basic-korean-kelp-stock.html",
        "ingredients": "anchovies, garlic, onions",
        "thumbnail": "http:\/\/img.recipepuppy.com\/351817.jpg"
      },
      {
        "title": "Oven-Saut&#233;ed Onions and Garlic",
        "href": "http:\/\/find.myrecipes.com\/recipes\/recipefinder.dyn?action=displayRecipe&recipe_id=1860015",
        "ingredients": "onions, garlic, olive oil",
        "thumbnail": "http:\/\/img.recipepuppy.com\/527595.jpg"
      },
      {
        "title": "Three-in-One Meals Meaty Tomato Sauce",
        "href": "http:\/\/find.myrecipes.com\/recipes\/recipefinder.dyn?action=displayRecipe&recipe_id=1857779",
        "ingredients": "ground beef, onions, garlic",
        "thumbnail": "http:\/\/img.recipepuppy.com\/555389.jpg"
      },
      {
        "title": "\nPerfect Roast Chicken Recipe\n\n",
        "href": "http:\/\/cookeatshare.com\/recipes\/perfect-roast-chicken-41630",
        "ingredients": "onions, garlic, salt",
        "thumbnail": "http:\/\/img.recipepuppy.com\/806946.jpg"
      },
      {
        "title": "\nMexican Rice Recipe\n\n",
        "href": "http:\/\/cookeatshare.com\/recipes\/mexican-rice-47559",
        "ingredients": "onions, garlic, crisco",
        "thumbnail": "http:\/\/img.recipepuppy.com\/816298.jpg"
      },
      {
        "title": "\nCreamed Zucchini Recipe\n\n",
        "href": "http:\/\/cookeatshare.com\/recipes\/creamed-zucchini-60366",
        "ingredients": "zucchini, onions, garlic",
        "thumbnail": "http:\/\/img.recipepuppy.com\/821781.jpg"
      },
      {
        "title": "\nChile Con Queso (Spicy Cheese Dip) Recipe\n\n",
        "href": "http:\/\/cookeatshare.com\/recipes\/chile-con-queso-spicy-cheese-dip-2037",
        "ingredients": "salsa, onions, garlic",
        "thumbnail": "http:\/\/img.recipepuppy.com\/823756.jpg"
      }
    ]
  })};

function getRecipeList(pQuery){
    
    ingredientList = getIngredientArray(pQuery);
    if(ingredientList){
        let list = getRecipesByIngredientList(ingredientList);
        let recipeList = [];
        let i = 0;

        for (i; i < list.length; i++) {
          recipeList[i] = getRecipeToDisplay(list[i]); 
        }

        let recipeFullList = {
            "keywords": ingredientList,
            "recipes": recipeList,
        };
        return (recipeFullList);
    }else{
        return (undefined);
    }
};

function getIngredientArray(pQuery){
    let ingredientList = pQuery.split(',');
    if(ingredientList.length <= 3){
        return (ingredientList);
    }
        return (undefined);
};

function getRecipesByIngredientList(pRec){
    //todo: chamada a API
    let result = RecipePuppy();
    return (result.results);
};

function getGif(pTitle){
    //todo: chamada a API 
    let link = "www.google.com";
    return (link);
};

function getRecipeToDisplay(pResult){
    
    let gif = getGif(pResult.title);
    
    let recipeToDisplay = {
		    "title": pResult.title,
		    "ingredients": pResult.ingredients,
		    "link": pResult.href,
		    "gif": gif
	    }
    return (recipeToDisplay);
};

module.exports = {
    async get (req,res) {
        var url = require('url');
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query.i;
        
        let fullRecipeList = getRecipeList(query);
        if(fullRecipeList){
            return res.json(fullRecipeList);
        }else{
            return res.status(400).send("parâmetros enviados são inválidos");
        }
    }
}