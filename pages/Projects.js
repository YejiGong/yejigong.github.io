import React, {useState, useEffect} from 'react';
import styles from '../styles/Project.module.css';

import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { IoDocumentText,IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";


const projectsData=[
    {name:'개인 포트폴리오', image:'', team:'개인', type:'Web', part:'', belong:'',status:'ing', projectDescription:'', contribution:'', date:'2024.02 - 현재', skills:['Next.js'],
    github:'', blog:'', document:'', store:'',link:'https://yejigong.github.io', 
    description:'Next.js를 기반으로 하여 <strong>개인 포트폴리오 사이트</strong>를 제작하였습니다. <br/>Information, Projects로 메뉴를 구분하여 개인 이력 및 소개와 프로젝트를 구분하여 확인할 수 있도록 하였습니다.'+
    '<p/>Information 페이지에서 react useEffect를 활용하여 스크롤에 따라 글자가 나오는 이벤트를 구현하였습니다. 또한 Projects 메뉴에서는 프로젝트 성격에 따라 구분하여 확인할 수 있도록 useState를 활용한 필터링 기능을 구현하였습니다.'+
    '<br/>업데이트가 잦은 만큼 편리하게 배포하기 위하여 GitHub Actions를 활용하여 자동 배포할 수 있도록 설정하였습니다.'+
    '<p/>이후 포스팅 기능 등을 추가할 예정입니다.'},

    {name:'bash-plus', image:'', team:'팀', type:'Web', part:'Backend', belong:'',status:'ing', projectDescription:'- 팀 프로젝트(5인)', contribution:'', date:'2024.02 - 현재', skills:['Spring Boot','Kotlin', 'PostgreSQL', 'Docker','k8s'],
    github:'https://github.com/ss-sum/bash-plus-server', blog:'', document:'', store:'',link:'', 
    description:'개발자 컨퍼런스 영상을 모아서 볼 수 있는 서비스 <strong>bash-plus의 백엔드 개발</strong>을 진행하고 있습니다.'},

    {name:'movie project', image:'', team:'팀', type:'Web', part:'Frontend, Backend', belong:'중앙대학교 소프트웨어학부 동아리 DevLabs',status:'ing', projectDescription:'- 팀 프로젝트(2인)', contribution:'', date:'2024.01 - 현재', skills:['Spring Boot','Java', 'MySQL', 'AWS','Python'],
    github:'https://github.com/DevLabs-MP/server', blog:'', document:'', store:'', link:'',
    description:'문화컨텐츠 정보 및 오프라인 행사 정보를 모아볼 수 있는 서비스 <strong>movie project<span style="font-size:12px; font-weight:normal">(가제)</span>의 개발</strong>을 진행하고 있습니다.'},

    {name:'우아한테크코스 프리코스', image:'', team:'개인', type:'Etc', part:'', belong:'우아한테크코스',status:'done', projectDescription:'', contribution:'', date:'2023.10 - 2023.11', skills:['Java'],
    github:'https://github.com/YejiGong/woowacourse-pre', blog:'https://velog.io/@ydppwljg/series/%EC%9A%B0%ED%85%8C%EC%BD%94-%ED%94%84%EB%A6%AC%EC%BD%94%EC%8A%A4', document:'', store:'', link:'',
    description:'2023 우아한테크코스 프리코스에 참여하여 4주간 과제 구현을 진행하였습니다.<br/>객체 지향을 준수하는 코드를 작성하기 위해 노력했습니다. 또한 커뮤니티 내 코드 리뷰 활동을 통해 스스로의 코드를 되돌아보고, 다른 분들에게서 코드 리뷰를 받을 수 있었던 뜻깊은 경험이었습니다.'+
    '<p/>TDD를 적용해보면서 테스트 코드를 적극적으로 활용하였고, enum과 stream 등을 활용하면서 Java에 대한 이해도를 높일 수 있었습니다.'},

    {name:'DeepPose', image:'', team:'팀', type:'Etc', part:'Open Source Upgrade', belong:'중앙대학교 - 컴퓨터비전',status:'done', projectDescription:'- 팀 프로젝트(3인)', contribution:'(오픈소스 업그레이드 기여도 80%)', date:'2023.05 - 2023.06', skills:[],
    github:'https://github.com/CAU-2023-CV/deeppose', blog:'https://velog.io/@ydppwljg/%EB%94%A5%EB%9F%AC%EB%8B%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0', document:'https://drive.google.com/file/d/1iAvr6f-DulB6HZmBon7OLZa35m3LcOdw/view?usp=sharing', store:'', link:'',
    description:'Skeleton Detection을 연구한 논문 중 하나인 <DeepPose: Human Pose Estimation via Deep Neural Networks>을 기반으로 직접 해당 논문을 구현해보는 프로젝트를 진행하였습니다.<br/>'+
    'GitHub에 공개되어있는 오픈소스를 활용하고자 하였으나, 업데이트가 멈춘 상태였으며 버전 문제로 인해 실행이 되지 않았습니다. 따라서 <strong>해당 오픈소스를 현재 실행 가능한 버전으로 업그레이드</strong>하는 과정을 담당하였습니다.'+
    '결과적으로 기존 Python 3.5.1, Chainer 1.13.0 버전을 기반으로 한 코드를 Python 3.7.5, Chainer.7.8.0버전을 기반으로 실행가능하도록 업그레이드하였습니다.<p/>'+
    '이후 GPU를 사용하여 학습하였으나 CPU와 학습속도에 차이가 없는 문제가 발생하였습니다. 코드상에서 Thread를 활용하지 않는 것을 발견하고 적절한 Thread 개수를 설정하여 학습 속도를 약 3.78배 개선하였습니다.<br/>'+
    '학습을 마친 후 결과 이미지를 생성하는 부분에서 코드 자체의 버그를 발견하였습니다. 오픈소스 컨트리뷰션 과정에서 수정되지 않은 부분이 있는 것으로 보여, 커밋 내역을 추적하여 필요한 파일을 복구하는 과정을 통해 해결하였습니다.'+
    '<p/>오픈소스를 막연히 사용하는 것이 아닌, 버전에 맞게 직접 수정하여 사용한 뜻깊은 경험이었습니다. 또한 이 과정에서 타인의 코드를 어떻게 이해하고 분석해야할지에 대해서도 배울 수 있었습니다.'},

    {name:'소규모 DBMS 구현', image:'', team:'개인', type:'Etc', part:'',belong:'중앙대학교 - 데이타베이스시스템', status:'done', projectDescription:'', contribution:'', date:'2023.05', skills:['Java','MySQL'],
    github:'https://github.com/YejiGong/DBS_BitmapIndexDBMS', blog:'', document:'https://drive.google.com/file/d/1iOHzPx0dWEYnZ3WCQqXUXVYyaNlvomej/view?usp=drive_link', store:'',link:'', 
    description:'Bitmap Index를 지원하는 <strong>DBMS를 소규모로 구현</strong>하였습니다.<br/>'+
    'File I/O를 기반으로 직접 DBMS의 내부 시스템을 소규모로 구현해 보는 프로젝트로, 테이블 생성, 레코드 삽입, bitmap index 생성, 그를 활용한 multiple-key 질의처리, 집계함수 처리를 구현했습니다.<p/>'+
    '콘솔 창 입, 출력을 위해 View단을 내부 로직과 분리해 준 후, 내부는 실제 DBMS 내부 구조를 참고하여 Query Processor, Storage Manager으로 나누어 구현했습니다. <br/> 데이터 파일을 버퍼를 통해 블록 단위로 읽어오고, 레코드 단위로 나눈 후 레코드의 저장만 실제 DBMS 내부에 합니다. 이후 인덱스 생성을 위한 컬럼이 지정되면 DBMS에서 레코드값을 버퍼로 불러와 value에 따른 bitmap index 결과 값을 파일로 생성하도록 했습니다.<br/>이후 사용자가 질의문을 입력하면, 생성된 bitmap index파일을 활용해 결과 값 레코드 id값을 찾아내도록 했습니다. 그리고 해당 레코드의 데이터값을 DBMS에서 받아서 결과물 파일을 생성 및 출력하도록 했습니다.'+
    '<p/>해당 프로젝트를 통해 직접 DBMS 내부를 소규모로 구현해 보면서, 시스템이 어떻게 동작하는지에 대한 이해도를 높일 수 있었습니다.'},

    {name:'봐글봐글💫', image:'https://avatars.githubusercontent.com/u/124888501?s=200&v=4', team:'팀', type:'App', part:'Backend',belong:'중앙대학교 - 캡스톤디자인(2)', status:'done', projectDescription:'- 팀 프로젝트(3인)', contribution:'(백엔드 기여도 100%)', date:'2023.03 - 2023.06', skills:['Spring Boot','Java', 'MySQL', 'AWS','Python'],
    github:'https://github.com/readubble/server', blog:'https://velog.io/@ydppwljg/%EC%BA%A1%EC%8A%A4%ED%86%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0', document:'', store:'', link:'',
    description:'문해력 학습을 위한 교육용 앱 <strong><봐글봐글>의 백엔드 개발</strong>을 담당하였습니다. <p/>'+
    '백엔드 구성원 2인 중 API 개발을 담당하여 어휘퀴즈, 문제 풀이 등의 기능을 포함한 <span className={styles.highlight}>20여개의 API를 구현</span>하였으며, AWS EC2를 활용하여 인프라 환경을 구축하였습니다.<br/>'+
    'GitHub Actions를 활용한 배포 자동화를 적용하였으며, 버그 검증을 위하여 테스트 코드를 도입하였습니다.'+
    '<p/>git commit message convention, branch 관리 전략 등을 주도적으로 도입하여 협업을 용이하게 하였습니다.'+
    '또한 개발 과정 중 오류가 발생했을 때, 파트를 구분하지 않고 모두 함께 해결 방법을 고민하면서 문제를 해결하였습니다.'+
    '예로 클라이언트에서 시선 추적 기능 개발 중 실시간으로 데이터가 끊임없이 유입되어 저장하는 과정에 성능 문제가 존재하였습니다.'+
    '이 문제를 함께 고민하여 데이터에 일종의 양자화를 적용하는 방법을 떠올렸고, 성능 문제를 해결할 수 있었습니다.<p/>'+
    '초기에는 앱에 필요한 문제를 팀원들과 함께 직접 제작하였습니다. 하지만 해당 과정이 비효율적이라는 피드백을 받은 후, ChatGPT API를 활용하여 문제를 자동으로 생성하고 DB에 저장하는 Python 프로그램을 추가적으로 개발하여 문제 생성과정을 효율화하였습니다.<p/><p/>'+
    '학기 종료 후 해당 프로젝트를 진행한 <캡스톤 디자인(2)>과목에서 <strong>우수한 성적 (팀원 전원 A+)</strong>을 받았으며, 2023 캡스톤 경진대회 <strong>공학부문 본선 진출</strong>(소프트웨어학부 유일) 및 2023 CAU 공학학술제 <strong>소프트웨어대학장상</strong>을 수상하였습니다.<p/>'+
    '또한 팀원들과 함께 클린코드 스터디를 진행하면서 추가적으로 해당 프로젝트의 <span className={styles.highlight}>리팩토링 작업</span>을 진행하였습니다. 변수 및 메소드명, 다중 책임을 갖고 있는 메소드의 분리 등을 통해 비교적 가독성이 높고 객체지향의 원칙을 따르는 코드로 개선하였습니다.'},

    {name:'멀티코어컴퓨팅 과제', image:'', team:'개인', type:'Etc', part:'', belong:'중앙대학교 - 멀티코어컴퓨팅',status:'done', projectDescription:'', contribution:'', date:'2023.03 - 2023.06', skills:['Java', 'C', 'C++', 'Cuda'],
    github:'https://github.com/YejiGong/MCC', blog:'', document:'', store:'', link:'',
    description:'다중 스레드를 사용하였을 때 <strong>동시성 문제를 해결</strong>하는 과제를 구현하였습니다.<br/>'+
    '소수 찾기 문제, 행렬 계산 문제, garage parking problem 등을 해결하였습니다. 특히 garage parking problem을 해결하는 코드를 구현하면서 BlockingQueue, ReadWriteLock, AtomicInteger과 같은 Java의 concurrent 패키지 내 자료형을 접하고 사용하였습니다.<p/>'+
    '해당 과목을 수강하고 또한 과제를 구현하면서 동시성 문제에 대해 이해하고, 코드로 이러한 문제를 해결하는 방법에 대해 배울 수 있었습니다.'},

    {name:'커넥터즈💫', image:'', team:'팀', type:'App', part:'Backend', belong:'커넥팅로드',status:'done', projectDescription:'- 팀 프로젝트(4인)', contribution:'(백엔드 기여도 100%)', date:'2022.09 - 2022.12', skills:['Spring Boot','Java', 'MongoDB', 'AWS'],
    github:'', blog:'https://velog.io/@ydppwljg/%EC%9D%B8%ED%84%B4-%ED%9A%8C%EA%B3%A0', document:'', store:'',link:'', 
    description:'맞춤형 자기 성장을 위한 이커머스 플랫폼 <strong><커넥터즈> 베타테스트 앱의 백엔드 개발</strong>을 담당하였습니다. <p/>'+
    '전문가별 개인 홈, 포스팅, QnA, 예약, 결제, 리뷰 등의 다양한 기능을 포함한 <span className={styles.highlight}>50여개의 API를 구현</span>하였으며, AWS EC2를 활용하여 인프라 환경을 구축하였습니다.'+
    '특히 예약 기능을 구현하면서 동시성 문제를 접하여 고민했고, Lock을 활용하여 해당 기능을 구현하였습니다. 또한 기획의 변동에 대응하기 위한 확장성 있는 설계의 필요성을 느꼈고, 이후 현재까지도 이를 중요하게 생각하며 개발하고 있습니다.<br/>'+
    '<br/>개발 과정 효율화를 위해 GitHub Actions를 활용한 배포 자동화를 적용하였습니다. 또한 1차 QA 진행 중 로그 적재의 필요성을 느껴 DataDog을 활용한 로그 수집을 적용하였습니다. 이를 통해 이후 QA 과정을 효율적으로 진행할 수 있었습니다.'+
    '<p/>사내의 첫 개발자로서 API 명세서 문서 양식, git commit message convention, branch 관리 전략, 테스트 코드 등을 도입하여 개발 시스템의 기반을 구축하였습니다.'+
    '개발 업무 이외에도 기획, 베타테스트 운영 준비 과정 등에도 적극적으로 참여하며 기여하였습니다. <p/><p/>'+
    '4개월간 초기 스타트업의 <span className={styles.highlight}>기획 고도화부터 QA까지의 전 과정을 경험</span>하였으며, 이 과정에서 다양한 업무를 수행하면서 인턴 기간 종료 후 <strong>우수 평가 (98/100)</strong>를 받을 수 있었습니다.<p/>'},

    {name:'클래스차차💫', image:'https://avatars.githubusercontent.com/u/110675353?s=200&v=4', team:'팀', type:'App', part:'Backend', belong:'DX Sprint - 2주 앱개발 해커톤',status:'done', projectDescription:'- 팀 프로젝트(4인)', contribution:'(백엔드 기여도 100%)', date:'2022.08', skills:['Flask','Python'],
    github:'https://github.com/moeumi/backend', blog:'https://velog.io/@ydppwljg/%EC%95%B1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0', document:'', store:'', link:'',
    description:'부산광역시 문화 강의를 통합하여 보여주는 서비스 앱 <strong><클래스차차>의 데이터 수집 및 백엔드 개발</strong>을 담당하였습니다. <p/>'+
    '당시 문화 강의 정보는 여러 사이트에 분산되어 있었는데, MVP 개발을 위하여 가장 데이터가 많은 사이트 2곳을 선정하였습니다. 해당 사이트들을 스크래핑하여 수집한 데이터를 전처리 후 DB에 적재하는 Python 프로그램을 개발하였습니다.<p/>'+
    '이후 <span className={styles.highlight}>10여개의 API를 구현</span>하여 백엔드 개발을 진행하였으며, ZAPPA를 활용하여 AWS Lambda로 배포하여 인프라 환경을 구축하였습니다.'+
    '해당 프로젝트를 진행한 프레임워크인 Flask는 당시에 처음 접하였으나, <i>빠르게 학습하여 기한 내에 성공적으로 개발을 완료</i>하였습니다.<br/>'+
    '<p/>백엔드 개발 완료 이후에도 추가로 클라이언트 개발을 도우며 적극적으로 프로젝트에 참여하였습니다.'+
    '<p/>프로젝트 종료 후 플레이스토어에 출시<span style="font-size:12px">(현재는 서버 중단으로 인해 이용 불가)</span>까지 진행하여 2주간 <span className={styles.highlight}>MVP 기획부터 출시까지의 전 과정을 경험</span>하였으며, 해당 프로젝트를 진행한 <DX Sprint - 2주 앱개발 해커톤>에서 <strong>대상</strong>을 수상하였습니다.<p/>'},

    {name:'칭찬일기', image:'/image/compliment.png', team:'개인', type:'Web', part:'', belong:'',status:'done', projectDescription:'', contribution:'', date:'2022.07', skills:['React', 'express.js', 'mongoDB','JavaScript','Docker', 'AWS'],
    github:'https://github.com/YejiGong/ComplimentDiary', blog:'https://velog.io/@ydppwljg/%EC%B9%AD%EC%B0%AC%EC%9D%BC%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0', document:'', store:'', link:'https://compliment-diary.vercel.app/',
    description:'스스로를 칭찬하는 일기장 서비스 <strong>칭찬일기</strong>를 개발하였습니다.<p/>'+
    '처음 백엔드 공부를 시작하면서 진행한 프로젝트로, 로그인,로그아웃,회원가입과 일기 쓰기 및 조회 기능을 개발했습니다. 로그인 여부 확인을 통한 사용자 인증 기능을 통해 로그인한 사용자와 로그인하지 않은 사용자의 메인 페이지를 분리하고, 메뉴 페이지에는 로그인한 사용자만 접근할 수 있도록 하였습니다.<br/>'+
    'docker, docker-compose를 사용하여 배포하면서 이를 실습해볼 수 있었으며, nginx를 사용하여 리버스 프록시 개념을 이해할 수 있었습니다.'+
    '<p/>해당 프로젝트를 진행하면서 웹 사이트 개발의 전과정을 실습해보고 이해할 수 있었습니다.'},

    {name:'Bridge Game', image:'', team:'개인', type:'Etc', part:'', belong:'중앙대학교 - 소프트웨어공학',status:'done', projectDescription:'', contribution:'', date:'2022.06', skills:['Java'],
    github:'https://github.com/YejiGong/SE_BridgeGame', blog:'', document:'https://drive.google.com/file/d/1ztre8Nsx_SAjv2beNWI_5S_gZQKvYWvP/view?usp=sharing', store:'', link:'',
    description:'2~4명의 사용자를 산정한 소규모 Bridge 보드 게임을 <strong>OOAD 기법을 사용하여 개발</strong>하는 과제를 구현하였습니다.<p/>'+
    'usecase diagram, usecase 명세, domain model, SSD, Operatin Contract의 작성을 통해 요구 정의 과정을 거쳤습니다. 이후 Sequence Diagram, Design Class Diagram을 작성하여 설계를 완료한 후 코드를 작성하였습니다.<br/>'+
    '객체지향의 원칙을 준수하기 위하여 게임 로직과 UI를 분리하여 구현하였으며, SRP를 기준으로 각 클래스를 나누기위해 노력했습니다.<p/>'+
    '설계부터 구현까지 소프트웨어 개발의 전 과정을 경험해볼 수 있었습니다.'},

    {name:'Pintos 실습', image:'', team:'개인', type:'Etc', part:'', belong:'중앙대학교 - 운영체제',status:'done', projectDescription:'', contribution:'', date:'2022.05 - 2022.06', skills:['C'],
    github:'https://github.com/YejiGong/OS', blog:'', document:'', store:'', link:'',
    description:'Pintos를 활용해서 <strong>교차로 문제, Buddy System, MFQ 스케줄러</strong>를 구현하는 과제를 수행하였습니다.'+
    '<p/>운영체제 내부의 구조와 로직에 대한 이해를 높일 수 있었으며, DeadLock 개념에 대해 이해할 수 있었습니다.'},

    {name:'Snake Game', image:'https://github.com/CAU-2022-OSS/snake-game/raw/main/static/image/logo.png', team:'팀', type:'Etc', part:'Logic dev', belong:'중앙대학교 - 오픈소스SW프로젝트',status:'done', projectDescription:'- 팀 프로젝트(3인)', contribution:'(로직 구현 기여도 50%)', date:'2022.04 - 2022.05', skills:['Python'],
    github:'https://github.com/CAU-2022-OSS/snake-game', blog:'', document:'', store:'', link:'',
    description:'pygame을 기반으로 <strong>GUI 게임</strong>을 구현하였습니다.'+
    '<p/>각 게임 모드를 바탕으로 게임을 수행한 데이터를 저장하고 랭킹을 기록하는 로직을 구현하였습니다.<br/>'+
    '같은 강의를 수강하는 학우들에게 issue를 통해 버그를 제보받고, 버그 수정 혹은 기능을 추가한 PR을 받아 프로젝트를 개선하였습니다. 이를 통해 오픈소스 프로젝트 운영 방식을 경험해볼 수 있었습니다. 또한 git과 GitHub 사용 방식을 익힐 수 있었습니다.'},

    {name:'DB 설계 실습', image:'', team:'개인', type:'Etc', part:'', belong:'중앙대학교 - 데이타베이스 설계',status:'done', projectDescription:'', contribution:'', date:'2021.12', skills:['Java'],
    github:'https://github.com/YejiGong/DB_ex', blog:'', document:'', store:'', link:'',
    description:'ERD 다이어그램, RDB 테이블 스키마 다이어 그램 설계와 이를 바탕으로 한 <strong>MySQL 테이블 생성 및 쿼리 실습</strong>을 진행하였습니다.<p/>'+
    '음악 스트리밍 사이트를 주제로 하여 스키마를 설계하였습니다. 이 과정에서 테이블 설계 및 정규화에 대한 이해도를 높일 수 있었으며, 직접 다양한 쿼리를 짜보면서 SQL 쿼리 문법에 대해 이해할 수 있었습니다.'},

    {name:'객체지향 계산기', image:'', team:'개인', type:'Etc', part:'', belong:'중앙대학교 - 프로그래밍언어론',status:'done', projectDescription:'', contribution:'', date:'2021.11', skills:['Go'],
    github:'https://github.com/YejiGong/PL_OOP_Calculator', blog:'', document:'', store:'', link:'',
    description:'자료형을 추가해서 실행할 수 있는 <strong>객체 지향 계산기</strong>를 구현하였습니다.<p/>'+
    '기존 코드는 정수, 소수를 지원하나 사용자가 자료형을 추가하여서 프로그램을 실행한다면 해당 자료형으로 계산을 할 수 있도록 하였습니다.<br/>'+
    '확장성 있는 코드란 무엇인지에 대해 고민해볼 수 있었고, 특히 다형성의 개념에 대해 이해할 수 있었습니다.'},

    {name:'술짠', image:'/image/unidthon.png', team:'팀', type:'Web', part:'Frontend', belong:'2021 UNI-DTHON',status:'done', projectDescription:'- 팀 프로젝트(5인)', contribution:'(프론트엔드 기여도 20%)', date:'2021.11', skills:['React', 'Next.js', 'JavaScript'],
    github:'', blog:'', document:'', store:'', link:'',
    description:'대학생들의 안전한 음주문화를 위해 스스로의 음주 습관을 체크하고, 만취 여부를 테스트해볼 수 있도록 하는 서비스 <strong><술짠>의 프론트엔드 개발</strong>에 참여하였습니다.<p/>'+
    '상세 페이지 3개를 구현하였습니다. 만취 확인 테스트 중 받아쓰기 테스트 페이지, 질의응답 페이지, 그리고 설정 페이지를 구현하였습니다.<p/> 당시 React를 처음 접해보았으나 빠르게 학습하여 맡은 페이지들을 구현할 수 있었습니다.'},

    {name:'UAV Ground Scanning System: Human Detection with Deep Learning', image:'', team:'팀', type:'Etc', part:'Machine Learning', belong:'K-SW Sqaure Purdue University',status:'done', projectDescription:'- 팀 프로젝트(지도교수 포함 8인)', contribution:'(머신러닝 기여도 20%)', date:'2021.07 - 2021.11', skills:['Python'],
    github:'https://github.com/AllisonShen/UAV', blog:'', document:'', store:'', link:'',
    description:'UAV를 비롯한 상공에서 찍은 사진에서 사람을 식별하는 <strong>Human Detection Deep with Learning</strong> 연구에 참여하였습니다. <p/>'+
    '라벨링된 데이터를 기반으로 여러 딥러닝 모델(YOLOX, EfficientDet)로 학습을 시킨 후 파라미터 값에 따라 결과를 정리하는 작업을 수행하였습니다.<br/>'+
    '해당 프로젝트를 통해 딥러닝 학습 과정을 경험해볼 수 있었습니다. 또한 해외 대학 현지학생 및 지도교수와 영어로 소통하면서 국제적인 환경에서의 학문적 경험을 쌓을 수 있었습니다.'},

];
const Projects = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const handleTeamClick = (team) => {
        setSelectedTeam((prevSelectedTeam) => (prevSelectedTeam === team ? null : team));
    }
    const [selectedType, setSelectedType] = useState(null);
    const handleTypeClick = (type) => {
        setSelectedType((prevSelectedType) => (prevSelectedType === type ? null : type));
    }
    const [selectedStatus, setSelectedStatus] = useState(null);
    const handleStatusClick = (status) => {
        setSelectedStatus((prevSelectedStatus) => (prevSelectedStatus === status ? null : status));
    }

    const [selectedSkills, setSelectedSkills] = useState([]);
    const handleSkillsClick = (skill) => {
        setSelectedSkills((prevSelectedSkills) => {
            // 토글 형태로 기존 선택된 기술이 이미 있으면 제거, 없으면 추가
            if (prevSelectedSkills.includes(skill)) {
              return prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill);
            } else {
              return [...prevSelectedSkills, skill];
            }
          });
    }
    const filteredProjects = projectsData.filter((project) => {
        const teamCondition = !selectedTeam || project.team === selectedTeam;
        const typeCondition = !selectedType || project.type === selectedType;
        const teamStatus = !selectedStatus || project.status === selectedStatus;
        const skillCondition = selectedSkills.length === 0 || selectedSkills.every(skill => project.skills.includes(skill));
      
        return teamCondition && typeCondition && teamStatus && skillCondition;
      });

      const [topValue, setTopValue] = useState(100); // 초기 top 값

      const handleScroll = () => {
        const scrollTop = Math.max(200,window.scrollY);
        // 스크롤 위치에 따라 top 값을 업데이트
        setTopValue(scrollTop-100);
      };
    
      useEffect(() => {
        // 컴포넌트가 마운트될 때와 스크롤 이벤트 등록
        window.addEventListener('scroll', handleScroll);
        return () => {
          // 컴포넌트가 언마운트될 때 이벤트 제거
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되도록 함
    
    return(
        <div className={styles.container}>
            <i style={{fontSize:"12px", textAlign:"center"}}>*진행한 모든 프로젝트를 선별 없이 아카이빙하였습니다.<br/>단, 제목에 💫표시가 되어있는 것은 Information 페이지에 수록되어있는 <strong>메인 프로젝트</strong>입니다.<br/>(last update: 2024.02.23) </i>
            
                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}> 
                        <div style={{position:"relative", top:`${topValue}px`,}}>
                        <div style={{minWidth:"100px",  backgroundColor:"rgba(243,243,243,70)", borderRadius:"5px", padding:"20px 0px"}}>
                            <div style={{textAlign:"center"}}>
                                <span style={{fontSize:"15px"}}>🏷️ Filter</span>
                                <p/>
                            <div>
                                {['팀', '개인'].map((team) => (
                                    <button className={styles.category} key={team} onClick={()=>handleTeamClick(team)} style={{fontWeight:selectedTeam===team?'bold':'normal', backgroundColor:selectedTeam==team?'#b0e8ea':'#caebec'}}>{team}</button>
                                ))}
                            </div>
                            <hr width="80%" style={{border: "1px solid rgba(197 197 197,60)"}}/>
                            <div>
                                {['App', 'Web', 'Etc'].map((type) => (
                                    <button className={styles.category} key={type} onClick={()=>handleTypeClick(type)} style={{fontWeight:selectedType===type?'bold':'normal', backgroundColor:selectedType==type?'#b0e8ea':'#caebec'}}>{type}</button>
                                ))}
                            </div>
                            <hr width="80%" style={{border: "1px solid rgba(197 197 197,60)"}}/>
                            <div>
                                {['ing', 'done'].map((status) => (
                                    <button className={styles.category} key={status} onClick={()=>handleStatusClick(status)} style={{fontWeight:selectedStatus===status?'bold':'normal', backgroundColor:selectedStatus==status?'#b0e8ea':'#caebec'}}>{status}</button>
                                ))}
                            </div>
                            <hr width="80%" style={{border: "1px solid rgba(197 197 197,60)"}}/>
                            </div>
                            <div style={{position:"relative", top:"10px", textAlign:"center"}}>
                                {['Spring Boot', 'Java', 'Kotlin', 'JavaScript','Next.js','express.js','React', 'Flask','Python','C', 'C++','Cuda','Go','MySQL','MongoDB','SQLite','PostgreSQL','AWS','Docker','k8s'].map((skills) => (
                                    <button className={styles.categoryskill} key={skills} onClick={()=>handleSkillsClick(skills)} style={{fontWeight:selectedSkills.includes(skills)?'bold':'normal', backgroundColor:selectedSkills.includes(skills)?'':''}}>{skills}</button>
                                ))}
                            </div>
                        </div>
                        <p/>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{borderRadius:"50%", height:"35px", border:"0px"}}>Top</button>
                        </div>
                    </div>
                    <div style={{width:"80%", marginLeft:"20px"}}>
                        {filteredProjects.map((project) => (


                            <div key={project.name} style={{marginTop:"3rem", display:"flex"}}>
                                <div style={{width:"25%"}}>
                                    {project.image?(<img style={{width:"50%"}} src={project.image}/>):null}
                                    <p style={{fontWeight:"bolder", fontSize:"25px", marginBottom:"1rem"}}>
                                    {project.name}
                                    </p>
                                    <span className={styles.status}>{project.status}</span><br/>
                                    {project.part?(<span>{project.part} <span style={{fontSize:"12px"}}>{project.projectDescription} <br/>{project.contribution}</span></span>):null}
                                    
                                    <p style={{fontSize:"12px"}}>{project.date}<br/>{project.belong}</p>
                                    <div style={{display:"flex",gap:"2px", flexWrap:"wrap", marginBottom:"5px"}}>
                                        {project.skills.map((skill, index) => (
                                            <p key={index} className={styles.skill}>{skill}</p>
                                        ))}
                                    </div>
                                        {project.github?(<a href={project.github} target="_blank"><FaGithub/>&nbsp;</a>):null}
                                        {project.blog?(<a href={project.blog} target="_blank"><SiVelog/>&nbsp;</a>):null}
                                        {project.document?(<a href={project.document} target="_blank"><IoDocumentText/>&nbsp;</a>):null}
                                        {project.store?(<a href={project.store} target="_blank"><IoLogoGooglePlaystore/>&nbsp;</a>):null}
                                        {project.link?(<a href={project.link} target="_blank"><IoIosLink/>&nbsp;</a>):null}

                                    
                                </div>
                                <div className={styles.line}></div>
                                <div style={{padding:"1rem", lineHeight:"1.5em", width:"70%", alignSelf:"center"}}dangerouslySetInnerHTML={{ __html: project.description}}>
                                </div>
                            </div>
                        ))}
                        </div>
            </div>
        </div>
    );
};

export default Projects;