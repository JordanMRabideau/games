// $(function() {
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
// })