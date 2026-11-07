import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Information from './Information';
import Projects from './Projects';
import Etc from './Etc';

export default function Home() {
  const menus = ['Information', 'Projects'];
  const [selectedMenu, setSelectedMenu] = useState('Information');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  }

  const renderContent = {Information: <Information/>, Projects:<Projects/>}

  return (
    <div className={styles.container}>
      <Head>
        <title>공예지 | Backend Engineer</title>
        <meta name="description" content="공예지의 백엔드 개발 포트폴리오. 검사 플랫폼, 파일 파서, 데이터 처리 시스템을 개발합니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <button className={styles.mainTitle} onClick={()=>handleMenuClick('Information')}>
          Yeji Gong
        </button>
        <div className={styles.menus}>
          {menus.map((menu, index) => (
            <button key={index} className={selectedMenu === menu ? styles.activeMenu : ''} onClick={() => handleMenuClick(menu)}>
              {menu}
            </button>
          ))}
        </div>
      </div>
      <hr width="100%"/>
      <div className={styles.contents}>
        {selectedMenu && (
          <div>
              {selectedMenu && renderContent[selectedMenu]}
          </div>
        )}
      </div>
    </div>
  )
}
