

function displayItem(data){
    $("#info").empty();
    var html = ""
    if (data.length == 0){
        $("#info").append("No Result")
    }else{
        cur = data[0]
        html += `<img style="margin-top: 70px;margin-left: 50px" src="${cur.imag}" alt="pic" width="400px" height="500px">`
        html += `<div style="margin-top: 70px; width: 300px;height: 500px;float: right;">`
        html += `<h1 style="font-size: 28px;">Profile</h1>`
        html += `<div><h2 style="font-size: 22px;">Height: ${cur.height}</h2></div>`
        html += '<br>'
        html += `<div><h2 style="font-size: 22px;">Creator:</h2>`
        html += `</div>`
            for(var i = 0 ;i<cur.creator.length;i++){
                html += `<button type="button" onclick="toSerach('${cur.creator[i]}')" style="width: 200px;margin-top: 20px; background-color: #008CBA;" className="btn btn-primary">${cur.creator[i]}</button>`
            }

        html += ` <div><h2 style="font-size: 22px;">Weapons:</h2>`
        html += `</div>`
            for(var i = 0 ;i<cur.weapons.length;i++) {
                 html += `<button type="button" onclick="toSerach('${cur.weapons[i]}')" style="width: 200px; margin-top: 20px; background-color:#lightgrey;" className="btn btn-warning">${cur.weapons[i]}</button>`
            }
        html += `</div></div>`
        html += `<div style="width:400px; height: 500px; float: right; text-align: center;">
                <h1 style="margin-top: 200px; color = #008CBA;">${cur.name}</h1>
                <h6 style="float: right; margin-top: 50px; margin-right: 50px; font-size: 22px;">${cur.real_name}</h6>`
        html += `<div style="width: 100%; overflow:hidden; margin-top: 200px;" >`
            for (var i = 0; i<cur.rating;i++){
                html += `<img src="../static/img_2.png" onclick="toSerach('${cur.rating}')" style="width: 50px;height: 50px">`
            }
        html += `      </div></div>`
        html += `<div style="margin-top: 40px; margin-right: 200px; margin-right: 200px; font-size: 22px; font-weight: bold;"> Summary: </div>`
        html += `<div style="margin-top: 15px; margin-right: 200px; margin-right: 200px; color: black; font-size: 18px;">
                <h5 style = "margin-left: 30px;" >${cur.summary}</h5>
                </div>
                <button type="button" style="black-ground: #787878; margin-left: 30px; margin-top: 10px;" onclick="window.location.href='http://127.0.0.1:5000/edit/${cur.id}'">EditButton</button>`
        $("#info").html(html);

    }
}



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

}



function toSerach(mymsg){
        let msg = $.trim(mymsg);
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
}
$(document).ready(function(){
    displayItem(data)
})