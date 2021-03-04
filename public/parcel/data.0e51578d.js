// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1j6wU":[function(require,module,exports) {

var Refresh = require('react-refresh/runtime');

Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
  return function(type) {
    return type;
  };
};
},{"react-refresh/runtime":"592mh"}],"456eg":[function(require,module,exports) {
var HMR_HOST = null;var HMR_PORT = 1234;var HMR_SECURE = false;var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";module.bundle.HMR_BUNDLE_ID = "fa376970a189b55455786ec50e51578d";/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */

var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function(fn) {
      this._acceptCallbacks.push(fn || function() {});
    },
    dispose: function(fn) {
      this._disposeCallbacks.push(fn);
    },
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept, acceptedAssets;

function getHostname() {
  return (
    HMR_HOST ||
    (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost')
  );
}

function getPort() {
  return HMR_PORT || location.port;
}

// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol =
    HMR_SECURE ||
    (location.protocol == 'https:' &&
      !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
      ? 'wss'
      : 'ws';
  var ws = new WebSocket(
    protocol + '://' + hostname + (port ? ':' + port : '') + '/',
  );
  ws.onmessage = function(event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};

    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();

      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);

      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept =
          asset.type === 'css' ||
          (asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset));
        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();

        assets.forEach(function(asset) {
          hmrApply(module.bundle.root, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe
          ? ansiDiagnostic.codeframe
          : ansiDiagnostic.stack;

        console.error(
          '🚨 [parcel]: ' +
            ansiDiagnostic.message +
            '\n' +
            stack +
            '\n\n' +
            ansiDiagnostic.hints.join('\n'),
        );
      }

      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function(e) {
    console.error(e.message);
  };
  ws.onclose = function(e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  let errorHTML =
    '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;

    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }

  errorHTML += '</div>';

  overlay.innerHTML = errorHTML;

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push([bundle, k]);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function() {
    if (link.parentNode !== null) {
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute(
    'href',
    link.getAttribute('href').split('?')[0] + '?' + Date.now(),
  );
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function() {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer =
        hostname === 'localhost'
          ? new RegExp(
              '^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort(),
            ).test(href)
          : href.indexOf(hostname + ':' + getPort());
      var absolute =
        /^https?:\/\//i.test(href) &&
        href.indexOf(window.location.origin) !== 0 &&
        !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (asset.type === 'css') {
    reloadCSS();
    return;
  }

  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!asset.depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }

    return hmrAcceptCheck(bundle.parent, asset);
  }

  let id = asset.id;
  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;

  var cached = bundle.cache[id];

  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(module.bundle.root, id).some(function(v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function(cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function(cb) {
      var assetsToAlsoAccept = cb(function() {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4AbXi":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
exports.default = {
  user: {
    name: 'saintkim12',
    email: 'saintkim1232@gmail.com',
    phone: '-',
    skype: '-'
  },
  achievements: {
    timeline: [{
      key: 1,
      date: '211209',
      title: 'tempora incidunt',
      description: 'Dolor sit consectetur adipisicing elit, sed do eiusmod tempor'
    }, {
      key: 2,
      date: '211209',
      title: 'tempora incidunt',
      description: 'Dolor sit consectetur adipisicing elit, sed do eiusmod tempor'
    }]
  },
  mySkill: {
    skillGroup: [{
      name: 'Backend/Server Setting',
      description: '웹 서버를 구성하기 위한 프로그래밍 언어 및 Database, 서버 세팅 기술 목록입니다.',
      skills: [{
        name: 'Java/Spring Boot',
        level: 80
      }, {
        name: 'javascript(Node.js)',
        level: 70
      }, {
        name: 'RDBMS(Oracle, MS-SQL, ...)',
        level: 75
      }, {
        name: 'NoSQL',
        level: 40
      }, {
        name: 'Docker(compose)',
        level: 70
      }]
    }, {
      name: 'Frontend/Web Publishing',
      description: '사용자에게 제공하는 웹페이지를 구성하기 위한 프로그래밍 언어 및 기술 목록입니다.',
      skills: [{
        name: 'javascript',
        level: 90
      }, {
        name: 'jQuery',
        level: 75
      }, {
        name: 'Vue.js',
        level: 85
      }, {
        name: 'React.js',
        level: 40
      }, {
        name: 'html/css(scss)',
        level: 70
      }]
    }],
    mainSkill: [{
      name: 'ps',
      iconSrc: '_template/images/icon_ps.png'
    }, {
      name: 'ai',
      iconSrc: '_template/images/icon_ai.png'
    }, {
      name: 'ld',
      iconSrc: '_template/images/icon_ld.png'
    }, {
      name: 'fl',
      iconSrc: '_template/images/icon_fl.png'
    }, {
      name: 'html',
      iconSrc: '_template/images/icon_html.png'
    }, {
      name: 'wp',
      iconSrc: '_template/images/icon_wp.png'
    }, {
      name: 'jq',
      iconSrc: '_template/images/icon_jq.png'
    }, {
      name: 'seo',
      iconSrc: '_template/images/icon_seo.png'
    }],
    description: ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.', 'Qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.']
  },
  portfolio: {
    list: [{
      id: 190101,
      keyword: ['springboot', 'vue.js', 'oracle'],
      imgSrc: './images/portfolio_190101.png',
      title: '질병관리본부 국가건강정보포털 고도화(1차)',
      description: '질병관리본부 국가건강정보포털 프로토타입 CMS 및 사용자 화면 개발',
      detail: {
        img: ['./images/portfolio_190101_01.png'],
        startDate: '2019-01',
        endDate: '2019-08',
        contents: '질병관리본부의 컨텐츠를 관리하는 CMS 개발\n작업된 화면을 Markdown으로 관리(Markdown Editor)\n저장된 Markdown 데이터를 보기 위한 css 퍼블리싱 작업'
      }
    }, {
      id: 180301,
      keyword: ['freelancer', 'springboot', 'jsp', 'oracle'],
      imgSrc: './images/portfolio_180301.png',
      title: 'BGF네트웍스 모바일 상품권 시스템 고도화',
      description: 'BGF네트웍스 모바일 상품권 관리 시스템 개발',
      detail: {
        img: ['./images/portfolio_180301_01.png'],
        startDate: '2018-03',
        endDate: '2018-06',
        contents: '모바일 상품권/기프트카드 관리 페이지 개발\n 환경설정 페이지 개발\n 통계 페이지 개발 (부분설계 - 기능 - 화면)'
      }
    }, {
      id: 170401,
      keyword: ['spring', 'jsp', 'mssql', 'nexacro'],
      imgSrc: './images/portfolio_170401.png',
      title: '농협a마켓(농협몰) 차세대 쇼핑몰 구축 프로젝트',
      description: '농협몰 BackOffice에서 상담사가 사용하는 상담화면 개발',
      detail: {
        img: [],
        startDate: '2017-04',
        endDate: '2018-01',
        contents: '상담 어플리케이션 웹 화면(nexacro) 개발\n소프트폰 연결\n통계 페이지 개발'
      }
      // { id: 3, keyword: ['web', 'dtp'], imgSrc: '_template/images/pic_02.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 4, keyword: ['illustration', 'key'], imgSrc: '_template/images/pic_03.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 5, keyword: ['web', 'identity'], imgSrc: '_template/images/pic_04.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 6, keyword: ['dtp', 'identity'], imgSrc: '_template/images/pic_05.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 7, keyword: ['dtp', 'key'], imgSrc: '_template/images/pic_06.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } },
      // { id: 8, keyword: ['web', 'identity'], imgSrc: '_template/images/pic_07.png', title: '', description: '', detail: { imgSrc: '', date: '2020-01-01', contents: '' } }
    }]
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["1j6wU","456eg"], null, "parcelRequire6ab7")

//# sourceMappingURL=data.0e51578d.js.map
