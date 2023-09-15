import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//import Image from 'next/image' //외부이미지 링크 문제

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    // const styles = {
    //     div : {
    //         width : '300px',
    //         width : '200px',
    //         background : '#5f9ea0',
    //     }
    // }

    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src="https://img5.yna.co.kr/etc/inner/KR/2023/07/13/AKR20230713144200530_01_i_P4.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">경향신문</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">어린이집·유치원 대기 인원 한눈에…통합정보 홈페이지 개편</h1>
            <p className="leading-relaxed mb-3">교육부 유보통합추진단은 인근 읍면동에 있는 어린이집과 유치원의 입소 대기·추가 모집 인원 등의 ...</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              href="https://www.yna.co.kr/view/AKR20230713144200530" target="_blank">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src="https://newsimg-hams.hankookilbo.com/2023/07/14/32655b94-f486-49d7-bae1-f5d6dd8fd55a.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">한국일보</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">어린이집 대기·유치원 추가 모집 정보 한곳에 모았다</h1>
            <p className="leading-relaxed mb-3">교육부는 14일 어린이집·유치원 통합정보 사이트(childinfo.go.kr)를 개편해 이 같은 정보를 추가 ...</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              href="https://www.hankookilbo.com/News/Read/A2023071410280004911" target="_blank">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src="https://image.fnnews.com/resource/media/image/2023/07/14/202307140601426640_l.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">파이낸셜뉴스</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">유치원·어린이집 결원 정보 한눈에…통합사이트서 매달 공개</h1>
            <p className="leading-relaxed mb-3">14일 교육부에 따르면 영유아교육·보육통합추진단(유보통합추진단)은 2025년 유보통합 시행을 앞두고 ...</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" 
              href="https://www.fnnews.com/news/202307140601470378" target="_balnk">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src="https://www.yeongnam.com/mnt/file/202307/20230714010001789_1.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">영남일보</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">유치원 어린이집 통합 가시화… 영유아교육·보육통합</h1>
            <p className="leading-relaxed mb-3">교육부·보건복지부·대한민국시도지사협의회·전국시도교육감협의회 공동 선언, 20년 넘게 이어져온 숙제 ...</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" 
              href="https://www.yeongnam.com/web/view.php?key=20230714010001789" target="_balnk">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
          src="https://cdn.newsfreezone.co.kr/news/photo/202307/483229_461901_2036.jpeg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">뉴스프리존</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">대전 동구, 유치원 대상 ‘찾아가는 환경 인형극’ 눈길</h1>
            <p className="leading-relaxed mb-3">대전 동구는 7월부터 11월까지 지역 내 유치원을 직접 방문해 어린이의 눈높이에 맞는 환경교육을 ...</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" 
              href="https://www.newsfreezone.co.kr/news/articleView.html?idxno=483229" target="_balnk">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      
        </Slider>
      </div>
    );
  }
}