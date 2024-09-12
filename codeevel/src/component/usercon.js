import React from "react";
import User from "./user";

const Usercont =React.createContext('codevolution')
const Userpro=Usercont.Provider
const UserCon=Usercont.Consumer

export {Userpro,UserCon}
export default Usercont