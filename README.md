Engines System GUI
==================

Needs Ruby and NPM.

Install dependencies:
```
bundle
npm i
```

Set the ENGINESD_API_URL in the environment on start. If the EnginesD API is on port 4567, start with:
```
ENGINESD_API_URL='http://localhost:4567' thin start
```
