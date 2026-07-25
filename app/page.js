import Image from 'next/image';
// The CTA target lives in lib/config.js (shared with the conversion tracker).
import { BOOKING_URL, CTA } from '@/lib/config';

// Masthead dateline — computed once at build time (this is a static export),
// so it ships in the initial HTML with no client JS and no layout shift.
const dateline = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// The landing markup below the nav (Broadsheet design system — styles live in
// app/broadsheet.css). Kept as HTML so it renders byte-for-byte as designed.
// The nav is real JSX (see the component) so the logo can use next/image.
const BODY = `<div style="max-width:1200px; margin:0 auto; padding:0 var(--edge);">

    <!-- MASTHEAD DATELINE -->
    <div style="padding-top: calc(1.25*var(--leading));">
      <hr style="height:5px; border:0; margin:0; border-top:2px solid var(--color-text); border-bottom:1px solid var(--color-text);">
      <p style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--half) var(--leading); margin:0; padding:var(--half) 0; font-size:13px; line-height:var(--half); letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb, var(--color-text) 70%, transparent);">
        <span>${dateline}</span>
        <span>Cold outbound &middot; Deal sourcing &middot; GTM systems</span>
        <span>Now accepting clients</span>
      </p>
      <hr style="height:0; border:0; border-top:1px solid var(--color-text); margin:0;">
    </div>

    <!-- HERO -->
    <section style="padding: calc(4*var(--leading)) 0 calc(2.5*var(--leading));">
      <h1 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(38px,5.75vw,72px); line-height:1.05; letter-spacing:-0.025em; margin:0 0 0 -0.04em; text-box:trim-both cap alphabetic;">
        <span class="cmyk-head" style="display:block; position:relative;"><span class="paper">Your next 10 decision&#8209;maker conversations are a two&#8209;week build away.</span><span class="plate plate-c" aria-hidden="true">Your next 10 decision&#8209;maker conversations are a two&#8209;week build away.</span><span class="plate plate-m" aria-hidden="true">Your next 10 decision&#8209;maker conversations are a two&#8209;week build away.</span><span class="plate plate-y" aria-hidden="true">Your next 10 decision&#8209;maker conversations are a two&#8209;week build away.</span></span>
      </h1>
      <p style="font-size:18px; line-height:var(--leading); max-width:var(--measure); margin: calc(1.5*var(--leading) - 1cap) 0 0; text-box:trim-both cap alphabetic;">LeadGhost builds, tests, and automates cold outbound that reaches the person who can actually say yes. Owners, founders, partners. Whether you’re selling a service or sourcing your next acquisition, the motion is the same: get to the decision maker directly, before anyone else does.</p>
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:var(--leading);">
        <a class="btn btn-primary" href="${BOOKING_URL}">${CTA}</a>
        <a class="btn btn-ghost" href="#proof">See the results</a>
      </div>
    </section>

    <!-- WHO WE WORK WITH -->
    <section id="approach" style="padding: calc(3*var(--leading)) 0 calc(2.5*var(--leading));">
      <h2 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(30px,4.2vw,56px); line-height:clamp(33px,4.5vw,60px); letter-spacing:-0.02em; margin:0 0 calc(1.75*var(--leading)) -0.03em; text-box:trim-both cap alphabetic;">
        <span class="line cmyk-head" style="display:block"><span class="paper">Conversations with</span><span class="plate plate-c" aria-hidden="true">Conversations with</span><span class="plate plate-m" aria-hidden="true">Conversations with</span><span class="plate plate-y" aria-hidden="true">Conversations with</span></span>
        <span class="line cmyk-head" style="display:block"><span class="paper">decision makers.</span><span class="plate plate-c" aria-hidden="true">decision makers.</span><span class="plate plate-m" aria-hidden="true">decision makers.</span><span class="plate plate-y" aria-hidden="true">decision makers.</span></span>
        <span class="line cmyk-head" style="display:block"><span class="paper">Not leads in a spreadsheet.</span><span class="plate plate-c" aria-hidden="true">Not leads in a spreadsheet.</span><span class="plate plate-m" aria-hidden="true">Not leads in a spreadsheet.</span><span class="plate plate-y" aria-hidden="true">Not leads in a spreadsheet.</span></span>
      </h2>
      <span style="display: block; font-size: 13px; line-height: var(--half); letter-spacing: 0.08em; text-transform: uppercase; color: color-mix(in srgb, var(--color-text) 70%, transparent); margin: 0 0 calc(var(--leading) - var(--half));"><span style="color:var(--color-accent-2);">No. 1</span> &mdash; The engine, in three moves</span><div style="display:grid; grid-template-columns:repeat(3,1fr); gap: calc(1.5*var(--leading)) clamp(28px,4vw,64px); margin-top:calc(var(--leading) - var(--half));">
        <div>
          <h2 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:26px; line-height:var(--leading); letter-spacing:-0.01em; margin:0; text-box:trim-both cap alphabetic;">Build</h2>
          <p style="font-size:15.5px; line-height:var(--leading); margin:calc(var(--leading) - 1cap) 0 0; color:color-mix(in srgb, var(--color-text) 78%, transparent); text-align:justify; hyphens:auto; hyphenate-limit-chars:6 3 3; text-box:trim-both cap alphabetic;">Domains, inboxes, warmup, deliverability. We stand up infrastructure that keeps your mail out of spam and the promotions tab, so every message lands in front of a real decision maker, not a filter.</p>
        </div>
        <div>
          <h2 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:26px; line-height:var(--leading); letter-spacing:-0.01em; margin:0; text-box:trim-both cap alphabetic;">Test</h2>
          <p style="font-size:15.5px; line-height:var(--leading); margin:calc(var(--leading) - 1cap) 0 0; color:color-mix(in srgb, var(--color-text) 78%, transparent); text-align:justify; hyphens:auto; hyphenate-limit-chars:6 3 3; text-box:trim-both cap alphabetic;">Segments, angles, offers, send windows. We read the replies, not the opens, and keep tuning until the campaign earns real conversations. Then we scale what works.</p>
        </div>
        <div>
          <h2 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:26px; line-height:var(--leading); letter-spacing:-0.01em; margin:0; text-box:trim-both cap alphabetic;">Automate</h2>
          <p style="font-size:15.5px; line-height:var(--leading); margin:calc(var(--leading) - 1cap) 0 0; color:color-mix(in srgb, var(--color-text) 78%, transparent); text-align:justify; hyphens:auto; hyphenate-limit-chars:6 3 3; text-box:trim-both cap alphabetic;">Sequencing, routing, follow-up. The machine runs without you and hands off warm replies as they land. New business conversations for operators. Owner conversations for acquirers. We open the door; you walk through it.</p>
        </div>
      </div>
    </section><section style="padding: calc(2*var(--leading)) 0 calc(2.5*var(--leading));">
      <span style="display:block; font-size:13px; line-height:var(--half); letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:0 0 calc(var(--leading) - var(--half));"><span style="color:var(--color-accent-2);">No. 2</span> &mdash; Who we work with</span>
      <h2 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(26px,3vw,34px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.015em; margin:0 0 var(--leading); max-width:22ch; text-box:trim-both cap alphabetic;">Companies and funds whose next quarter depends on who they’re talking to.</h2>
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:var(--leading) clamp(24px,3vw,48px);">
        <div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:15px; color:var(--color-accent-700); margin-bottom:6px;">01</div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:19px; line-height:1.2;">B2B founders</div><p style="font-size:14px; line-height:20px; color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:8px 0 0;">Selling into other founders and executives.</p></div>
        <div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:15px; color:var(--color-accent-700); margin-bottom:6px;">02</div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:19px; line-height:1.2;">Agencies &amp; studios</div><p style="font-size:14px; line-height:20px; color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:8px 0 0;">Principals in front of buyers, not an inbox full of tire-kickers.</p></div>
        <div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:15px; color:var(--color-accent-700); margin-bottom:6px;">03</div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:19px; line-height:1.2;">PE firms &amp; search funds</div><p style="font-size:14px; line-height:20px; color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:8px 0 0;">Sourcing proprietary deal flow direct from owners.</p></div>
        <div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:15px; color:var(--color-accent-700); margin-bottom:6px;">04</div><div style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:19px; line-height:1.2;">Bootstrapped operators</div><p style="font-size:14px; line-height:20px; color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:8px 0 0;">Living by their pipeline.</p></div>
      </div>
    </section>

    <!-- PROOF / CASE STUDIES -->
    <section id="proof" style="padding: calc(3*var(--leading)) 0 calc(1.5*var(--leading));">
      <span style="display:block; font-size:13px; line-height:var(--half); letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:0 0 calc(var(--leading) - var(--half));"><span style="color:var(--color-accent-2);">No. 3</span> &mdash; The proof is in the conversations</span>

      <!-- Case 1 -->
      <div style="display:grid; grid-template-columns:minmax(0,7fr) minmax(0,5fr); gap:var(--leading) clamp(24px,5vw,80px); align-items:center; padding: calc(1.5*var(--leading)) 0;">
        <div>
          <div style="font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:var(--color-accent-2); margin-bottom:calc(var(--leading) - var(--half));">Production company</div>
          <h3 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(24px,2.6vw,30px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.015em; margin:0; text-box:trim-both cap alphabetic;">From the spam folder to 55–60% open rates.</h3>
          <p style="font-size:15.5px; line-height:var(--leading); margin:calc(var(--leading) - 1cap) 0 0; max-width:52ch; color:color-mix(in srgb, var(--color-text) 78%, transparent); text-align:justify; hyphens:auto; text-box:trim-both cap alphabetic;">A video production company was seeing 7–15% open rates and couldn’t get in front of the people who buy. With our infrastructure they jumped to 35–40% almost immediately. Today they average 55–60%, and the conversations follow.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:var(--leading) clamp(24px,4vw,56px); align-items:flex-end;">
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:calc(1.5*var(--leading));">Before</div>
            <span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(40px,5vw,60px);"><span class="paper">7–15%</span><span class="plate plate-c" aria-hidden="true">7–15%</span><span class="plate plate-m" aria-hidden="true">7–15%</span><span class="plate plate-y" aria-hidden="true">7–15%</span></span>
          </div>
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:calc(1.5*var(--leading));">After</div>
            <span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(40px,4.6vw,62px);"><span class="paper">55–60%</span><span class="plate plate-c" aria-hidden="true">55–60%</span><span class="plate plate-m" aria-hidden="true">55–60%</span><span class="plate plate-y" aria-hidden="true">55–60%</span></span>
          </div>
        </div>
      </div>

      <!-- Case 2 -->
      <div style="display:grid; grid-template-columns:minmax(0,5fr) minmax(0,7fr); gap:var(--leading) clamp(24px,5vw,80px); align-items:center; padding: calc(1.5*var(--leading)) 0;">
        <div style="display:flex; flex-wrap:wrap; gap:var(--leading) clamp(24px,4vw,56px); align-items:flex-end; order:1;">
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:20px;">Meetings in 3 months</div><span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(56px,7vw,92px);"><span class="paper">43</span><span class="plate plate-c" aria-hidden="true">43</span><span class="plate plate-m" aria-hidden="true">43</span><span class="plate plate-y" aria-hidden="true">43</span></span>
          </div>
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:calc(1.5*var(--leading));">Pipeline value</div>
            <span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(44px,5.5vw,72px);"><span class="paper">~$74M</span><span class="plate plate-c" aria-hidden="true">~$74M</span><span class="plate plate-m" aria-hidden="true">~$74M</span><span class="plate plate-y" aria-hidden="true">~$74M</span></span>
          </div>
        </div>
        <div style="order:2;">
          <div style="font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:var(--color-accent-2); margin-bottom:calc(var(--leading) - var(--half));">Private equity</div>
          <h3 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(24px,2.6vw,30px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.015em; margin:0; text-box:trim-both cap alphabetic;">43 owner meetings in three months. Nearly $74M in pipeline.</h3>
          <p style="font-size:15.5px; line-height:var(--leading); margin:calc(var(--leading) - 1cap) 0 0; max-width:52ch; color:color-mix(in srgb, var(--color-text) 78%, transparent); text-align:justify; hyphens:auto; text-box:trim-both cap alphabetic;">A search fund ran three campaigns with us (and counting). Financial email trips spam filters more than most, so we reworked the messaging until it landed cleanly. Now their team spends its time in conversations with owners who are actually ready to sell.</p>
        </div>
      </div><div style="display:grid; grid-template-columns:minmax(0,7fr) minmax(0,5fr); gap:var(--leading) clamp(24px,5vw,80px); align-items:center; padding: calc(1.5*var(--leading)) 0;">
        <div>
          <div style="font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:var(--color-accent-2); margin-bottom:calc(var(--leading) - var(--half));">Social analytics platform</div>
          <h3 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(24px,2.6vw,30px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.015em; margin:0; text-box:trim-both cap alphabetic;">Six campaigns, 3–4 interested replies a day.</h3>
          <p style="font-size:15.5px; line-height:var(--leading); margin:calc(var(--leading) - 1cap) 0 0; max-width:52ch; color:color-mix(in srgb, var(--color-text) 78%, transparent); text-align:justify; hyphens:auto; text-box:trim-both cap alphabetic;">A social analytics platform wanted new ways to open conversations with buyers. We built the delivery infrastructure and ran six campaigns in parallel, each with its own targeting. The result: 3–4 interested replies a day, every day, across all six.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:var(--leading) clamp(24px,4vw,56px); align-items:flex-end;">
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:calc(1.5*var(--leading));">Campaigns</div>
            <span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(48px,6vw,76px);"><span class="paper">6</span><span class="plate plate-c" aria-hidden="true">6</span><span class="plate plate-m" aria-hidden="true">6</span><span class="plate plate-y" aria-hidden="true">6</span></span>
          </div>
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:calc(1.5*var(--leading));">Replies / day</div>
            <span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(48px,6vw,76px);"><span class="paper">3–4</span><span class="plate plate-c" aria-hidden="true">3–4</span><span class="plate plate-m" aria-hidden="true">3–4</span><span class="plate plate-y" aria-hidden="true">3–4</span></span>
          </div>
        </div>
      </div><div style="display:grid; grid-template-columns:minmax(0,5fr) minmax(0,7fr); gap:var(--leading) clamp(24px,5vw,80px); align-items:center; padding: calc(1.5*var(--leading)) 0;">
        <div style="display:flex; flex-wrap:wrap; gap:var(--leading) clamp(24px,4vw,56px); align-items:flex-end; order:1;">
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:calc(1.5*var(--leading));">Owner conversations</div>
            <span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(56px,7vw,92px);"><span class="paper">27</span><span class="plate plate-c" aria-hidden="true">27</span><span class="plate plate-m" aria-hidden="true">27</span><span class="plate plate-y" aria-hidden="true">27</span></span>
          </div>
          <div>
            <div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb,var(--color-text) 60%, transparent); margin-bottom:calc(1.5*var(--leading));">Off-market</div>
            <span class="cmyk-num" style="display:inline-block; line-height:1; white-space:nowrap; font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(44px,5.5vw,72px);"><span class="paper">100%</span><span class="plate plate-c" aria-hidden="true">100%</span><span class="plate plate-m" aria-hidden="true">100%</span><span class="plate plate-y" aria-hidden="true">100%</span></span>
          </div>
        </div>
        <div style="order:2;">
          <div style="font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:var(--color-accent-2); margin-bottom:calc(var(--leading) - var(--half));">Home services &middot; Austin</div>
          <h3 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(24px,2.6vw,30px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.015em; margin:0; text-box:trim-both cap alphabetic;">27 conversations with founders and owners. None of them on a banker&rsquo;s list.</h3>
          <p style="font-size:15.5px; line-height:var(--leading); margin:calc(var(--leading) - 1cap) 0 0; max-width:52ch; color:color-mix(in srgb, var(--color-text) 78%, transparent); text-align:justify; hyphens:auto; text-box:trim-both cap alphabetic;">An Austin firm wanted direct access to home services operators, the kind who never answer a broker and aren’t running a process. We built the target list ourselves, wrote to owners like operators rather than buyers, and opened 27 real conversations. Proprietary deal flow, one inbox at a time.</p>
        </div>
      </div>
    </section>

    <!-- PULL QUOTE -->
    <section style="padding: calc(2.5*var(--leading)) 0 calc(3*var(--leading));">
      <figure style="margin:0;">
        <blockquote style="font-family:var(--font-heading); font-style:italic; font-weight:400; font-size:clamp(24px,2.8vw,36px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.01em; max-width:36ch; margin:0; text-indent:-0.475em; text-box:trim-both cap alphabetic;">“You’re really on top of it and it’s obvious you’re an expert. Working with you has been a breath of fresh air.”</blockquote>
        <figcaption style="font-size:15.5px; line-height:var(--leading); color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:calc(2*var(--leading) - 1cap) 0 0; text-indent:-1.045em; text-box:trim-both cap alphabetic;">— President, investment firm</figcaption>
      </figure>
    </section>

    <!-- ENGAGEMENTS -->
    <section id="engagements" style="padding: calc(2*var(--leading)) 0 calc(2.5*var(--leading));">
      <span style="display:block; font-size:13px; line-height:var(--half); letter-spacing:0.08em; text-transform:uppercase; color:color-mix(in srgb, var(--color-text) 70%, transparent); margin:0 0 calc(var(--leading) - var(--half));"><span style="color:var(--color-accent-2);">No. 4</span> &mdash; Engagements</span>
      <h2 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(26px,3vw,34px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.015em; margin:0 0 var(--leading); max-width:24ch; text-box:trim-both cap alphabetic;">Start where it hurts. Scale when it works.</h2>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(16px,2vw,24px);">
        <div class="card">
          <div class="card-kicker">Infrastructure</div>
          <div class="card-title">Deliverability build</div>
          <p class="card-body">Domains, inboxes, warmup, and deliverability monitoring. For teams who write their own copy but keep landing in spam instead of in front of decision makers.</p>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:13.5px; margin-top:4px;">
            <span>Domain &amp; inbox setup</span>
            <span>Warmup &amp; DNS (SPF, DKIM, DMARC)</span>
            <span>Ongoing deliverability monitoring</span>
          </div>
          <a class="btn btn-secondary btn-block" href="${BOOKING_URL}" style="margin-top:auto;">${CTA}</a>
        </div>
        <div class="card elev-md" style="outline:2px solid var(--color-accent); outline-offset:-2px;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <div class="card-kicker">Campaigns</div>
            <span class="tag tag-accent">Most chosen</span>
          </div>
          <div class="card-title">Managed outbound</div>
          <p class="card-body">Everything in Infrastructure, plus fully managed campaigns: targeting, copy, testing, and reply handling straight to your calendar. You show up to conversations; we handle everything before them.</p>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:13.5px; margin-top:4px;">
            <span>List building &amp; decision-maker targeting</span>
            <span>Copywriting &amp; A/B testing</span>
            <span>Reply management &amp; booking</span>
          </div>
          <a class="btn btn-primary btn-block" href="${BOOKING_URL}" style="margin-top:auto;">${CTA}</a>
        </div>
        <div class="card">
          <div class="card-kicker">GTM partner</div>
          <div class="card-title">Full outbound engine</div>
          <p class="card-body">Multi-campaign, multi-market outbound with strategy and reporting. We embed with your team and own the pipeline motion, whether that pipeline is customers or acquisitions.</p>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:13.5px; margin-top:4px;">
            <span>Parallel campaigns &amp; segments</span>
            <span>Dedicated strategist</span>
            <span>Pipeline reporting &amp; forecasting</span>
          </div>
          <a class="btn btn-secondary btn-block" href="${BOOKING_URL}" style="margin-top:auto;">Talk to us</a>
        </div>
      </div>
    </section>

    <!-- CLOSE -->
    <section style="padding: calc(2.5*var(--leading)) 0 calc(2*var(--leading));">
      <h3 style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:clamp(28px,3.4vw,40px); line-height:calc(1.5*var(--leading)); letter-spacing:-0.015em; margin:0; max-width:28ch; text-box:trim-both cap alphabetic;">Your next 10 decision-maker conversations are a two-week build away.</h3>
      <p style="font-size:16px; line-height:var(--leading); color:color-mix(in srgb, var(--color-text) 78%, transparent); margin:calc(var(--leading) - 1cap) 0 0; max-width:var(--measure); text-box:trim-both cap alphabetic;">Bring us your offer, or your acquisition thesis, and your best-fit accounts. We’ll build the system that turns them into calendar invites.</p>
      <div style="margin-top:var(--leading);">
        <a class="btn btn-primary" href="${BOOKING_URL}">${CTA}</a>
      </div>
    </section>

    <hr style="height:5px; border:0; margin:0; border-top:1px solid var(--color-text); border-bottom:2px solid var(--color-text);">
    <footer style="padding: calc(2*var(--leading)) 0; display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--leading); font-size:13px; line-height:var(--leading); color:color-mix(in srgb, var(--color-text) 70%, transparent);">
      <div style="max-width:40ch;">
        <span style="font-family:var(--font-heading); font-weight:var(--font-heading-weight); font-size:18px; color:var(--color-text); display:block; margin-bottom:6px;">LeadGhost</span>
        Cold outbound infrastructure, campaign strategy, and GTM systems that put you in conversation with the people who decide.
      </div>
      <div style="display:flex; gap:calc(2*var(--leading)); flex-wrap:wrap;">
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span style="text-transform:uppercase; letter-spacing:0.08em; color:var(--color-text);">Navigate</span>
          <a href="#approach">Approach</a>
          <a href="#proof">Proof</a>
          <a href="#engagements">Engagements</a>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span style="text-transform:uppercase; letter-spacing:0.08em; color:var(--color-text);">Connect</span>
          <a href="mailto:micheal@leadghost.co">micheal@leadghost.co</a>
          <a href="${BOOKING_URL}">${CTA}</a>
        </div>
      </div>
      <div style="flex-basis:100%; padding-top:var(--half);">© 2026 LeadGhost. All rights reserved.</div>
    </footer>

  </div>`;

export default function Home() {
  return (
    <div
      className="lg-page"
      style={{
        '--leading': '28px',
        '--half': '14px',
        '--edge': 'clamp(20px,5vw,72px)',
        '--measure': '58ch',
      }}
    >
      <nav
        className="nav"
        style={{ paddingInline: 'max(var(--edge), calc((100% - 1200px)/2 + var(--edge)))' }}
      >
        <a
          className="nav-brand"
          href="/"
          aria-label="LeadGhost home"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <Image
            src="/logo.png"
            alt="LeadGhost"
            width={600}
            height={154}
            priority
            style={{ height: '32px', width: 'auto' }}
          />
        </a>
        <a href="#approach" style={{ whiteSpace: 'nowrap' }}>Approach</a>
        <a href="#proof" style={{ whiteSpace: 'nowrap' }}>Proof</a>
        <a href="#engagements" style={{ whiteSpace: 'nowrap' }}>Engagements</a>
        <a className="btn btn-primary" href={BOOKING_URL}>{CTA}</a>
      </nav>
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </div>
  );
}
