jQuery(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '6894234227',
        limit: 2,
        resolution: 'standard_resolution',
        accessToken: '6894234227.1677ed0.8386d3f987694ba3afe0415f3449a6d2',
        sortBy: 'most-recent',
        template:   '<div class="multiple-items">' +
                        '<div class="multiple-items instaimg">' +
                            '<a href="{{image}}" title="{{caption}}" target="_blank">' +
                                '<img src="{{image}}" alt="{{caption}}" class="img-fluid"/>' +
                            '</a>' +
                        '</div>' +
                    '</div>'
    });
    userFeed.run();
});