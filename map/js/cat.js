$(document).ready(function() {
    $('.keyword').each(function() {
        let originalText = $(this).html();
        let map = {
            'кот': './img/cat.jpeg',
        };

        const replace = (text, map) => {
            return text.replace(new RegExp(Object.keys(map).join('|'), 'gi'), function(matched) {
                return '<img src="' + map[matched.toLowerCase()] + '" alt="' + matched + '" style="max-width: 7.5%; height: auto;" />';
            });
        };

        $(this).mouseenter(function() {
            let newText = replace(originalText, map);
            $(this).html(newText);
        });

        $(this).mouseleave(function() {
            $(this).html(originalText);
        });
    });
});
