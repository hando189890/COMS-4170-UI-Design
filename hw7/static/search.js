function search(msg){
        $.ajax({
                type: "POST",
                url: "../search/",
                dataType : "json",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify({"msg": msg}),
            success: function(result){
                reslist = result["reslist"]
                msg = result["msg"]
                console.log(reslist)
                console.log(msg)
                                               
            },
            error: function(request, status, error){
                console.log("Error");
                console.log(request)
                console.log(status)
                console.log(error)
            }
        });

    
        window.location.replace("/search_result");
        $("#search").empty();
        $("#search").focus();
        $("#search").val("");
}
    


$(document).ready(function(){
    $('#search').keydown((e)=>{
        if(e.keyCode==13){
            let input = $("#search").val();
            let msg = $.trim(input);
            if (!msg){
                $("#search").empty();
                $("#search").focus();
                $("#search").val("");
                console.log("check point 1")
                return;
            }else{
                $("#search").empty();
                $("#search").focus();
                $("#search").val("");
                search(msg);
            }
        }
    }); 

    $("#submit").click(function(){
        console.log("check point 3")
        let input = $("#search").val();
        let msg = $.trim(input);
        if (!msg){
            $("#search").empty();
            $("#search").focus();
            $("#search").val("");
            console.log("check point 2")
            return;
        }else{
            $("#search").empty();
            $("#search").focus();
            $("#search").val("");
            search(msg);
        }
        
    });

})
