Create a new project using the following steps:

    Search react native
    Building Projects with Native Code
    npm install -g react-native-cli
    react-native init vgplaces

Add this in scripts/package.json:

    "ios": "react-native run-ios",
    "android": "react-native run-android"

Configure Android Studio, add in .bash_profile

    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.1.jdk/Contents/Home
    export PATH=$PATH:$JAVA_HOME/bin
    export PATH=~/Library/Android/sdk/tools:$PATH
    export PATH=~/Library/Android/sdk/platform-tools:$PATH
    
    Update distributionUrl:
        PROJECT_PATH/android/gradle/wrapper/gradle-wrapper.properties
        distributionUrl=https\://services.gradle.org/distributions/gradle-5.1.1-all.zip
    Comment out (using /* */)
        task wrapper(type: Wrapper) {
            gradleVersion = '4.4'
            distributionUrl = distributionUrl.replace("bin", "all")
        }
        in android/build.gradle (line 36)    

    Virtual Device: Pixel API 27 -> Oreo 27
To run:

    ios: npm run ios
    android: npm run android
        
Android: CMD-M (Hot Reloading)

iOS: CMD-D (Hot Reloading)

Install React Native Debugger

    https://github.com/jhen0409/react-native-debugger
    Releases: -> https://github.com/jhen0409/react-native-debugger/releases
    GoTo: Redux DevTools Integration
    if Debug JS enabled the followings are included in global:
        window.__REDUX_DEVTOOLS_EXTENSION__
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        window.__REDUX_DEVTOOLS_EXTENSION__.connect
        You can just use redux-devtools-extension npm package.
    Add REDUX DEVTOOLS in configureStore.js
        import { compose } from 'redux'
        let composeEnhancers = compose;        
        if(__DEV__) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        }
        const configureStore = () => {
          return createStore(rootReducer, composeEnhancers())
        };
    
        
    