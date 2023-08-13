import Preloader from '@/components/homes/Preloader'
import AboutTwo from '@/components/homes/about/AboutTwo'
import HeaderTwo from '@/components/homes/headers/HeaderTwo'
import PersonalInfoTwo from '@/components/homes/personalInfo/PersonalInfoTwo'
import React from 'react'
export const metadata = {
title: 'Vu Quang Nguyen',
  description: `Hi, I'm Vu Quang. I'm a Web Developer in Hanoi. I enjoy building website with elegant, performant, and maintainable frontend code`
}
export default function page() {
  return (<><Preloader/>
  <div className="page-wrapper page-wrapper-2"  style={{backgroundImage:'url(/assets/img/bg/page-bg-1.jpg)'}} >
      
        <HeaderTwo/>
        <div className="bostami-page-area z-index-3">
            <div className="container">

                <AboutTwo/>

            </div>

            </div>
        </div>
  
  </>
    
  )
}
