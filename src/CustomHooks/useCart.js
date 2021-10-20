import { useEffect, useState } from 'react';
import { getStoredAdmission } from '../Components/utilities/fakestorage';

const useCart = courses => {
    const [cartAddmission, setCartAddmission] = useState([]);
    
    useEffect( () => {
        if (courses.length){
            const savedAdmission = getStoredAdmission();
            const storedAddmission = [];
            for(const id in savedAdmission){
                const addedCourse = courses.find(course => course.id === id);
                if(addedCourse){
                   const quantity = savedAdmission[id];
                   addedCourse.quantity = quantity;
                   storedAddmission.push(addedCourse);
                }
            }
            setCartAddmission(storedAddmission);
        }
    }, [courses])
    return [cartAddmission, setCartAddmission];
        
}

export default useCart;