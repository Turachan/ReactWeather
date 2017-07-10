var React = require('react');

//Stateless functions
var About = () => {
  return (
    <div>
      <h3>About Component</h3>
      <p>It is the about page</p>
    </div>
  );
};

module.exports = About;

//STATE olmadığı için => kullanılabilir
// var About = React.createClass({
//   render: function() {
//
//   }
//
// });
