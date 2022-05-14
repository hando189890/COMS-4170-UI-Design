$(function () {
  getData();
});

function getData() {
  $.ajax({
    type: "Get",
    url: "../addData",
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
                 Property Summary: 
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
                    <button type="button" class="btn btn-secondary" id="previousButton">Back</button>
                  <button type="button" class="btn btn-secondary" id="nextButton">Next</button>
              </div>
          </div>
      </div>`);
      $("#ruleRes-con").prepend(html);
      next();
    },
  });
}

function next() {
  $("#nextButton").click(function () {
    window.location.href = `../rulesRes2`;
  });
  $("#previousButton").click(function () {
    window.location.href = `../learn2`;
  });
}
