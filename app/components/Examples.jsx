var React = require('react');
var {Link} = require('react-router');
//Stateless functions
var Examples = () => {
  return (
    <div>
      <h1 className = "text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Ankara'>Ankara, TR</Link>
        </li>
        <li>
          <Link to='/?location=Istanbul'>Istanbul, TR</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;

//STATE olmadığı için => kullanılabilir
// var About = React.createClass({
//   render: function() {
//
//   }
//
// });
