var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');


var Weather = React.createClass({
    getInitialState: function(){
        return {
            location: "Antioch",
            temp: 80
        }
    },
    handleSearch: function (location){
        this.setState({
            location: location,
            temp: 88
        })
    },
    
    render: function(){
       var {location, temp} = this.state;
        return (
            <div>
            <h1>Weather Component</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            
            </div>
            )
    }
});


module.exports = Weather;