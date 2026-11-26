import { useEffect, useState } from 'react'

type IconName =
  | 'arrow'
  | 'code'
  | 'database'
  | 'figma'
  | 'lock'
  | 'menu'
  | 'spark'
  | 'stack'
  | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    figma: (
      <>
        <path d="M8.5 2.5h3.5v7H8.5a3.5 3.5 0 0 1 0-7Z" />
        <path d="M12 2.5h3.5a3.5 3.5 0 0 1 0 7H12Z" />
        <path d="M8.5 9.5H12v7H8.5a3.5 3.5 0 0 1 0-7Z" />
        <circle cx="15.5" cy="13" r="3.5" />
        <path d="M8.5 16.5H12V20a3.5 3.5 0 1 1-3.5-3.5Z" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v3" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.4 4.1a5.5 5.5 0 0 0 3.5 3.5L21 12l-4.1 1.4a5.5 5.5 0 0 0-3.5 3.5L12 21l-1.4-4.1a5.5 5.5 0 0 0-3.5-3.5L3 12l4.1-1.4a5.5 5.5 0 0 0 3.5-3.5L12 3Z" />
      </>
    ),
    stack: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  )
}

const projects = [
  {
    number: '01',
    name: 'DealVelocity CRM',
    type: 'CRM SaaS · Production product',
    summary:
      'A focused real-estate operating system that gives teams one place to capture, qualify, and move leads through the deal pipeline.',
    problem:
      'Real-estate teams need more than a contact list. They need clear ownership, predictable handoffs, and enough context to make a good next decision without creating more admin work.',
    approach:
      'Designed the product around the full deal lifecycle, with permissions and team workflows treated as core architecture—not features added after the fact. Deal Intelligence uses AI assessment to help teams evaluate deal context, identify priorities, and make more informed decisions; it supports human judgment rather than replacing it.',
    features: [
      'Visual lead pipeline management',
      'Role-based workspace access',
      'Team assignment and handoff workflows',
      'LeadFlow Match lead-to-property scoring',
      'AI assessment in Deal Intelligence to support informed decisions',
      'Paystack subscription billing',
      'Activity and lead context',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Paystack'],
    theme: 'green',
    visual: 'crm',
  },
  {
    number: '02',
    name: 'DealVelocity Platform Control Center',
    type: 'Internal platform system',
    summary:
      'A deliberately constrained administration interface for operating the DealVelocity platform with more context and fewer dangerous shortcuts.',
    problem:
      'Platform operations require broad visibility, but broad access can create unnecessary risk. Administrative work needs to be traceable, intentional, and limited to the permissions each workflow actually requires.',
    approach:
      'Structured sensitive workflows around explicit states, contextual warnings, and carefully restricted administrator permissions. The interface supports audit-oriented operations while leaving room for continued security review and hardening.',
    features: [
      'Platform-level account controls',
      'Audit-oriented activity views',
      'Restricted administrator permissions',
      'Intentional high-risk action flows',
      'Operational status monitoring',
      'Ongoing security hardening',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RBAC'],
    theme: 'navy',
    visual: 'admin',
  },
  {
    number: '03',
    name: 'EmpebSocial',
    type: 'In development · Product direction',
    summary:
      'A creator and business growth workspace in development, designed to help turn content and offers into revenue opportunities. By bringing content planning, storefronts, lead capture, and follow-up into one workflow, EmpebSocial aims to help users convert audience attention into customers, grow sales, and build more repeatable income.',
    problem:
      'Content, customer leads, and digital offers are often spread across disconnected tools. That fragmentation makes it harder to maintain momentum and understand what should happen next.',
    approach:
      'Building around a revenue-focused growth loop: create content, showcase offers, capture qualified interest, follow up, and learn what drives conversion. The product is still in development; its goal is to help creators and businesses grow visibility, generate leads, and turn more of that attention into revenue.',
    features: [
      'AI-assisted content creation',
      'Creator and business storefronts',
      'Lead capture and management',
      'Reusable growth workflows',
      'Content planning workspace',
      'Product validation in progress',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'AI APIs', 'Figma'],
    theme: 'orange',
    visual: 'social',
  },
]

const skillGroups = [
  {
    icon: 'code' as IconName,
    label: 'Frontend development',
    skills: ['React', 'TypeScript', 'JavaScript', 'Responsive interfaces'],
  },
  {
    icon: 'database' as IconName,
    label: 'Backend & databases',
    skills: ['Supabase', 'PostgreSQL', 'Data modeling', 'Server-side logic'],
  },
  {
    icon: 'stack' as IconName,
    label: 'Payments & APIs',
    skills: ['Paystack integration', 'API integration', 'Webhooks', 'Third-party services'],
  },
  {
    icon: 'lock' as IconName,
    label: 'Security & access',
    skills: ['Role-based access', 'Permission design', 'Secure workflows', 'Audit context'],
  },
  {
    icon: 'spark' as IconName,
    label: 'AI integration',
    skills: ['AI-powered workflows', 'LLM APIs', 'Automation design', 'Structured outputs'],
  },
  {
    icon: 'figma' as IconName,
    label: 'Product implementation',
    skills: ['Figma', 'UI systems', 'Product thinking', 'Design-to-code'],
  },
]

function ProductVisual({ type }: { type: string }) {
  if (type === 'crm') {
    return (
      <div className="dealvelocity-feature-showcase">
        <figure className="dealvelocity-feature">
          <div className="feature-image-frame">
            <img
              src="/images/dealvelocity/leadflow-match.webp"
              alt="DealVelocity LeadFlow Match showing matched leads and suitable properties"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>01 / LEADFLOW MATCH</span>
            <p>Match qualified leads with suitable properties using budget and location scoring.</p>
          </figcaption>
        </figure>
        <figure className="dealvelocity-feature">
          <div className="feature-image-frame">
            <img
              src="/images/dealvelocity/deal-intelligence.png"
              alt="DealVelocity Deal Intelligence showing pipeline insights and priority actions"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>02 / DEAL INTELLIGENCE</span>
            <p>Surface pipeline bottlenecks, stalled opportunities, and actionable next steps.</p>
          </figcaption>
        </figure>
      </div>
    )
  }

  if (type === 'admin') {
    return (
      <div className="project-screenshot-showcase project-screenshot-showcase-admin">
        <figure className="project-screenshot">
          <div className="project-screenshot-frame">
            <img src="/images/platform-control-centre/overview.webp" alt="DealVelocity Platform Control Centre overview" loading="lazy" />
          </div>
          <figcaption><span>01 / PLATFORM OVERVIEW</span><p>Platform-wide operational visibility.</p></figcaption>
        </figure>
        <figure className="project-screenshot">
          <div className="project-screenshot-frame">
            <img src="/images/platform-control-centre/organizations.webp" alt="Platform Control Centre organization management" loading="lazy" />
          </div>
          <figcaption><span>02 / ORGANIZATIONS</span><p>Organization and account administration.</p></figcaption>
        </figure>
        <figure className="project-screenshot">
          <div className="project-screenshot-frame">
            <img src="/images/platform-control-centre/admin-sign-in.webp" alt="Restricted Platform Control Centre administrator sign-in" loading="lazy" />
          </div>
          <figcaption><span>03 / ADMIN ACCESS</span><p>A dedicated sign-in experience for authorized platform administrators.</p></figcaption>
        </figure>
      </div>
    )
  }

  if (type === 'social') {
    return (
      <div className="project-screenshot-showcase project-screenshot-showcase-social">
        <figure className="project-screenshot">
          <div className="project-screenshot-frame">
            <img src="/images/empebsocial/landing-page.webp" alt="EmpebSocial product landing page" loading="lazy" />
          </div>
          <figcaption><span>01 / PRODUCT LANDING PAGE</span><p>The product direction for a workspace to create, connect, and grow.</p></figcaption>
        </figure>
        <figure className="project-screenshot">
          <div className="project-screenshot-frame">
            <img src="/images/empebsocial/workspace.webp" alt="EmpebSocial creator and business workspace" loading="lazy" />
          </div>
          <figcaption><span>02 / WORKSPACE</span><p>A unified view of content planning, storefront activity, and growth workflows.</p></figcaption>
        </figure>
      </div>
    )
  }

  if (type === 'crm-legacy') {
    return (
      <div className="product-window">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <div className="window-title">DealVelocity / Pipeline</div>
        </div>
        <div className="crm-layout">
          <div className="mock-sidebar">
            <div className="mock-logo">DV</div>
            {[1, 2, 3, 4, 5].map((item) => (
              <i key={item} />
            ))}
          </div>
          <div className="mock-main">
            <div className="mock-heading">
              <div>
                <span>Workspace</span>
                <strong>Deal pipeline</strong>
              </div>
              <button>+ Add lead</button>
            </div>
            <div className="stat-row">
              <div>
                <small>ACTIVE LEADS</small>
                <b>24</b>
              </div>
              <div>
                <small>QUALIFIED</small>
                <b>09</b>
              </div>
              <div className="accent-stat">
                <small>NEEDS ACTION</small>
                <b>05</b>
              </div>
            </div>
            <div className="pipeline">
              {['New lead', 'Qualified', 'Negotiation'].map((column, index) => (
                <div className="pipeline-col" key={column}>
                  <div className="pipeline-title">
                    <b>{column}</b>
                    <span>{[8, 6, 3][index]}</span>
                  </div>
                  {[0, 1].map((card) => (
                    <div className="lead-card" key={card}>
                      <i className={`lead-dot dot-${index}`} />
                      <strong>{['Lakeside property', 'Commercial inquiry'][card]}</strong>
                      <small>{card ? 'Follow-up due' : 'Updated today'}</small>
                      <div className="lead-meta">
                        <span />
                        <em>{index + card + 2} notes</em>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'admin') {
    return (
      <div className="product-window admin-window">
        <div className="window-bar dark-bar">
          <span />
          <span />
          <span />
          <div className="window-title">Control Center / Operations</div>
        </div>
        <div className="admin-layout">
          <div className="admin-nav">
            <div className="shield-mark">
              <Icon name="lock" size={18} />
            </div>
            <p>CONTROL CENTER</p>
            {['Overview', 'Workspaces', 'Access', 'Audit log'].map((item, index) => (
              <div className={index === 2 ? 'active' : ''} key={item}>
                <span />
                {item}
              </div>
            ))}
          </div>
          <div className="admin-main">
            <div className="admin-head">
              <div>
                <small>PLATFORM OPERATIONS</small>
                <strong>Access review</strong>
              </div>
              <div className="admin-user">AD</div>
            </div>
            <div className="review-banner">
              <Icon name="lock" size={18} />
              <div>
                <b>Restricted workflow</b>
                <span>Changes require a reason and confirmation.</span>
              </div>
              <small>POLICY ACTIVE</small>
            </div>
            <div className="admin-table">
              <div className="table-row table-labels">
                <span>ADMINISTRATOR</span>
                <span>PERMISSION SET</span>
                <span>LAST ACTIVITY</span>
                <span>STATUS</span>
              </div>
              {[
                ['Platform operator', 'Workspace support', '12 min ago', 'Active'],
                ['Billing support', 'Billing only', 'Yesterday', 'Active'],
                ['Review account', 'Read only', '3 days ago', 'Review'],
              ].map((row) => (
                <div className="table-row" key={row[0]}>
                  {row.map((cell, index) => (
                    <span key={cell} className={index === 3 ? 'status' : ''}>
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="product-window social-window">
      <div className="window-bar social-bar">
        <span />
        <span />
        <span />
        <div className="window-title">EmpebSocial / Create</div>
      </div>
      <div className="social-layout">
        <div className="social-nav">
          <div className="social-logo">e.</div>
          {['Home', 'Create', 'Storefront', 'Leads'].map((item, index) => (
            <div className={index === 1 ? 'active' : ''} key={item}>
              <i />
              {item}
            </div>
          ))}
          <div className="social-progress">
            <small>WEEKLY PROGRESS</small>
            <b>3 of 5 actions</b>
            <span>
              <i />
            </span>
          </div>
        </div>
        <div className="social-main">
          <div className="social-head">
            <div>
              <small>CONTENT STUDIO</small>
              <strong>What will you create?</strong>
            </div>
            <button>Drafts · 4</button>
          </div>
          <div className="creator-grid">
            <div className="prompt-box">
              <label>START WITH AN IDEA</label>
              <div className="fake-input">Create a launch post for...</div>
              <div className="prompt-tags">
                <span>Product launch</span>
                <span>Build trust</span>
              </div>
              <button>
                <Icon name="spark" size={14} />
                Generate draft
              </button>
            </div>
            <div className="preview-post">
              <div className="post-top">
                <span>PREVIEW</span>
                <i />
              </div>
              <div className="post-art">
                <div className="art-orbit" />
                <b>Build once.<br />Grow with it.</b>
              </div>
              <div className="post-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Portfolio home">
          <span className="brand-mark">GK</span>
          <span className="brand-copy">
            <b>Godwin Kokoh</b>
            <small>Software &amp; systems</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk
            <Icon name="arrow" size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow">
              <span className="availability-dot" />
              Available for select projects
            </div>
            <h1>
              I build software that
              <span>moves work forward.</span>
            </h1>
            <p className="hero-role">Full-Stack Developer <i /> AI Automation &amp; Systems Developer</p>
            <p className="hero-intro">
              Secure, scalable business applications and AI-powered workflows—built around real
              operations, thoughtful interfaces, and maintainable systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View projects
                <Icon name="arrow" />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact me
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="system-card">
              <div className="system-card-head">
                <span>SYSTEM / CURRENT</span>
                <i />
              </div>
              <div className="system-orbit">
                <div className="orbit-ring ring-one" />
                <div className="orbit-ring ring-two" />
                <div className="orbit-core">
                  <Icon name="stack" size={30} />
                </div>
                <span className="orbit-node node-one">UI</span>
                <span className="orbit-node node-two">API</span>
                <span className="orbit-node node-three">DB</span>
              </div>
              <div className="system-card-foot">
                <span>PRODUCT THINKING</span>
                <span>ENGINEERING</span>
                <span>AUTOMATION</span>
              </div>
            </div>
          </div>
          <div className="hero-index">PORTFOLIO / 2025</div>
        </section>

        <section className="intro-strip" id="about">
          <div className="section-tag">ABOUT / 00</div>
          <div>
            <h2>Product-minded engineering, from interface to infrastructure.</h2>
            <p>
              I turn operational problems into dependable software. My work spans product
              definition, interface implementation, data architecture, third-party integrations,
              and the automation between them. The goal is always the same: a useful system that
              teams can understand, trust, and grow with.
            </p>
          </div>
          <dl className="principles">
            <div>
              <dt>01</dt>
              <dd>Business context before technical complexity</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Security and permissions by design</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Clear systems over fragile shortcuts</dd>
            </div>
          </dl>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <div className="section-tag">SELECTED WORK / 01</div>
              <h2>Products built around<br />real business workflows.</h2>
            </div>
            <p>
              A closer look at the product decisions, system constraints, and technical foundations
              behind selected work.
            </p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className={`project project-${project.theme}`} key={project.name}>
                <div className="project-topline">
                  <span>CASE STUDY / {project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-title">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                  </div>
                </div>

                <ProductVisual type={project.visual} />
                {project.visual === 'crm' ? (
                  <div className="visual-caption">
                    <span>ACTUAL PRODUCT SCREENS</span>
                    <span>LeadFlow Match + Deal Intelligence</span>
                  </div>
                ) : (
                  <div className="visual-caption">
                    <span>INTERFACE CONCEPT</span>
                    <span>Illustrative product preview</span>
                  </div>
                )}

                <div className="case-grid">
                  <div className="case-narrative">
                    <div>
                      <span>THE PROBLEM</span>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <span>THE APPROACH</span>
                      <p>{project.approach}</p>
                    </div>
                  </div>
                  <div className="case-features">
                    <span>KEY CAPABILITIES</span>
                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>
                          <i />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="tech-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="placeholder-links" aria-label="Project links not yet configured">
                    <span>Live URL / add link</span>
                    <span>Code URL / add link</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading compact">
            <div>
              <div className="section-tag">CAPABILITIES / 02</div>
              <h2>Technical range,<br />organized by outcome.</h2>
            </div>
            <p>
              Tools matter most when they work together. These are the areas I use to move a product
              from idea to reliable implementation.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.label}>
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon name={group.icon} />
                  </div>
                  <span>0{index + 1}</span>
                </div>
                <h3>{group.label}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <div className="section-tag">EXPERIENCE / 03</div>
          <div className="experience-content">
            <h2>Selected experience</h2>
            <div className="experience-list">
              <article>
                <div>
                  <span>PRODUCT ENGINEERING</span>
                  <small>Current focus</small>
                </div>
                <h3>Full-stack product development</h3>
                <p>
                  Building workflow-heavy SaaS products across interface, data, permissions,
                  billing, and deployment-ready implementation.
                </p>
              </article>
              <article>
                <div>
                  <span>SYSTEMS &amp; AUTOMATION</span>
                  <small>Current focus</small>
                </div>
                <h3>AI and API-powered workflows</h3>
                <p>
                  Connecting products and services into practical automations with clear inputs,
                  reliable outputs, and human review where it matters.
                </p>
              </article>
              <article className="editable-experience">
                <div>
                  <span>DATABASE &amp; BACKEND</span>
                  <small>Technical focus</small>
                </div>
                <h3 style={{ fontWeight: 600, color: "#111111" }}>
                  Database and Backend Development
                </h3>
                <p style={{ color: "#555555" }}>
                  SQL/PostgreSQL, data modeling, authentication, and backend security.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="credentials-section" id="credentials">
          <div className="section-heading compact">
            <div>
              <div className="section-tag">CREDENTIALS / 04</div>
              <h2>Certifications &amp;<br />professional development.</h2>
            </div>
            <p>
              A dedicated, record of courses, certifications, and continued learning.
              Add verified details as they become available.
            </p>
          </div>
          <div className="credential-grid">
            <article className="credential-card">
              <div className="credential-badge">
                <span>G</span>
                <small>GOOGLE<br />COURSE</small>
              </div>
              <div className="credential-copy">
                <span>DATA ANALYTICS / 01</span>
                <h3>Foundations: Data, Data, Everywhere</h3>
                <dl>
                  <div><dt>Issuer</dt><dd>Google · Coursera</dd></div>
                  <div><dt>Earned</dt><dd>October 11, 2023</dd></div>
                  <div><dt>Credential</dt><dd><a href="/credentials/data-analytics.pdf" target="_blank" rel="noopener noreferrer">View certificate ↗</a></dd></div>
                </dl>
              </div>
            </article>
            <article className="credential-card">
              <div className="credential-badge">
                <span>G</span>
                <small>GOOGLE<br />DIGITAL</small>
              </div>
              <div className="credential-copy">
                <span>DIGITAL MARKETING / 02</span>
                <h3>Fundamentals of Digital Marketing</h3>
                <dl>
                  <div><dt>Issuer</dt><dd>Google Digital Garage · Open University</dd></div>
                  <div><dt>Earned</dt><dd>September 30, 2022</dd></div>
                  <div><dt>Credential</dt><dd><a href="/credentials/digital-marketing.pdf" target="_blank" rel="noopener noreferrer">View certificate ↗</a></dd></div>
                </dl>
              </div>
            </article>
            <article className="credential-card">
              <div className="credential-badge">
                <span>IBM</span>
                <small>COURSE<br />CERTIFICATE</small>
              </div>
              <div className="credential-copy">
                <span>UI/UX DESIGN / 03</span>
                <h3>Designing User Interfaces and Experiences (UI/UX)</h3>
                <dl>
                  <div><dt>Issuer</dt><dd>IBM · Coursera</dd></div>
                  <div><dt>Earned</dt><dd>June 7, 2024</dd></div>
                  <div><dt>Credential</dt><dd><a href="/credentials/uiux-certificate.pdf" target="_blank" rel="noopener noreferrer">View certificate ↗</a></dd></div>
                </dl>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit" aria-hidden="true">
            <div />
            <span />
          </div>
          <div className="section-tag">CONTACT / 05</div>
          <div className="contact-main">
            <p>Have a product or system that needs careful thinking?</p>
            <h2>Let’s build something<br />that works in the <i>real world.</i></h2>
            <a className="contact-email" href="mailto:godwinkokoh1@gmail.com">
              godwinkokoh1@gmail.com
              <Icon name="arrow" size={28} />
            </a>
            <a className="contact-email" href="tel:+2347087071481">
              +2347087071481
            </a>
          </div>
          <div className="contact-footer">
            <span>GODWIN KOKOH © 2026</span>
            <div>
              <a href="https://www.linkedin.com/in/godwin-kokoh-03326b115/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/geniusgodwin" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App