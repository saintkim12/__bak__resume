export default {
  user: {
    name: 'saintkim12',
    email: 'saintkim1232@gmail.com',
    phone: '-',
    github: 'https://github.com/saintkim12',
    blogger: 'https://helloimnote.blogspot.com',
    skype: '-'
  },
  achievements: {
    timeline: [
      { date: '1603', title: 'OO학원 교육 수료', description: 'OO컴퓨터학원에서 웹개발자 양성교육 수료' },
      { date: '1606', title: 'XX회사 입사', description: '모 콜센터 솔루션 회사에서 웹개발자로 근무' },
      { date: '1810', title: 'BB회사 입사', description: '모 회사에서 웹개발자로 근무' }
    ]
  },
  mySkill: {
    skillGroup: [{
      name: 'Backend/Server Setting',
      description: '웹 서버를 구성하기 위한 프로그래밍 언어 및 Database, 서버 세팅 기술 목록입니다.',
      skills: [
        { name: 'Java/Spring Boot', level: 80 },
        { name: 'javascript(Node.js)', level: 70 },
        { name: 'RDBMS(Oracle, MS-SQL, ...)', level: 75 },
        { name: 'NoSQL', level: 40 },
        { name: 'Docker(compose)', level: 70 }
      ]
    },
    {
      name: 'Frontend/Web Publishing',
      description: '사용자에게 제공하는 웹페이지를 구성하기 위한 프로그래밍 언어 및 기술 목록입니다.',
      skills: [
        { name: 'javascript', level: 90 },
        { name: 'jQuery', level: 75 },
        { name: 'Vue.js', level: 85 },
        { name: 'React.js', level: 40 },
        { name: 'html/css(scss)', level: 70 }
      ]
    }],
    mainSkill: [
      { name: 'Spring Boot', iconSrc: 'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg' },
      { name: 'Java 8+', iconClassName: 'fab fa-java', style: { fontSize: '5em' } },
      { name: 'Javascript ES6+', iconClassName: 'fab fa-js-square' },
      { name: 'Git', iconClassName: 'fab fa-git-alt' },
      { name: 'Vue.js', iconClassName: 'fab fa-vuejs', style: { fontSize: '5em' } },
      { name: 'sass/scss', iconClassName: 'fab fa-sass', style: { fontSize: '4em' } },
      { name: 'Docker', iconClassName: 'fab fa-docker', style: { fontSize: '4em' } },
      // { name: 'ai', iconClassName: iconSrc: 'template/images/icon_ai.png' },
      // { name: 'ld', iconSrc: 'template/images/icon_ld.png' },
      // { name: 'fl', iconSrc: 'template/images/icon_fl.png' },
      // { name: 'html', iconSrc: 'template/images/icon_html.png' },
      // { name: 'wp', iconSrc: 'template/images/icon_wp.png' },
      { name: 'jQuery', iconSrc: 'template/images/icon_jq.png' }
      // { name: 'seo', iconSrc: 'template/images/icon_seo.png' }
    ],
    description: [
      '기본적인 웹 서버/웹 어플리케이션을 위한 필수 스킬을 학습했고, 요즘 트렌드에 부합하고, 개발 역량을 늘릴 수 있는 언어 및 환경을 사용합니다.',
      '재사용성 및 효율적인 코드 작성을 목표로 환경을 이해하고 작업합니다.'
    ]
  },
  portfolio: {
    list: [
      {
        id: 190101,
        keyword: ['springboot', 'vuejs', 'oracle'],
        imgSrc: './images/portfolio_190101.png',
        title: '질병관리본부 국가건강정보포털 고도화(1차)',
        description: '질병관리본부 국가건강정보포털 프로토타입 CMS 및 사용자 화면 개발',
        detail: { img: ['./images/portfolio_190101_01.png', './images/portfolio_190101_02.png'], startDate: '2019-01', endDate: '2019-08', contents: '질병관리본부의 컨텐츠를 관리하는 CMS 개발\n작업된 화면을 Markdown으로 관리(Markdown Editor)\n저장된 Markdown 데이터를 보기 위한 css 퍼블리싱 작업' }
      },
      {
        id: 180301,
        keyword: ['freelancer', 'springboot', 'jsp', 'oracle'],
        imgSrc: './images/portfolio_180301.png',
        title: 'BGF네트웍스 모바일 상품권 시스템 고도화',
        description: 'BGF네트웍스 모바일 상품권 관리 시스템 개발',
        detail: { img: ['./images/portfolio_180301_01.png'], startDate: '2018-03', endDate: '2018-06', contents: '모바일 상품권/기프트카드 관리 페이지 개발\n 환경설정 페이지 개발\n 통계 페이지 개발 (부분설계 - 기능 - 화면)' }
      },
      {
        id: 170401,
        keyword: ['spring', 'jsp', 'mssql', 'nexacro'],
        imgSrc: './images/portfolio_170401.png',
        title: '농협a마켓(농협몰) 차세대 쇼핑몰 구축',
        description: '농협몰 BackOffice에서 상담사가 사용하는 상담화면 개발',
        detail: { img: [], startDate: '2017-04', endDate: '2018-01', contents: '상담 어플리케이션 웹 화면(nexacro) 개발\n소프트폰 연결\n통계 페이지 개발' }
      },
      {
        id: 170301,
        keyword: ['spring', 'jsp', 'postgresql', 'jquery'],
        imgSrc: './images/portfolio_170301.png',
        title: 'Recsee 3.0 기능 개발',
        description: '사내 녹취 및 관리 솔루션(Recsee 3.0) 개선 및 추가사항 개발',
        detail: {
          startDate: '2017-03',
          endDate: '2017-04',
          contents: '실시간 녹취 감청페이지 개발\n청취 플레이어 개발',
          img: ['./images/portfolio_170301_01.png', './images/portfolio_170301_02.png']
        }
      },
      {
        id: 170101,
        keyword: ['spring', 'jsp', 'postgresql', 'jquery'],
        imgSrc: './images/portfolio_170101.png',
        title: '한양사이버대학교 전화상담관리시스템 구축',
        description: '자사 CTI와 연동된 소프트폰 클라이언트(웹 어플리케이션) 개발',
        detail: {
          startDate: '2017-01',
          endDate: '2017-03',
          contents: '소프트폰 클라이언트(웹 어플리케이션) 개발\n소프트폰 연결\n통계 페이지 개발',
          img: ['./images/portfolio_170101_01.png', './images/portfolio_170101_02.png']
        }
      },
      {
        id: 160901,
        keyword: ['spring', 'jsp', 'postgresql', 'jquery'],
        imgSrc: './images/portfolio_160901.png',
        title: '서울사이버대학교 IPCC 시스템 구축',
        description: '서울사이버대학교 상담업무를 위한 상담 AP 개발',
        detail: {
          startDate: '2016-09',
          endDate: '2017-01',
          contents: '상담 AP 개발\n소프트폰 연결\n상담사/관리자용 채팅 서버/클라이언트 개발\n통계 페이지 개발',
          img: ['./images/portfolio_160901_01.png', './images/portfolio_160901_02.png', './images/portfolio_160901_03.png', './images/portfolio_160901_04.png']
        }
      },
      {
        id: 160701,
        keyword: ['spring', 'jsp', 'postgresql', 'jquery'],
        imgSrc: './images/portfolio_160701.png',
        title: '한국주택금융공사 제2단계 ARS 고도화',
        description: '자사 CTI와 연동된 콜(콜백) 관리 클라이언트 개발',
        detail: { img: ['./images/portfolio_160701_01.png'], startDate: '2016-07', endDate: '2016-10', contents: '콜백 클라이언트 개발\n통계 작업 및 관리 페이지 개발' }
      },
      {
        id: 160501,
        keyword: ['spring', 'jsp', 'postgresql', 'jquery', 'websocket'],
        imgSrc: './images/portfolio_160501.png',
        title: '서울시 자살예방센터 상담AP 개발',
        description: '서울시 자살예방센터 상담업무를 위한 상담 AP 개발',
        detail: { img: ['./images/portfolio_160501_01.png'], startDate: '2016-05', endDate: '2016-06', contents: '상담 AP 개발\n소프트폰 연결\n상담사/관리자용 채팅 클라이언트 개발\n통계 페이지 개발' }
      }
      // { id: 3, keyword: ['web', 'dtp'], imgSrc: 'template/images/pic_02.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 4, keyword: ['illustration', 'key'], imgSrc: 'template/images/pic_03.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 5, keyword: ['web', 'identity'], imgSrc: 'template/images/pic_04.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 6, keyword: ['dtp', 'identity'], imgSrc: 'template/images/pic_05.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 7, keyword: ['dtp', 'key'], imgSrc: 'template/images/pic_06.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 8, keyword: ['web', 'identity'], imgSrc: 'template/images/pic_07.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } }
    ]
  }
}
