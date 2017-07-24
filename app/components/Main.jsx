var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="grid-x grid-margin-x">
                <div className="small-4 cell"></div>
                <div className="auto cell">{props.children}</div>
                <div className="auto cell"></div>
            </div>
        </div>
    );
};

module.exports = Main;

//STATE olmadığı için => kullanılabilir
// var Main = React.createClass({
//   render: function(){
//
// });
