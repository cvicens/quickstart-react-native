# QuickStart React Native Client-side Template
---------
Author: Carlos Vicens   
Level: Intermediate   
Technologies: Javascript, React Native, RHMAP   
Summary: A basic React Native client side template with RHMAP.   
Target Product: RHMAP   
Product Versions: Pending   
Source: https://github.com/cvicens/quickstart-react-native

**Prerequisites:**

- react-native-cli: 2.0.1
- react-native: 0.42.3

## React Native installation
To install React Native (and its CLI), please go to [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

### If you want to avoid reading the guide...
* Install node (v6+)
* Install React Native CLI `npm install -g react-native-cli`
* Test your installation

```
react-native init TestProject
cd TestProject
react-native run-ios
```

## What is it?
This application is abasic React Native client side template, it should be used in combination with the [HelloWorld cloud app](https://github.com/feedhenry-templates/helloworld-cloud). Refer to `ios/fhconfig.json` for configuration.

If you do not have access to a RHMAP instance, you can sign up for a free instance at [https://openshift.feedhenry.com/](https://openshift.feedhenry.com/).

## How do I run it?  

### RHMAP Studio

This application and its cloud services are available as a project template in RHMAP as part of the "Backbone Hello World Project" template.

### Local Clone (ideal for Open Source Development)
If you wish to contribute to this template, the following information may be helpful; otherwise, RHMAP and its build facilities are the preferred solution.

###  Prerequisites  
 * rct-fh : 0.0.9+
 * react-native : 0.42.3

## Build instructions
 * npm install
 * Edit `ios/fhconfig.plist` to include the relevant information from RHMAP.  
 * Build and run locally. This should start the iOS simulator, deploy the app and run it. `react-native run-ios`


### npm dependencies
As we have stated before this template depends on `rct-fh` the repository of this npm module is [here](https://gitlab.com/cvicens/RCTFH).

### Updating rct-fh version
To update the SDK:
- change the version in `package.json`
- run `npm install` 