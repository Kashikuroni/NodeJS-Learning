// ИНИЦИАЛИЗАЦИЯ ФАЙЛОВОГО МОДУЛЯ
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// ЧТЕНИЕ ДОКУМЕНТА С КАДИРОВКОЙ utf8
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// ЗАПИСЬ В ДОКУМЕНТ С ФЛАГОМ "а", значит что запись
// будет вставлена в конец докуемента, по стандарту стоит 'w'
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } //Открыть файл для добавления. Файл создается, если он не существует.
  //По стандарту flag = 'w': Открыть файл для записи. Файл создается (
  //если он не существует) или усекается (если он существует).
);

console.log("done with this task");
console.log("starting the next one");
