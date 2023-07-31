$(function () {
  var save = $(".saveBtn")
  var timeBlock = $(".time-block")
  var currentDay = $("#currentDay")
  currentDay.text(dayjs().format("MMMM, DD, YYYY"))
  
  var hour = dayjs().hour()
  timeBlock.each(function() {
    var id = $(this).attr("id").slice(5)
    if(hour < id) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else if (hour > id) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })

  save.on("click", function(event) {
    event.preventDefault()
    var text = $(this).siblings(".description").val().replace(id)
    var id = $(this).parent().attr("id")

    localStorage.setItem(id, text)
  })


  $("#hour-9 textarea").val(localStorage.getItem("hour-9"))
  


});
