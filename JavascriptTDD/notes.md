## Steps followed

* `npm init @vitejs/app`, pick vanilla
* `npm install jest cypress @types/jest --save-dev`
* In package.json : 
   ```json
    "test": "jest --watchAll --verbose --coverage",
    "e2e": "cypress open"
   ```
* Create `jsonconfig.json` file : 
   ```json
    {
      "typeAcquisition": {
        "include": [
          "jest"
        ]
      }
    }
   ```