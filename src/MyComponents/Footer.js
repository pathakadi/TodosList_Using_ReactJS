import React from 'react' ;

const Footer = () => {
  let footerStyle = {
    position : "relative" ,
    top : "40.5vh" ,
    width : "100%"
  }
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
      Copyright &copy; 2023 MyTodosList.com | NDCU All Rights Reserved
    </footer>
  )
}

export default Footer ;
