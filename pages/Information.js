import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Information.module.css'
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { IoMdMail} from "react-icons/io";
import { IoDocumentText,IoLogoGooglePlaystore } from "react-icons/io5";


const Information = () => {
    const text = ['System.out.println(','&nbsp;&nbsp;안녕하세요,', '&nbsp;&nbsp;백엔드 개발자 공예지입니다.',');'];
    const [texts, setTexts] = useState([]);
    const [informationVisible, setInformationVisible] = useState(false);
    const idxRef = useRef(0);
    const currentWindowY = useRef(0);

    useEffect(()=>{
        const handleScroll=()=>{
            if((window.scrollY-currentWindowY.current)>10 && idxRef.current<text.length){
                const newText = `${text[idxRef.current]}`;
                setTexts((prevTexts)=>[...prevTexts, newText]);
                idxRef.current+=1;
                currentWindowY.current = window.scrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [idxRef.current, texts]);

    useEffect(() => {
        // 모든 텍스트가 출력된 후 1초 뒤에 정보 부분을 표시
        if (idxRef.current === text.length) {
          setTimeout(() => {
            setInformationVisible(true);
          }, 500);
        }
      }, [idxRef.current, texts]);
    
    return(
        <div className={styles.container}>
            <div className={styles.greetings}>
                {texts.map((text, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: text }}></div>
                ))}
            </div>
            {informationVisible && (<div className={styles.information}>
                <a href="https://github.com/YejiGong"><FaGithub /></a> | <a href="https://velog.io/@ydppwljg"><SiVelog /></a> | <a href="mailto:yejigong00@gmail.com"><IoMdMail /></a>
                
                <br/>
                <br/>

                <div className={styles.section}>
                        <div className={styles.sectionTitle}>Introduce</div>
                        <hr width="100%"/>
                    </div>

                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}></div>
                    <div>
                        <p className={styles.bold}>새로운 것을 접하고, 배우는 것을 즐거워하여 빠르게 적응하고 익혀서 사용할 수 있습니다.</p>
                        <p className={styles.content}>이러한 강점을 바탕으로 프로젝트 상황에 따른 적절한 언어, 프레임워크가 있다면 이전에 접해보지 않았더라도 두려워하지 않고 빠르게 익혀서 적용합니다.</p>
                    
                        <p className={styles.bold}>팀 프로젝트에서는 소통이 가장 중요하다고 생각하여, 팀원들에게 먼저 다가가며 적극적으로 소통합니다.</p>
                        <p className={styles.content}>같은 파트뿐만 아니라 다른 파트를 담당하는 팀원들과도 진행 상황을 공유하며 함께 해결책을 고민합니다. </p>

                        <p className={styles.bold}>무엇에서든, 누구에게든 배울 점은 꼭 있다고 생각하여 늘 배움의 자세를 갖춥니다.</p>
                        <p className={styles.content}>평소에도 알고리즘 문제 풀이를 꾸준하게 하고 있으며, 개인적으로 공부한 내용은 다시 한 번 정리하고 복습하기 위해 블로그에 기록하고 있습니다.</p>
                    </div>
                </div>


                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Skill</div>
                    <hr width="100%"/>
                </div>
                <div className={styles.introduce}>

                    <div className={styles.sectionLeft}> </div>
                    <div>
                        <p><strong>Strong</strong> | 주로 사용하고, 익숙하게 사용할 수 있습니다.</p>
                        <p className={styles.content}>Java, Spring Boot, Python, MySQL, MongoDB, AWS, git</p>
                    
                        <p><strong>Knowledgeable</strong> | 사용해본 경험이 있고, 코드를 이해할 수 있습니다.</p> 
                        <p className={styles.content}>JavaScript, React, Node.js, Flask, C, PHP, HTML, CSS, SQLite</p>
                    </div>
                </div>
                <br/>

                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionTitle}>Work Experience</div>
                        <hr width="100%"/>
                    </div>
                    <div className={styles.introduce}>
                        <div className={styles.sectionLeft}> </div>
                        <div style={{width:"80%", marginTop:"3rem", display:"flex"}}>
                            <div style={{width:"25%"}}>
                                <p style={{fontWeight:"bolder", fontSize:"25px", marginBottom:"1rem"}}>
                                Connecting Road
                                </p>
                                <p>Backend Engineer Intern (산학협력)</p>
                                <p style={{fontSize:"12px"}}>2022.09 - 2022.12</p>
                                <a href="https://velog.io/@ydppwljg/%EC%9D%B8%ED%84%B4-%ED%9A%8C%EA%B3%A0"><SiVelog /></a>
                            </div>
                            <div className={styles.line}></div>
                            <div style={{padding:"1rem",width:"70%"}}>
                                <p style={{fontWeight:"bolder", fontSize:"20px", marginBottom:"1px"}}>Connectors</p>
                                <div style={{display:"flex",gap:"5px"}}>
                                    <p className={styles.skill}>Spring Boot(Java)</p>
                                    <p className={styles.skill}>MongoDB(Atlas)</p>
                                    <p className={styles.skill}>AWS</p>
                                </div>
                                <div style={{ lineHeight:"1.5em"}}>
                                맞춤형 자기 성장을 위한 이커머스 플랫폼 <strong>{"<커넥터즈>"} 베타테스트 앱의 백엔드 개발</strong>을 담당하였습니다. <p/>
                                전문가별 개인 홈, 포스팅, QnA, 예약, 결제, 리뷰 등의 다양한 기능을 포함한 <span className={styles.highlight}>50여개의 API를 구현</span>하였으며, AWS EC2를 활용하여 인프라 환경을 구축하였습니다.
                                기획의 변동에 대응하기 위한 확장성 있는 설계의 필요성을 느꼈고, 이후 현재까지도 이를 중요하게 생각하며 개발하고 있습니다.
                                <br/>

                                <br/>개발 과정 효율화를 위해 GitHub Actions를 활용한 배포 자동화를 적용하였으며, 1차 QA 진행 중 로그 적재의 필요성을 느껴 DataDog을 활용한 로그 수집을 적용하였습니다. 이를 통해 이후 QA 과정을 효율적으로 진행할 수 있었습니다.

                                
                                <p/>
                                사내의 첫 개발자로서 API 명세서 문서 양식, git commit message convention, branch 관리 전략, 테스트 코드 등을 도입하여 개발 시스템의 기반을 구축하였습니다.
                                개발 업무 이외에도 기획, 베타테스트 운영 준비 과정 등에도 적극적으로 참여하며 기여하였습니다.
                                <p/>
                                <p/>
                                4개월간 초기 스타트업의 <span className={styles.highlight}>기획 고도화부터 QA까지의 전 과정을 경험</span>하였으며, 이 과정에서 다양한 업무를 수행하면서 인턴 기간 종료 후 <strong>우수 평가 (98/100)</strong>를 받을 수 있었습니다.
                                <p/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionTitle}>Project</div>
                        <hr width="100%"/>
                    </div>
                    <div className={styles.introduce}>
                        <div className={styles.sectionLeft}> </div>
                        <div style={{width:"80%"}}>
                            <div style={{marginTop:"3rem", display:"flex"}}>
                                <div style={{width:"25%"}}>
                                    <img style={{width:"50%"}} src="https://avatars.githubusercontent.com/u/124888501?s=200&v=4"/>
                                    <p style={{fontWeight:"bolder", fontSize:"25px", marginBottom:"1rem"}}>
                                    봐글봐글
                                    </p>
                                    <p>Backend <span style={{fontSize:"12px"}}>- 팀 프로젝트</span></p>
                                    
                                    <p style={{fontSize:"12px"}}>2023.03 - 2023.06</p>
                                    <div style={{display:"flex",gap:"2px", flexWrap:"wrap"}}>
                                        <p className={styles.skill}>Spring Boot(Java)</p>
                                        <p className={styles.skill}>MySQL</p>
                                        <p className={styles.skill}>AWS</p>
                                        <p className={styles.skill}>Python</p>
                                    </div>
                                    <a href="https://github.com/readubble/server"><FaGithub /></a>
                                    &nbsp;<a href="https://velog.io/@ydppwljg/%EC%BA%A1%EC%8A%A4%ED%86%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0"><SiVelog /></a>
                                    
                                </div>
                                <div className={styles.line}></div>
                                <div style={{padding:"1rem", lineHeight:"1.5em", width:"70%"}}>
                                    문해력 학습을 위한 교육용 앱 <strong>{"<봐글봐글>"}의 백엔드 개발</strong>을 담당하였습니다. <p/>
                                    백엔드 구성원 2인 중 API 개발을 담당하여 어휘퀴즈, 문제 풀이 등의 기능을 포함한 <span className={styles.highlight}>20여개의 API를 구현</span>하였으며, AWS EC2를 활용하여 인프라 환경을 구축하였습니다.
                                    <br/>
                                    
                                    GitHub Actions를 활용한 배포 자동화를 적용하였으며, 버그 검증을 위하여 테스트 코드를 도입하였습니다.

                                    
                                    <p/>
                                    git commit message convention, branch 관리 전략 등을 주도적으로 도입하여 협업을 용이하게 하였습니다.
                                    또한 백엔드 개발뿐만 아니라 클라이언트 개발 과정에서 발생한 이슈에 대해서도 함께 논의하며 기여하였습니다.
                                    <p/>
                                    초기에는 앱에 필요한 문제를 팀원들과 함께 직접 제작하였습니다. 하지만 해당 과정이 비효율적이라는 피드백을 받은 후, ChatGPT API를 활용하여 문제를 자동으로 생성하고 DB에 저장하는 Python 프로그램을 추가적으로 개발하여 문제 생성과정을 효율화하였습니다.
                                    <p/>
                                    <p/>
                                    학기 종료 후 해당 프로젝트를 진행한 {"<캡스톤 디자인2>"}과목에서 <strong>우수한 성적 (팀원 전원 A+)</strong>을 달성하였으며, 2023 캡스톤 경진대회 <strong>공학부문 본선 진출</strong>(소프트웨어학부 유일) 및 2023 CAU 공학학술제 <strong>소프트웨어대학장상</strong>을 수상하였습니다.
                                    <p/>
                                </div>
                            </div>
                            <div style={{marginTop:"3rem", display:"flex"}}>
                            <div style={{width:"25%"}}>
                                <img style={{width:"50%"}} src="https://avatars.githubusercontent.com/u/110675353?s=200&v=4"/>
                                <p style={{fontWeight:"bolder", fontSize:"25px", marginBottom:"1rem"}}>
                                클래스차차
                                </p>
                                <p>Backend, Data <span style={{fontSize:"12px"}}>- 팀 프로젝트</span></p>
                                <p style={{fontSize:"12px"}}>2022.08</p>
                                <div style={{display:"flex",gap:"2px",flexWrap:"wrap"}}>
                                    <p className={styles.skill}>Flask</p>
                                    <p className={styles.skill}>SQLite</p>
                                    <p className={styles.skill}>AWS</p>
                                    <p className={styles.skill}>Python</p>
                                </div>
                                <a href="https://github.com/moeumi/backend"><FaGithub /></a>
                                &nbsp;<a href="https://velog.io/@ydppwljg/%EC%95%B1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0"><SiVelog /></a>
                                &nbsp;<a href="https://play.google.com/store/apps/details?id=com.moeumi.client&hl=en-KR"><IoLogoGooglePlaystore /></a>
                            </div>
                            <div className={styles.line}></div>
                            <div style={{padding:"1rem", lineHeight:"1.5em", width:"70%", alignSelf:"center"}}>
                                부산광역시 문화 강의를 통합하여 보여주는 서비스 앱 <strong>{"<클래스차차>"}의 데이터 수집 및 백엔드 개발</strong>을 담당하였습니다. <p/>
                                당시 문화 강의 정보는 여러 사이트에 분산되어 있었는데, MVP 개발을 위하여 가장 데이터가 많은 사이트 2곳을 선정하였습니다. 해당 사이트들을 스크래핑하여 수집한 데이터를 전처리 후 DB에 적재하는 Python 프로그램을 개발하였습니다.
                                <p/>
                                이후 <span className={styles.highlight}>10여개의 API를 구현</span>하여 백엔드 개발을 진행하였으며, ZAPPA를 활용하여 AWS Lambda로 배포하여 인프라 환경을 구축하였습니다.
                                해당 프로젝트를 진행한 프레임워크인 Flask는 당시에 처음 접하였으나, 빠르게 학습하여 기한 내에 성공적으로 개발을 완료하였습니다.
                                <br/>
                                <p/>
                                백엔드 개발 이후에는 클라이언트 개발 과정도 도우며 적극적으로 프로젝트에 참여하였습니다.

                                <p/>
                                프로젝트 종료 후 플레이스토어에 출시(현재는 서버 중단으로 인해 이용 불가)하였으며, 해당 프로젝트를 진행한 {"<DX Sprint - 2주 앱개발 해커톤>"}에서 <strong>대상</strong>을 수상하였습니다.
                                <p/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionTitle}>Certificate <p/> & Language Skill</div>
                        <hr width="100%"/>
                    </div>
                </div>

                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}> </div>
                    <div>
                        <span style={{fontWeight:"bolder", fontSize:"19px"}}>정보처리기사</span>
                        <p style={{fontSize:"15px", paddingBottom:"10px"}}>2023.09, 한국산업인력공단</p>
                        <span style={{fontSize:"19px"}}>TOEIC SPEAKING <strong>Intermediate High</strong>(150)</span>
                        <p style={{fontSize:"15px",paddingBottom:"10px"}}>2023.01, 한국 TOEIC 위원회</p>
                        <span style={{fontSize:"19px"}}>TOPCIT <strong>수준 3</strong>(635/1000)</span>
                        <p style={{fontSize:"15px"}}>2022.10, 정보통신기획평가원</p>
                    </div>
                </div>

                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionTitle}>Education</div>
                        <hr width="100%"/>
                    </div>
                </div>

                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}> </div>
                    <div>
                        <span style={{fontSize:"19px"}}>중앙대학교 소프트웨어학부</span> (4.31/4.5)
                        <p style={{fontSize:"15px"}}>2020.03 - 2024.08 <i>(졸업예정)</i></p>
                    </div>
                </div>

                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionTitle}>Awards</div>
                        <hr width="100%"/>
                    </div>
                </div>

                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}> </div>
                    <div>
                        <span style={{fontSize:"19px"}}>2023 CAU 공학학술제 <strong>소프트웨어대학장상</strong></span>
                        <p style={{fontSize:"15px", paddingBottom:"10px"}}>2023.12.01, 주최 중앙대학교 창의ICT공과대학, 소프트웨어대학, 공과대학</p>
                        <p/><p/>
                        <span style={{fontSize:"19px"}}>2022 TOPCIT <strong>IT여성기업인협회장상</strong> (특별상)</span>
                        <p style={{fontSize:"15px",paddingBottom:"10px"}}>2022.12.22, IT여성기업인협회</p>
                        <p/><p/>
                        <span style={{fontSize:"19px"}}>2022 DX Sprint - 2주 앱개발 해커톤 <strong>대상</strong></span>
                        <p style={{fontSize:"15px"}}>2022.08.18, 주최 및 주관 패스파인더, 부산광역시, 부산테크노파크</p>
                    </div>
                </div>

                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionTitle}>Experience</div>
                        <hr width="100%"/>
                    </div>
                </div>
                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}> </div>
                    <div>
                        <span style={{fontSize:"19px"}}>{"<개발자를 위한 최소한의 실무 지식>"}<span style={{fontSize:"13px", fontStyle:"italic"}}>(김현정, 이재효 지음, 한빛미디어, 2024)</span> <strong>베타리딩</strong> 참여</span>
                        <p style={{fontSize:"15px", paddingBottom:"10px"}}>2023.12</p>
                        <p/><p/>
                        <span style={{fontSize:"19px"}}>2021 Purdue University Summer Program <strong>온라인 해외 현장 교육</strong> 수료</span>
                        <p style={{fontSize:"15px"}}>UAV Ground Scanning System: Human Detection with Deep Learning
                        &nbsp;<a href="https://drive.google.com/file/d/1ATu5tKMQXnqMCyMpwvU0ubk0XjJT5d8c/view?usp=sharing"><IoDocumentText /></a>
                        &nbsp;<a href="https://github.com/AllisonShen/UAV"><FaGithub /></a></p>
                        <p style={{fontSize:"15px",paddingBottom:"10px"}}>2021.07 - 2021.08</p>
                            
                    </div>
                </div>

                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionTitle}>Etc</div>
                        <hr width="100%"/>
                    </div>
                </div>
                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}> </div>
                    <div style={{width:"70%"}}>

                        <div style={{display:"flex"}}>
                            <div style={{fontWeight:"bolder", fontSize:"18px", marginBottom:"1rem", width:"15%", alignSelf:"center"}}>
                                Outsourcing (Commission)
                            </div>
                            <div className={styles.line}></div>
                            <div style={{width:"80%", marginLeft:"10px"}}>
                                <span style={{fontSize:"19px"}}>크몽</span>
                                <p/>
                                <details>
                                    <summary>작업 내역</summary>
                                    <p/>
                                    - SSE 기능 오류 수정 (개인) <span className={styles.skill}>Spring Boot(Java)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 스케줄러를 이용한 API 호출 및 크롤러 기능 구현 (개인) <span className={styles.skill}>Spring Boot(Java)</span> <span className={styles.skill}>MySQL</span>
                                </details>
                                <p style={{fontSize:"15px",paddingBottom:"10px"}}>2024.01 - 현재</p> 
                                <p/><p/>
                                <span style={{fontSize:"19px"}}>크레페</span>
                                <p/>
                                <details>
                                    <summary>작업 내역</summary>
                                    <p/>
                                    - 페이징 번호 오류 수정, 정렬 및 폰트 수정, bgm 적용 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 게시판 레이아웃 스킨 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 아이템 값 DB 갱신 오류 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 마스토돈 CSS 커스텀 수정 (개인) <span className={styles.skill}>CSS</span>
                                    <p/>
                                    - 게시판 오류 수정 및 로딩 지연 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 게시판 삭제 기능, 수정 기능 및 이미지 첨부 기능 추가, CSS 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 티스토리 커서 및 bgm 기능 추가 (개인) <span className={styles.skill}>CSS</span>
                                    <p/>
                                    - 게시판 링크 및 비밀번호 기능 오류 수정, CSS 수정, 해시태그 검색 기능 추가 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 게시판 비밀글 및 보호글 오류 기능 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 게시판 html 출력 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 게시판 랜덤 및 게임 기능 DB 갱신 오류 및 출력 오류 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 티스토리 스킨 CSS 수정 및 태그 모음 및 검색 기능 추가 (개인) <span className={styles.skill}>CSS</span>
                                    <p/>
                                    - 게시판 캐릭터 프로필용 개조 - 입력 항목 추가, 이미지 슬라이드, 노션 DB 형식(글 내부에 새로운 글 작성, 수정, 삭제) 기능 추가, 전체 게시글 모드 및 태그 목록 정렬, 태그 검색 기능 추가 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 관리자 페이지 오류 수정, CSS 관리 수정, bgm 자동 재생, 레이아웃 수정, DB 항목 세분화 및 추가, 캐릭터 프로필용 게시판 항목 수정, 카테고리별 전체 목록 분리 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 투두 게시판 d-day 항목 수정 (날짜계산), bgm 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - http-https 강제 전환으로 인한 무한 로딩 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 게시판 카드 게임 기능 추가 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                </details>
                                <p style={{fontSize:"15px", paddingBottom:"10px"}}>2023.09 - 현재</p>

                                <span style={{fontSize:"19px"}}>기타</span>
                                <p/>
                                <details>
                                    <summary>작업 내역</summary>
                                    <p/>
                                    - 운영 종료 사이트 데이터 백업을 위한 크롤러 개발 및 아카이빙용 사이트 구현 (개인) <span className={styles.skill}>Next.js</span> <span className={styles.skill}>mongoDB(Atlas)</span>
                                    <p/>&nbsp;(2023.04 - 2023.07)
                                </details>
                                <p/>
                            </div>
                        </div>

                        <div style={{display:"flex"}}>
                            <div style={{fontWeight:"bolder", fontSize:"18px", marginBottom:"1rem", width:"15%", alignSelf:"center"}}>
                                Study
                            </div>
                            <div className={styles.line}></div>
                            <div style={{width:"80%", marginLeft:"10px"}}>
                                <p/>
                                <span style={{fontSize:"19px"}}>Clean Code 스터디</span>
                                <p/>
                                    - {"<클린코드>"} 를 챕터별로 읽은 후 내용 정리 및 공유
                                    <p/>
                                    - {"<봐글봐글>"} 리팩토링 작업
                                    <p/>
                                <p style={{fontSize:"15px",paddingBottom:"10px"}}>2023.08 - 2023.10</p>
                                <span style={{fontSize:"19px"}}>CS 자유 주제 스터디</span>
                                <p/>
                                    - CS 자유주제 (OOP, 자료구조, DB, 클라우드 등) 스터디 진행
                                    <p/>
                                <p style={{fontSize:"15px",paddingBottom:"10px"}}>2022.03 - 2022.08</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>)}
        </div>
    );
};
export default Information;