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
          <div class="col-sm-6">
              <h2>
                  ${data["2"].name}
              </h2>
              <div class="mt-2">
              ${data["2"].property}
              </div>
              <h4 class="mt-5 pt-5">
              </h4>
              <div>
              ${data["2"].summary[0]}</div>
              <a  href="${
                data["2"].summary[1].split(":")[1] + ":" + data["2"].summary[1].split(":")[2]
              }" role="button">${data["2"].summary[1].split(":")[0]}</a>
          </div>
          <div class="col-sm-6 pt-5">
                <iframe width=100% height=100% src=${data["2"].image} alt="${data["2"].image}"></iframe>
              <div class="mt-5 pt-5 text-right">
              <button type="button" class="btn btn-secondary" id="previousButton">Back</button>
                  <button type="button" class="btn btn-secondary" id="nextButton">Next</button>
              </div>
          </div>
      </div>`);
      $("#rule2-con").prepend(html);
      next();
    },
  });
}

function next() {
  $("#nextButton").click(function () {
    window.location.href = `../start`;
  });
  $("#previousButton").click(function () {
    window.location.href = `../rulesRes`;
  });
}
