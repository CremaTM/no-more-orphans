# NoMoreOrphans
Librería JS vanilla para eliminar las huérfanas en cualquier elemento de una web. No necesita jQuery.

![Demostración](http://api.cremastudio.com/wp-content/themes/crema/img/test.gif)

## Como usarlo

Descargar el script minificado o sin minificar y úsalo:
```html
<script type="text/javascript" src="nomoreorphans.min.js">
<script>
    //Pasa como parámetro el selector al que quieras aplicar la librería ('p', '.clase', '#id', 'p.clase')
    noMoreOrphans('p')
</script>
```

Puedes ejecutarlo con algún evento como onResize para que se ejecute al cambiar el tamaño de la pantalla
```html
<script>
    //También puedes ejecutarlo al cargar todo el contenido o cuando se reescala la pantalla
    window.onresize = function (){
        noMoreOrphans('p')
    }
</script>
```
