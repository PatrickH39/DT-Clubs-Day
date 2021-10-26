$("img").contextmenu(function() {
    return false;
});

$("img").mousedown(function(e) {
    e.preventDefault()
});

document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }
}



new TypeIt("#typing", {
        speed: 70,
    })
    .pause(100)
    .type("Welcome!")
    .pause(1000)
    .delete(8)
    .type("Club sign-ups are now closed.")
    .pause(1000)
    .delete(29)
    .type("Have any questions?")
    .pause(1000)
    .delete(19)
    .type("Please contact the teacher sponsor.")
    .pause(1500)
    .delete(35)
    .type("Explore the clubs!")
    .go();

$(document).ready(function() {
    $("form").submit(function() {
        if ($('input:checkbox').filter(':checked').length < 1) {
            alert("You need to join at least one club!");
            return false;
        }
    });
});

$(function() {
    $('#submitButton').click(function(e) {
        var valid = this.form.checkValidity();

        if (valid) {
            var accessCode = $('#accessCode').val();
            var studentNumber = $('#studentNumber').val();
            var fullName = $('#fullName').val();
            var emailAddress = $('#emailAddress').val();

            var selectedClub = [];
            $('.selectedClub').each(function() {
                if ($(this).is(":checked")) {
                    selectedClub.push($(this).val());
                }
            });
            selectedClub = selectedClub.toString();


            e.preventDefault();

            $.ajax({
                type: 'POST',
                url: 'post.php',
                data: {
                    accessCode: accessCode,
                    studentNumber: studentNumber,
                    fullName: fullName,
                    emailAddress: emailAddress,
                    selectedClub: selectedClub
                },
                success: function(data) {
                    Swal.fire({
                        'title': 'Information',
                        'text': data,
                        'icon': 'info',
                        'confirmButtonColor': '#3085d6'
                    })

                    document.getElementById("clubRegistration").reset();
                },
                error: function(data) {
                    Swal.fire({
                        'title': 'Error',
                        'text': 'Club sign-ups are now disabled. Contact clubs directly to sign up!',
                        'icon': 'error',
                        'confirmButtonColor': '#3085d6'
                    })
                    document.getElementById("clubRegistration").reset();
                }
            });
        } else {

        }
    });
});