import React,{useEffect} from 'react'
import Hero from '../../components/hero/Hero'
import Container from '../../components/card/Container'
import { useCrossContext } from '../../contexts/Context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../signupPage/firebase.config';
import axios from 'axios';
export default function Homepage() {
  
  const {setIsLoggedIn,userPhone,setUserPhone,myUser,user} = useCrossContext()
    const linkArray = ['https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/289c766054a217db.jpg?q=20','https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20']
    const fetchUser = () => {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            setUserPhone(authUser.phoneNumber);
            setIsLoggedIn(true)
          }
          resolve("fetchUser executed");
        });
      });
    };
  
    useEffect(
      () => {
        const fetchData = async () => {
          await fetchUser();
          if (userPhone.length > 0) {
            axios.post('https://ecommerece-backend-d7pwbukza-atuls-projects-11835781.vercel.app/api/v1/existinguser', { signupPhoneNumber: userPhone })
              .then(
                (res) => {
                  myUser(res.data)
                  // console.log(user[0]._id)
                  if(user.length > 0)
                  localStorage.setItem('userId' , user[0]._id);
                  localStorage.setItem('signupPhoneNumber' , userPhone)
                  // console.log(res.data)
                }
              )
              .catch(
                (err) => {
                  console.log(err)
                }
              )
          }
        }
        fetchData();
  
      }, [userPhone]
    )
    
  return (
    <div className='relative flex flex-col gap-4 items-center top-20'>
        <div>
          <Hero imgLink={linkArray}/>
        </div>
        <Container ctg='Best Deals' boxFor='best deals'/>
        <Container ctg='Smartphones' boxFor='smartphones' />
        <Container ctg='Furniture' boxFor='furniture' />
        <Container ctg='Sexy Sexy lady & Macho Man' boxFor='skincare' />
        <Container ctg="And here comes the gentleman" boxFor='mens-shirts' />
        <Container ctg="Makeup your Home" boxFor='home-decoration' />
        <Container ctg="Smell good" boxFor='fragrances'/>
    </div>
  )
}
