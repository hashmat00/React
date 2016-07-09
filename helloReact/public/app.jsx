var GreeterMessage = React.createClass({
    render: function(){
        return(
            
            <div>
            <h1>Hello Hashmat</h1>
            <p>this is a paragrpah</p>
            </div>
            )
    }
});


var GreeterForm = React.createClass({
    render: function(){
        return(
            <div>
                <h1>This is my form </h1>
                <form>
                 <input type="text" ref="name"/>
                 <button>Submit</button>
                </form>
            </div>
            
            )
    }
})






var Greeter = React.createClass({
    getDefaultProps: function(){
      return {
          name: 'React',  
          message: "This is teh default message "
         };
    
        
    },
    getInitialState: function () {
        
      return{
       name: this.props.name
      }; 
      
    },
    onButtonClick: function (e){
        e.preventDefault();
        
        var nameRef = this.refs.name;
        
        var name = nameRef.value;
        nameRef.value = '';
        
        if(typeof name === 'string' && name.length> 0){
             this.setState({
                
                name: name
            });
        }
        
           
        
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;

        return (
            <div>
            <h1>Hello {name}! </h1>
            <p>{message + '!!'}</p>
            
            
            <GreeterMessage/>
            
            
            <form onSubmit={this.onButtonClick}>
             <input type="text" ref="name"/>
             <button>Submit</button>
            </form>
            
            <GreeterForm/>
            </div>
        );
    }
});

var firstName = 'Johnny';


ReactDOM.render(
 <Greeter name={firstName}/>,
 document.getElementById('app')
);