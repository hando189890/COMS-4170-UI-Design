

function displayItem(data){
    $("#info").empty();

    if (data.length == 0){
        $("#info").append("No Result")
    }else{
        cur = data[0]
        let cdiv = $(`
            <div class = "name">${cur.name}</div>
            <div class = "real">Real Name: ${cur.real_name}</div> 
            <div> 
            <img src="${cur.imag}" alt="pic" width="333" height="333">
            </div>
            <div class = "summary">Description: <br>${cur.summary}</div><br>
            <div class = "height">Height: ${cur.height}</div><br>
            <div class = "creator">Creators: ${cur.creator} </div>
            `);
        $("#info").append(cdiv);
    }
}




$(document).ready(function(){
    displayItem(data)                        
})