# page-capture
Getting page content by clicking the chrome extension and send to backend for futher analysis

## Goal
Some website will detect whether you are a bot if you are doing web scrapping. This chrome extension will send the page content to the backend.

## Installation

### Chrome extension

Go to `chrome://extensions/` and use Develop mode. Click on Load unpacked and select the `chrome-extension` folder

### backend
Install packages
```
$ pip install -r requirements.txt
```
Run flask app

## Use
Click on `Submit` in chrome extension. The page will print in python terminal.