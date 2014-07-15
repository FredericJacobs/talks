$(function() {
    $('.faqitem h3').click(function() {
        $(this).next('.faqanswer').toggle();
        $(this).parent().removeClass('highlight');
    });

    $('a[href^="#"]').click(function(){
        openFaq($(this).attr('href').substr(1));
    });

    if (window.location.hash) {
        if ($(window.location.hash).length > 0) {
            $(window.location.hash).addClass('highlight');
            $(window.location.hash + ' .faqanswer').show();
        }
    }
});

var prevsearch;

function openFaq(name) {
    $('.faqitem[id="' + name + '"]')
//                .addClass('highlight')
        .find('.faqanswer:first').show();
}

function searchChanged() {
    var search = $('#search').val().toLowerCase();
    if (search == prevsearch)
        return;
    prevsearch = search;

    if (search == "") {
        $('.faqsection').show();
        $('.faqitem').show();
        return;
    }

    var searchwords = search.split(" ");

    $('.faqitem').each(function(index) {
        var found = true;

        for (var i = 0; i < searchwords.length; i++) {
            if ($(this).text().toLowerCase().indexOf(searchwords[i]) == -1) {
                found = false;
                break;
            }
        }

        if (found)
            $(this).show();
        else
            $(this).hide();
    });

    $('.faqsection').show();
    $('.faqsection').each(function(index) {
        if ($('.faqitem:not(:hidden)', this).length == 0)
            $(this).hide();
    });
}
