Тестовое задание для компании Friend-lee

Препрцессор SCSS Шрифты Nekst, Gilroy (подключены локально). Используется планировщик задач gulp В репоситерии нет папки node_modules чтобы проэкт работал у Вас корректно после скачивания необходимо установить через npm такие пакеты как:

gulp -> npm i gulp --save
gulp-cli -> npm i gulp-cli --save
gulp-htmlmin -> npm i gulp-htmlmin --save
browser-sync -> npm i browser-sync --save-dev
gulp-autoprefixer -> npm i gulp-autoprefixer --save-dev
gulp-clean-css -> npm i gulp-clean-css --save-dev
gulp-rename -> npm i gulp-rename --save-dev
gulp-sass -> npm i gulp-sass --save-dev
sass -> npm i sass --save-dev Также рекомендуется установить все зависимости глобально добавляя в команды -g. Пример gulp -> npm i gulp -g gulpfile.js настроет для стукруры файловых путей как в репозитории, если у Вас он пути отличаются, то нужно также их изменить для рендегинга в паку dist.