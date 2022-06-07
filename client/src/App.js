import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/NavBar";
import TrackerScreen from "./screens/TrackerScreen";
import WatchListScreen from "./screens/WatchListScreen" 
import EditTrackerRecordScreen from "./screens/EditTrackerRecordScreen";
import EditWatchRecordScreen from "./screens/EditWatchRecordScreen";
import CreateTrackerRecordScreen from "./screens/CreateTrackerRecordScreen";
import CreateWatchRecordScreen from "./screens/CreateTrackerRecordScreen" 
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route path="/" element={<LoginScreen />} />
       <Route path="/LoginScreen" element={<LoginScreen />} />
       <Route path="/SignUpScreen" element={<SignUpScreen />} />
       <Route exact path="TrackerScreen/" element={<TrackerScreen />} />
       <Route path="/WatchListScreen" element={<WatchListScreen />} />
       <Route path="/edit/:id" element={<EditTrackerRecordScreen />} />
       <Route path="/EditWatchRecordScreen/:id" element={<EditWatchRecordScreen />} />
       <Route path="/CreateTrackerRecordScreen" element={<CreateTrackerRecordScreen />} />
       <Route path="/CreateWatchRecordScreen" element={<CreateWatchRecordScreen />} />
     </Routes>
   </div>
 );
};
 
export default App;