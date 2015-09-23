var options = {
    thumbnailData: [
        {
            header: "Great kitten pics",
            title: 'See Kittens!',
            imgUrl: 'http://loremflickr.com/242/200/kittens',
            description: 'Pig ground round frankfurter brisket. Beef ribs short loin shankle. Fatback shank pork belly short ribs porchetta ground round. Pig tongue strip steak short ribs ground round fatback.',
            number: 12
        },
        {
            header: "Moar kittehs!",
            title: 'See Kittens!',
            imgUrl: 'http://loremflickr.com/242/200/cats',
            description: 'Bananarita hi-fi culture shock, ti punch usher\'s murphy\'s jack daniel\'s bijou kir, tomatin. Flirtini--dalwhinnie--mortlach bengal buck\'s fizz spanish coffee, "glenfiddich," the last word b & b link up chicago cocktail? ',
            number: 12
        }
    ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.container'));

var Badge = React.createClass({
    displayName: "Badge",
    render: function () {
        return React.createElement("button", {className: "btn btn-primary", type: "button"},
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});

var ThumbnailList = React.createClass({
    displayName: "ThumbnailList",
    render: function () {
        var list = this.props.thumbnailData.map(function (thumbnailProps) {
            return React.createElement(Thumbnail, React.__spread({}, thumbnailProps))
        });

        return React.createElement("div", null,
            list
        )
    }
});
var Thumbnail = React.createClass({
    displayName: "Thumbnail",
    render: function () {
        return React.createElement("div", {className: "col-sm-6 col-md-4"},
            React.createElement("div", {className: "thumbnail"},
                React.createElement("img", {src: this.props.imgUrl, alt: "..."}),
                React.createElement("div", {className: "caption"},
                    React.createElement("h3", null, this.props.header),
                    React.createElement("p", null, this.props.description),
                    React.createElement("p", null,
                        React.createElement(Badge, {title: this.props.title, number: this.props.number})
                    )
                )
            )
        )
    }
});