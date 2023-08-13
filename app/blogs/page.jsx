






import Preloader from '@/components/homes/Preloader'
import BlogsThree from '@/components/homes/blogs/BlogsThree'
import HeaderFour from '@/components/homes/headers/HeaderFour'
import HeaderThree from '@/components/homes/headers/HeaderThree'
import PersonalInfoThree from '@/components/homes/personalInfo/PersonalInfoThree'
export const metadata = {
  title: 'Vu Quang Nguyen',
    description: `Hi, I'm Vu Quang. I'm a Web Developer in Hanoi. I enjoy building website with elegant, performant, and maintainable frontend code`
  }
import React from 'react'

export default function page() {
  return (
    <><Preloader/>
   <div className="page-wrapper home-3"  >
        
        <HeaderFour/>
        <div className="container z-index-3">
            <div className="row">

                <PersonalInfoThree/>
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <HeaderThree/>
                    <BlogsThree/>
                </div>


            </div>
            </div>
        </div>
  
  </>
   
  )
}
