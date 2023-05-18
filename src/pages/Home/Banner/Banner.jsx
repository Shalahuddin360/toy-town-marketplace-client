import img1 from '../../../assets/slider/12.jpg';
import img2 from '../../../assets/slider/13.jpg';
import img3 from '../../../assets/slider/14.jpg';
import img4 from '../../../assets/slider/s8.jpg';
import img5 from '../../../assets/slider/s9.jpg';
import img6 from '../../../assets/slider/s6.jpg';
const Banner = () => {
    return (
        <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='text-6xl text-white font-bold'>Affordable Price for Car Servicing </h2>
              <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-4">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='text-6xl text-white font-bold'>Affordable Price for Car Servicing </h2>
              <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-4">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='text-6xl text-white font-bold'>Affordable Price for Car Servicing </h2>
              <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-4">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='text-6xl text-white font-bold'>Affordable Price for Car Servicing </h2>
              <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-4">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='text-6xl text-white font-bold'>Affordable Price for Car Servicing </h2>
              <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full rounded-xl left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='space-y-7 w-1/2 pl-12'>
              <h2 className='text-6xl text-white font-bold'>Affordable Price for Car Servicing </h2>
              <p>They are many variations  of passage of available but the majority have suffered alteration in some  </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-4">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;