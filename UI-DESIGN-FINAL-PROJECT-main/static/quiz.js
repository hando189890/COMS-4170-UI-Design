$(function () {
  getQuestion(questionId);
  submit(questionId);
});

let result;
function getQuestion(id) {
  $.ajax({
    type: "Get",
    url: questionRes ? "../../question/res/" + id : "../question/" + id,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    // data: JSON.stringify({ msg: msg }),
    success: function (data) {
      result = data;
      let questionData = $(`<div class="row mt-3 p-5">
          <div class="${result.image ? "col-sm" : "col-sm-8"}">
              <h2>
                  ${result.description}
              </h2>
              <div class="question-results p-3 mt-5">
                    
              </div>
              <div class="mt-5 pr-5 options">
                  <div class="border p-2">selected an answer here:</div>
                  <div class="border p-2 option" id="A">
                    ${result.entry1}
                  </div>
                  <div class="border p-2 option" id="B">
                    ${result.entry2}
                  </div>
                  <div class="border p-2 option" id="C">
                    ${result.entry3}
                  </div>
                </div>
            </div>
            ${
              result.image
                ? `<div class="col-sm">
            <img src="${result.image}" alt="${result.description}" class="img-fluid">
        </div>`
                : ""
            }
            
      </div>`);

      $("#question-con").prepend(questionData);
      $(".option")
        .unbind("click")
        .click(function (e) {
          choose(e);
        });
      getRes();
    },
    error: function (request, status, error) {
      console.log("Error");
    },
  });
}

let selected;
function choose(e) {
  if (selected) return;
  selected = true;
  $("#submit-button").removeAttr("disabled");
  $(".option").removeClass("option-active");
  $(e.target).addClass("option-active");
  let flag = $(e.target).attr("id") == result.correct;
  if (flag) {
    $(".question-results").append(`<div class="question-results-true"> Correct!  </div>`);
  } else {
    $(".question-results").append(`<div class="question-results-error">
          Incorrect!
      </div>
      <div>
          Correct answer: ${result.correct}
      </div>`);
  }
  $.ajax({
    type: "Post",
    url: "../question",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({ ...result, entry: $(e.target).attr("id"), flag }),
    success: function (result) {
      console.log(result);
    },
  });
}

function submit() {
  $("#submit-button").click(function () {
    let id = Number(questionId) + 1;
    if(questionRes){
      window.location.href = `../../res`;
    }else if (id > 5) {
      window.location.href = `../res`;
    } else {
      window.location.href = `../quiz/${id}`;
    }
  });
}

function getRes() {
  if (questionRes) {
    selected = true;
    $(`#submit-button`).removeAttr("disabled");
    $(`#submit-button`).html("Return");
    $(`.option#${result.entry}`).addClass("option-active");
    if (result.flag) {
      $(".question-results").append(`<div class="question-results-true"> Correct!  </div>`);
    } else {
      $(".question-results").append(`<div class="question-results-error">
            Incorrect!
        </div>
        <div>
            Correct answer: ${result.correct}
        </div>`);
    }
  }
}
