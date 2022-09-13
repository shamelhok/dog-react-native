const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
initializeApp();

const db = getFirestore();

// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();
// let db = admin.firestore();

const badgesRef = db.collection("badges");

exports.getAllBadges =( async (event) => {
  snapshot = await badgesRef.get();
  snapshot.map((res) => {
    res.docs.map((badge) => badge.data());
    return snapshot;
  });
});
