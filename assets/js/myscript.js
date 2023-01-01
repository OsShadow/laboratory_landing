$('document').ready(function () {

    let camposVacios = false;

    function readCookie(name) {

        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }

    const miCookie = readCookie("notification");

    if (miCookie == 'true') {
        $("#notification_cookies").hide()
    }

    $("#close_notification_cookies").click(function () {
        document.cookie = "notification=true";
    })

    $("#contact_form").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        let email = $('#email').val();
        let phone = $('#phone').val();
        let name = $('#name').val();

        if (email == "" ||
            phone == "" ||
            name == "" ) {
            return;
        }

        const data_form = new FormData();

        //Informacion de formularios
        data_form.append('email', email);
        data_form.append('phone', phone);
        data_form.append('name', name);

        $('#send').hide();
        $('#sending').show();

        $.ajax({
            type: "POST",
            url: './assets/php/sendMail.php',
            processData: false,
            contentType: false,
            data: data_form,
            success: function (response) {

                $('#send').show();
                $('#sending').hide();

                if (response == "OK") {

                    $('#email').val("");
                    $('#phone').val("");
                    $('#name').val("");

                    tata.success('Correo enviado con éxito', 'Nos contactaremos con usted en breve')
                } else {
                    tata.error('Ocurrió un error, intente reenviar el correo más tarde', '')
                }
            }
        });

    });

});