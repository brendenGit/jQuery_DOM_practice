const inputs = $('input');
$('ul').css('list-style', 'none');

$('form').on('submit', function (event) {
    event.preventDefault();
    const title = inputs.eq(0).val();
    const rating = inputs.eq(1).val();
    $('ul').append(`<li> Movie - ${title} : Rating - ${rating} <button>Remove Rating</button> </li>`).addClass('movieRating');
})

$('ul').on('click', 'button', function () {
    $(this).parent().remove();
})