var React = require('react');

var HowItWorks = React.createClass({
    render: function(){
        return (
            <div>
                <Headline />
            </div>
        );
    }
});

var Headline = React.createClass({
    render: function(){
        return (
            <h1>Hello</h1>
        );
    }
});

React.render(<HowItWorks />, document.querySelector('.howitworks-react-3-col-circle-icons'));

