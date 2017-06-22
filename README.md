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

- CocoaPods (for iOS)
- iOS 8, 9, 10 [SDK supported configuration](https://access.redhat.com/node/2357761)
- react-native-cli: 2.0.1
- react-native: 0.42.3
- rct-fh : 0.0.14+ [documentation](https://www.npmjs.com/package/rct-fh)

## React Native installation
To install React Native (and its CLI), please go to [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

### If you want to avoid reading the guide...
* Install node (v6+)
* Install React Native CLI `npm install -g react-native-cli`
* Test your installation

```
$ react-native init TestProject
$ cd TestProject
$ react-native run-ios
```

## What is it?
This application is a basic React Native client side template, it should be used in combination with the [HelloWorld cloud app](https://github.com/feedhenry-templates/helloworld-cloud).

## How do I run it {only iOS for now}  

### Create a new iOS App in Studio

- Create a new iOS Objective-C Application in your RHMAP project
- Open the 'Editor' and copy the contents of ./helloworld-ios-app/fhconfig.plist

### Adapt RHMAP iOS fhconfig.plist file in our RN application 

Edit `ios/fhconfig.plist` and paste the contents copied in the previous step

## Build instructions
 * npm install or yarn install
 * Run `pod install` inside the `./ios` folder
 * Build and run locally. This should start the iOS simulator, deploy the app and run it. ``react-native run-ios``

### npm dependencies
As we have stated before this template depends on ``rct-fh`` the repository of this npm module is [here](https://gitlab.com/cvicens/RCTFH).

### Updating rct-fh version
To update the SDK:
- change the version in ``package.json``
- run ``npm install``