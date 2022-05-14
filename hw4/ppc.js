let employees = [
    "Phyllis",
    "Angela",
    "Dwight",
    "Oscar",
    "Creed",
    "Jim",
    "Stanley",
    "Michael",
    "Kevin",
    "Kelly",
    "Pam"
]
let ppc=[]

$(document).ready(function(){
    init()
    drag()
});


const init=()=>{
    $("#non-ppc-list").empty();
    $("#ppc-list").empty();
    employees.map((item)=>{
        let $itemEle = $(`
            <div class="item" data-name="${item}">
                ${item}
            </div>
        `);
        $("#non-ppc-list").append($itemEle);
    })
    ppc.map((item)=>{
        let $itemEle = $(`
            <div class="item" data-name="${item}">
                ${item}
            </div>
        `);
        $("#ppc-list").append($itemEle);
    })
    $( ".item" ).draggable({revert: 'invalid'});
    $(".item").mouseover(function(){
        $(this).addClass("active");
    });
    $(".item").mouseout(function(){
        $(this).removeClass("active");
    });
}

function drag(){
    $( "#non-ppc" ).droppable({
        classes: {
            "ui-droppable-hover": "active1"
    },


        drop: function( event, ui ) {
            var name = $(ui.draggable).data("name");

            if(employees.indexOf(name)==-1){
                employees.push(name)
                ppc.splice(ppc.indexOf(name), 1);
            }

            init()
          }
    });

    $( "#ppc" ).droppable({
       
            classes: {
                "ui-droppable-hover": "active1"
        },
        drop: function( event, ui ) {
            var name = $(ui.draggable).data("name");
            if(ppc.indexOf(name)==-1){
                ppc.push(name)
                employees.splice(employees.indexOf(name), 1);
            }
            init()
  
          }
    });
}

