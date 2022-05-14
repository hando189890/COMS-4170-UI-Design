$(function () {
  getData();
});

function getData() {
  $.ajax({
    type: "Get",
    url: "../getRules",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    // data: JSON.stringify({ msg: msg }),
    success: function (data) {
      let html = $(` <div class="row mt-3 px-5 ">
        <div class="col-sm">
            <h2>
                ${data["1"].name}
            </h2>
            <div class="mt-2">
                <ul>
                    ${data["1"].property
                      .map((item) => {
                        return `<li>${item}</li>`;
                      })
                      .join("")}
                </ul>
            </div>
            <h4 class="mt-5 pt-5">
                Three Golden Rules in Accounting:
            </h4>
            ${data["1"].summary
              .map((item) => {
                return `<div>${item}</div>`;
              })
              .join("")}
        </div>
        <div class="col-sm-6 pt-5">
            <img src="${data["1"].image}"
                class="img-fluid">
            <div class="mt-5 pt-5 text-right">
            <a href="http://127.0.0.1:5000/explore"><button type="button" id="previousButton" class="btn btn-secondary"  >Back</button></a>
            <button type="button" id="nextButton" class="btn btn-secondary" >Next</button>
            </div>
        </div>
    </div>`);
      $("#rule-con").prepend(html);
      next();
    },
  });
}

function next() {
  $("#previousButton").click(function () {});
  $("#nextButton").click(function () {
    $("#dialog-text").removeClass("dialog-text");
    $("#dialog").dialog({
      title: "",
      modal: true,
      height: 300,
      width: 600,
      buttons: {
        Yes: function () {
          window.location.href = `../rulesRes`;
        },
        No: function () {
          window.location.href = `../start`;
        },
      },
    });
  });
}
