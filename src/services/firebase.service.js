import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { auth, firestore } from "../environment";

// create user in firestore
export async function createUser(name, email, uid) {
    try {
        await setDoc(doc(firestore, "users", uid), {
            name,
            email
        })
    } catch (error) {
        console.log(error);
    }
}

export async function createContactedUser(name, email, contact, message) {
    try {
        await addDoc(collection(firestore, "contactedUsers"), {
            name,
            email,
            contact,
            message
        })
    } catch (error) {
        console.log(error);
    }
}

export async function getProducts() {
    try {
        const snapshot = await getDocs(collection(firestore, "products"));
        var products = [];
        snapshot.forEach(product => {
            products.push({ id: product.id, ...product.data() })
        })
        return products;
    } catch (error) {
        console.log(error);
    }
}

export async function getCartProductsForUserId() {
    try {
        const q = query(collection(firestore, "carts"), where("userId", "==", localStorage.getItem("uid")));
        const snapshot = await getDocs(q);
        var products = [];
        for (const snap of snapshot.docs) {
            const productData = snap.data();
            const docRef = doc(firestore, "products", productData.productId)
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data();
            products.push({
                id: snap.id,
                ...productData,
                name: docData.name,
                productQuantity: docData.quantity
            })
        }
        return products;
    } catch (error) {
        console.log(error);
    }
}


export async function addProductInCart(productId, userId, quantity, finalPrice, basePrice) {
    try {
        // check the product is already in db or not
        const q = query(collection(firestore, "carts"), where("productId", "==", productId),
            where("userId", "==", localStorage.getItem("uid")));

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            return "Product is already present in a cart"
        }
        // if yes throw with the error

        // if not then add the product in db
        await addDoc(collection(firestore, "carts"), {
            productId,
            userId,
            quantity,
            finalPrice,
            basePrice
        })

        return "Product successfully added in cart"
    } catch (error) {
        console.log(error);
    }
}

export async function increaseOrDecreaseCountForCartId(cartId, quantity, finalPrice) {
    try {
        const ref = doc(firestore, "carts", cartId);
        await updateDoc(ref, {
            quantity,
            finalPrice
        })
    } catch (error) {
        console.log(error);
    }
}


export async function deleteCartProduct(id) {
    try {
        await deleteDoc(doc(firestore, "carts", id));
    } catch (error) {
        console.log(error);
    }
}