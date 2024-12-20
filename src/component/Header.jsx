import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div style={{ marginLeft:'100px', width:'80%', border:'1px solid black', borderRadius:'10px', height:'50px',  padding:'10px'}}>

    <Link  style={{marginLeft:'100px' ,fontSize:'30px', color:'black', textDecoration:'none', marginTop:'10px'  }} to={'/'}>Blogs</Link>
    <Link style={{marginLeft:'50px' ,fontSize:'30px', color:'black', textDecoration:'none', marginTop:'10px'  }}   to={'/creat'}>Creat </Link>
    </div>
  )
}
