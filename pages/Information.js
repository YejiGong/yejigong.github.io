import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Information.module.css'
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { IoMdMail} from "react-icons/io";
import { IoDocumentText,IoLogoGooglePlaystore } from "react-icons/io5";



const Information = () => {
    const text = ['System.out.println(','&nbsp;&nbsp;안녕하세요,', '&nbsp;&nbsp;개발자 공예지입니다.',');'];
    const [texts, setTexts] = useState(text);
    const [informationVisible, setInformationVisible] = useState(true);
    const idxRef = useRef(text.length);
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
                
                <p className={styles.profileNote}>Backend · Data Processing · System Integration</p>
                <br/>
                <br/>

                <div className={styles.section}>
                        <div className={styles.sectionTitle}>Introduce</div>
                        <hr width="100%"/>
                    </div>

                <div className={styles.introduce}>
                    <div className={styles.sectionLeft}></div>
                    <div>
                        <p className={styles.introLead}>잘 동작하는 것과 <strong>잘 만들어진 것</strong>은 다르다고 생각합니다.</p>
                        <p className={styles.content}>백엔드 설계부터 검사 데이터 처리, 실시간 장비 연동, 서비스 운영까지 다양한 기술 과제를 해결해 왔습니다. 주어진 기능을 구현하는 데 그치지 않고, 시스템과 개발 환경이 더 안정적이고 효율적으로 동작할 방법을 고민하고 직접 개선합니다.</p>
                        <p className={styles.bold}><mark className={styles.introHighlight}>관성적인 비효율을 당연하게 넘기지 않습니다.</mark></p>
                        <p className={styles.content}>이미 동작하는 시스템이라도 더 나은 방법이 있는지 살펴봅니다. 지연되는 데이터 처리나 반복되는 연산, 과도한 메모리 사용의 원인을 찾고 개선합니다. 쿼리 실행 계획과 프로파일링으로 문제를 분석하며, 로직 수정부터 자료구조와 데이터 처리 방식의 개선까지 상황에 맞는 해결책을 적용해 왔습니다.</p>
                        <p className={styles.bold}><mark className={styles.introHighlight}>더 좋은 제품을, 더 나은 방식으로 만듭니다.</mark></p>
                        <p className={styles.content}>서비스 기능을 만드는 과정에서 반복되는 작업과 공통으로 지켜야 할 규칙에도 관심을 기울입니다. 로깅과 권한 검증을 공통화하고 프레임워크의 기능을 확장해 여러 서비스에서 활용할 수 있는 기반을 만들었습니다. 한 번의 개선이 이후의 개발과 운영에도 도움이 되도록, 변경과 유지보수를 고려한 구조를 고민합니다.</p>
                        <p className={styles.bold}><mark className={styles.introHighlight}>문제가 있는 곳까지, 기술의 경계를 넘어갑니다.</mark></p>
                        <p className={styles.content}>익숙한 언어나 프레임워크에 해법을 한정하지 않습니다. NestJS 기반 백엔드에서 Go를 활용한 검사 데이터 처리, Rust 기반 실시간 장비 연동까지 필요한 기술을 익히고 적용했습니다. 서로 다른 실행 환경과 통신 방식, 데이터 형식을 이해하고 연결해 실제 제품에서 동작하는 결과를 만들어 왔습니다.</p>
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
                        <p className={styles.content}>Java, Spring Boot, NestJS, TypeScript, Python, MySQL, PostgreSQL, MongoDB</p>
                    
                        <p><strong>Knowledgeable</strong> | <span style={{fontSize:"13px"}}>소규모 이하의 프로젝트를 개발한 경험이 있고, 코드를 이해할 수 있습니다.</span></p> 
                        <p className={styles.content}>React, Go, Rust, C, PHP, HTML, CSS</p>
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
                        <div style={{width:"80%"}}>
                            <div style = {{marginTop: "3rem", display: "flex"}}>
                            <div style={{width:"25%", wordWrap:"break-word"}}>
                                <p style={{fontWeight:"bolder", fontSize:"25px", marginBottom:"1rem"}}>
                                DEEP AI
                                </p>
                                <p>Backend Engineer</p>
                                <p style={{fontSize:"12px"}}>2024.07 - 현재</p>
                               
                            </div>
                            <div className={styles.line}></div>
                            <div style={{padding:"1rem",width:"70%"}}>
                                <p style={{fontWeight:"bolder", fontSize:"20px", marginBottom:"1px"}}>DEEP-NDT</p>
                                <p style={{marginBottom:"2px"}}>Backend </p>
                                <div className={styles.projectSkills}>
                                    <p className={styles.skill}>NestJS(TypeScript)</p>
                                    <p className={styles.skill}>PostgreSQL</p>
                                    <p className={styles.skill}>GCP</p>
                                    
                                </div>
                                <div style={{ lineHeight:"1.5em"}}>
                                인공지능 비파괴 검사 솔루션 <strong>DEEP-NDT의 백엔드 개발과 서비스 운영</strong>을 담당하였습니다. 전반적인 API 신규 개발과 기존 기능 개선을 수행하고, ML 서버 및 검사 파일 파서와의 gRPC·HTTP 통신을 관리하였습니다.
                                <p/>
                                실제 서비스 운영에 필요한 인증·인가 체계와 로깅 시스템을 개발하였습니다. 인가 체계는 사용자 역할뿐 아니라 조직·Workspace 범위, 엔티티 간 계층 관계와 상태에 따라 접근 권한을 판단하도록 설계하였습니다. 이를 공통 권한 검증 로직으로 구성하여 API별로 일관된 접근 제어를 적용하였습니다.
                                <p/>
                                특히 로깅 시스템은 기존 TypeORM Logger를 확장하고 <strong>customQueryBuilder를 구현하여 데이터 삽입·수정·삭제 시 <span className={styles.highlight}>변경 이력이 자동으로 기록되도록 시스템화</span></strong>하였습니다. 변경 전후 데이터와 작업자 정보를 기록하고, requestId·traceId를 연결하여 사용자 요청과 데이터 변경 이력을 함께 추적할 수 있도록 하였습니다.
                                <p/>
                                기존 멀티 레포로 분산되어 있던 백엔드 서버들을 모노레포로 통합하면서 공통 모듈과 환경 설정을 정리하였습니다. API Gateway와 인증 서버를 분리하고, 인증·인가·로깅·캐시·메시징 등 여러 서버에서 사용하는 기능을 공통화하였습니다. 로컬 캐시와 RabbitMQ 기반 캐시 갱신 처리를 공통 모듈에 포함하여 재사용성을 높였습니다.
                                <p/>
                                서비스 운영 중 발생한 <span className={styles.highlight}>성능 병목을 개선</span>하였습니다. 설비별 반복 조회를 일괄 집계로 전환하고 쿼리 구조와 인덱스를 개선하여 <strong>일부 조회 시간을 약 9초에서 1초로 단축</strong>하였습니다. 또한 <strong>7분 이상 걸리던 Excel 처리를 5초 이내로 개선</strong>하고, 파일 업로드를 비동기 처리로 전환하여 <strong>약 8~9초 소요되던 대기 시간을 2초 내외로 줄였습니다.</strong>
                                <p/>
                                <span className={styles.highlight}>테스트 코드를 도입</span>하여 커버리지 80%를 달성하고, 인증·권한 등 주요 로직의 변경을 검증하는 테스트를 작성하였습니다. 모니터링 툴과 기본 알림 시스템을 구축하고, 부하 테스트를 통해 서비스 성능을 확인할 수 있는 환경을 마련하였습니다.
                                <p/>
                                인터넷 연결이 제한된 환경에서도 서비스를 사용할 수 있도록 Electron 기반 데스크톱 애플리케이션을 개발하였습니다. 웹·오프라인 버전에서 활용할 공통 모듈을 설계하며 다양한 실행 환경에서의 서비스 개발과 운영을 경험하였습니다.
                                <p/>
                                </div>
                            </div>
                            </div>

                            <div style = {{marginTop: "3rem", display: "flex"}}>
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
                                <div className={styles.projectSkills}>
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
                                    <div className={styles.projectSkills}>
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
                                <div className={styles.projectSkills}>
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
                    <div className={styles.etcContent}>

                        <div className={styles.etcRow}>
                            <div className={styles.etcLabel}>
                                Outsourcing (Commission)
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.etcDetails}>
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
                                    <p/>
                                    - 게시판 비밀글 기능 추가 및 파일 업로드 오류 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 게시판 형식 수정 및 기념일 위젯 시간 오류 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - http-https 전환으로 인한 링크 오류 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span>
                                    <p/>
                                    - js 효과 적용 오류 수정 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>JavaScript</span>
                                    <p/>
                                    - 티스토리 기본 화면 수정 및 댓글란 수정 (개인) <span className={styles.skill}>HTML</span> <span className={styles.skill}>CSS</span>
                                    <p/>
                                    - 메뉴 위젯 오류 수정 및 디자인 커스텀, 게시판 구조 수정, 채팅 게시판 프로필 및 날짜 출력 적용, 명령어에 따른 이미지 출력 기능, js 효과 적용 오류 수정, 스티커 게시판 뒤집기 효과 추가 (개인) <span className={styles.skill}>PHP(그누보드)</span> <span className={styles.skill}>MySQL</span>
                                    <p/>
                                    - 티스토리 HTML 모드 글 작성 설정, 헤더 여백 CSS 수정, 그누보드 갤러리 게시판 오류 및 스타일 수정 (개인) <span className={styles.skill}>HTML</span> <span className={styles.skill}>JavaScript</span> <span className={styles.skill}>CSS</span>
                                    <p/>
                                    - Obsidian 기반 페이지 설정 및 사용 환경 지원 (개인) <span className={styles.skill}>Obsidian</span> <span className={styles.skill}>JavaScript</span>
                                </details>
                                <p style={{fontSize:"15px", paddingBottom:"10px"}}>2023.09 - 2026.08</p>

                                <span style={{fontSize:"19px"}}>기타</span>
                                <p/>
                                <details>
                                    <summary>작업 내역</summary>
                                    <p/>
                                    - 운영 종료 사이트 데이터 백업을 위한 스크래퍼 개발 및 아카이빙용 사이트 구현 (개인) <span className={styles.skill}>Next.js</span> <span className={styles.skill}>mongoDB(Atlas)</span>
                                    <p/>&nbsp;(2023.04 - 2023.07)
                                    <p/>
                                    - FOTRA 다이어리 이미지 업로드·조회 API 및 DB 구조, 사용자 수정·탈퇴·관리자 권한 처리, 다국어·회원가입·마이페이지·포인트 UI 개선 (개인) <span className={styles.skill}>NestJS</span> <span className={styles.skill}>Prisma</span> <span className={styles.skill}>MySQL</span> <span className={styles.skill}>React</span> <span className={styles.skill}>TypeScript</span>
                                    <p/>&nbsp;(2025.05)
                                </details>
                                <p/>
                            </div>
                        </div>

                        <div className={styles.etcRow}>
                            <div className={styles.etcLabel}>
                                Study
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.etcDetails}>
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
