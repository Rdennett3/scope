$(document).ready(function() {

  var rowcounter = 0;

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
  rowcounter++;
  var localcounter=rowcounter;
  var cnt = newFancyCounter();

  var $top=$("#newrow");
  var $mydiv=$("<div/>").attr({id:"mydiv"+localcounter, class:"col-md-12 main"});
  var $span = $('<span/>').attr({class:'className', id:"counter"+localcounter}).html("0   ");
  var $add = $('<input/>').attr({ type: 'button', class: 'guess', id: 'add'+localcounter, value: "+"});
  var $delete = $('<input/>').attr({ type: 'button', class: 'guess', id: 'delete'+localcounter, value: "delete"});
  var $less = $('<input/>').attr({ type: 'button', class: 'guess', id: 'less'+localcounter, value: "-"});
  var $reset = $('<input/>').attr({ type: 'button', class: 'guess', id: 'reset'+localcounter, value: "reset"});


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
