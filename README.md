<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>김혜림 - 포트폴리오</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

    <style>
        /* 기본 스타일 */
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
            transition: background-color 0.3s, color 0.3s;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* 헤더 스타일 */
        header {
            background: skyblue;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 2.5em;
        }

        /* 네비게이션 바 스타일 */
        nav {
            background: #333;
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
        }

        nav ul li {
            display: inline;
        }

        nav ul li a {
            color: #fff;
            padding: 15px 20px;
            display: inline-block;
            text-decoration: none;
        }

        nav ul li a:hover {
            background: #555;
        }

        /* 메인 콘텐츠 스타일 */
        main {
            padding: 40px 0;
        }

        section {
            margin-bottom: 40px;
        }

        section h2 {
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 10px;
            font-size: 1.8em;
        }

        /* 프로필 섹션 스타일 */
        .profile-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .profile-item {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* 기술 섹션 스타일 */
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .skill {
            flex: 1 1 200px;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        /* 프로젝트 섹션 스타일 */
        .projects {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        .project {
            flex: 1 1 300px;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .project img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .project-link {
            color: #007BFF;
            text-decoration: none;
        }

        /* 맨 위로 가기 버튼 스타일 */
        #scrollTopBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: none;
            background-color: #333;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        /* 푸터 스타일 */
        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }

        /* 미디어 쿼리 */
        @media (max-width: 600px) {
            .profile-grid {
                grid-template-columns: 1fr;
            }

            .skills,
            .projects {
                flex-direction: column;
            }
        }
    </style>
</head>

<body>
    <!-- 헤더 -->
    <header>
        <div class="container">
            <h1>KHR's IT STORY</h1>
        </div>
    </header>

    <!-- 네비게이션 바 -->
    <nav>
        <div class="container">
            <ul>
                <li><a href="#profile">프로필</a></li>
                <li><a href="#career">경력</a></li>
                <li><a href="#skills">기술</a></li>
                <li><a href="#projects">프로젝트</a></li>
                <li><a href="#education">학력</a></li>
                <li><a href="#contact">연락처</a></li>
            </ul>
        </div>
    </nav>

    <!-- 섹션들 -->
    <main>
        <!-- 프로필 섹션 -->
        <section id="profile" class="container">
            <h2>프로필</h2>
            <div class="profile-grid">
                <div class="profile-item">김혜림<br>2000-03-16</div>
                <div class="profile-item">010-4849-3018<br>
                    <a href="mailto:ulsan20204109@gmail.com">ulsan20204109@gmail.com</a>
                </div>
                <div class="profile-item">울산대학교 수학과</div>
            </div>
        </section>

        <!-- 경력 섹션 -->
        <section id="career" class="container">
            <h2>경력 및 경험</h2>
            <div class="experience-item">
                <h3>웨딩홀 아르바이트</h3>
                <p>2018.10 ~ 2024.03</p>
                <p>신랑, 신부 리허설 진행 및 음향과 조명 관리 등 예식 진행의 총괄 관리자</p>
            </div>
            <div class="experience-item">
                <h3>KEPCO Digital Boot Camp 훈련생</h3>
                <p>2024.05 - 2024.10</p>
                <p>머신러닝/딥러닝 등의 인공지능 기술을 활용하여 데이터 가공/시각화/분석 능력을 바탕으로 에너지 산업 특정을 이해하고 이를 웹 서비스 기반의 비즈니스 접목 및 구축할 수 있는 SW
                    전문가 양성 교육과정</p>
            </div>
            <div class="experience-item">
                <h3>데이터분석준전문가(ADsP)</h3>
                <p>한국데이터산업진흥원</p>
            </div>
            <div class="experience-item">
                <h3>정보처리기사 (필기 합)</h3>
                <p>한국산업인력공단</p>
            </div>
            <div class="experience-item">
                <h3>자동차운전면허증 1종 보통</h3>
                <p>경북지방경찰청장</p>
            </div>
        </section>

        <!-- 기술 섹션 -->
        <section id="skills" class="container">
            <h2>기술</h2>
            <div class="skills">
                <div class="skill">
                    <h3>Java</h3>
                    <p>웹 개발 (Spring Boot)</p>
                </div>
                <div class="skill">
                    <h3>Python</h3>
                    <p>데이터 분석, 시각화 및 모델 구현</p>
                </div>
                <div class="skill">
                    <h3>R</h3>
                    <p>통계 모델링</p>
                </div>
                <div class="skill">
                    <h3>MySQL</h3>
                    <p>데이터베이스 관리 및 구축</p>
                </div>
                <div class="skill">
                    <h3>HTML5</h3>
                    <p>웹 구조 설계</p>
                </div>
                <div class="skill">
                    <h3>CSS3</h3>
                    <p>스타일링 및 반응형 디자인</p>
                </div>
                <div class="skill">
                    <h3>JavaScript</h3>
                    <p>프론트엔드 개발</p>
                </div>
            </div>
        </section>

        <!-- 프로젝트 섹션 -->
        <section id="projects" class="container">
            <h2>프로젝트</h2>
            <div class="projects">
                <div class="project">
                    <h3>투두리스트 (To Do List)</h3>
                    <p><strong>개요:</strong> 사용자가 해야 할 일을 효율적으로 관리할 수 있는 웹 플랫폼으로, 할 일 추가, 수정, 삭제 및 완료 여부 관리 기능 제공</p>
                    <p><strong>기술 스택:</strong> Java, SpringBoot, MySQL, HTML, CSS, JavaScript</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://github.com/khr316/todolist" target="_blank"
                            class="project-link">GitHub</a></p>
                </div>
                <div class="project">
                    <h3>회원가입 및 로그인 시스템</h3>
                    <p><strong>기능:</strong> 이메일 중복체크, 비밀번호 조건(특수문자 1개 이상, 알파벳 1개 이상, 12자 이상), 비밀번호 찾기 기능 구현</p>
                    <p><strong>기술 스택:</strong> Java, Spring Boot, MySQL, HTML, CSS, JavaScript</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://github.com/khr316/signup-login" target="_blank"
                            class="project-link">GitHub</a></p>
                </div>
                <div class="project">
                    <h3>KEPCO Digital Boot Camp DataMiniProject: 인스타그램 인사이트 분석 및 최적의 게시물 업로드 전략 도출</h3>
                    <p><strong>개요:</strong> Selenium을 사용하여 인스타그램 게시글 정보를 수집하고, 최적의 업로드 시점을 분석하여 성과를 극대화할 수 있는 전략을 제안한
                        프로젝트.</p>
                    <p><strong>기술 스택:</strong> Python, Selenium, Pandas, matplotlib, matplotlib</p>
                    <p><strong>개선사항:</strong> 게시물 사진 유형, 팔로워 연령대, 성별 및 비팔로워 참여를 고려한 전략 도출 필요.</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://github.com/khr316/instagram-insite" target="_blank"
                            class="project-link">GitHub</a></p>
                </div>
                <div class="project">
                    <h3>분실물 습득물 관리 플랫폼</h3>
                    <p><strong>개발 동기:</strong> 분실물 관리를 체계화하기 위한 사용자 친화적인 플랫폼 개발</p>
                    <p><strong>기술 스택:</strong> Java, Spring Boot, MySQL, HTML, CSS, JavaScript</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://github.com/khr316/lost-find" target="_blank"
                            class="project-link">GitHub</a></p>
                </div>
                <div class="project">
                    <h3>태양광 패널 성능 분석 및 관리 플랫폼</h3>
                    <p><strong>개요:</strong> 사용자가 입력한 패널 용량과 잉여량을 기반으로, 가까운 공공기관의 데이터와 비교 분석하여 패널 효율성을 제공</p>
                    <p><strong>기능:</strong> 패널 효율성 비교 및 유지 보수 시기 예측</p>
                    <p><strong>기술 스택:</strong> Python, Django, MySQL, HTML, CSS, JavaScript</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://github.com/khr316/zerosolar" target="_blank"
                            class="project-link">GitHub</a></p>
                </div>
                <div class="project">
                    <h3>YOLO 기반 페트병 수거 및 리워드 시스템</h3>
                    <p><strong>개요:</strong> YOLO 객체 탐지 기술을 활용하여 투명 페트병을 인식하고 수거하는 시스템 개발. 사용자는 리워드 포인트를 적립할 수 있으며, 이
                        포인트로 친환경 제품을 교환 가능</p>
                    <p><strong>챗봇 기능:</strong> 포인트 및 리워드에 대한 실시간 응답 제공</p>
                    <p><strong>기술 스택:</strong> Python (YOLO), Django, MySQL, HTML, CSS, JavaScript</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://github.com/khr316/skky" target="_blank"
                            class="project-link">GitHub</a></p>
                </div>
                <div class="project">
                    <h3>하삼동 커피 위치 시각화</h3>
                    <p><strong>개요:</strong> 울산 내 상권 중 하삼동 커피 위치를 데이터로 추출하여 Folium 라이브러리를 사용해 지도에 시각화한 프로젝트</p>
                    <p><strong>기술 스택:</strong> Python, Folium, Pandas, Numpy, Matplotlib, Seaborn</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://blog.naver.com/xhfhxhsxhs/223417673938"
                            target="_blank" class="project-link">blog</a></p>
                </div>

                <div class="project">
                    <h3>울산 인구 수 예측 (ARIMA)</h3>
                    <p><strong>개요:</strong> 울산 인구 데이터를 기반으로 R의 ARIMA 모델을 활용해 미래 인구 수를 예측한 프로젝트</p>
                    <p><strong>기술 스택:</strong> R, ARIMA, Forecast</p>
                    <p><strong>프로젝트 코드:</strong> <a href="https://blog.naver.com/xhfhxhsxhs/223422834575"
                            target="_blank" class="project-link">blog</a></p>
                    <p><a href="https://blog.naver.com/xhfhxhsxhs/223424041706" target="_blank"
                            class="project-link"></a></p>
                </div>
            </div>
        </section>

        <!-- 학력 섹션 -->
        <section id="education" class="container">
            <h2>학력</h2>
            <div class="education-item">
                <h3>학성여자고등학교</h3>
                <p><strong>자연계열</strong></p>
            </div>
            <div class="education-item">
                <h3>동국대학교 (편입)</h3>
                <p><strong>응용통계학 전공</strong><br>통계학 기초 및 R프로그래밍, Python 습득</p>
            </div>
            <div class="education-item">
                <h3>울산대학교 졸업</h3>
                <p><strong>수학 전공</strong><br>선형대수학 및 기초 프로그래밍 역량 강화</p>
            </div>
        </section>

        <!-- 연락처 섹션 -->
        <section id="contact" class="container">
            <h2>연락처</h2>
            <p><strong>GitHub:</strong> <a href="https://github.com/khr316"
                    target="_blank">https://github.com/khr316</a></p>
            <p><strong>Tistory:</strong> <a href="https://khr316.tistory.com"
                    target="_blank">https://khr316.tistory.com</a></p>
        </section>
    </main>

    <!-- 맨 위로 가기 버튼 -->
    <button id="scrollTopBtn" title="맨 위로 가기">&#8679;</button>

    <!-- 푸터 -->
    <footer>
        <div class="container">
            <p>&copy; 2024 Kim Hyerim Portfolio. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // 스크롤 시 버튼 표시
        window.onscroll = function () {
            const scrollTopBtn = document.getElementById('scrollTopBtn');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        };

        // 맨 위로 가기 버튼 클릭 시 스크롤
        document.getElementById('scrollTopBtn').addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    </script>
</body>

</html>
