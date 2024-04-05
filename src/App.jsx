import { useEffect, useState } from 'react'
import peopleUnorderedList from "./main"


function App(){
  const [contactList, setContactList] = useState ([]); 
  

  const CONTACT_BASE_URL = 'https;//jsonplaceholder.typicode.com'

  useEffect(() => {
    const getContactInfo = async() => {
      const response = await fetch(`${CONTACT_BASE_URL}/users`)
      const jsonObject = await response.json()
      setContactList(jsonObject);

      console.log(jsonObject);
    }
    getCOntactInfo();
  },[]);

  return (
    <>
      <div id = 'peopleList'>
        <PeopleUnorderedList contactList = {contactList}/>
      </div>
    </>
  ) 
}


export default App 


//   {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//    .then(json => console.log(json))
//    }
//    console.log(useEffect)
    
//    const result = await (useCallback)
//    console.log(result)
//     asyncCall(result)
// return (
//    <>
//    <div>
//     {console.log (App)};
//     </div>
//     </>
// )
// } 












//   app = [] ; function useEffect() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//    .then(json => console.log(json))
//    };
   
// return (


//     async function useCallback({(
//     console.log(useEffect));
    
//     const result = await (useCallback)
//     console.log(result)


//     asyncCall(result)
//     }
// )
