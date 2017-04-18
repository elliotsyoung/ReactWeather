var React = require('react');

var Navbar = React.createClass({
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
              <h2>Navbar</h2>
        );
    } // end of render
}); // end of Navbar

module.exports = Navbar;
