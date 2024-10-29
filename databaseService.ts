// databaseService.ts
import { database } from './firebaseConfig.js';
// @ts-ignore
import { ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Function to write data
export async function writeData(path: string, data: object): Promise<boolean> {
  const dbRef = ref(database, path);
  try{
    await set(dbRef, data);  
    return true   
  }
  catch(e){
    return false
  }
}

// Function to read data
export async function readData(path: string): Promise<any> {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, path));
  return snapshot.exists() ? snapshot.val() : null;
}


export async function updateData(userId: string, updates: object): Promise<boolean> {
  const dbRef = ref(database, `/${userId}`);
  console.log("Attempting update with data:", updates, "at path:", `users/${userId}`);
  try {
    await update(dbRef, updates);
    console.log("Update successful");
    return true;
  } catch (e) {
    console.error("Error updating data:", e);
    return false;
  }
}
