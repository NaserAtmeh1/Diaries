import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {DatabaseNetworkPoint} from '@icon-park/react';
import axios from "axios"

export default function Register() {

    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        age:0,
        gender:"",
    })
    const [file, setFile] = useState("")
    const [image,setImage] = useState("")
  


    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.id]: event.target.value,
      });
    }
      

    function privewFile(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)

      }
      console.log(image);

    }

    const handleFile = (event) => {

        const pic = event.target.files[0]
        if(pic){
          setFile(pic)
          privewFile(file)
  
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user)
        axios
        .post("http://localhost:2022/register", {
          username :user.username,
          email:user.email,
          password:user.password,
          age:user.age,
          gender:user.gender,
          img:image
        })
        .then((response) => {
          setUser(response.data);
        });
              }

  
  return (
    <div className='container'>
      <div className='left'>
       <div className='logo'>
       <DatabaseNetworkPoint theme="outline" size="150" fill="#333"/>
        <h1>WonderHit</h1>
       </div>
          <form className='form' onSubmit={handleSubmit}>
          <input placeholder='Username' id='username' value={user.username} className='field' type="text" onChange={handleChange} />
          <input placeholder='Email' id='email' value={user.email} className='field' type="email" onChange={handleChange} />
          <input placeholder='Password' id='password' value={user.password} className='field' type="password" onChange={handleChange} />
          <input placeholder='Age' id='age' value={user.age} className='field' type="number" onChange={handleChange} />
          <input placeholder='Gender' id='gender' value={user.gender} className='field' type="text" onChange={handleChange} />
          <div className='profilePic'>
            <div className='Photo'>
              <img className='Photo1' src={image || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAgAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAYHBQECA//EADQQAAIBAwEDCgQGAwAAAAAAAAABAgMEBREGITESEyJBUWFxgaHBMlKR0RQjJEKSsRUzYv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqgAAAAABLxuOuclcKjaw1+aT+GK7wIh7HWT0im32JF+xuzFjaRUq8Fc1et1F0fKP31O3CEKcVGnGMYrgorRAZNJOL0kmvHceGtThCpFxqQjKL4qS1RxMlsvYXkZOhD8NV6pU10fOP2AoAJeSx1zjbh0bmGj4xkvhku5kQAAAAAAAAAAAP1tbepd3NO3orWpUlyYml4vH0cbaQt6K4b5S65vtZV9hrRVLq4upLXmoqEfF8fRepdAAAAAACHlMfRyVpOhWXHfCXXCXU0ZpdW9S0uKlvWWlSnLkyNXKXt1aqnd0LqK/2xcJadq4f36AVcAAAAAAAAAAXfYTT/G3Hbz2/+KLKU/YO5SqXVrJ75JVIrw3P2LgAAAAAACtbdpf463b48/u/iyylP27uk52trF74p1JL0XuBUwAAAAAAAAABJx15UsL2lc0uMHvXzLrX0NNtLmleW9OvQlyqc1qmZSdTCZqviar5P5lCT6dJv1XYwNIBAx2YssjFO3rLl9dOW6S8vsTwAPG9FqQMhmbLHwbuKy5fVTjvk/ICVeXNK0tqlevLk04LVv2MyyN5Uv72rc1dzm90flXUiXm81Xy1Vcpc3Qi9YUk/V9rOWAAAAAAAAAAPqEZTmoQi5Tk9FGK1bYHiGq4vgWTGbJXNdKpfz/Dwa+CO+b9kWWyweOstHStoSl89TpP14eQGe0LW5rtO3t61TvhTb/o69vb7SwilS/GJLqlP7svq3cABQri32lqRaqq8a/5n9mci4tLmg27i2rU++cGvU1Q80TWmgGS7mloeGlXuDx17q6ttCMn++n0X6FayeyVxQTnY1Ofgv2S0U17P0ArQPqcJQm4TjKM4vRxktGmfIAAAACVjbGtkLyFvbrpPe5PhFdbYHuNx9xkrlULaOvXKb+GC72X7D4W1xdP8uPLrNaSrSW9+HYiRjMfQx1rGhQW5cZPjJ9rJYAAAAAAAAAAAczMYW1ykPzI8isl0aseK8e1FByWOuMbcuhcx38YzXCa7UaiRMnj6GRtZULiOqe+Mlxi+1AZcCVkbGtjrudvcLpR4SXCS6miKANE2axSxlknUX6mslKp3dkfIquydgr3KxnNa07dcuXj+1e/kaEgAAAAAAAAAAAAAAAAOPtLiVkrFypr9RSTlT7+2PmZ2a4Z9tbYKyyrnBaUrjpx7n1r38wLDsXa8zieea6Vebl5Lcvf6lgImKpcxjbWl8lGKfjoSwAAAAAAAAAAAAAAAABwNtLXn8TzyXSoTUte57n7fQ75EytHn8bdUtPjoyXoB/9k="} />
            </div>
            <input className='field2' id='file' type="file" accept=".png, .jpg, .jpeg" onChange={(e) => handleFile(e)} />
            <label htmlFor = "file"  className='uploadPic' >+</label>
          </div>
          <button className='submit' type="submit">Register</button>
          <h3 className='routing'>You already have an account ? <Link className='rot' to="/">Login</Link></h3>
        </form>
      </div>
      <img className='right' src='https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
    </div>
  )
}
