var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      errorMessage: undefined
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      var temp = temp[0].main.temp;
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });

    }, function (e){
      that.setState({
        isLoading: false,

      });
      alert(e.message);
    });
  },
  render: function () {
    var {isLoading, temp, location,errorMessage} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3 className = "text-center">Loading...</h3>
      } else if(temp && location) {
        return <WeatherMessage temp = {temp} location = {location} />;
      }
    }
  function renderError () {
    if (errorMessage && typeof errorMessage ==='string' && errorMessage.length > 0)
      return (
        <ErrorModal/>
      );
    }
    return (
      <div>
        <h1 className = "text-center">Get Weather</h1>
        <WeatherForm onSearch = {this.handleSearch}/>
        {renderMessage()}
      </div>

    )
  }

});
module.exports = Weather;
