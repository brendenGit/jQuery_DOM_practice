$.when($.ready).then(function () {
    console.log("Let’s get ready to party with jQuery!");
});

$('article').find('img').addClass('image-center');

$('article p:last-child').remove();

$('#title').css('font-size', Math.floor(Math.random() * 101));

$('ol').append("<li>This is one dope li!!!!</li>");

$('aside').empty().append("<p>Honestly lists are not that great and I am sincerely sorry for ever putting one here.</p>");

const inputs = $('input');
inputs.on('input', function () {
    const r = inputs.eq(0).val();
    const g = inputs.eq(1).val();
    const b = inputs.eq(2).val();
    $('body').css('background-color', `rgb(${r},${g},${b})`);
})

$('img').on('click', function () {
    $('img').fadeOut(1500, function () {
        $(this).remove();
    });
})