$(document).ready(function() {

  function newFancyCounter(){
    var counter=0;
    return{
      more: function(){
        counter += 1;
        return counter;
      },
      less: function(){
        counter -= 1;
        return counter;
      },
      reset: function(){
          counter = 0;
          return counter;
      },
    }
  }



function createRow(){
  var cnt = newFancyCounter();

  var $top=$("#newrow");
  var $mydiv=$("<div/>").attr({class:"col-md-12 main"});
  var $span = $('<span/>').html("0   ");
  var $add = $('<input/>').attr({ type: 'button', value: "+"});
  var $delete = $('<input/>').attr({ type: 'button', value: "delete"});
  var $less = $('<input/>').attr({ type: 'button', value: "-"});
  var $reset = $('<input/>').attr({ type: 'button', value: "reset"});


  $top.append($mydiv);
  $mydiv.append($span);
  $mydiv.append($add);
  $mydiv.append($delete);
  $mydiv.append($reset);
  $mydiv.append($less);



  $add.click(function(event){
    temp=cnt.more();
    $span.html(temp+" ");
  });

  $less.click(function(event){
    temp=cnt.less();
    $span.html(temp+" ");
  });

  $reset.click(function(event){
    temp=cnt.reset();
    $span.html(temp+" ");
  });

  $delete.click(function(event){
    alert("you will delete a row");
    $mydiv.remove();
  });

};




  var addrow=$("#addrow");


  addrow.click(function(event){
    createRow();
  });



});
