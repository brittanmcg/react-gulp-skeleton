var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData:  [
        {
            header: "Great kitten pics",
            title: 'See Kittens!',
            imgUrl: 'http://loremflickr.com/242/200/kittens',
            description: 'Pig ground round frankfurter brisket. Beef ribs short loin shankle. Fatback shank pork belly short ribs porchetta ground round. Pig tongue strip steak short ribs ground round fatback.',
            number: 120
        },
        {
            header: "Moar kittehs!",
            title: 'See Kittens!',
            imgUrl: 'http://loremflickr.com/242/200/preteen%20girl',
            description: 'Bananarita hi-fi culture shock, ti punch usher\'s murphy\'s jack daniel\'s bijou kir, tomatin. Flirtini--dalwhinnie--mortlach bengal buck\'s fizz spanish coffee, "glenfiddich," the last word b & b link up chicago cocktail? ',
            number: 12
        }
    ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.container'));

