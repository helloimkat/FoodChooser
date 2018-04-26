var food = {
    "order": ["pizza", "burger", "chinese", "kebab", "gyros"],
    "go out to": ["Die Scherbe", "Burgerista", "EAT-Asia", "Eggenberger Brauhaus", "ROX", "Drei Goldene Kugeln"],
    "cook": ["Curry", "Scrambled Eggs", "Spaghetti Bolognese", "Crepés", "American Pancakes", "Scheiterhaufen", "Asian Pan", "Cream Chicken Bits", "Pizza Twisters", "Grenadiermarsch", "Reisfleisch", "Cold Tomato-Sausage Salad" , "Lasagna", "Spagetti Carbonara", "Barbeque Ribs", "Chicken Roast with Vegetables", "Grill", "Kaiserschmarren", "Grilled Chicken with Cuscous", "Grilled Porkchops", "Steak", "Fried Chicken Strip Salad", "House-Pizza"]
}

function foodChooser() {
    var types = Object.keys(food);
    var rn = Math.floor(Math.random() * (types.length));
    var t = types[rn];
    var val = food[types[rn]];
    var vn = Math.floor(Math.random() * (val.length));
    var v = val[vn]

    document.getElementById("foodDisplay").innerHTML = "You should " + t + " something like " + v + ".";
}
