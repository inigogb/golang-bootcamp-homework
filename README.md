# Welcome to Golang Bootcamp!

This is my homework assignment to enter [GolangBootcamp @ Wizeline](https://academy.wizeline.com/)
The API consists of two REST endpoints.

1. First endpoint returns a simple "Hello, World" every call.
2. Second endpoint calls [OpenWeatherMap](https://openweathermap.org/) REST API. It returns weather data upon a given set of GPS Coordinates (Latitude and Longitude)

## Requirements

* NodeJS v10 (LTS)
* NPM or Yarn

## Installation

Simply run the command if you're using NPM
> npm install

or if you're using Yarn
> yarn install

## How to run the project
Just use the command:
> npm run dev

and the project will run, listening at PORT 30001 as default

## Running Tests
To run the tests you must use the command:
> npm run test

## API Endpoints

### Hello World  
**URL**  `/hello-world`  

**METHOD** `GET`  

**PARAMETERS** `None`  

**RESPONSE** `<String>`  

**CODE** `200`  

### Check Weather  
**URL**  `/check-weather/:data`  

**METHOD** `GET`  

**PARAMETERS** `lat, lon`  

**RESPONSE** `JSON`  

**SUCCESS CODE** `200`  

**ERROR CODE** `500`  

_NOTE:_ Parameters must be JSON format and encoded as a Base64 string