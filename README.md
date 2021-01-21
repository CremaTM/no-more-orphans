# NoMoreOrphans
Librería JS vanilla para eliminar las huérfanas en cualquier elemento de una web. No necesita jQuery.

![Demostración](http://api.cremastudio.com/wp-content/themes/crema/img/test.gif)

## Como usarlo
```html
<script type="text/javascript" src="nomoreorphans.min.js">
<script>
    //Pasa como parámetro el selector al que quieras aplicar la librería ('p', '.clase', '#id', 'p.clase')
    noMoreOrphans('p')
</script>
```

```html
<script>
    //También puedes ejecutarlo al cargar todo el contenido o cuando se reescala la pantall
    window.onresize = function (){
        noMoreOrphans('p')
    }
    //o
    window.onresize = function (){
        noMoreOrphans('p')
    }
</script>
```
