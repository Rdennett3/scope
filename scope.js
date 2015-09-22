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
  var $mydiv=$("<div/>").attr({id:"mydiv"+localcounter, class:"col-md-12 main"});
  var cnt = newFancyCounter();
  var $span = $('<span/>').attr({class:'className', id:"counter"+localcounter}).html("0   ");
  var $add = $('<input/>').attr({ type: 'button', class: 'guess', id: 'add'+localcounter, value: "+"});
  var $delete = $('<input/>').attr({ type: 'button', class: 'guess', id: 'delete'+localcounter, value: "delete"});
  var $less = $('<input/>').attr({ type: 'button', class: 'guess', id: 'less'+localcounter, value: "-"});
  var $reset = $('<input/>').attr({ type: 'button', class: 'guess', id: 'reset'+localcounter, value: "reset"});


    $("#newrow").append($mydiv);
    $('#mydiv' + localcounter).append($span);
    $("#mydiv"+localcounter).append($add);
    $('#mydiv' + localcounter).append($delete);
    $('#mydiv' + localcounter).append($reset);
    $('#mydiv' + localcounter).append($less);



    $add.click(function(event){
      temp=cnt.more();
      $("span#counter"+localcounter).html(temp+" ");
      });

      $less.click(function(event){
        temp=cnt.less();
        $("span#counter"+localcounter).html(temp+" ");
        });

        $reset.click(function(event){
          temp=cnt.reset();
          $("span#counter"+localcounter).html(temp+" ");
          });

      $delete.click(function(event){
      alert("you will delete a row");
      // $('#add'+rowcounter).remove();
      // $('#counter'+rowcounter).remove();
      $("#mydiv" + localcounter).remove();

    });

    };




var addrow=$("#addrow");


addrow.click(function(event){
    createRow();
  });


// var reset_btn= $("#reset_btn");
// var decrease= $("#dec_btn");
// var increase= $("#inc_btn");
// var cnt = newFancyCounter();
// var count= $("#counter");
//
//
// reset_btn.click(function(event){
//   count.html(cnt.reset);
// });
//
// increase.click(function(event){
//   count.html(cnt.more);
// });
//
// decrease.click(function(event){
//   count.html(cnt.less);
// });

});
