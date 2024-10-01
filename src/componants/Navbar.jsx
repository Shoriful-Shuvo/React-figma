import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Images from './Images'
import Logo from'../assets/Logo.png'
import Menu from './Menu'
<assets />

const Navbar = () => {
  return (
    <div className={`py-[20px]`} >
        <Container>
            <Flex>

               <div className="w-[10%] px-[5px] pt-[2px]">
               <Images imgsrc={Logo} />
               </div>
               <div className="w-[90%]">
                <Flex className={"gap-x-7 justify-center pr-[80px]"}>
                <Menu Menuname={'Home'} />
                <Menu Menuname={'Shop'} />
                <Menu Menuname={'About'} />
                <Menu Menuname={'Contacts'} />
                <Menu Menuname={'Journal'} />
                </Flex>
               </div>
            </Flex>

        </Container>
    </div>
  )
}

export default Navbar