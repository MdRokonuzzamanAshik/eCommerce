
import './App.css'
import Container from './Container'
import Search from './Search'
import Button from './Button'
import Flex from './Flex'
import Menu from './Menu'
import Image from './Image'
import Logo from './assets/logo (3).png'
import PhonesSale from './assets/PhonesSale.jpg'
import Electronics from './assets/Electronics Sale.png'
import FurnitureOffer from './assets/FurnitureOffer.jpg'
import Banner2 from './assets/Banner2.png'
import Product_1 from './assets/Product_1.png'
import Product_2 from './assets/Product_2.png'
import Product_3 from './assets/Product_3.png'
import Product_4 from './assets/Product_4.png'
import Product_5 from './assets/Product_5.png'
import Product_6 from './assets/Product_6.png'
import Product_7 from './assets/Product_7.png'
import Product_8 from './assets/Product_8.png'
import Cap from './assets/cap.png'
import headPhone from './assets/headPhone.png'
import sunGlass from './assets/sunGlass.png'
import table from './assets/table.png'
import Social_Icons from './assets/Social_Icons.png'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";



function App() {
  

  return (
    <>
                {/* menu part start */}
      <div className="menu py-5">
        <Container>
           <Flex>
           <div className="w-[20%]"><Image imgSrc={Logo}/></div>
           <div className="w-[80%]">
           <div className="menuText flex pl-[240px] font-dmSans font-normal text-[14px]  text-[#767676] gap-8 ">
           <Menu menuName={'Home'} className={'hover:font-bold hover:text-black'}/>
           <Menu menuName={'Shop'} className={'hover:font-bold hover:text-black'}/>
           <Menu menuName={'About'} className={'hover:font-bold hover:text-black'}/>
           <Menu menuName={'Contacts'} className={'hover:font-bold hover:text-black'}/>
           <Menu menuName={'Journal'} className={'hover:font-bold hover:text-black'}/>
           </div>
           </div>
           </Flex>
        </Container>
        </div>  
                {/* menu part end */}


                {/* search part start */}
                <div className="search bg-[#F5F5F3]">
                    <Container>
                        <Flex className={'py-6 '}>
                        <div className="w-[20%]">
                        <Flex className={'gap-x-2 py-[20px]'}>
                        <HiMiniBars3BottomLeft className='text-[#262626] ' />
                        <p className='text-sm font-dmSans '>Shop by Category</p>
                        </Flex>
                        </div>
                        <div className="w-[60%] relative">
                           <input type="text" className='bg-white p-4 w-full font-dmSans' 
                           placeholder='Search Products'/>
                           <div className="icon absolute top-1/2 -translate-y-1/2 pl-[746px]"><FaSearch /></div>
                        </div>
                        <div className="w-[20%] ">
                        <Flex className={'justify-end pt-[20px]'}>
                        <div className="flex pr-8">
                        <FaUser /><FaCaretDown/></div>
                        <FaShoppingCart />
                        </Flex>
                        </div>
                        </Flex>
                    </Container>
                </div>
                {/* search part end */}
                {/* Intro part start */}
                <a href="#"><div className="Banner bg-bannerImg py-[300px]">  </div></a>
                {/* Intro part end */}
                {/* Sale part start */}
                <div className="salePart mt-[190px]">
                  <Container>
                    <Flex>
                      <div className="w-[50%] pr-5">
                       <a href="#"> <Image imgSrc={PhonesSale}/></a>
                      </div>
                      <div className="w-[50%]">
                        
                          <div className="ES pb-4">
                            <a href="#"><Image imgSrc={Electronics}/></a>
                          </div>
                          <div className="FO">
                            <a href="#"><Image imgSrc={FurnitureOffer}/></a>
                          </div>
                       
                      </div>
                    </Flex>
                  </Container>
                </div>
                {/* Sale part end */}

                {/* Arrival part Start */}
                <div className="arrivalPart">
                 <Container>
                  <h1 className='font-dmSans font-bold text-[39px] pt-[130px]'>New Arrivals</h1>
                  <div className="product pt-8">
                    <Flex className={'gap-5'}>
                       <div className="product-1"><a href="#"><Image imgSrc={Product_1}/></a></div>
                       <div className="product-2"><a href="#"><Image imgSrc={Product_2}/></a></div>
                       <div className="product-3"><a href="#"><Image imgSrc={Product_3}/></a></div>
                       <div className="product-4"><a href="#"><Image imgSrc={Product_4}/></a></div>
                    </Flex>
                  </div>
                 </Container>
                </div>
                {/* Arrival part end */}
                {/* Bestsellers part Start */}
                <div className="BestsellersPart">
                 <Container>
                  <h1 className='font-dmSans font-bold text-[39px] pt-[130px]'>Our Bestsellers</h1>
                  <div className="product pt-8">
                    <Flex className={'gap-5'}>
                       <div className="product-5"><a href="#"><Image imgSrc={Product_5}/></a></div>
                       <div className="product-6"><a href="#"><Image imgSrc={Product_6}/></a></div>
                       <div className="product-7"><a href="#"><Image imgSrc={Product_7}/></a></div>
                       <div className="product-8"><a href="#"><Image imgSrc={Product_8}/></a></div>
                    </Flex>
                  </div>
                 </Container>
                </div>
                {/* Bestsellers part end */}
                {/* Adds part Start */}
                <div className="banner-2 py-[120px]">
                    <Container>
                      <Image imgSrc={Banner2}/>
                    </Container>
                </div>
                {/* Adds part end */}
                 {/* Offers part Start */}
                 <div className="OffersPart pb-[130px]">
                 <Container>
                  <h1 className='font-dmSans font-bold text-[39px]'>Special Offers</h1>
                  <div className="product pt-8">
                    <Flex className={'gap-5'}>
                       <div className="product-5"><a href="#"><Image imgSrc={Cap}/></a></div>
                       <div className="product-6"><a href="#"><Image imgSrc={table}/></a></div>
                       <div className="product-7"><a href="#"><Image imgSrc={headPhone}/></a></div>
                       <div className="product-8"><a href="#"><Image imgSrc={sunGlass}/></a></div>
                    </Flex>
                  </div>
                 </Container>
                </div>
                {/* Offers part end */}
                {/* Footer part start */}
                <div className="FooterPart bg-[#F5F5F3] ">
                    <Container>
                      <Flex className={'gap-x-4'}>
                      <div className="w-[10%]">
                        <Flex>
                          <div className="menu">
                            <h1 className='font-dmSans font-bold text-base pt-14 pl-5'>MENU</h1>
                            <div className="menuText font-dmSans text-sm text-[#6D6D6D] py-[45px]">
                            <Menu menuName={'Home'}/>
                            <Menu menuName={'Shop'}/>
                            <Menu menuName={'About'}/>
                            <Menu menuName={'Contact'}/>
                            <Menu menuName={'Journal'}/>
                            </div>
                            <div className="socialIcons pb-5">
                              <Image imgSrc={Social_Icons}/>
                            </div>
                          </div>
                        </Flex>
                      </div>
                      <div className="shop">
                      <h1 className='font-dmSans font-bold text-base pt-14 pl-3'>SHOP</h1>
                            <div className="menuText font-dmSans text-sm text-[#6D6D6D] py-[45px]">
                            <Menu menuName={'Category 1'}/>
                            <Menu menuName={'Category 2'}/>
                            <Menu menuName={'Category 3'}/>
                            <Menu menuName={'Category 4'}/>
                            <Menu menuName={'Category 5'}/> 
                            </div>
                      </div>
                      <div className="help pl-24">
                      <h1 className='font-dmSans font-bold text-base pt-14 pl-5'>HELP</h1>
                            <div className="menuText font-dmSans text-sm text-[#6D6D6D] py-[45px]">
                            <Menu menuName={'Privacy Policy'}/>
                            <Menu menuName={'Terms & Conditions'}/>
                            <Menu menuName={'Special E-shop'}/>
                            <Menu menuName={'Shipping'}/>
                            <Menu menuName={'Secure Payments'}/> 
                            </div>
                      </div>
                      <div className="pl-[145px] pt-[60px]">
                        <h1 className='font-dmSans text-base pb-1 font-bold'>(052) 611-5711</h1>
                        <h1 className='font-dmSans text-base pb-1 font-bold'>company@domain.com</h1>
                        <h3 className='font-dmSans text-sm pt-3 text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</h3>
                      </div>
                      <div className="Orebi  font-dmSans pl-[120px]">
                        <h1 className='font-extrabold text-4xl pt-14 pb-[160px]  '>OREBI</h1>
                        <p className='font-dmSans text-[#6D6D6D] text-sm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                      </div>
                      </Flex>
                    </Container>
                </div>
                {/* Footer part end */}

    </>
  )
}

export default App

{/* <Flex>
<div className="menuText">
    <Menu menuName={''}/>
</div>
</Flex> */}