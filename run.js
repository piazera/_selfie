var obj = {
  methodThis: function(){
    var a = undefined;
    $([1]).each(function(){
      a = this;
    });
    return a;
  },
  
  methodSelf: function(){
    var a = undefined;
    $([1]).each(function(){
      a = _self;
    });
    return a;
  },
  
  init: function(){
    /* put some initialization here and _selfie.js will run it after applying */
    var rs = 'result using "this" ' + _self.methodThis();
    rs += '<br/>' + 'result using "_self" ' + _self.methodSelf();
    $('#result').html(rs);
  }
};

/* 'selfalize' it */
_selfie.apply('obj');