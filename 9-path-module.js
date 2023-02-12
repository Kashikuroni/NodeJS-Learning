const path = require("path"); // ИНИЦИАЛИЗАЦИЯ path (путь) модуля

// Предоставляет разделитель сегментов пути для конкретной платформы:
console.log(path.sep);

// path.join()Метод объединяет все заданные pathсегменты вместе,
// используя разделитель, зависящий от платформы,
// в качестве разделителя, затем нормализует результирующий путь.
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

//path.basename()Метод возвращает последнюю часть a path,
//аналогично команде Unixbasename. Конечные разделители каталогов игнорируются.
const base = path.basename(filePath);
console.log(base);

// path.resolve()Метод преобразует последовательность путей
// или сегментов пути в абсолютный путь.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
