
import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.png'
import img3 from '../../../assets/banner/3.jpg'
import img4 from '../../../assets/banner/8.jpg'
import img5 from '../../../assets/banner/4.jpg'
import img6 from '../../../assets/banner/7.jpg'
import img7 from '../../../assets/banner/9.jpg'
import img8 from '../../../assets/banner/10.jpg'
import img9 from '../../../assets/banner/11.jpg'
import img10 from '../../../assets/banner/12.jpg'
import img11 from '../../../assets/banner/b1.jpg'
import img12 from '../../../assets/banner/p6.jpg'
import Rating from 'react-rating'
import { FaRegStar,FaStar} from "react-icons/fa";
const FeaturedProducts = () => {
    return (
    <div className=" bg-base-100 shadow-xl">
     <div className="text-center mb-5">
        <h1 className="font-semibold"><i>Product Gallery</i></h1>
        <h2 className="text-yellow-600 text-5xl font-bold">Featured product</h2>
        <p className="my-5">Our Amazing Products</p>
     </div>
            <div className="carousel w-full">
                            
                            <div id="banner1" className="carousel-item relative w-full">
                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img1} alt="img1" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <div>
                                              
                                                <Rating
                                                  placeholderRating={4.5}
                                                  readonly
                                                  emptySymbol={<FaRegStar/>}
                                                  placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                  fullSymbol={<FaStar/>}
                                                >

                                                </Rating>
                                            </div>
                                            <h2 className="card-title">Toy No: 01</h2>
                                            <p><span className='text-yellow-600 font-bold'>$4.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img2} alt="img2" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={3}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No: 02</h2>
                                            <p><span className='text-yellow-600 font-bold'>$14.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img3} alt="img3" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No :03</h2>
                                            <p><span className='text-yellow-600 font-bold'>$10.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#banner4" className="btn btn-circle">❮</a>
                                    <a href="#banner2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                
                
                
                
                
                
                            <div id="banner2" className="carousel-item relative w-full">
                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img4} alt="img4" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={4.5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No: 04</h2>
                                            <p><span className='text-yellow-600 font-bold'>$7.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img5} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No:05</h2>
                                            <p><span className='text-yellow-600 font-bold'>$8.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img6} alt="img6" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No : 06</h2>
                                            <p><span className='text-yellow-600 font-bold'>$11.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#banner1" className="btn btn-circle">❮</a>
                                    <a href="#banner3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                
                
                
                            <div id="banner3" className="carousel-item relative w-full">
                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img7} alt="img7" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={2.5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No : 07</h2>
                                            <p><span className='text-yellow-600 font-bold'>$6.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img8} alt="img8" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={2.5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No : 08</h2>
                                            <p><span className='text-yellow-600 font-bold'>$13.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img9} alt="img9" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={3.5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No :09</h2>
                                            <p><span className='text-yellow-600 font-bold'>$15.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                
                
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#banner2" className="btn btn-circle">❮</a>
                                    <a href="#banner4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="banner4" className="carousel-item relative w-full">
                
                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img10} alt="img10" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={4.5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No : 10</h2>
                                            <p><span className='text-yellow-600 font-bold'>$5.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img11} alt="img11" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={4.5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No: 11</h2>
                                            <p><span className='text-yellow-600 font-bold'>$8.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={img12} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                        <div>
                                              
                                              <Rating
                                                placeholderRating={3.5}
                                                readonly
                                                emptySymbol={<FaRegStar/>}
                                                placeholderSymbol={<FaStar className='text-yellow-600'/>}
                                                fullSymbol={<FaStar/>}
                                              >

                                              </Rating>
                                          </div>
                                            <h2 className="card-title">Toy No:12</h2>
                                            <p><span className='text-yellow-600 font-bold'>$14.00</span></p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#banner3" className="btn btn-circle">❮</a>
                                    <a href="#banner1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
    </div>
    );
};

export default FeaturedProducts;