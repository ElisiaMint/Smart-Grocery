// ====================================================================
// Firebase Integration for Smart Grocery Tracker
// ====================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics, isSupported as isAnalyticsSupported } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDxvRrb4ovr9YZ1v1M1RL6g4OTkoUfRuc4",
  authDomain: "shopping-tracker-70b66.firebaseapp.com",
  projectId: "shopping-tracker-70b66",
  storageBucket: "shopping-tracker-70b66.firebasestorage.app",
  messagingSenderId: "142501156224",
  appId: "1:142501156224:web:31d6280dbdcae4fee51d65",
  measurementId: "G-N8T5F1FEHS"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics if supported
export let analytics = null;
isAnalyticsSupported().then(supported => {
  if (supported) {
    analytics = getAnalytics(app);
    console.log("🔥 Firebase Analytics aktif");
  }
}).catch(err => {
  console.log("Firebase Analytics check:", err.message);
});

// Initialize Cloud Firestore
export const db = getFirestore(app);

/**
 * Simpan transaksi belanja ke Cloud Firestore (Collection: "shopping_history")
 * @param {Object} orderData Objek transaksi belanja
 * @returns {Promise<{success: boolean, id?: string, error?: any}>}
 */
export async function saveOrderToFirestore(orderData) {
  try {
    const historyCol = collection(db, "shopping_history");
    const payload = {
      orderId: orderData.id || ('ord-' + Date.now()),
      dateString: orderData.dateString || new Date().toLocaleString('id-ID'),
      fullTimestamp: orderData.fullTimestamp || new Date().toISOString(),
      store: orderData.store,
      totalSpent: orderData.totalSpent,
      items: orderData.items || [],
      createdAt: serverTimestamp()
    };
    const docRef = await addDoc(historyCol, payload);
    console.log("✅ Berhasil menyimpan riwayat belanja ke Firestore:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.warn("⚠️ Gagal menyimpan ke Firestore (fallback lokal aktif):", error);
    return { success: false, error };
  }
}

/**
 * Berlangganan (listen real-time) data riwayat belanja dari Cloud Firestore
 * @param {Function} onUpdate Callback ketika data diterima
 * @param {Function} onError Callback jika terjadi error
 * @returns {Function} Unsubscribe function
 */
export function subscribeShoppingHistory(onUpdate, onError) {
  try {
    const historyCol = collection(db, "shopping_history");
    const q = query(historyCol, orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      const orders = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        orders.push({
          id: data.orderId || docSnap.id,
          firestoreDocId: docSnap.id,
          dateString: data.dateString,
          fullTimestamp: data.fullTimestamp,
          store: data.store,
          totalSpent: data.totalSpent,
          items: data.items || []
        });
      });
      if (onUpdate) onUpdate(orders);
    }, (error) => {
      console.warn("⚠️ Firestore onSnapshot warning:", error);
      if (onError) onError(error);
    });
  } catch (error) {
    console.warn("⚠️ Error setting up Firestore listener:", error);
    if (onError) onError(error);
    return () => {};
  }
}

// Pasang ke window object agar bisa diakses langsung secara global
window.FirebaseTracker = {
  app,
  analytics,
  db,
  firebaseConfig,
  saveOrderToFirestore,
  subscribeShoppingHistory,
  isReady: true
};

// Dispatch custom event untuk memberitahu komponen bahwa Firebase siap digunakan
window.dispatchEvent(new CustomEvent('firebase:ready', {
  detail: { app, db, analytics }
}));
console.log("🔥 FirebaseTracker siap terhubung ke project: shopping-tracker-70b66");
