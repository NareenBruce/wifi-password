const wifiPassword = require('wifi-password');

wifiPassword().then(password => {
    console.log(password);
    //=> 'your_wifi_password'
}).catch(error => {
    console.error('Error fetching Wi-Fi password:', error);
});
