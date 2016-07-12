var React = require('react');

var WeatherMessage = React.createClass({
    
    render: function(){
        
        var {location, temp} = this.props;
        
        return (
            
            <h3>Its {temp} in {location} </h3>
            )
    }
});


module.exports = WeatherMessage;