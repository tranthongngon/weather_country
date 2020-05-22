import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div className="weather__info">
                {this.props.city && this.props.country && <p className="weather__key">Location: <span className="weather__value"> {this.props.city}, {this.props.country}</span></p>}
                {this.props.temperature && <p className="weather__key">Temperature: <span className="weather__value">{this.props.temperature}</span>  </p>}
                {this.props.humidity && <p className="weather__key">Humidity:<span className="weather__value">{this.props.humidity}</span>  </p>}
                {this.props.speed && <p className="weather__key">Wind Speed: <span className="weather__value">{this.props.speed}</span> </p>}
                {this.props.description && <p className="weather__key">Humidity: <span className="weather__value">{this.props.description}</span> </p>}
                {this.props.error && <p className="weather__key">Error : <span className="weather__value">{this.props.error}</span></p>}
            </div>
        )
    }
}
