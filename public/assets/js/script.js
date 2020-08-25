$(() => {
    $(".change-burger").on("click", function(event) {
        const id = $(this).data("id");
        const newburger = $(this).data("newburger");

        const newburgerState = {
            devoured: newburger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newburgerState
        }).then(
            () => {
                console.log("changed burger to", newburger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".insert-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim(),
            devour: $("[name=devour]:checked").val().trim()
        };
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            () => {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});