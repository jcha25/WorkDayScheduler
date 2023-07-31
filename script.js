$(function () {
  var save = $(".save")
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



});
