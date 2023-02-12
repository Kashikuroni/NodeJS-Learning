const { readFile, writeFile } = require("fs");
console.log("start");
// Стрелочная функция это callback - он помагает выловить
// ошибки и передать результат по звершению метода
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async",
      `Here is the result : ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
// Тут мы делаем все тоже самое что и в 10 пункте только через async
// Это значит что мы проверяем на каждом этапе есть ли ошибки в методе
// С помощью err, result

//! ОТЛИЧИЯ ASYNC и SYNC
// SYNC код читается строчка за строчкой
// ASYNC Если есть callback то код не дожидаясь ответа идет дальше
// Что позволяет использовать код другим пользователсям
