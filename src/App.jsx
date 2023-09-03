import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi"
import { AiFillPlusCircle } from "react-icons/ai"
import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"
import { collection, getDocs } from 'firebase/firestore'
import { db } from "./config/firebase";

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setContacts(contactLists)
      } catch (error) {
        console.log(error)
      }
    }
    getContacts();
  }, [])


  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex realative items-center flex-grow">
          <FiSearch className="ml-1 absolute text-white text-3xl" />
          <input type="text" className="pl-9 text-white flex-grow h-10 bg-transparent border border-white rounded-md" />
        </div>
        <AiFillPlusCircle className="text-5xl text-white cursor-pointer" />
      </div>

      <div>
        {
          contacts.map((contact) =>
            <div key={contact.id}>
              <HiOutlineUserCircle />
              <div className="text-white">
                <h2 className="">{contact.name}</h2>
                <p className="">{contact.email}</p>
              </div>
              <div>
                <RiEditCircleLine />
                <IoMdTrash />
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default App;
