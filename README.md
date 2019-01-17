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
    To Run the native debugger: Right click run with remote debugging...
        
Install react native vector icons

    npm install react-native-vector-icons --save
    
iOS - XCode

    Right Click on Libraries, Add Files to <project>, navigate to node_modules/react-native-vetor-icons/ select RNVectorIcons.xcodeproj
    On the main screen, click on the project name, click Build Phases, Link Binary With Libraries, click on + search vector or icon and select libRNVectorIcons.a
    Copy Fonts folder to the project by going node_modules/react-native-vector-icons/Fonts/ select Ionicons.ttf drag and drop into the project, a popup appears, select <project> from Add to gadgets: and select Create folder references
    edit info.plist: Right click on Information Property List, Add Row, type: Fonts provided by application, add filename as: Ionicons.ttf
                 
Android:

    Continue to the Android section: Copy two lines:   
        include ':react-native-vector-icons'
        project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
    Paste in android/settings.gradle
    A few lines below you'll find the following line under dependencies: compile project(':react-native-vector-icons') copy to android/app/build.gradle inside dependencies
    Copy: import com.oblador.vectoricons.VectorIconsPackage; into android/app/src/java/com/<project?/MainApplication.java, add new VectorIconsPackage() in protected List<ReactPackage> getPackages() {
    To copy fonts: copy: 
    project.ext.vectoricons = [
        iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
    ]
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"  to: android/app/build.gradle at the bottom 
        
React Navigation

    iOS
    
        v1 docs: https://github.com/wix/react-native-navigation/tree/v1/docs
        npm install --save react-native-navigation@1    
        https://github.com/wix/react-native-navigation/blob/v1/docs/installation-ios.md    
        AppDelegate.m -> https://github.com/wix/react-native-navigation/blob/v1/example/ios/example/AppDelegate.m
        
    Android
    
        https://github.com/wix/react-native-navigation/blob/v1/docs/installation-android.md
        
Styling: React Native Styling cheat sheet : https://github.com/vhpoet/react-native-styling-cheat-sheet