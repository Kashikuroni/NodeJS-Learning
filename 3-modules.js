// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only shate minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade"); // Мы делаем запрос к модулю в котором была вызвана функция
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
