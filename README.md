_selfie
=====

js plugin to create a substitute word to the reserved word 'this'


why?
==
when you organize js objects similarly to static classes, like:

```javascript
var MyStaticClass = {
  attribute1: 1,
  attribute2: 2,

  method1: function(){
    /*code*/
  },
  method2: function(){
    /*code*/
  }
}
```

sometimes you get confused when using the js reserved word 'this'.
in the same function, 'this' can result in different objects depending on the scope it's being called from.

this plugin tries to present an alternative solution to this problem.

example situations
==
when looping through jquery selections, calling 'this' in the callback function returns the selected object.

```javascript
var obj = {
  method: function(){
    $(..selection criteria..).each(function(){
      console.log(this); //this will refer to the elements selected
    });
  };
}
```

when scheduling callbacks with 'setTimeout' function, the work 'this' inside the callback will refer to the window object
```javascript
var AnotherStaticClass = {
  callback: function(){
    console.log(this);
  }
}

setTimeout(AnotherStaticClass.callback, 1000); /* it will print the object window to the console when called */
```

solution
==
supose you have a file called 'test.js'with one only object, where you want to use the word _self in any of its functions to refer to the whole object regardless of the scope it is called

```javascript
/* file test.js */
var Test = {
  f1: function(){
    _self.f2();
  },
  f2: function(){
    $('a').each(function(){
      console.log(_self);
    });
  },
  init: function(){
    _self.f1();
  }
};
```

after including the test.js file in your html, include the _selfie.js in your html:

```javascript
<script type="text/javascript" src="_selfie.js"></script>
```

then initialize it
```javascript
_selfie.apply(['Test']);
```

by convention, after handling the object, _selfie will run the 'init' method provided that it has one;

any call to '_self' will be replaced by the name of the variable holding the object (in this case 'Test')