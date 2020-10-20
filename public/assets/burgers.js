
$(() => {
    $(".change-value").on("click", function () {
        const id = $(this).data("id");
        const devoured = $(this).data("newvalue");

        const eatOrNah = { value: devoured };

        // Send the PUT request.
        $.ajax(`/burger/eat/${id}/devoured`, {
            type: "PUT",
            
            data: JSON.stringify(eatOrNah),
            
            contentType: "application/json; charset=UTF-8",
        }).then(() => {

            location.reload();
        });
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim(),
        };
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/burger/eat", {
            type: "POST",
            data: newBurger,
        }).then(() => {
            location.reload();
            console.log("Hi");

        });
    });

});