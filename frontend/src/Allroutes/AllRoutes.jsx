import { Routes, Route } from "react-router-dom";
import SignInSide from "../component/Login";
import SignUp from "../component/SignUp";
import Post from "../component/Post";

function AllRoutes() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
