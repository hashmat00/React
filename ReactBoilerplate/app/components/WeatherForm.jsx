var React = require('react');

var WeatherForm = React.createClass({
    render: function(){
        return (
            <div>
            <h3>Weather Form Component</h3>
            
                <form>
                  <input type="text"/>
                  <button>Submit</button>
              </form>
            
            </div>
            )
    }
});


module.exports = WeatherForm;