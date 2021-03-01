export default {
  user: {
    name: 'saintkim12',
    email: 'saintkim1232@gmail.com',
    phone: '-',
    skype: '-'
  },
  achievements: {
    timeline: [
      { key: 1, date: '211209', title: 'tempora incidunt', description: 'Dolor sit consectetur adipisicing elit, sed do eiusmod tempor' },
      { key: 2, date: '211209', title: 'tempora incidunt', description: 'Dolor sit consectetur adipisicing elit, sed do eiusmod tempor' }
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
      { name: 'ps', iconSrc: 'template/images/icon_ps.png' },
      { name: 'ai', iconSrc: 'template/images/icon_ai.png' },
      { name: 'ld', iconSrc: 'template/images/icon_ld.png' },
      { name: 'fl', iconSrc: 'template/images/icon_fl.png' },
      { name: 'html', iconSrc: 'template/images/icon_html.png' },
      { name: 'wp', iconSrc: 'template/images/icon_wp.png' },
      { name: 'jq', iconSrc: 'template/images/icon_jq.png' },
      { name: 'seo', iconSrc: 'template/images/icon_seo.png' }
    ],
    description: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.',
      'Qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    ]
  },
  portfolio: {
    list: [
      {
        id: 190101,
        keyword: ['springboot', 'vue.js', 'oracle'],
        imgSrc: './images/portfolio_190101.png',
        title: '질병관리본부 국가건강정보포털 고도화(1차)',
        description: '질병관리본부 국가건강정보포털 프로토타입 CMS 및 사용자 화면 개발',
        detail: { img: ['./images/portfolio_190101_01.png'], startDate: '2019-01', endDate: '2019-08', contents: '질병관리본부의 컨텐츠를 관리하는 CMS 개발\n작업된 화면을 Markdown으로 관리(Markdown Editor)\n저장된 Markdown 데이터를 보기 위한 css 퍼블리싱 작업' }
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
        title: '농협a마켓(농협몰) 차세대 쇼핑몰 구축 프로젝트',
        description: '농협몰 BackOffice에서 상담사가 사용하는 상담화면 개발',
        detail: { img: [], startDate: '2017-04', endDate: '2018-01', contents: '상담 어플리케이션 웹 화면(nexacro) 개발\n소프트폰 연결\n통계 페이지 개발' }
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
