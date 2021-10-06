new TypeIt("#typing", {
        speed: 70,
    })
    .pause(100)
    .type("Welcome!")
    .pause(1000)
    .delete(8)
    .type("Scroll down and <strong>sign up</strong> for your clubs this year.")
    .pause(1300)
    .delete(49)
    .type("Click on any club icon for more info.")
    .pause(1000)
    .delete(37)
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
                        'text': data,
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