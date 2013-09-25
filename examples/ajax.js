/**
 * Author: Darkstar Design
 * Date: 9/24/13
 * Time: 10:23 AM
 *
 */
$(document).ready(function(){
    $('form.ajax').on('submit', function(){
        var f = $(this);
        $.ajax({
            type: f.attr('method'),
            url: f.attr('action'),
            data: f.find('input, textarea, select').serialize(),
            success: function(data){
                f.find('.error').remove();
                console.log(data);
                if (data.validation_error == 1 || data.error_message != '') {
                    for(var x in data.errors){
                        f.find('[name="' + x + '"]').after($('<div>').html(data.errors[x]).text());
                    }
                    f.prepend('<p class="failure">' + $('<div>').html(data.failure).text() + '</p>');
                } else {
                    f.prepend('<p class="success">' + $('<div>').html(data.success).text() + '</p>');
                }
            }
        });
        return false;
    });
});
