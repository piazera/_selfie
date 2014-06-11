_selfie
=====

js plugin to create a substitute word to the reserved word 'this'


why?
==
when you use js objects like static classes, sometimes using 'this' does not return what you want.
this plugin tries to present an alternative solution.

example
==
when looping through jquery selections, calling 'this' in the callback function returns the selected object.
if this code is inside a function of an object, you can use '_self' to reference to the object itself.

```javascript
var obj = {
  method: function(){
    $(..selection criteria..).each(function(){
      console.log(this); //this will refer to the elements selected
    });
  };
}
```

solution
==
just include the _selfie.js in your html and tell it the objects you want it to handle:

```javascript
_selfie.apply(['obj', 'object2']);
```

_selfie will also run a method called 'init' if the object being handled provides one;

this way you can use the term '_self' in any scope inside the object to refer to the object name:

```javascript
var obj = {
  method: function(){
    $(..selection criteria..).each(function(){
      console.log(_self); //_self will refer to 'obj' variable
    });
  };
}```