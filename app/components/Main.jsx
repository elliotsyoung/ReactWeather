var React = require('react');
var Navbar = require('Navbar');

var Main = React.createClass({
    getDefaultProps: function() {
        return {
            prop: '',
        };
    }, //end of getDefaultProps
    getInitialState: function() {
        return {
            state: this.props.state
        }
    }, // end of getInitialState
    render: function() {
        return (
          <div>
            <Navbar />
            <h2>Main Component</h2>
          </div>
        );
    } // end of render
}); // end of Main

module.exports = Main;
