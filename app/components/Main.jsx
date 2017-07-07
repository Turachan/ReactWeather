var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
  <div>
    <Nav/>
    <h2>Main Component</h2>
    {props.children}
  </div>
  );
};

module.exports = Main;

//STATE olmadığı için => kullanılabilir
// var Main = React.createClass({
//   render: function(){
//
// });
