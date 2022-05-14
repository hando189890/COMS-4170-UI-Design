


function upload(){
    var name = $("#name").val()
    var realName = $("#realName").val()
    var imageLink = $("#imageLink").val()
    var height = $("#height").val()
    var rating = $("#rating").val()
    var summary = $("#summary").val()
    var weapons = $("#weapons").val()
    var creator = $("#creator").val()


    if (name == "" || realName =="" || imageLink =="" ||height =="" ||rating =="" ||summary =="" ||weapons =="" ||creator =="" ){
       alert("Please Fill All Blanks")
    }else{
         $.ajax({
            type:"POST",
            url:"addFrom",
            dataType:"json",
            data:{"name":name,"realName":realName,"imageLink":imageLink,"height":height,"rating":rating,"summary":summary,"weapons":weapons,"creator":creator,},
            success:function(data){
                $("#mymain").append("<a href='view/"+data.num+"'>New item successfully created</a>")
                $("#name").val("")
                $("#realName").val("")
                $("#imageLink").val("")
                $("#height").val("")
                $("#rating").val("")
                $("#summary").val("")
                $("#weapons").val("")
                $("#creator").val("")
                $("#name").focus()
            },
            error:function(jqXHR){
                console.log("Error: "+jqXHR.status);
            }
        });
    }
}

