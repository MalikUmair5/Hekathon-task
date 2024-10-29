var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// databaseService.ts
import { database } from './firebaseConfig.js';
// @ts-ignore
import { ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// Function to write data
export function writeData(path, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbRef = ref(database, path);
        try {
            yield set(dbRef, data);
            return true;
        }
        catch (e) {
            return false;
        }
    });
}
// Function to read data
export function readData(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbRef = ref(database);
        const snapshot = yield get(child(dbRef, path));
        return snapshot.exists() ? snapshot.val() : null;
    });
}
export function updateData(userId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbRef = ref(database, `/${userId}`);
        console.log("Attempting update with data:", updates, "at path:", `users/${userId}`);
        try {
            yield update(dbRef, updates);
            console.log("Update successful");
            return true;
        }
        catch (e) {
            console.error("Error updating data:", e);
            return false;
        }
    });
}
