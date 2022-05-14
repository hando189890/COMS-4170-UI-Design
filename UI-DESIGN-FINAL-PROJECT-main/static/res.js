$(function () {
  getRes();
});

function getRes(id) {
  $.ajax({
    type: "Get",
    url: "../resData",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    // data: JSON.stringify({ msg: msg }),
    success: function (data) {
      let score = 0;
      let options = "";
      data.forEach(function (item, index) {
        if (item.flag) score++;
        options = `${options}<div class="border p-2 res-option">
          <a class="navbar-brand" href="../quiz/res/${index+1}">Problem ${index + 1} <span class="ml-5" style="color:${item.flag?"":"red"}">${item.flag ? "Correct" : "Incorrect"}</span></a>
      </div>`;
      });

      let html = $(`<div class="row mt-5">
        <div class="col-sm score">
            <h2>
                Final Score
            </h2>
            <div class="mt-5 mb-5 ">
               <h1><mark class="score">${score}/${data.length}</mark></h1> 
            </div>
            <img src="https://preview.redd.it/beqcl3hgf7u81.png?width=438&format=png&auto=webp&s=072fdd7bda6816cd67b1aff252f8b814f55601f8"
                class="mt-5 img-fluid">
        </div>
        <div class="col-sm">
            <h3 class="mb-5">
                Click to review all problem sections
            </h3>
            <div class="pl-5 mb-3">
            ${options}
            </div>
            <button type="button" id="restart" class="mt-5 btn btn-primary">Restart</button>
        </div>
    </div>`);
      $("#res-con").append(html);
      restart();
    },
    error: function (request, status, error) {
      console.log("Error");
    },
  });
}

function restart() {
  $("#restart").click(function () {
    $.ajax({
      type: "Get",
      url: "../restart",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      // data: JSON.stringify({ msg: msg }),
      success: function (data) {
        window.location.href = `../quiz/1`;
      },
    });
  });
}
