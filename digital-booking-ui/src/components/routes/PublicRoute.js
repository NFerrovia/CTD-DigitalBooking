import React from "react";
import { Navigate } from "react-router-dom";

export const PubliceRoute = ({ children, user }) => {
  return user ? <Navigate to="/" /> : children;
};
