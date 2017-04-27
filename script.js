var food = {
    "order": ["pizza", "burger", "chinese", "kebab", "gyros"],
    "go out to": ["Die Scherbe", "Burgerista", "EAT-Asia", "Eggenberger Brauhaus", "ROX", "Drei Goldene Kugeln"],
    "cook": ["Curry", "Scrambled eggs", "spaghetti bolognese", "pancakes", "asian pan", "cream chicken bits", "pizza twisters", "grenadiermarsch", "reisfleisch", "cold tomato-sausage salad"]
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
