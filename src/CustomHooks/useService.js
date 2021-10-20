import { useEffect, useState } from "react";

const useService = () => {
 // Js dynamic dta load from fake data.json 
 let [courses, setCourses] = useState([]);
    
 // Use useEffect to load data from fakedata 
 useEffect( () => {
     // This data for latest course dispaly 
     fetch('./fakedata2.json')
     .then(response => response.json())
     .then(data => setCourses(data));
 }, []);

  return [courses, setCourses];
}

export default useService;