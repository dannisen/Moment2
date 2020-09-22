# Moment 2 Node JS & Gulp

### **Vad är automatiserings-processens syfte?*
Gulp som vi använt i denna uppgift är ett hjälpmedel för att förenkla arbetsprocessen för webbfiler. 
Med exempelvis Gulp (finns även andra) kan man enkelt kopiera, sammanslå och minifiera filer i ett projekt. 
Man sparar tid genom att många processer kan göras automatiska samt att man kan göra koden lite svårare att läsa, alltså inte lika lätt för andra att kopiera. 


### **Ange vilka paket och verktyg som använts och varför.**
:ballot_box_with_check: _**Gulp-concat**_ används för sammanslagning av av olika filer. Man kan exempelvis ha 2+ olika css-filer som slås samman till en.


:ballot_box_with_check: _**Gulp-uglify-es**_ är ett paket som minifierar JavaScript-filer. Den tar bort radbrytningar, onödiga blanksteg, kommentarer.


:ballot_box_with_check: _**Gulp-clean-css**_ används för att minifiera CSS-filer. Gör samma sak som uglify.


:ballot_box_with_check: _**Gulp-imagemin**_ komprimerar bilder. 


:ballot_box_with_check: _**BrowserSync**_ är en live-server. Med detta paket behöver man ej ladda om webbsidan för att se nya ändringar.


Jag har valt dessa paket då de är vanliga att använda, de har aktuella och har många nedladdningar i veckan. 
En del paket har inte uppdaterats på ett tag som exempelvis gulp-concat, som inte uppdaterats på fyra år och ändå har en halv miljon nedladdningar i veckan, 
då paketets funktion är så pass grundläggande att den inte behöver uppdateras kontinuerligt för att fungera.



### **Beskriv systemet, hur man startar upp det och de tasks som ingår.**
Det är ett system med automatiserad sammanslagning av filer (.html, .css och .js), minifiering av filer (.css, .js, .jpg, .png, .gif, .svg) 
samt kopiering av filer. Den har även en inbyggd live-server som också är automatiserad.

:one: Öppna terminalen och navigera till sökväg dit du vill klona repot. 

:two: Klona repot med kommandot "**git clone https://github.com/dannisen/Moment_2.git**".

:three: Kör "**npm install**" i terminalen.

:four: Sista steget är att köra "**gulp**" i terminalen så skapas pub-mappen och live-servern startas.



#### Tasks
:white_check_mark: _**copyHTML**_ kopierar alla HTML-filer till pub-mappen.

:white_check_mark: _**jsTask**_ minifierar, slår samman och kopierar samtliga JavaScripts-filer till _style.css_ i pub-mappen.

:white_check_mark: _**cssTask**_ minifierar, slår samman och kopierar samtliga CSS-filer till _main.js_ i pub-mappen.

:white_check_mark: _**imgTask**_ minifierar och kopierar JPG-, PNG-, GIF- och SVG-filer till pub-mappen.

:white_check_mark: _**watchTask**_ övervakar ovanstående tasks och kör dom vid ändringar. Har även en live-server.
