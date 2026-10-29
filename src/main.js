import './style.css'

document.querySelector('#app').innerHTML = `
  <section class="hero" id="hero">
    <div class="hero-visual-card">
      <img src="/hero-main.jpg" alt="空港貨物の現場で働くスタッフ" class="hero-bg-img">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1><span class="hero-h1-lead">特定技能、<br class="sp-only">育成就労（技能実習生）の紹介から</span><br><span class="highlight">生活サポートまで<br class="sp-only">一気通貫。</span></h1>
        <p>外国人材500名の支援実績を、貴社の力に。<br>WECは、現場を知るからこそできる質の高い採用支援を提供します。</p>
        <div class="hero-btns">
          <a href="#contact" class="btn btn-primary">無料で相談する</a>
          <a href="/download.html" class="btn btn-secondary">資料請求(無料)</a>
        </div>
      </div>
    </div>
  </section>

  <section class="logos section-padding">
    <div class="logo-section-container">
      <div class="logo-slider">
        <div class="logo-track row-1">
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
          <!-- Duplicate for seamless scroll -->
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
        </div>
        <div class="logo-track row-2">
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
          <!-- Duplicate for seamless scroll -->
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
          <img src="/logo-client-06.png" alt="株式会社アーチ" class="logo-item">
          <img src="/logo-client-03.png" alt="株式会社フィルド食品" class="logo-item">
          <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス" class="logo-item">
          <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社" class="logo-item">
        </div>
      </div>
    </div>
  </section>

  <section class="problem section-padding" id="problem">
    <div class="container text-center">
      <h2 class="section-title" data-en="PROBLEMS">この課題を抱えていませんか？</h2>
      <div class="problem-grid">
        <div class="problem-card">
          <p>「募集を出しても応募が全く来ない…」</p>
        </div>
        <div class="problem-card">
          <p>「せっかく採用しても、すぐに辞めてしまう…」</p>
        </div>
        <div class="problem-card">
          <p>「教育に時間が奪われ、現場が疲弊している…」</p>
        </div>
        <div class="problem-card">
          <p>「言葉の壁があり、細かな指示が伝わらない…」</p>
        </div>
        <div class="problem-card">
          <p>「生活習慣の違いで、現場でトラブルが絶えない…」</p>
        </div>
        <div class="problem-card">
          <p>「複雑なビザ申請や法的手続きが大きな負担…」</p>
        </div>
      </div>
      
      <div class="problem-illustration-wrapper">
        <img src="/problem-illustration.png" alt="悩みを抱える担当者" class="problem-illustration">
      </div>
      
      <div class="problem-arrow">
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
      
      <h3 class="problem-solution-text"><span class="highlight-primary">ワールドエンタプライズ（WEC）</span><br class="sp-only">なら解決できます！</h3>
    </div>
  </section>

  <section class="services section-padding" id="about">
    <div class="container">
      <h2 class="section-title" data-en="SERVICES">WECのサービス内容</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>外国人材の紹介</h3>
          <p>貴社のニーズに最適な特定技能人材を厳選してご紹介します。</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <h3>部屋の手配</h3>
          <p>来日後の住居確保をスムーズに行い、即戦力として集中できる環境を整えます。</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <h3>通信契約サポート</h3>
          <p>煩雑なネット環境やSIMカードの契約も代行・サポートします。</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <polyline points="17 11 19 13 23 9"></polyline>
            </svg>
          </div>
          <h3>面接・選考代行</h3>
          <p>求人に関する言語サポートから面接同席までトータルでサポートします。</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3>ビザ手続きサポート</h3>
          <p>複雑な在留資格の申請業務を専門家と連携しサポートします。</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <h3>入社前研修</h3>
          <p>日本の生活習慣やマナー、職場のルールを基礎から指導します。</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h3>生活フルサポート</h3>
          <p>役所の手続きから日常生活の相談まで、登録支援機関として伴走します。</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </div>
          <h3>多言語窓口</h3>
          <p>ちょっとした悩みの相談等いつでも母国語で対応します。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="strength section-padding" id="strength">
    <div class="container strength-content">
      <div class="strength-text">
        <h2 class="section-title" data-en="STRENGTHS" style="text-align: left;">WECだからこその強み</h2>
        <p>私たちは単なる「紹介会社」ではありません。<br>自社グループの現場でも多くの外国人材が働いており、採用から受け入れ・定着までを自ら運営しています。</p>
        <p>・現場で起こるリアルな課題と解決策を熟知<br>・定着率を高めるためのノウハウが凝縮<br>・実体験に基づいた、嘘のないサポート体制</p>
        <p class="stats-note">※数値は2026年10月末日現在。外国人材支援人数は特定技能・技能実習を含みます。定着実績は社内定義に基づきます。</p>
      </div>
      <div class="strength-visual">
        <img src="/strength-main.jpg" alt="空港で働くWECのスタッフ" class="strength-main-img">
        <img src="/strength-1.jpg" alt="食品工場で働く外国人スタッフ" class="strength-sub-img sub-img-1">
        <img src="/strength-2.jpg" alt="航空機を誘導するスタッフ" class="strength-sub-img sub-img-2">
        <img src="/strength-3.jpg" alt="車両を運転する空港スタッフ" class="strength-sub-img sub-img-3">
        <img src="/strength-4.jpg" alt="空港リムジンバスのスタッフ" class="strength-sub-img sub-img-4">
        <img src="/strength-5.jpg" alt="電話対応をするスタッフ" class="strength-sub-img sub-img-5">
        <div class="stats-card card-1">
          <span class="stats-label">外国人材支援人数</span>
          <span class="stats-value">500<span>名</span></span>
        </div>
        <div class="stats-card card-2">
          <span class="stats-label">定着実績</span>
          <span class="stats-value">98<span>%</span></span>
        </div>
        <div class="stats-card card-3">
          <span class="stats-label">受け入れ企業数</span>
          <span class="stats-value">11<span>社</span></span>
        </div>
      </div>
    </div>
    <div class="container strength-network">
      <div class="net-intro">
        <div class="net-head">
          <p class="net-eyebrow">OVERSEAS NETWORK</p>
          <h3>アジアを中心とした<br>海外ネットワークで、<br>優秀な外国人材を日本へ</h3>
          <p class="net-lead">現地の信頼できるパートナーと連携し、多様な人材の確保を支援しています。スリランカには現地法人を構え、採用から日本語教育まで一貫して行っています。</p>
        </div>
        <figure class="net-photo">
          <img src="/net-slj.jpg" alt="スリランカの現地法人 SAKURA LANKA JAPAN でのWECメンバーと現地スタッフ" loading="lazy">
          <figcaption><img src="/flag-lk.png" alt="" width="22" height="16"> スリランカ現地法人 SAKURA LANKA JAPAN</figcaption>
        </figure>
      </div>
      <div class="net-cards">
          <div class="net-card net-card-main">
            <div class="net-card-head">
              <img src="/flag-lk.png" alt="" class="net-flag" width="40" height="30">
              <h4>スリランカ</h4>
              <span class="net-tag">現地法人あり</span>
            </div>
            <p class="net-partner">SAKURA LANKA JAPAN FOREIGN EMPLOYMENT (PVT) LTD と連携</p>
            <ul><li>安定した人材の確保</li><li>日本語教育の実施</li><li>継続的なサポート体制</li></ul>
          </div>
          <div class="net-card">
            <div class="net-card-head">
              <img src="/flag-id.png" alt="" class="net-flag" width="40" height="30">
              <h4>インドネシア</h4>
              <span class="net-tag">現地ネットワーク</span>
            </div>
            <p class="net-partner">送り出し機関等と連携</p>
            <ul><li>若く意欲のある人材</li><li>幅広い業種に対応</li><li>安定した送り出し体制</li></ul>
          </div>
          <div class="net-card">
            <div class="net-card-head">
              <img src="/flag-np.png" alt="" class="net-flag" width="40" height="30">
              <h4>ネパール</h4>
              <span class="net-tag">現地ネットワーク</span>
            </div>
            <p class="net-partner">送り出し機関等と連携</p>
            <ul><li>真面目で勤勉な人材</li><li>日本への関心が高い</li><li>継続的な人材の供給</li></ul>
          </div>
      </div>
      <p class="net-more">その他の国 ｜ 対応国を順次拡大し、より多くの企業のニーズにお応えします。</p>
      <div class="net-points">
          <div class="net-point"><span class="net-point-check">✓</span><div><strong>各国との連携体制</strong><span>信頼できる現地パートナーと連携</span></div></div>
          <div class="net-point"><span class="net-point-check">✓</span><div><strong>国ごとの採用ルート確保</strong><span>現地の特性に応じた採用ルートを構築</span></div></div>
          <div class="net-point"><span class="net-point-check">✓</span><div><strong>複数国からのご提案が可能</strong><span>企業のニーズに合わせ最適な人材をご提案</span></div></div>
      </div>
      <div class="group-link">
        <p class="net-eyebrow">GROUP NETWORK</p>
        <h3>代表 諸岡勇人のもと、<br class="sp-only">3つの組織が連携</h3>
        <p class="group-lead">ワールドエンタプライズ、スリランカ現地法人のSAKURA LANKA JAPAN、監理団体のSGP協同組合は、いずれも代表を諸岡勇人が務めています。<br class="pc-only">現地での募集・教育から来日後の受け入れ・定着まで、組織をまたいだ情報共有と調整がスムーズに行えます。</p>
        <div class="group-orgs">
          <div class="group-org">
            <div class="group-logo"><img src="/wec-logo2.png" alt="ワールドエンタプライズ株式会社(WEC)"></div>
            <p class="group-role">日本 ｜ 人材紹介・登録支援機関</p>
            <h4>ワールドエンタプライズ株式会社</h4>
            <p>特定技能人材の紹介、来日後の生活支援・各種手続き、入社後の定着支援</p>
          </div>
          <div class="group-org">
            <div class="group-logo"><img src="/logo-slj.png" alt="SAKURA LANKA JAPAN FOREIGN EMPLOYMENT (PVT) LTD"></div>
            <p class="group-role"><img src="/flag-lk.png" alt="" class="group-flag">スリランカ ｜ 現地法人</p>
            <h4>SAKURA LANKA JAPAN</h4>
            <p>現地での人材募集・選考、日本語・職種教育、来日前の準備</p>
          </div>
          <div class="group-org">
            <div class="group-logo"><img src="/logo-sgp.png" alt="SGP協同組合(サクラグローバルパートナー協同組合)"></div>
            <p class="group-role">日本 ｜ 監理団体</p>
            <h4>SGP協同組合</h4>
            <p>2027年4月に始まる育成就労制度（現行の技能実習制度）での受け入れに対応</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="cases section-padding" id="cases">
    <div class="container">
      <h2 class="section-title" data-en="CASES">導入企業インタビュー</h2>
      <div class="cases-grid cases-grid-4">
        <div class="case-card">
          <div class="case-img-wrapper">
            <img src="/case_aks_1.jpg" alt="AKSグランドハンドリング株式会社様" class="case-img">
          </div>
          <div class="case-body">
            <div class="case-profile">
              <div class="case-company-logo">
                <img src="/logo-client-01.svg" alt="AKSグランドハンドリング株式会社 ロゴ" class="case-logo">
              </div>
              <div class="case-company-info">
                <p class="case-company-name">AKSグランドハンドリング株式会社様</p>
                <div class="case-tags">
                  <span class="case-tag">空港関連</span>
                  <span class="case-tag">特定技能：空港グランドハンドリング</span>
                </div>
              </div>
            </div>
            <h3 class="case-title">自ら質問し、次の工程を考えて動く。グランドハンドリングの現場で特定技能人材が成長するまで</h3>
            <a href="/case-study-airport.html" class="btn btn-outline">インタビューを読む <span class="arrow">→</span></a>
          </div>
        </div>

        <div class="case-card">
          <div class="case-img-wrapper">
            <img src="/case_snk_1.jpg" alt="株式会社サンエアカーゴサービス様" class="case-img">
          </div>
          <div class="case-body">
            <div class="case-profile">
              <div class="case-company-logo">
                <img src="/logo-client-02.png" alt="株式会社サンエアカーゴサービス ロゴ" class="case-logo">
              </div>
              <div class="case-company-info">
                <p class="case-company-name">株式会社サンエアカーゴサービス様</p>
                <div class="case-tags">
                  <span class="case-tag">空港貨物</span>
                  <span class="case-tag">特定技能：空港グランドハンドリング</span>
                </div>
              </div>
            </div>
            <h3 class="case-title">採用して終わりではない。外国人材が安心して働き続けるための支援とは</h3>
            <a href="/case-study-suncargo.html" class="btn btn-outline">インタビューを読む <span class="arrow">→</span></a>
          </div>
        </div>

        <div class="case-card">
          <div class="case-img-wrapper">
            <img src="/case_filed_1.jpg" alt="株式会社フィルド食品様" class="case-img">
          </div>
          <div class="case-body">
            <div class="case-profile">
              <div class="case-company-logo">
                <img src="/logo-client-03.png" alt="株式会社フィルド食品 ロゴ" class="case-logo">
              </div>
              <div class="case-company-info">
                <p class="case-company-name">株式会社フィルド食品様</p>
                <div class="case-tags">
                  <span class="case-tag">食品製造業</span>
                  <span class="case-tag">特定技能：飲食料品製造業</span>
                </div>
              </div>
            </div>
            <h3 class="case-title">実際に働く姿を見て変わった、外国人材への印象。食品製造の現場で続けてきた外国人材の受け入れ</h3>
            <a href="/case-study-food.html" class="btn btn-outline">インタビューを読む <span class="arrow">→</span></a>
          </div>
        </div>

        <div class="case-card">
          <div class="case-img-wrapper">
            <img src="/case_arch_1.jpg" alt="食品加工の調理・盛り付けの現場" class="case-img">
          </div>
          <div class="case-body">
            <div class="case-profile">
              <div class="case-company-logo">
                <img src="/logo-client-06.png" alt="株式会社アーチ ロゴ" class="case-logo">
              </div>
              <div class="case-company-info">
                <p class="case-company-name">株式会社アーチ様</p>
                <div class="case-tags">
                  <span class="case-tag">食品加工</span>
                  <span class="case-tag">特定技能：飲食料品製造業</span>
                </div>
              </div>
            </div>
            <h3 class="case-title">1時間半の作業が1時間未満に。食品加工の現場で外国人材が戦力になるまで</h3>
            <a href="/case-study-arch.html" class="btn btn-outline">インタビューを読む <span class="arrow">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mid-cta">
    <div class="mid-cta-photo" role="img" aria-label="空港カウンターで働く外国人スタッフと日本人スタッフ"></div>
    <div class="container">
      <h2 class="mid-cta-title" style="color: white;">外国人採用の「失敗しない」<br>ノウハウが、ここにはあります。</h2>
      <div class="mid-cta-btns">
        <a href="/download.html" class="btn btn-secondary btn-lg">無料で総合資料を請求する</a>
        <a href="#contact" class="btn btn-white-outline btn-lg">無料で相談・お問い合わせ</a>
      </div>
    </div>
  </section>

  <section class="flow section-padding" id="flow">
    <div class="container">
      <h2 class="section-title" data-en="FLOW">受け入れまでの流れ</h2>
      <div class="flow-phases">
        <div class="flow-phase flow-phase-abroad">
          <div class="flow-phase-label"><span class="flow-phase-tag">STEP 1</span>海外</div>
          <ol class="flow-steps">
          <li class="flow-step">
            <div class="flow-step-num"><span>01</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg></span><h3>人材募集・人材育成<span class="flow-step-sub">(送り出し機関)</span></h3></div>
              <p class="flow-step-desc">送り出し機関に求人を出し、各職種の試験に合格している人材を募集</p>
            </div>
          </li>
          <li class="flow-step">
            <div class="flow-step-num"><span>02</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span><h3>選考・面接</h3></div>
            </div>
          </li>
          <li class="flow-step">
            <div class="flow-step-num"><span>03</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></span><h3>日本語・職種教育</h3></div>
              <p class="flow-step-desc">日本語や就業する職種に必要な知識・技能を教育</p>
            </div>
          </li>
          <li class="flow-step">
            <div class="flow-step-num"><span>04</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span><h3>来日前研修<span class="flow-step-sub">(事前ガイダンス)</span></h3></div>
              <p class="flow-step-desc">日本での生活・仕事に必要なルールやマナーなどを事前に説明</p>
            </div>
          </li>
          </ol>
        </div>

        <div class="flow-flight" aria-label="フライト">
          <div class="flow-flight-line"></div>
          <div class="flow-flight-icon"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg></div>
          <div class="flow-flight-label">フライト</div>
          <div class="flow-flight-line"></div>
        </div>

        <div class="flow-phase flow-phase-japan">
          <div class="flow-phase-label"><span class="flow-phase-tag">STEP 2</span>日本</div>
          <ol class="flow-steps">
          <li class="flow-step">
            <div class="flow-step-num"><span>05</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span><h3>来日・受け入れ</h3></div>
            </div>
          </li>
          <li class="flow-step">
            <div class="flow-step-num"><span>06</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg></span><h3>生活支援・各種行政手続き</h3></div>
              <p class="flow-step-desc">住居、ライフライン、銀行口座、携帯電話、公的手続きなどをサポート</p>
            </div>
          </li>
          <li class="flow-step">
            <div class="flow-step-num"><span>07</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span><h3>入社</h3></div>
            </div>
          </li>
          <li class="flow-step">
            <div class="flow-step-num"><span>08</span></div>
            <div class="flow-step-body">
              <div class="flow-step-head"><span class="flow-step-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg></span><h3>定着支援</h3></div>
              <p class="flow-step-desc">入社後の相談対応や定期的なフォローを実施</p>
            </div>
          </li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section class="faq section-padding" id="faq">
    <div class="container">
      <h2 class="section-title" data-en="FAQ">よくあるご質問</h2>
      <div class="faq-list">
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">どの国の人材を採用できますか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>スリランカ、インドネシア、ネパールを中心に、海外の現地ネットワークを活用して人材をご紹介しています。<br>今後も対応国を順次拡大していきます。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">どのような人材を紹介できますか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>特定技能外国人・技能実習生に対応しています。<br>企業の業種・仕事内容・採用条件に合わせて、必要な人材を募集・選考します。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">日本語はどのくらい話せますか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>N5～N2の人材がいます。人材によって異なりますが、来日前から日本語教育を行っています。特定技能については、必要な日本語能力などの条件を満たした人材をご紹介します。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">採用までどのくらいかかりますか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>在留カードの申請や受け入れ先の申請などもあり最短で3か月、長くて9か月ほどになります。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">外国人材の採用が初めてでも大丈夫ですか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>はい。採用だけでなく、各種手続き、来日準備、住居・生活支援、入社後のフォローまで一貫してサポートします。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">住居や生活の準備はどうすればいいですか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>住居の確保から、電気・水道などの生活インフラ、銀行口座、携帯電話、公的手続きなど、来日後の生活立ち上げをサポートします。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">来日後はどこまでサポートしてもらえますか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>空港からの送迎、住居・生活環境の整備、各種行政手続き、入社後の相談、定期面談など、安心して働き始められる環境づくりをサポートします。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">入社後もサポートしてもらえますか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>はい。外国人材への定期的なフォローに加え、企業とも連携しながら、職場や生活面での問題を早期に把握し、長期的な定着を支援します。</p></div>
        </details>
        <details>
          <summary><span class="faq-q">Q</span><span class="faq-q-text">退職・離職した場合はどうなりますか？</span></summary>
          <div class="faq-answer"><span class="faq-a">A</span><p>退職・離職の状況を確認した上で、企業・外国人材双方に必要な対応を行います。契約内容に応じて、再度の人材紹介などについてもご案内します。</p></div>
        </details>
      </div>
    </div>
  </section>

  <section class="contact section-padding" id="contact">
    <div class="container text-center">
      <h2 class="section-title" data-en="CONTACT">ご相談窓口</h2>
      <p>外国人採用に関するお悩み、費用感などお気軽にご相談ください。</p>
      <form class="contact-form" action="https://formspree.io/f/mykdaakn" method="POST">
        <!-- Replace YOUR_FORM_ID_HERE with the actual Formspree endpoint ID -->
        <input type="text" name="name" placeholder="お名前" required>
        <input type="text" name="company" placeholder="貴社名" required>
        <input type="text" name="department" placeholder="部署名" required>
        <input type="email" name="email" placeholder="メールアドレス" required>
        <input type="tel" name="phone" placeholder="お電話番号" required>
        
        <select name="inquiry_type" required>
          <option value="" disabled selected>お問い合わせ内容を選択してください</option>
          <option value="service">サービスに関するお問い合わせ</option>
          <option value="price">料金に関するお問い合わせ</option>
          <option value="other">その他のお問い合わせ</option>
        </select>

        <textarea name="message" placeholder="お問い合わせの詳細内容を自由にご記入ください" required></textarea>
        
        <div class="privacy-policy">
          <p class="privacy-prompt">「<a href="#" class="policy-link">個人情報保護方針</a>」をご確認のうえ、同意いただける場合はチェックしてください。</p>
          <label class="privacy-label">
            <input type="checkbox" name="privacy_consent" required>
            個人情報の取り扱いに同意します。
          </label>
          <div class="privacy-disclaimer">
            <p>本フォームを送信することで、当社による個人情報の保存および処理（お問い合わせ対応、記録管理、品質向上等の目的）に同意いただいたものとみなします。</p>
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary">送信する</button>
      </form>
    </div>
  </section>

  <aside class="side-cta" id="side-cta">
    <div class="side-cta-inner">
      <button class="side-cta-close" id="side-cta-close" aria-label="閉じる">&times;</button>
      <img src="/cta-banner.jpg" alt="WEC総合資料" class="side-cta-banner">
      <p>【無料】<br>特定技能人材の採用・定着が<br>わかる資料をお送りします</p>
      <a href="/download.html" class="btn btn-secondary btn-sm">資料請求</a>
    </div>
  </aside>

  <!-- Mobile Bottom CTA -->
  <div class="mobile-bottom-cta" id="mobile-bottom-cta">
    <a href="/download.html" class="btn btn-primary mobile-cta-btn">無料で総合資料を請求する</a>
  </div>
`

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Handle side-cta and mobile-bottom-cta visibility
let ctaDismissed = false;
const sideCta = document.querySelector('#side-cta');
const mobileCta = document.querySelector('#mobile-bottom-cta');
const closeBtn = document.querySelector('#side-cta-close');

closeBtn.addEventListener('click', () => {
  ctaDismissed = true;
  sideCta.classList.remove('visible');
  if (mobileCta) mobileCta.classList.remove('visible');
});

window.addEventListener('scroll', () => {
  if (ctaDismissed) return;

  if (window.scrollY > 500) {
    sideCta.classList.add('visible');
    if (mobileCta) mobileCta.classList.add('visible');
  } else {
    sideCta.classList.remove('visible');
    if (mobileCta) mobileCta.classList.remove('visible');
  }
});
// Privacy Policy Modal Logic
const privacyLinks = document.querySelectorAll('a[href="#"], .policy-link'); // Select relevant links
const privacyModal = document.getElementById('privacy-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

if (privacyModal && modalCloseBtn) {
  // Open modal
  privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Only prevent default if it's strictly a privacy link (to avoid breaking other # links temporarily)
      if (link.textContent.includes('プライバシー') || link.textContent.includes('個人情報') || link.classList.contains('policy-link')) {
        e.preventDefault();
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  });

  // Close modal on button click
  modalCloseBtn.addEventListener('click', () => {
    privacyModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close modal on click outside content
  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
      privacyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
      privacyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// AJAX Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Redirect to thanks page
        window.location.href = '/thanks.html';
      } else {
        const data = await response.json();
        if (data.errors) {
          alert('エラーが発生しました: ' + data.errors.map(error => error.message).join(', '));
        } else {
          alert('送信に失敗しました。時間をおいて再度お試しください。');
        }
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    } catch (error) {
      alert('ネットワークエラーが発生しました。インターネット接続を確認してください。');
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}
