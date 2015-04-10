# How to install

### Inside your desired directory in terminal:
```
git clone git@github.com:soyzamudio/CHAssistantExtension.git assistant
```

### Configure your name for notifications:

* Open project in Atom (or favorite editor)
* Go to `/src/bg/background.js`
* In line 3 replace **jose** with your first name in lower case<br>
`i.e. var ref = new Firebase('https://get-ta.firebaseio.com/assistant/cade/help');`
* Save the changes

### In Google Chrome:

* Go to **chrome://extensions**
* Activate **Developer Mode**
* Click **Load unpacked extension**
* Select the folder you just cloned
