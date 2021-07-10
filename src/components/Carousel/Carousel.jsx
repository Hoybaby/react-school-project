import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousel.css'

class Slides extends React.Component {

    render() {
        
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 h-50"
                            src="https://news.wisc.edu/content/uploads/2018/11/Aerial_Madison18_0102-1-1.jpg"
                            alt="First slide, Ariel View"
                        />
                        <Carousel.Caption>
                            <h3 className='slide-color'>Ariel View of the campus  </h3>
                            {/* <p className='slide-color'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 h-50"
                            src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_41/2186311/171011-university-of-wisconsin-madison-2-ew-503p.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className='slide-color'>Second slide label</h3>
                            {/* <p className='slide-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src="https://chancellor.wisc.edu/content/uploads/2018/08/Bucky_Parade_unveil18_7137.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='slide-color'>The Wisonsin Bucky Badger</h3>
                            {/* <p className='slide-color'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
            </div>
        )
    }

}

export default Slides;
