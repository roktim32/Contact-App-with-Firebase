import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi"
import { AiFillPlusCircle } from "react-icons/ai"
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };



  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(contactLists);
          return contactLists;
        })
      } catch (error) {
        console.log(error)
      }
    }
    getContacts();
  }, [])


  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex realative items-center flex-grow">
            <FiSearch className="ml-1 absolute text-white text-3xl" />
            <input type="text" className="pl-9 text-white flex-grow h-10 bg-transparent border border-white rounded-md" />
          </div>
          <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />
        </div>
        <div className="mt-4 flex flex-col gap-4 ">
          {
            contacts.map((contact) =>
              (<ContactCard key={contact.id} contact={contact} />)
            )
          }
        </div >
      </div >
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
