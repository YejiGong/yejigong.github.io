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
                <a href="https://github.com/YejiGong" target="_blank"><FaGithub /></a> | <a href="https://velog.io/@ydppwljg" target="_blank"><SiVelog /></a> | <a target="_blank" href="mailto:yejigong00@gmail.com"><IoMdMail /></a>
                
                <i style={{fontSize:"12px"}}><p/>본 페이지는 PC 환경에 최적화되어있습니다.</i>
                <br/>
                <br/>

                <div className={styles.section}>
                        <div className={styles.sectionTitle}>Introduce</div>
                        <hr width="100%"/>
                    </div>

                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}></div>
                    <div>
                        <p>처음 printf("Hello, World!");를 작성했던 때부터 지금 현재까지 <i>개발이 <strong>가장 즐거운</strong>, 그래서 더 <strong>잘 하고싶은</strong> 개발자</i>입니다.</p>
                        <p className={styles.bold}>새로운 것을 접하고, 배우는 것을 즐거워하여 빠르게 적응하고 익혀서 사용할 수 있습니다.</p>
                        <p className={styles.content}>이러한 강점을 바탕으로 프로젝트 상황에 따른 적절한 언어, 프레임워크가 있다면 이전에 접해보지 않았더라도 두려워하지 않고 빠르게 익혀서 적용합니다.<br/>
                        실제로 이전에 접해보지 않았던 언어나 프레임워크를 빠르게 익혀서 프로젝트를 진행한 경험이 다수 있습니다.</p>
                    
                        <p className={styles.bold}>팀 프로젝트에서는 소통이 가장 중요하다고 생각하여, 팀원들에게 먼저 다가가며 적극적으로 소통합니다.</p>
                        <p className={styles.content}>같은 파트뿐만 아니라 다른 파트를 담당하는 팀원들과도 진행 상황을 공유하며 함께 해결책을 고민합니다. 역할 분담에 국한하지 않고, 도울 수 있다면 힘을 보탭니다.</p>

                        <p className={styles.bold}>무엇에서든, 누구에게든 배울 점은 꼭 있다고 생각하여 늘 배움의 자세를 갖춥니다.</p>
                        <p className={styles.content}>오늘보다 더 나은 내일을 위해 1일 1커밋을 실천중입니다. 평소에도 알고리즘 문제 풀이를 꾸준하게 하고 있으며, 개인적으로 공부한 내용을 블로그에 기록하고 있습니다.</p>
                    </div>
                </div>


                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Skill</div>
                    <hr width="100%"/>
                </div>
                <div className={styles.introduce}>

                    <div className={styles.sectionLeft}> </div>
                    <div>
                        <p><strong>Strong</strong> | <span style={{fontSize:"13px"}}>중소규모 이상의 프로젝트를 개발한 경험이 있으며, 익숙하게 사용할 수 있습니다.</span></p>
                        <p className={styles.content}>Java, Spring Boot, Python, MySQL, MongoDB</p>
                    
                        <p><strong>Knowledgeable</strong> | <span style={{fontSize:"13px"}}>소규모 이하의 프로젝트를 개발한 경험이 있고, 코드를 이해할 수 있습니다.</span></p> 
                        <p className={styles.content}>JavaScript, React, Node.js, C, PHP, HTML, CSS</p>
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
                            <div style={{width:"25%", wordWrap:"break-word"}}>
                                <p style={{fontWeight:"bolder", fontSize:"25px", marginBottom:"1rem"}}>
                                Connecting Road
                                </p>
                                <p>Backend Engineer Intern (산학협력)</p>
                                <p style={{fontSize:"12px"}}>2022.09 - 2022.12</p>
                                <a target="_blank" href="https://velog.io/@ydppwljg/%EC%9D%B8%ED%84%B4-%ED%9A%8C%EA%B3%A0"><SiVelog /></a>
                            </div>
                            <div className={styles.line}></div>
                            <div style={{padding:"1rem",width:"70%"}}>
                                <p style={{fontWeight:"bolder", fontSize:"20px", marginBottom:"1px"}}>Connectors</p>
                                <p style={{marginBottom:"2px"}}>Backend <span style={{fontSize:"12px"}}>- 팀 프로젝트 (4인) <br/>(백엔드 기여도 100%)</span></p>
                                <div style={{display:"flex",gap:"5px"}}>
                                    <p className={styles.skill}>Spring Boot(Java)</p>
                                    <p className={styles.skill}>MongoDB(Atlas)</p>
                                    <p className={styles.skill}>AWS</p>
                                    
                                </div>
                                <div style={{ lineHeight:"1.5em"}}>
                                맞춤형 자기 성장을 위한 이커머스 플랫폼 <strong>{"<커넥터즈>"} 베타테스트 앱의 백엔드 개발</strong>을 담당하였습니다. <p/>
                                전문가별 개인 홈, 포스팅, QnA, 예약, 결제, 리뷰 등의 다양한 기능을 포함한 <span className={styles.highlight}>50여개의 API를 구현</span>하였으며, AWS EC2를 활용하여 인프라 환경을 구축하였습니다.
                                특히 예약 기능을 구현하면서 동시성 문제를 접하여 고민했고, Lock을 활용하여 해당 기능을 구현하였습니다. 또한 기획의 변동에 대응하기 위한 확장성 있는 설계의 필요성을 느꼈고, 이후 현재까지도 이를 중요하게 생각하며 개발하고 있습니다.
                                <br/>

                                <br/>개발 과정 효율화를 위해 GitHub Actions를 활용한 배포 자동화를 적용하였습니다. 또한 1차 QA 진행 중 로그 적재의 필요성을 느껴 DataDog을 활용한 로그 수집을 적용하였습니다. 이를 통해 이후 QA 과정을 효율적으로 진행할 수 있었습니다.

                                
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
                        <div className={styles.sectionTitle}>Main Project</div>
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
                                    <p>Backend <span style={{fontSize:"12px"}}>- 팀 프로젝트 (3인) <br/>(백엔드 기여도 70%)</span></p>
                                    
                                    <p style={{fontSize:"12px"}}>2023.03 - 2023.06</p>
                                    <div style={{display:"flex",gap:"2px", flexWrap:"wrap"}}>
                                        <p className={styles.skill}>Spring Boot(Java)</p>
                                        <p className={styles.skill}>MySQL</p>
                                        <p className={styles.skill}>AWS</p>
                                        <p className={styles.skill}>Python</p>
                                    </div>
                                    <a target="_blank" href="https://github.com/readubble/server"><FaGithub /></a>
                                    &nbsp;<a target="_blank" href="https://velog.io/@ydppwljg/%EC%BA%A1%EC%8A%A4%ED%86%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0"><SiVelog /></a>
                                    
                                </div>
                                <div className={styles.line}></div>
                                <div style={{padding:"1rem", lineHeight:"1.5em", width:"70%"}}>
                                    문해력 학습을 위한 교육용 앱 <strong>{"<봐글봐글>"}의 백엔드 개발</strong>을 담당하였습니다. <p/>
                                    백엔드 구성원 2인 중 API 개발을 담당하여 어휘퀴즈, 문제 풀이 등의 기능을 포함한 <span className={styles.highlight}>20여개의 API를 구현</span>하였으며, AWS EC2를 활용하여 인프라 환경을 구축하였습니다.
                                    <br/>
                                    
                                    GitHub Actions를 활용한 배포 자동화를 적용하였으며, 버그 검증을 위하여 테스트 코드를 도입하였습니다.

                                    
                                    <p/>
                                    git commit message convention, branch 관리 전략 등을 주도적으로 도입하여 협업을 용이하게 하였습니다.
                                    또한 개발 과정 중 오류가 발생했을 때, 파트를 구분하지 않고 모두 함께 해결 방법을 고민하면서 문제를 해결하였습니다.
                                    예로 클라이언트에서 시선 추적 기능 개발 중 실시간으로 데이터가 끊임없이 유입되어 저장하는 과정에 성능 문제가 존재하였습니다.
                                    이 문제를 함께 고민하여 데이터에 일종의 양자화를 적용하는 방법을 떠올렸고, 성능 문제를 해결할 수 있었습니다.
                                    <p/>
                                    초기에는 앱에 필요한 문제를 팀원들과 함께 직접 제작하였습니다. 하지만 해당 과정이 비효율적이라는 피드백을 받은 후, ChatGPT API를 활용하여 문제를 자동으로 생성하고 DB에 저장하는 Python 프로그램을 추가적으로 개발하여 문제 생성과정을 효율화하였습니다.
                                    <p/>
                                    <p/>
                                    학기 종료 후 해당 프로젝트를 진행한 {"<캡스톤 디자인(2)>"}과목에서 <strong>우수한 성적</strong>을 받을 수 있었으며, 2023 캡스톤 경진대회 <strong>공학부문 본선 진출</strong>(소프트웨어학부 유일) 및 2023 CAU 공학학술제 <strong>소프트웨어대학장상</strong>을 수상하였습니다.
                                    <p/>
                                    또한 팀원들과 함께 클린코드 스터디를 진행하면서 추가적으로 해당 프로젝트의 <span className={styles.highlight}>리팩토링 작업</span>을 진행하였습니다. 변수 및 메서드명, 다중 책임을 갖고 있는 메서드의 분리 등을 통해 비교적 가독성이 높고 객체지향의 원칙을 따르는 코드로 개선하였습니다.
                                </div>
                            </div>
                            <div style={{marginTop:"3rem", display:"flex"}}>
                            <div style={{width:"25%"}}>
                                <img style={{width:"50%"}} src="https://avatars.githubusercontent.com/u/110675353?s=200&v=4"/>
                                <p style={{fontWeight:"bolder", fontSize:"25px", marginBottom:"1rem"}}>
                                클래스차차
                                </p>
                                <p>Backend, Data <span style={{fontSize:"12px"}}>- 팀 프로젝트 (4인)<br/>(백엔드 기여도 100%, 데이터 기여도 90%)</span></p>
                                <p style={{fontSize:"12px"}}>2022.08</p>
                                <div style={{display:"flex",gap:"2px",flexWrap:"wrap"}}>
                                    <p className={styles.skill}>Flask</p>
                                    <p className={styles.skill}>SQLite</p>
                                    <p className={styles.skill}>AWS</p>
                                    <p className={styles.skill}>Python</p>
                                </div>
                                <a target="_blank" href="https://github.com/moeumi/backend"><FaGithub /></a>
                                &nbsp;<a target="_blank" href="https://velog.io/@ydppwljg/%EC%95%B1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0"><SiVelog /></a>
                                &nbsp;<a target="_blank" href="https://play.google.com/store/apps/details?id=com.moeumi.client&hl=en-KR"><IoLogoGooglePlaystore /></a>
                            </div>
                            <div className={styles.line}></div>
                            <div style={{padding:"1rem", lineHeight:"1.5em", width:"70%", alignSelf:"center"}}>
                                부산광역시 문화 강의를 통합하여 보여주는 서비스 앱 <strong>{"<클래스차차>"}의 데이터 수집 및 백엔드 개발</strong>을 담당하였습니다. <p/>
                                당시 문화 강의 정보는 여러 사이트에 분산되어 있었는데, MVP 개발을 위하여 가장 데이터가 많은 사이트 2곳을 선정하였습니다. 해당 사이트들을 스크래핑하여 수집한 데이터를 전처리 후 DB에 적재하는 Python 프로그램을 개발하였습니다.
                                <p/>
                                이후 <span className={styles.highlight}>10여개의 API를 구현</span>하여 백엔드 개발을 진행하였으며, ZAPPA를 활용하여 AWS Lambda로 배포하여 인프라 환경을 구축하였습니다.
                                해당 프로젝트를 진행한 프레임워크인 Flask는 당시에 처음 접하였으나, <i>빠르게 학습하여 기한 내에 성공적으로 개발을 완료</i>하였습니다.
                                <br/>
                                <p/>
                                백엔드 개발 완료 이후에도 추가로 클라이언트 개발을 도우며 적극적으로 프로젝트에 참여하였습니다.

                                <p/>
                                프로젝트 종료 후 플레이스토어에 출시<span style={{fontSize:"12px"}}>(현재는 서버 중단으로 인해 이용 불가)</span>까지 진행하여 2주간 <span className={styles.highlight}>MVP 기획부터 출시까지의 전 과정을 경험</span>하였습니다. 또한 해당 프로젝트를 진행한 {"<DX Sprint - 2주 앱개발 해커톤>"}에서 <strong>대상</strong>을 수상하였습니다.
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
                        <span style={{fontSize:"19px"}}>TOEIC Speaking <strong>Intermediate High</strong>(150)</span>
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
                        <span style={{fontSize:"19px"}}>K-SW Square Purdue University<span style={{fontSize:"13px", fontStyle:"italic"}}>(Purdue Chung Ang Summer Program 2021)</span> <strong>온라인 해외 현장 교육</strong> 수료</span>
                        <p style={{fontSize:"15px"}}>UAV Ground Scanning System: Human Detection with Deep Learning
                        &nbsp;<a target="_blank" href="https://drive.google.com/file/d/1ATu5tKMQXnqMCyMpwvU0ubk0XjJT5d8c/view?usp=sharing"><IoDocumentText /></a>
                        &nbsp;<a target="_blank" href="https://github.com/AllisonShen/UAV"><FaGithub /></a></p>
                        <p style={{fontSize:"15px",paddingBottom:"10px"}}>2021.07 - 2021.08</p>
                        <p/><p/>
                        <span style={{fontSize:"19px"}}>부산광역시교육청 정보영재교육원 고등과정<span style={{fontSize:"13px", fontStyle:"italic"}}>(정보심화반)</span> 수료</span>
                        <p style={{fontSize:"15px", paddingBottom:"10px"}}>2016.03 - 2017.02</p>
                        <p/><p/>
                        <span style={{fontSize:"19px"}}>부산광역시교육청 정보영재교육원 중등과정<span style={{fontSize:"13px", fontStyle:"italic"}}>(컴퓨터창의성반)</span> 수료</span>
                        <p style={{fontSize:"15px", paddingBottom:"10px"}}>2013.03 - 2016.02</p>
                        <p/><p/>
                        <span style={{fontSize:"19px"}}>부산광역시 해운대영재교육원 정보영역 수료</span>
                        <p style={{fontSize:"15px", paddingBottom:"10px"}}>2011.03 - 2013.02</p>
                            
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
                            <div style={{fontWeight:"bolder", fontSize:"18px", marginBottom:"1rem", width:"15%", alignSelf:"center",  wordWrap:"break-word"}}>
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
                                    - 스케줄러를 이용한 API 호출 및 스크래핑 기능 구현 (개인) <span className={styles.skill}>Spring Boot(Java)</span> <span className={styles.skill}>MySQL</span>
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
                                    - 게시판 랜덤 및 게임 기능 DB 갱신 오류, 출력 오류 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 티스토리 스킨 CSS 수정, 태그 모음 및 검색 기능 추가 (개인) <span className={styles.skill}>CSS</span>
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
                                    <p/>
                                    - 아이템 구매 개수 제한 오류 추가 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                </details>
                                <p style={{fontSize:"15px", paddingBottom:"10px"}}>2023.09 - 현재</p>

                                <span style={{fontSize:"19px"}}>기타</span>
                                <p/>
                                <details>
                                    <summary>작업 내역</summary>
                                    <p/>
                                    - 운영 종료 사이트 데이터 백업을 위한 스크래퍼 개발 및 아카이빙용 사이트 구현 (개인) <span className={styles.skill}>Next.js</span> <span className={styles.skill}>mongoDB(Atlas)</span>
                                    <p/>&nbsp;(2023.04 - 2023.07)
                                </details>
                                <p/>
                            </div>
                        </div>

                        <div style={{display:"flex"}}>
                            <div style={{fontWeight:"bolder", fontSize:"18px", marginBottom:"1rem", width:"15%", alignSelf:"center", wordWrap:"break-word"}}>
                                Study
                            </div>
                            <div className={styles.line}></div>
                            <div style={{width:"80%", marginLeft:"10px"}}>
                                <p/>
                                <span style={{fontSize:"19px"}}>Clean Code 스터디</span>
                                <p/>
                                    - {"<Clean Code>"} 를 챕터별로 읽은 후 내용 정리 및 공유
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