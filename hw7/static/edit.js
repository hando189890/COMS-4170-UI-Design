

function removeAttr(key){
    $("#"+key).removeAttr("disabled")
}

function tochanges(id){
  var r = confirm("Don't Save Data?")
  if (r == true)
    {
        window.location.href = "/view/"+id
    }
  else
    {

    }
}

$(document).ready(function(){
  obj = data[0]
  $("#name").val(obj.name)
  $("#realName").val(obj.real_name)
  $("#imageLink").val(obj.imag)
  $("#height").val(obj.height)
  $("#rating").val(obj.rating)
  $("#summary").val(obj.summary)
  $("#weapons").val(obj.weapons)
  $("#creator").val(obj.creator)

})