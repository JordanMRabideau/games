$(function() {
    $(".change-played").on("click", function() {
        var id = $(this).data("id");
        var playedState = $(this).data("newplayed");
        var newPlayedState;
        if (playedState == false) {
            newPlayedState = {
                played: true
            }
        } else {
            newPlayedState = {
                played: false
            }
        }
        console.log("New Played state: " + newPlayedState.played)
    
        $.ajax("/api/games/" + id, {
            type: "PUT",
            data: newPlayedState
        }).then(function() {
            console.log("Changed state to " + newPlayedState);
            location.reload();
        })
    })

    $(".add-game").on("submit", function(event) {
        event.preventDefault();
        
        var newGame = {
            name: $("#name").val().trim(),
            played: $("[name=played]:checked").val().trim()
        };

        console.log(newGame)
        // Send the POST request.
        $.ajax("/api/games", {
            type: "POST",
            data: newGame
        }).then(
            function() {
                // console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })

    $(".delete-game").on("click", function(event) {
        var id = $(this).data("id")
        $.ajax("/api/games/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("Deleted game", id);
            location.reload();
        })
    });
})