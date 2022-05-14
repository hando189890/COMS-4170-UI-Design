$(document).ready(function(){
    Start();
    Drop();
    
});

function Start(){
    $(".post").mouseover(function(){
        $(this).css('background-color', 'lightyellow');
        $(this).css('cursor', 'crosshair');
    });
    $(".post").mouseout(function(){
        $(this).css('background-color', 'white');
    });
    $(".post").draggable({
        revert: 'invalid'
        
    })

}


function Drop(){
    $(".content").droppable({
        tolerance: "touch",
        //greedy: "true",
        drop: function(event, ui){ //ui: 
            // $( this ).find("p")
            event.preventDefault();
            // console.log('H');
            // var new_name = $("<div class='name'>");
            // var drop_ele = ui.draggable;
            
            var name = $(ui.draggable).data("name"); //Phyllis
            console.log(name);

            // var newline = $("input[name='"+ name +"']");
            // jQuery('<div>', {
            //     id: 'name',
            //     class: 'post text hover',
            //     // title: 'now this div has a title!'
            // }).appendTo('.content');
            
            //var newline = $('div id= "' + name +  '" class = "post text hover"')
           // var newline = document.getElementById(name);
            // console.log("Hi, " + newline);

            // $(".content").append(newline);
            $(".content").append('<div class="post text hover">' + name + '</div>');

            //$(ui.draggable).remove();
            // $(".post").mouseover(function(){
            //     $(this).css('background-color', 'lightyellow');
            //     $(this).css('cursor', 'crosshair');
            // });
            // $(".post").mouseover(function(){
            //     (this).css('background-color', 'white');
            // });
            $(ui.draggable).remove();

            Start();

        }

        
    });


}






