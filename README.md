## Step 1: Start the dev server
yarn ios --mode Release/Develop<br />
yarn android --mode release/Develop<br />

## Step 2: Start the debug using Hermes with flipper
for android: need choose again Android SDK location same as Android Studio manage SDK<br />
for ios: need install and choose IDB location by:<br />
    - step1: install by cmd: pip3  install --user fb-idb<br />
    - step2: choose location: /Users/<your_username>/Library/Python/<python_version>/bin/idb<br />

