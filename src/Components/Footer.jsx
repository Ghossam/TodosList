import React from 'react'

const Footer = () => {

  let FooterStyle={
    top:"70vh",
    width:"100%",
    position:"relative"
  }
  return (
    <>
    <footer className="bg-dark text-light py-3" style={FooterStyle}>
      <h3 className="text-center">
      Copyright &copy; My Todo's List.com 
      </h3>
      </footer>
    </>
  )
}

export default Footer;