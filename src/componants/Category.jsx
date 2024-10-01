import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Bars from '../assets/icons/Bars'
import Text from './Text'

const Category = () => {
  return (
    <>
    
    <div className="bg-[#F5F5F3] py-[30px]">
        <Container>
            <Flex>
                <div className="w-[15%] pl-[10px]">
                    <Flex>
                    <Bars/> 
                    <Text tag={'h3'}  Text={"Shop by Category"} className={'text-[14px] font-[DM]  pl-[15px]'}/>
                    </Flex>
                </div>
                <div className="w-[60%] "></div>
                <div className="w-[25%]"></div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Category