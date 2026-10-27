import './style.css'

document.querySelector('#app').innerHTML = `
  <section class="hero" id="hero">
    <div class="hero-visual-card">
      <img src="/hero-main.jpg" alt="WEC" class="hero-bg-img">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1>特定技能人材の紹介から<br><span class="highlight">生活サポートまで一気通貫。</span></h1>
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
      
      <h3 class="problem-solution-text"><span class="highlight-primary">WEC</span>なら解決できます！</h3>
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
          <p>複雑な在留資格の申請業務を専門家と連携し代行します。</p>
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
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" alt="働く外国人スタッフ" class="strength-main-img">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" alt="働くスタッフ2" class="strength-sub-img sub-img-1">
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" alt="働くスタッフ3" class="strength-sub-img sub-img-2">
        <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=400" alt="働くスタッフ4" class="strength-sub-img sub-img-3">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" alt="働くスタッフ5" class="strength-sub-img sub-img-4">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" alt="働くスタッフ6" class="strength-sub-img sub-img-5">
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
            <div class="case-img-placeholder"><span>写真準備中</span></div>
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
    <div class="container text-center">
      <h2 class="mid-cta-title" style="color: white; margin-bottom: 2rem;">外国人採用の「失敗しない」ノウハウが、ここにはあります。</h2>
      <div class="mid-cta-btns">
        <a href="/download.html" class="btn btn-secondary btn-lg">無料で総合資料を請求する</a>
        <a href="#contact" class="btn btn-white-outline btn-lg">無料で相談・お問い合わせ</a>
      </div>
    </div>
  </section>

  <section class="flow section-padding" id="flow">
    <div class="container">
      <h2 class="section-title" data-en="FLOW">受け入れまでの流れ</h2>
      <div class="vertical-flow">
        
        <div class="v-flow-item">
          <div class="v-flow-main">
            <div class="v-step-num">1</div>
            <div class="v-step-title">商談</div>
          </div>
          <div class="v-flow-arrow"></div>
          <div class="v-flow-detail">
            <h3>丁寧なヒアリングを行い、不安を解消するため何度も話し合いを重ねてミスマッチングを防ぎます。</h3>
          </div>
        </div>

        <div class="v-flow-item">
          <div class="v-flow-main">
            <div class="v-step-num">2</div>
            <div class="v-step-title">人材選考・オンライン面談 <span class="v-duration">約1ヶ月</span></div>
          </div>
          <div class="v-flow-arrow"></div>
          <div class="v-flow-detail">
            <h3>面接前に候補者と念入りな面談を行い、お客様のニーズに合致するか事前に細かくチェックいたします。</h3>
          </div>
        </div>

        <div class="v-flow-item">
          <div class="v-flow-main">
            <div class="v-step-num">3</div>
            <div class="v-step-title">在留資格申請書類準備＆申請 <span class="v-duration">約4ヶ月</span></div>
          </div>
          <div class="v-flow-arrow"></div>
          <div class="v-flow-detail">
            <h3>事前ガイダンスや交流会を通じて、入国前から生活に必要な支援やサポートを徹底して行います。</h3>
            <ul class="v-sub-list">
              <li>1. 事前ガイダンス</li>
              <li>2. 生活に必要な支援サポート</li>
            </ul>
          </div>
        </div>

        <div class="v-flow-item">
          <div class="v-flow-main">
            <div class="v-step-num">4</div>
            <div class="v-step-title">ビザ申請・渡航調整・入国</div>
          </div>
          <div class="v-flow-arrow"></div>
          <div class="v-flow-detail">
            <h3>入国後の移送や公的手続きへの同行、生活オリエンテーションなど、入国直後の不安を全面的にサポートします。</h3>
            <ul class="v-sub-list">
              <li>3. 生活オリエンテーション</li>
              <li>4. 入国に関する移送</li>
              <li>5. 公的手続きへの同行</li>
            </ul>
          </div>
        </div>

        <div class="v-flow-item">
          <div class="v-flow-main">
            <div class="v-step-num">5</div>
            <div class="v-step-title">入社</div>
          </div>
          <div class="v-flow-arrow"></div>
          <div class="v-flow-detail">
            <h3>住宅斡旋から定期面談、日本人との交流促進まで、長期的に安心して働ける環境作りを伴走支援します。</h3>
            <ul class="v-sub-list">
              <li>6. 住宅斡旋</li>
              <li>7. 定期的な面談</li>
              <li>8. 各種講習機会の提供</li>
              <li>9. 日本人と交流促進</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="faq section-padding" id="faq">
    <div class="container">
      <h2 class="section-title" data-en="FAQ">よくあるご質問</h2>
      <div class="faq-list">
        <details>
          <summary>Q1. 特定技能と技能実習は何が違うのですか？</summary>
          <div class="faq-answer">
            <p><strong>A. 特定技能は“即戦力として働く在留資格”です。</strong><br>
            技能実習は「技能移転」が目的ですが、特定技能は人手不足解消のための制度です。<br>
            試験に合格した人材のみが対象となるため、一定のスキル・日本語能力を有しています。</p>
          </div>
        </details>
        <details>
          <summary>Q2. 日本語レベルはどのくらいですか？</summary>
          <div class="faq-answer">
            <p><strong>A. 原則、日本語能力試験N4以上（または同等試験合格者）です。</strong><br>
            日常会話レベルの理解があり、業務指示の理解が可能です。<br>
            当社では事前研修により、業種特化の用語教育も行っています。</p>
          </div>
        </details>
        <details>
          <summary>Q3. ビザ手続きや行政対応は自社で行う必要がありますか？</summary>
          <div class="faq-answer">
            <p><strong>A. いいえ、当社がワンストップでサポートします。</strong><br>
            在留資格申請、必要書類の案内、更新サポートまで対応。<br>
            企業様の負担を最小限に抑えます。</p>
          </div>
        </details>
        <details>
          <summary>Q4. どのくらいの期間で入社できますか？</summary>
          <div class="faq-answer">
            <p><strong>A. 国内在住者であれば最短1〜2ヶ月程度です。</strong><br>
            海外からの呼び寄せの場合は、3〜5ヶ月程度が目安です。<br>
            ※状況により変動します。</p>
          </div>
        </details>
        <details>
          <summary>Q5. 途中で退職してしまうことはありますか？</summary>
          <div class="faq-answer">
            <p><strong>A. 可能性はゼロではありませんが、定着率向上の仕組みがあります。</strong><br>
            事前マッチング面談、業務説明の徹底、入社後フォローを実施。<br>
            安易な紹介は行いません。</p>
          </div>
        </details>
        <details>
          <summary>Q6. 費用はどのくらいかかりますか？</summary>
          <div class="faq-answer">
            <p><strong>A. 成功報酬型です。採用決定までは費用はかかりません。</strong><br>
            詳細は職種や条件により異なりますが、明確な料金体系をご提示いたします。</p>
          </div>
        </details>
        <details>
          <summary>Q7. 受け入れにあたって企業側が準備することは何ですか？</summary>
          <div class="faq-answer">
            <p><strong>A. 雇用契約の整備と、生活支援体制の確認が必要です。</strong><br>
            当社が必要要件をチェックし、基準を満たすようサポートいたします。</p>
          </div>
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
      <p>【無料】<br>特定技能の“使い方”が<br>わかる資料をお送りします</p>
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
