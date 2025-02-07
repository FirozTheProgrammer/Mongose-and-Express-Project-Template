import { Schema, model, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export type Student = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastNmae: string;
  };
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
contactNumber: string;
emergencyContactNo: string;
bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; 
};
