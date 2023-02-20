# Тестовое задание для компании Friend-lee

#### Препрцессор SCSS

#### Шрифты Nekst, Gilroy.

#### Вертка по правилам БЭМ

#### НЕ использовался PixelParallel (так как нет опыта с данным расширением)

#### Cкрипты на нативном JS не компилируемые

### Брейкпоинты:
320-767 (макет на 320px)
768-1119px (макет на 768px)
1120-1439px (макет на 1120px)
1440+ (макет на 1440px)

 
Используется планировшик задач gulp. Так как в репизитории отсутствует папка node_modules, необходимо установить такие зависомости как: 


-gulp -> npm i gulp --save


-gulp-cli -> npm i gulp-cli --save


-gulp-htmlmin -> npm i gulp-htmlmin --save


-browser-sync -> npm i browser-sync --save-dev


-gulp-autoprefixer -> npm i gulp-autoprefixer --save-dev


-gulp-clean-css -> npm i gulp-clean-css --save-dev


-gulp-rename -> npm i gulp-rename --save-dev


-gulp-sass -> npm i gulp-sass --save-dev


-sass -> npm i sass --save-dev 

Также рекомендуется установить все зависимости глобально добавляя в команды -g. Пример gulp -> npm i gulp -g gulpfile.js настроет для стукруры файловых путей как в репозитории, если у Вас он пути отличаются, то нужно также их изменить для рендегинга в паку dist.




