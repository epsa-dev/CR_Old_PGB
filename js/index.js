var app = {
// Application Constructor
initialize: function() {
this.bindEvents();
},
// Bind Event Listeners
//
// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
document.addEventListener('deviceready', this.onDeviceReady, false);
},
// deviceready Event Handler
//
// The scope of 'this' is the event. In order to call the 'receivedEvent'
// function, we must explicity call 'app.receivedEvent(...);'
onDeviceReady: function() {
app.receivedEvent('deviceready');
},
// Update DOM on a Received Event
receivedEvent: function(id) {
var parentElement = document.getElementById(id);
var listeningElement = parentElement.querySelector('.listening');
var receivedElement = parentElement.querySelector('.received');
listeningElement.setAttribute('style', 'display:none;');
receivedElement.setAttribute('style', 'display:block;');
var random = new Date();
if(window.localStorage.getItem('key') != "")
{
key_value = window.localStorage.getItem("key");
}
else
{
window.localStorage.setItem("key", random);
key_value = window.localStorage.getItem("key");
//key_value = "";
}
window.setTimeout(function() { window.location.href = "check.html"},1000);
console.log('Received Event: ' + id);
}
};

/*
var pushNotification;
function onDeviceReady() {
$("#app-status-ul").append('Online');

document.addEventListener("backbutton", function(e)
{
$("#app-status-ul").append('Regresar');
if( $("#home").length > 0)
{
// call this to get a new token each time. don't call it to reuse existing token.
//pushNotification.unregister(successHandler, errorHandler);

e.preventDefault();
navigator.app.exitApp();
}
else
{
navigator.app.backHistory();
}
}, false);
try
{
pushNotification = window.plugins.pushNotification;
if (device.platform == 'android' || device.platform == 'Android') {
//$("#app-status-ul").append('<li>registering android</li>');
pushNotification.register(successHandler, errorHandler, {"senderID":"569190724393","ecb":"onNotificationGCM"});		// required!
} else {
//$("#app-status-ul").append('<li>registering iOS</li>');
pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
}
}
catch(err)
{
$("#push_notification_error").append(err.message); 
}
}

// handle APNS notifications for iOS
function onNotificationAPN(e) {
if (e.alert) {
$("#push_notification_alert").append(e.alert);
//navigator.notification.alert(e.alert);
}
if (e.sound) {
var snd = new Media(e.sound);
snd.play();
}
if (e.badge) {
pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
}
}

// handle GCM notifications for Android
function onNotificationGCM(e) {
//$("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');
switch( e.event )
{
case 'registered':
if ( e.regid.length > 0 )
{
window.localStorage.setItem("token_push", e.regid);
$("#push_notification").append(e.regid);
// Your GCM push server needs to know the regID before it can push to this device
// here is where you might want to send it the regID for later use.
console.log("regID = " + e.regid);
}
break;
case 'message':
// if this flag is set, this notification happened while we were in the foreground.
// you might want to play a sound to get the user's attention, throw up a dialog, etc.
if (e.foreground)
{
//$("#app-status-ul").append('<li>--INLINE NOTIFICATION--' + '</li>');
// if the notification contains a soundname, play it.
var my_media = new Media(e.soundname);
my_media.play();
}
else
{	// otherwise we were launched because the user touched a notification in the notification tray.
if (e.coldstart)
//$("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
else
//$("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
}
$("#push_notification")append(e.payload.message);
$("#push_notification_count").append(e.payload.msgcnt);
break;
case 'error':
$("#push_notification_error").append(e.msg); 
break;
default:
//$("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
break;
}
}

function tokenHandler (result) {
window.localStorage.setItem("token_push", result);
$("#push_notification").append(result); 
// Your iOS push server needs to know the token before it can push to this device
// here is where you might want to send it the token for later use.
}
function successHandler (result) {
$("#push_notification_status").append(result);
}
function errorHandler (error) {
$("#push_notification_status").append(error);
}

var get_token_push = window.localStorage.getItem("token_push");
if(get_token_push)
{  }
else { 
get_token_push = "";
} 

var new_url_check = "check.html?token_push=" + get_token_push; 
window.setTimeout(function() { window.location.href = new_url_check},1000);

//window.setTimeout(function() { window.location.href = "check.html"},1000);

document.addEventListener('deviceready', onDeviceReady, true);
*/