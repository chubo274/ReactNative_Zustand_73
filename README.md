Step 1: Start the dev server
yarn ios --mode Release/Develop
yarn android --mode release/Develop

Step 2: Start the debug using Hermes with flipper
for android: need choose again Android SDK location same as Android Studio manage SDK
for ios: need install and choose IDB location by:
- step1: install by cmd: pip3 install --user fb-idb
- step2: choose location: /Users/<your_username>/Library/Python/<python_version>/bin/idb
