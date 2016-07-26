/*(function($){
  $.fn.extend({
    "color":function(value){
      if(value==undefined){
        return this.css("color");
      }else{
        return this.css("color",value);
      }
    }
  });
})(jQuery);*/


(function($){
  jQuery.fn.extend({  
    "color":function(value){
      return this.css("color",value);
    }
  });
})(jQuery);
