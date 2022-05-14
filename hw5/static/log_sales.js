
let isNumber=false



function save_sale (new_sale){
   

    
    $.ajax({
        type: "POST",
        url: "save_sale",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(new_sale),
        success: function(result){
            location.reload(); 
            client = result["client"]
            sales = result["sales"]
            console.log(client)
            console.log(sales)
            display_sales_list (sales)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });

   
    
}

function delete_sale (id){
    
    $.ajax({
        type: "POST",
        url: "delete_sale",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
       
        data : JSON.stringify({"id":id}),
        success: function(result){
            client = result["client"]
            sales = result["sales"]
            console.log(client)
            console.log(sales)
            display_sales_list (sales)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
   
}

function display_sales_list(sales){
    $("#list").empty();
    for(let i =0; i < sales.length;i++){ 
        $("#list").prepend('<div class="item row"><div class="my-2 col-md-2">'+sales[i].salesperson+'</div><div class="my-2 col-md-4">'+sales[i].client+'</div><div class="my-2 mr-lg-2 col-md-3">'+sales[i].reams+'</div> <button type="button" class="btn btn-warning " onclick="delete_sale('+i+')">X</button></div>');
    }
   
}

function submit(){
    let client=$("#client").val()
    let reams=$("#reams").val()

    if(!client){
        $("#client").focus()
        $("#client").addClass("is-invalid")
        return
    }

    if(!reams){
        $("#reams").focus()
        $("#reams").addClass("is-invalid")
        return
    }

    if(!isNumber) return   
        let data = {
            salesperson:"Michael G. Scott",
            client,
            reams,
    };

    save_sale(data)

    $("#client").val('')    
    $("#reams").val('')
    $("#client").focus()    
}







$(document).ready(function(){
    display_sales_list(sales)
    $("#client").autocomplete({
        source: client
    });

    $("#reams").bind("input propertychange",function(){
        if(!$(this).val()){
            $("#reams-invalid").text("Please provide a valid reams");
            $(this).addClass("is-invalid")
            return
        }

        if($.isNumeric($(this).val()) && $(this).val() != ""){
            isNumber=true
            $(this).removeClass("is-invalid")
        }else{
            isNumber=false
            $("#reams-invalid").text("Please enter a number");
            $(this).addClass("is-invalid")
        }

    });

    $("#client").bind("input propertychange",function(){
        if($(this).val()){
            $(this).removeClass("is-invalid")
        }
    });

    $("#submit").click(function(){
        submit()  
    });  

    $("#reams").keydown(function(e){
        if(e.keyCode==13){

            submit() 
        }
    });  
     
});
