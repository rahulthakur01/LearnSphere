import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Course_Card from './Course_Card';

const CourseSlider = ({Courses})=>{
    return(
        <>
       {
        Courses?.length ? (
            <Swiper
            slidesPerView={1}
            spaceBetween={25}
            loop={true}
            modules={[ Pagination]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
            className="max-h-[30rem]"
          >
            {Courses?.map((course, i) => (
              <SwiperSlide key={i}>
                <Course_Card course={course} Height={"h-[250px]"} />
              </SwiperSlide>
            ))}
          </Swiper>
        ):(<div>No courses found</div>)
       }
        </>
    )
}
export default CourseSlider