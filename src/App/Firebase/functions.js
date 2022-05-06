import { db } from "./config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const fetchData = async (collect) => {
  let data = [];
  await getDocs(collection(db, collect)).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
  });

  return data;
};

export const setData = async (collect, data) => {
  try {
    const res = await addDoc(collection(db, collect), data);

    return res.id;
  } catch (error) {
    console.log("🚀 ~ file: functions.js ~ line 21 ~ setData ~ error", error);
  }
};
