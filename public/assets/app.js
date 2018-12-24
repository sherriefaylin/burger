$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var currentVal = $(this).data("devour");
        var newDevour = {
            devour: currentVal
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevour
        }).then(
            function() {
                location.reload();
            }
        )
    });

    $("#submit").on("click", function(event) {
        event.preventDefault();
        var burger = $("#newBurger").val().trim();
        var newBurger = {
            newBurger: burger
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
    });

    

})