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
  $("#hour-10 textarea").val(localStorage.getItem("hour-10"))
  $("#hour-11 textarea").val(localStorage.getItem("hour-11"))
  $("#hour-12 textarea").val(localStorage.getItem("hour-12"))
  $("#hour-13 textarea").val(localStorage.getItem("hour-13"))
  $("#hour-14 textarea").val(localStorage.getItem("hour-14"))
  $("#hour-15 textarea").val(localStorage.getItem("hour-15"))
  $("#hour-16 textarea").val(localStorage.getItem("hour-16"))
  $("#hour-17 textarea").val(localStorage.getItem("hour-17"))



});
