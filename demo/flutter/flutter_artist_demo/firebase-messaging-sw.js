// Import scripts for Firebase Core and Messaging
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker
// You can find these values in your firebase_options.dart or Firebase Console
firebase.initializeApp({
  apiKey: "AIzaSyDlwdYOb43O6NP6-vZWH-n5hPdF3L7Zf6M",
  authDomain: "flutterartistdemo.firebaseapp.com",
  projectId: "flutterartistdemo",
  storageBucket: "flutterartistdemo.firebasestorage.app",
  messagingSenderId: "1036875611970",
  appId: "1:1036875611970:web:d5ac291448ca368b6412db"
});


const messaging = firebase.messaging();

/* =========================
   1. BACKGROUND MESSAGE
========================= */
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification?.title ?? 'Notification';
  const notificationOptions = {
    body: payload.notification?.body ?? '',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

/* =========================
   2. SERVICE WORKER LIFECYCLE
========================= */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

});

