var React = require('react');

// var WeatherMessage = React.createClass({
    
//     render: function(){
        
//         var {location, temp} = this.props;
        
//         return (
            
//             <h3>Its {temp} in {location} </h3>
//             )
//     }
// });


var WeatherMessage = ({location, temp}) => {
    // var {location, temp} = props;  // removed the "this" from this.props
        
        return (
            
            <h3>Its {temp} in {location} </h3>
            )
}



module.exports = WeatherMessage;