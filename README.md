Resources: NativeBase.io, React Native Cross Platform Components 

For Android Best run on: Pixel API 27 Oreo

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

Input Validators:

    Email reqex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?

React Native maps

    https://github.com/react-native-community/react-native-maps
    
Installation

iOS
    
    1. Add xcodeproj to xcode project's library
    2. node_modules/react-native-maps/lib/ios/AirMaps.xcodeproj
    3. in xcode: click on project name/Build Phazes, Link Binary With Libraries, + (search map) -> libAirMaps.a
    4. in xcode: under Libraries click AirMaps.xcodeproj / Build Settings/ in search field type: "header search paths", double click on the right screen path a popup comes showin two $(SCRCROOT)/../../react-native/React and Libraires/Image
    5. Info.plist > Right click on Information Property List and add: Privacy - Location Usage Desription: Let's share a place
    
Android

    1. android/app/build.gradle -> under dependencies add: 
        implementation(project(':react-native-maps')){
               exclude group: 'com.google.android.gms', module: 'play-services-base'
               exclude group: 'com.google.android.gms', module: 'play-services-maps'
           }
           implementation 'com.google.android.gms:play-services-base:10.0.1'
           implementation 'com.google.android.gms:play-services-maps:10.0.1'
    2. android/settings.gralde add:
        include ':react-native-maps'
        project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')

    3. Get Google maps api key: https://console.cloud.google.com/google/maps-apis (awesome_project)
    4. Edit: android/app/src/main/AndroidManifest.xml
        add: <application>
                <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
                <meta-data
                  android:name="com.google.android.geo.API_KEY"
                  android:value="Your Google maps API Key Here"/>
             </application>
     5. Edit: android/app/src/main/java/com/vgplaces/MainApplication.java,
        import com.airbnb.android.react.maps.MapsPackage ; and new MapsPackage() in your MainApplication.java
        i.e.
        @Override
            protected List<ReactPackage> getPackages() {
                return Arrays.<ReactPackage>asList(
                        new VectorIconsPackage(),
                        new MapsPackage()
                );
            }
      6. 
        i. Android Studio: Tools>SDK Manager, SDK Tools (tab), select Google Play Services and install it.
        ii. Android Studio: Tools>AVD Manager, (this can cause google maps not working: Add Pixel API 27).
                Create a new Virtual Device: Pixel, Oreo (version 26)
      7. Add <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/> to AndroidManifest.xml
    
React Native Image Picker

        https://github.com/react-native-community/react-native-image-picker
  
        Install ios
        
            1. Add node_modules/react-native-image-picker/ios/RNImagePicker.xcodeproj to library the
            2. Add libRNImagePicker.a under Build Phases>Link Binary With Libraries
            3. Two permissions need to be granted: NSPhotoLibraryUsageDescription and NSCameraUsageDescription     
                Info.plist: Right click and add row: NSPhotoLibraryUsageDescription:You want to share an image, right?
                Info.plist: Right click and add row: NSCameraUsageDescription: Let's take a photo!
    
        Install android
        
            1. Add the follwing lines to: android/settings.gradle:
                include ':react-native-image-picker'
                project(':react-native-image-picker').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-image-picker/android')
            2. Update the android build tools version to 2.2+ in android/build.gradle
                buildscript {
                    ...
                    dependencies {
                        classpath 'com.android.tools.build:gradle:2.2.+' // <- USE 2.2.+ version
                    }
                    ...
                }
            3. Update the gradle version to 2.14.1 in android/gradle/wrapper/gradle-wrapper.properties  
                distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip      
            4. Add the compile line to the dependencies in android/app/build.gradle:
                  dependencies {
                      compile project(':react-native-image-picker')
                  }
             5. Add the import and link the package in MainApplication.java:               
                import com.imagepicker.ImagePickerPackage; // <-- add this import                
                public class MainApplication extends Application implements ReactApplication {
                    @Override
                    protected List<ReactPackage> getPackages() {
                        return Arrays.<ReactPackage>asList(
                            new MainReactPackage(),
                            new ImagePickerPackage(), // <-- add this line
                            // OR if you want to customize dialog style
                            new ImagePickerPackage(R.style.my_dialog_style)
                        );
                    }
                } 
             6. (MAY BE?) add AndroidManifest.xml
                    <uses-permission android:name="android.permission.CAMERA"/>
                    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
           
    
Screenshots:

![alt text](https://github.com/vghulyan/vgplaces/blob/master/src/assets/screenshots/Login.png)
![alt text](https://github.com/vghulyan/vgplaces/blob/master/src/assets/screenshots/LoginInHorizontalView.png)
![alt text](https://github.com/vghulyan/vgplaces/blob/master/src/assets/screenshots/SharePlace.png)
![alt text](https://github.com/vghulyan/vgplaces/blob/master/src/assets/screenshots/FindPlaces.png)
![alt text](https://github.com/vghulyan/vgplaces/blob/master/src/assets/screenshots/FindPlace.png)
![alt text](https://github.com/vghulyan/vgplaces/blob/master/src/assets/screenshots/List.png)