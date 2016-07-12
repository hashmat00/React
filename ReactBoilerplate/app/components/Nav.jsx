var React = require("react");
var {Link} = require("react-router");

var Nav = React.createClass({
    render: function(){
        return(
            <div>
                <h2>Nav Component</h2>
                <Link to="/">Weather App</Link>
                <Link to="/about">About</Link>
                <Link to="/example">Example</Link>
            </div>
        );
    }
});


module.exports = Nav;