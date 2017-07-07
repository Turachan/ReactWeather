var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (
    <h3>It's {temp} degrees in {location}</h3>
  );
};

module.exports = WeatherMessage;

//STATE olmadığı için => kullanılabilir
// var WeatherMessage = React.createClass({
//
//   render: function() {
//     var {temp, location} = this.props;
//     return (
//       <h3>It's {temp} degrees in {location}</h3>
//     );
//   }
// });
