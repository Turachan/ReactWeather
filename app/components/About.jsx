var React = require('react');
var {Link} = require('react-router');
//Stateless functions
var About = () => {
  return (
    <div>
      <h1 className = "text-center page-title">About</h1>
        <p>This is a weather app which has developed using React. These are the technologies which
          is being used and implemented or to be implemented.
        </p>
        <ol>
          <li>
            <a target="_blank" href = "http://foundation.zurb.com/sites/docs/">Foundation DOCS</a>
          </li>
          <li>
            <a target="_blank" href = "https://github.com/Turachan/ReactWeather">GitHub Repository</a>
          </li>
          <li>
            <a target="_blank" href = "https://devcenter.heroku.com/">Heroku Cloud Application Platform</a>
          </li>
          <li>
            <a target = "_blank" href = "https://facebook.github.io/react/">React Github</a>
          </li>
        </ol>
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
