let btn = $("#button-toggle")
btn.click(function () {
    $(".sidebar").toggle()
    $("#content").toggleClass("col-12")
})