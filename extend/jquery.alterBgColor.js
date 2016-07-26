/**
* @Date:   2016-07-26T16:30:02+08:00
* @Last modified time: 2016-07-26T18:59:39+08:00
*/

(function($){
  $.fn.extend({
    "alterBgcolor":function(options){
      //设置默认值
      options=$.extend({
        odd:"odd",//偶数行样式
        even:"even",//奇数行样式
        selected:"selected"//选中行样式
      },options);
      // alert(this);
       $("tbody>tr:odd",this).addClass(options.odd);//可以写成$(this).find("tbody>tr:odd").addClass(options.even);
      //如果没有第二个参数this,jQuery选择器会从DOM的顶端开始搜索.但现金、在
      $("tbody>tr:even",this).addClass(options.even);
      $("tbody>tr",this).click(function(){
        var hasSelected=$(this).hasClass(options.selected);
        $(this)[hasSelected?"removeClass":"addClass"](options.selected)
        .find(":checkbox").attr("checked",!hasSelected);
      });
          $('tbody>tr:has(":checked")',this).addClass(options.selected);
          return this;
    }
  });
})(jQuery);
