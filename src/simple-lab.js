import simplePage from './simple-page.js';

const SIMPLE_API_BASE = 'https://api.usesimple.ai/api/v1';
const ALT_SIMPLE_API_BASE = 'https://api.prod.usesimple.ai/api/v1';

export const SIMPLE_SOURCES = [
  {
    label: 'Simple AI product site',
    url: 'https://www.usesimple.ai/',
    note: 'Public positioning: AI voice that sells, warm transfer, knowledge base, IVR navigation, multilingual support, security, workflow trigger, runtime customer data, transcript analysis, and post-call workflows.',
  },
  {
    label: 'Simple AI docs introduction',
    url: 'https://docs.usesimple.ai/introduction',
    note: 'Voice agents can make outbound calls, answer inbound calls, send and receive SMS, embed web chat, run campaigns, use tools, and emit webhooks.',
  },
  {
    label: 'Simple AI API reference',
    url: 'https://docs.usesimple.ai/api-reference/introduction',
    note: 'Public API uses bearer auth and a JSON API under /api/v1.',
  },
  {
    label: 'Simple AI create call docs',
    url: 'https://docs.usesimple.ai/api-reference/calls/create-call',
    note: 'POST /calls accepts to_number, prompt or agent_id, params, external_identifiers, analyzers, voice_id, and idempotency_key.',
  },
  {
    label: 'Simple AI workflows docs',
    url: 'https://docs.usesimple.ai/integrations/workflows',
    note: 'Pre-call workflows enrich calls before speech; post-call workflows sync CRM, follow up, update tickets, and feed analytics.',
  },
  {
    label: 'Simple AI HTTP integrations docs',
    url: 'https://docs.usesimple.ai/integrations/http',
    note: 'Agents can call REST APIs during conversations for lookups and actions.',
  },
  {
    label: 'Simple AI analyzers docs',
    url: 'https://docs.usesimple.ai/analyzers',
    note: 'Analyzers extract structured outcomes, sentiment, intent, and other call review fields after interactions.',
  },
  {
    label: 'Simple AI journeys docs',
    url: 'https://docs.usesimple.ai/journeys',
    note: 'Journeys are reusable outreach flows with calls, texts, delays, branches, runs, and per-recipient data.',
  },
  {
    label: 'Simple AI FDE role listing',
    url: 'https://www.builtinsf.com/job/forward-deployed-engineer/7784407',
    note: 'Role asks for voice AI agent development, technical problem solving, customer-first communication, product design, and prioritization.',
  },
  {
    label: 'Simple AI company listing',
    url: 'https://www.builtinsf.com/company/simple-ai',
    note: 'Public profile says Simple helps enterprises build and deploy AI phone agents in days, not weeks.',
  },
  {
    label: 'Sierra agents-as-a-service post',
    url: 'https://sierra.ai/blog/agents-as-a-service',
    note: 'Market frame for Sierra as an enterprise customer-experience AI agent platform.',
  },
  {
    label: 'Axios Sierra and Kraken report',
    url: 'https://www.axios.com/2026/06/11/kraken-technologies-sierra-utilities-customer-service-bots',
    note: 'Fresh market signal: Sierra expanding into utilities through customer-service agent integration.',
  },
  {
    label: 'Schwab phone access',
    url: 'https://www.schwab.com/contact-us/phone-access',
    note: 'Public evidence that financial phone support can include quote, trade, balance, and instruction flows.',
  },
  {
    label: 'Schwab AI portfolio insights release',
    url: 'https://pressroom.aboutschwab.com/press-releases/press-release/2026/Charles-Schwab-Launches-AI-Powered-Capability-That-Helps-Investors-Understand-Portfolio-Performance-and-Market-Activity/default.aspx',
    note: 'Public evidence of AI-assisted investor education and portfolio explanation.',
  },
];

export const CONVERGENCE = {
  generatedCandidates: 400,
  passOne: {
    count: 200,
    axes: ['industry', 'call direction', 'revenue event', 'human fallback', 'risk class', 'data source', 'self-improvement signal'],
    survivingPatterns: ['teach-before-route', 'recover-missed-demand', 'qualify-then-schedule', 'resolve-then-upsell', 'survey-then-repair'],
  },
  passTwo: {
    count: 200,
    seededFrom: 'top pass-one patterns plus Simple-native components',
    axes: ['API demoability', 'ROI legibility', 'workflow composability', 'roadmap lift', 'Sierra wedge', 'interview usefulness'],
    survivingPatterns: ['event ledger', 'pre-call enrichment', 'analyzer-grade outcome schema', 'post-call revenue loop', 'journey rerun'],
  },
  finalSelectionRule: 'Prefer workflows that can be demoed as a single call, measured as a business event, and generalized into a product primitive.',
};

export const CONSULTING_PLAYBOOK = [
  {
    phase: 'Map the money',
    output: 'One business-event ledger: every call maps to avoided cost, recovered revenue, risk reduction, or learning value.',
    proof: 'Baseline call volume, handle time, conversion, abandon rate, escalation rate, and revenue per resolved event.',
  },
  {
    phase: 'Choose the first wedge',
    output: 'A narrow call type that is frequent, scriptable, painful, and downstream of an existing system of record.',
    proof: 'The customer can name who owns the metric and what weekly movement would justify expansion.',
  },
  {
    phase: 'Compose the call loop',
    output: 'Prompt or agent, pre-call enrichment, HTTP tools, analyzers, tags, and post-call webhook.',
    proof: 'A complete synthetic run produces a call payload, ROI estimate, analyzer schema, and CRM action.',
  },
  {
    phase: 'Pilot with a counterfactual',
    output: 'Route a bounded slice through the AI agent and keep comparable human-handled traffic as the control.',
    proof: 'The customer can answer whether the agent saved time, amplified revenue, or improved quality.',
  },
  {
    phase: 'Close the learning loop',
    output: 'Weekly analyzer reruns and failure buckets become prompt edits, flow edits, tool edits, or product requests.',
    proof: 'Every deployment improves along containment, correction rate, revenue per call, and human escalation quality.',
  },
  {
    phase: 'Self-fund expansion',
    output: 'Use the measured margin from wedge one to justify wedge two, then package repeated work as reusable platform primitives.',
    proof: 'Expansion is financed by visible value, not by a leap of faith.',
  },
];

export const SIMPLE_PRIMITIVES = [
  {
    id: 'business-event-ledger',
    title: 'Business Event Ledger',
    definition: 'Every call creates a ledger row with baseline cost, AI-handled outcome, incremental revenue, human time saved, risk flags, and next action.',
    why: 'It turns "agent worked" into a CFO-readable value stream.',
    apiPattern: 'external_identifiers on /calls plus post-call webhook writes outcome rows to the customer warehouse.',
    metric: 'gross value per completed interaction',
  },
  {
    id: 'counterfactual-baseline',
    title: 'Counterfactual Baseline',
    definition: 'Keep a comparable human-handled slice so the pilot can measure lift instead of arguing from vibes.',
    why: 'The first question from a CRO or COO is what would have happened anyway.',
    apiPattern: 'tag AI-routed calls and compare them to same-period queue, campaign, or territory control traffic.',
    metric: 'lift over human or legacy IVR baseline',
  },
  {
    id: 'precall-identity-envelope',
    title: 'Pre-Call Identity Envelope',
    definition: 'Before the first word, load the caller, account, risk tier, open tickets, recent orders, and eligible next actions.',
    why: 'A voice agent sounds competent when it starts with context rather than interrogation.',
    apiPattern: 'agent pre_call_webhook_url returns a compact parameters object.',
    metric: 'seconds to first useful action',
  },
  {
    id: 'tool-thin-waist',
    title: 'Tool Thin Waist',
    definition: 'Expose one simple company endpoint per business action, while hiding complex CRM, OMS, billing, and policy logic behind it.',
    why: 'The agent should call "check eligibility" instead of orchestrating five brittle systems out loud.',
    apiPattern: 'HTTP integration with narrow request and concise JSON response.',
    metric: 'tool success rate and fallback rate',
  },
  {
    id: 'analyzer-contract',
    title: 'Analyzer Contract',
    definition: 'For each workflow, define the exact structured fields that decide value, routing, and product learning.',
    why: 'The agent becomes measurable only when outcomes are typed.',
    apiPattern: 'inline analyzers on /calls for prompt calls, or agent-level analyzers for reusable agents.',
    metric: 'analyzer agreement with human QA',
  },
  {
    id: 'handoff-with-brief',
    title: 'Handoff With Brief',
    definition: 'Warm transfer only after the agent collects the reason, authentication state, attempted actions, and recommended next step.',
    why: 'Human escalation should become higher leverage, not just later hold time.',
    apiPattern: 'warm transfer plus post-call note and tags.',
    metric: 'human minutes saved per escalated call',
  },
  {
    id: 'journey-rerun-loop',
    title: 'Journey Rerun Loop',
    definition: 'Campaign and journey results create retry cohorts, SMS follow-ups, and variant calls without rebuilding the workflow.',
    why: 'Outbound value comes from the second and third attempt as much as the first.',
    apiPattern: 'journeys, runs, call outcome branches, SMS follow-up, and exported CSV results.',
    metric: 'resolved contacts per recipient imported',
  },
  {
    id: 'safe-action-gate',
    title: 'Safe Action Gate',
    definition: 'Separate teaching, lookup, recommendation, and side-effect actions, with stricter confirmation as risk rises.',
    why: 'Regulated and financial calls can still be useful without letting the agent improvise dangerous actions.',
    apiPattern: 'tool descriptions, confirmation prompts, action endpoints, and tagged policy escalations.',
    metric: 'policy-safe automation rate',
  },
  {
    id: 'experiment-backlog',
    title: 'Experiment Backlog',
    definition: 'Each failure bucket becomes a ranked experiment: prompt edit, knowledge update, tool change, flow branch, or product gap.',
    why: 'Self-improving deployments need a managed backlog rather than random prompt fiddling.',
    apiPattern: 'post-call webhook writes analyzer failures into issue tracker or CRM tasks.',
    metric: 'weekly reduction in top failure bucket',
  },
  {
    id: 'market-wedge-memo',
    title: 'Market Wedge Memo',
    definition: 'For each customer, articulate why this workflow beats incumbent agent platforms in speed, measurability, or specialization.',
    why: 'Taking share from Sierra requires a reason the buyer can repeat internally.',
    apiPattern: 'source-indexed brief plus demo payloads for one vertical.',
    metric: 'days from first meeting to measured pilot',
  },
];

export const SIMPLE_WORKFLOWS = [
  {
    id: 'schwab-trade-desk-teaching-router',
    rank: 1,
    title: 'Trade Desk Teaching Router',
    sector: 'financial services',
    stakeholder: 'Head of phone service, trading education lead, compliance',
    surface: 'inbound support with safe education and warm transfer',
    useCase: 'Replace a ticker-tape style phone tree with a teaching conversation that identifies intent, explains concepts, and routes only high-risk actions to licensed humans.',
    thesis: 'A financial phone agent should not pretend to be a broker. It should teach, disambiguate, collect context, and create a high-quality handoff brief.',
    apiChain: ['pre-call identity envelope', 'knowledge base lookup', 'market-term teaching flow', 'safe-action gate', 'warm transfer', 'post-call analyzer', 'ledger row'],
    simpleComponents: ['inbound agent', 'knowledge base', 'IVR navigation', 'HTTP tool', 'warm transfer', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 180000, handleMinutes: 7, hourlyCost: 42, containmentRate: 0.18, conversionLift: 0.006, averageOrderValue: 0, grossMargin: 1, pilotCost: 85000 },
    paramsExample: { customer_name: 'Casey', account_tier: 'self-directed', intent_hint: 'options quote', risk_mode: 'education_only' },
    prompt: 'You are a careful financial-services phone assistant. Teach concepts, explain navigation, summarize risks, and route trading, recommendation, identity, or account-control actions to a licensed human. Do not provide investment advice. Use concise spoken language.',
    analyzers: ['intent_type', 'education_completed', 'licensed_handoff_required', 'handoff_reason', 'customer_confidence_delta'],
    tools: ['lookup_account_context', 'lookup_help_article', 'create_handoff_brief'],
    safeguards: ['no trade placement', 'no personalized recommendation', 'identity escalation', 'compliance tag on uncertain advice requests'],
    demo: 'Caller asks what an options quote means; agent explains bid/ask/spread at a high level, checks if the caller wants education or a human, then sends a brief to the trade desk.',
    productLoop: 'Analyzer clusters reveal which investing concepts confuse callers; those become new knowledge articles and teaching branches.',
    sierraWedge: 'Compete on regulated teaching plus measurable handoff quality, not generic customer support containment.',
  },
  {
    id: 'missed-inbound-sales-recovery',
    rank: 2,
    title: 'Missed Inbound Sales Recovery',
    sector: 'home services, healthcare, legal, local commerce',
    stakeholder: 'CRO, revenue operations, branch manager',
    surface: 'inbound missed-call callback and qualification',
    useCase: 'When a buyer calls after hours or during peak load, call back in seconds, qualify the need, answer common questions, and book the next step.',
    thesis: 'The fastest ROI path is recovered demand that already raised its hand.',
    apiChain: ['missed-call event', 'POST /calls', 'CRM lookup', 'qualification tool', 'appointment booking', 'post-call CRM update'],
    simpleComponents: ['outbound call', 'params', 'HTTP tools', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 4200, handleMinutes: 5, hourlyCost: 34, containmentRate: 0.72, conversionLift: 0.09, averageOrderValue: 620, grossMargin: 0.34, pilotCost: 30000 },
    paramsExample: { customer_name: 'Jordan', service_area: 'Austin', missed_call_age_minutes: '3', lead_source: 'paid_search' },
    prompt: 'You are a sales recovery agent calling back immediately after a missed inbound call. Apologize briefly, qualify the need, answer factual questions, book a next step, and escalate unusual cases.',
    analyzers: ['lead_qualified', 'appointment_booked', 'estimated_revenue', 'lost_reason', 'next_best_action'],
    tools: ['lookup_service_area', 'quote_basic_range', 'book_appointment', 'update_crm_lead'],
    safeguards: ['no binding price guarantee', 'clear opt-out', 'handoff for unusual terms'],
    demo: 'A paid-search lead calls after hours; the agent calls back, confirms location and need, books a slot, then writes the lead source and appointment to CRM.',
    productLoop: 'Missed-call cohorts reveal which ads and service lines produce high-value calls.',
    sierraWedge: 'Do not start with a massive contact-center replacement; start with revenue leakage that can fund the rest.',
  },
  {
    id: 'omaha-steaks-order-concierge',
    rank: 3,
    title: 'Order Concierge With Save Offer',
    sector: 'retail and specialty food',
    stakeholder: 'VP customer experience, ecommerce GM, fulfillment ops',
    surface: 'inbound order intake, gift support, substitution, and retention',
    useCase: 'Help customers place or modify orders, resolve shipping questions, and save at-risk orders with approved alternatives.',
    thesis: 'A good voice agent can preserve revenue by being patient, specific, and connected to inventory.',
    apiChain: ['caller lookup', 'catalog/inventory tool', 'shipping promise tool', 'order update tool', 'analyzer', 'webhook to OMS'],
    simpleComponents: ['inbound agent', 'knowledge base', 'HTTP tools', 'warm transfer', 'analyzers'],
    roi: { monthlyCalls: 65000, handleMinutes: 6, hourlyCost: 28, containmentRate: 0.42, conversionLift: 0.025, averageOrderValue: 115, grossMargin: 0.42, pilotCost: 60000 },
    paramsExample: { customer_name: 'Mira', order_id: 'OS-4811', occasion: 'gift', delivery_window: 'Friday' },
    prompt: 'You are a premium retail order concierge. Be warm, precise, and practical. Help with order status, gift delivery, substitutions, and approved save offers. Escalate payment disputes and policy exceptions.',
    analyzers: ['order_saved', 'upsell_accepted', 'substitution_needed', 'delivery_risk', 'customer_sentiment'],
    tools: ['lookup_order', 'lookup_inventory', 'offer_substitution', 'update_order_note'],
    safeguards: ['confirm order changes', 'do not invent delivery promises', 'transfer payment changes'],
    demo: 'Gift buyer calls about a delayed package; agent finds weather risk, offers an approved substitute basket, and logs the save.',
    productLoop: 'Post-call saves identify which SKUs and delivery windows create preventable churn.',
    sierraWedge: 'Vertical speed: order, inventory, gift context, and save math in the first pilot.',
  },
  {
    id: 'doordash-merchant-ops-agent',
    rank: 4,
    title: 'Merchant Ops Recovery Agent',
    sector: 'marketplace operations',
    stakeholder: 'Merchant operations, support, marketplace quality',
    surface: 'inbound and outbound merchant support',
    useCase: 'Resolve menu, payout, tablet, hours, and order-flow issues for merchants while keeping restaurants online.',
    thesis: 'Marketplace voice support is a revenue protection system because unresolved merchant issues reduce live supply.',
    apiChain: ['merchant phone lookup', 'store status tool', 'issue classification', 'action endpoint', 'human escalation for account risk', 'post-call ops ledger'],
    simpleComponents: ['inbound agent', 'HTTP tools', 'analyzers', 'tags', 'webhooks'],
    roi: { monthlyCalls: 90000, handleMinutes: 8, hourlyCost: 32, containmentRate: 0.38, conversionLift: 0.004, averageOrderValue: 450, grossMargin: 0.23, pilotCost: 90000 },
    paramsExample: { merchant_name: 'Noodle House', store_id: 'store_238', open_issue: 'tablet_offline', market: 'Chicago' },
    prompt: 'You are a merchant operations agent. Identify the store, classify the operational blocker, use tools to check status, guide simple fixes, and escalate payout, fraud, or account-control issues.',
    analyzers: ['store_recovered', 'downtime_minutes_avoided', 'issue_type', 'tool_success', 'escalation_quality'],
    tools: ['lookup_store_status', 'restart_tablet_flow', 'update_hours', 'create_ops_ticket'],
    safeguards: ['do not change bank details', 'verify store identity', 'transfer fraud and payout disputes'],
    demo: 'Restaurant tablet is offline during lunch; agent checks store status, walks the merchant through reset, and opens a ticket only if failed.',
    productLoop: 'Issue clusters become merchant-health alerts and proactive outreach journeys.',
    sierraWedge: 'Tie agent success to marketplace liquidity, not only ticket deflection.',
  },
  {
    id: 'utility-outage-billing-companion',
    rank: 5,
    title: 'Utility Outage And Billing Companion',
    sector: 'utilities',
    stakeholder: 'Customer operations, regulatory affairs, billing',
    surface: 'inbound outage, rate, meter, and bill explanation',
    useCase: 'Explain outages, usage spikes, rate plans, and payment options while reducing repeat calls.',
    thesis: 'Utilities are a Sierra battleground; a wedge can be better explanation, faster deployment, and measurable repeat-call reduction.',
    apiChain: ['account/meter lookup', 'outage map tool', 'bill explanation tool', 'payment-plan eligibility', 'analyzer', 'repeat-call ledger'],
    simpleComponents: ['inbound agent', 'knowledge base', 'HTTP tools', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 240000, handleMinutes: 9, hourlyCost: 36, containmentRate: 0.31, conversionLift: 0.002, averageOrderValue: 0, grossMargin: 1, pilotCost: 110000 },
    paramsExample: { customer_name: 'Ari', meter_id: 'MTR-19', outage_area: 'possible', rate_plan: 'time_of_use' },
    prompt: 'You are a utility support agent. Explain status, bills, usage, rates, and next steps clearly. Avoid overpromising restoration times. Escalate emergencies, shutoff risk, and identity issues.',
    analyzers: ['repeat_call_risk', 'bill_understood', 'payment_plan_eligible', 'outage_resolved', 'regulatory_risk'],
    tools: ['lookup_outage_status', 'explain_bill_driver', 'check_payment_plan', 'log_customer_contact'],
    safeguards: ['emergency escalation', 'no invented restoration time', 'compliance language'],
    demo: 'Customer complains the bill doubled; agent compares usage/weather/rate window and offers a plan if eligible.',
    productLoop: 'Repeat-call drivers become revised bill explanations and proactive SMS campaigns.',
    sierraWedge: 'Pair voice explanation with utility-specific data products rather than generic contact-center automation.',
  },
  {
    id: 'debt-collection-hardship-negotiator',
    rank: 6,
    title: 'Compliant Hardship Negotiator',
    sector: 'lending and debt collection',
    stakeholder: 'Collections VP, compliance, customer care',
    surface: 'outbound collections and inbound payment plans',
    useCase: 'Reach borrowers, identify hardship, offer approved options, collect promise-to-pay, and escalate sensitive cases.',
    thesis: 'The value is not pressure; it is consistent, compliant, patient negotiation at scale.',
    apiChain: ['journey run', 'borrower params', 'eligibility tool', 'payment-plan offer', 'call tag', 'post-call webhook'],
    simpleComponents: ['campaigns', 'outbound calls', 'SMS', 'HTTP tools', 'analyzers'],
    roi: { monthlyCalls: 70000, handleMinutes: 6, hourlyCost: 30, containmentRate: 0.55, conversionLift: 0.035, averageOrderValue: 260, grossMargin: 0.75, pilotCost: 75000 },
    paramsExample: { borrower_name: 'Taylor', delinquency_bucket: '31_60', balance: '840', state: 'OH' },
    prompt: 'You are a compliant collections assistant. Be respectful, verify identity, explain the reason for the call, offer approved hardship and payment options, record promise-to-pay, and stop immediately on opt-out or dispute.',
    analyzers: ['promise_to_pay', 'hardship_detected', 'dispute_detected', 'compliance_stop_required', 'next_contact_date'],
    tools: ['check_offer_eligibility', 'record_promise_to_pay', 'send_payment_link', 'create_dispute_ticket'],
    safeguards: ['state policy guard', 'dispute escalation', 'opt-out handling', 'identity verification'],
    demo: 'Borrower cannot pay full amount; agent offers an approved split payment and sends link after confirmation.',
    productLoop: 'Hardship categories improve segmentation and reduce over-contacting.',
    sierraWedge: 'Measured recovered dollars plus compliance consistency is a sharper wedge than generic automation.',
  },
  {
    id: 'lead-qualification-to-calendar',
    rank: 7,
    title: 'Lead Qualification To Calendar',
    sector: 'B2B sales and services',
    stakeholder: 'Sales leader, SDR manager, GTM ops',
    surface: 'inbound calls, outbound speed-to-lead, and form callbacks',
    useCase: 'Qualify fit, pain, urgency, authority, and next step, then book or route to the correct rep.',
    thesis: 'A voice agent can act like the first SDR touch if the qualification contract is explicit.',
    apiChain: ['form event', 'POST /calls', 'CRM enrichment', 'qualification analyzer', 'calendar tool', 'CRM stage update'],
    simpleComponents: ['outbound calls', 'HTTP tools', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 12000, handleMinutes: 7, hourlyCost: 45, containmentRate: 0.68, conversionLift: 0.041, averageOrderValue: 9000, grossMargin: 0.78, pilotCost: 50000 },
    paramsExample: { company: 'Northstar Clinics', title: 'COO', use_case: 'after-hours calls', source: 'demo_request' },
    prompt: 'You are a concise B2B qualification agent. Confirm the prospect context, ask fit and urgency questions, answer high-level product questions, and book the appropriate next meeting.',
    analyzers: ['qualified_lead', 'qualification_score', 'pain', 'urgency', 'meeting_booked'],
    tools: ['lookup_account', 'score_fit', 'book_calendar', 'update_crm'],
    safeguards: ['do not negotiate final terms', 'route procurement/security detail to human'],
    demo: 'Demo request arrives; agent calls, qualifies after-hours pain, books AE call, and writes MEDDICC notes.',
    productLoop: 'The qualification analyzer becomes the source of truth for which fields predict close rate.',
    sierraWedge: 'Revenue teams buy speed and pipeline lift faster than full enterprise CX transformation.',
  },
  {
    id: 'customer-survey-repair-loop',
    rank: 8,
    title: 'Customer Survey Repair Loop',
    sector: 'hospitality, ecommerce, healthcare, SaaS',
    stakeholder: 'CX, product, customer success',
    surface: 'outbound surveys with immediate save actions',
    useCase: 'Call customers after events, collect structured feedback, and trigger recovery workflows for unhappy users.',
    thesis: 'Surveys should not be passive reporting; they should create a repair loop while the customer is still reachable.',
    apiChain: ['journey run', 'survey call', 'sentiment analyzer', 'save-action branch', 'CRM/task webhook', 'trend dashboard'],
    simpleComponents: ['journeys', 'outbound calls', 'analyzers', 'webhooks', 'SMS'],
    roi: { monthlyCalls: 25000, handleMinutes: 4, hourlyCost: 26, containmentRate: 0.8, conversionLift: 0.012, averageOrderValue: 140, grossMargin: 0.38, pilotCost: 35000 },
    paramsExample: { customer_name: 'Sam', event_type: 'delivery', order_id: 'D-1029', survey_reason: 'late_delivery' },
    prompt: 'You are a feedback and recovery agent. Ask short questions, listen for dissatisfaction, apologize without overpromising, and trigger approved recovery offers when eligible.',
    analyzers: ['nps_bucket', 'root_cause', 'save_required', 'recovery_offer_sent', 'product_insight'],
    tools: ['lookup_experience', 'issue_coupon', 'create_followup_task', 'write_feedback_row'],
    safeguards: ['offer eligibility rules', 'transfer serious complaint', 'do not argue'],
    demo: 'Customer had late delivery; agent captures cause, sends approved credit, and routes recurring issue to ops.',
    productLoop: 'Survey root causes become product and ops backlog items with quantified frequency.',
    sierraWedge: 'Link voice-of-customer collection directly to remediation rather than dashboard-only sentiment.',
  },
  {
    id: 'healthcare-intake-and-triage',
    rank: 9,
    title: 'Healthcare Intake And Triage',
    sector: 'healthcare provider operations',
    stakeholder: 'Access center, clinic operations, compliance',
    surface: 'inbound scheduling, prep, and administrative triage',
    useCase: 'Collect appointment needs, insurance basics, location preferences, and route clinical symptoms to approved human protocols.',
    thesis: 'The safest healthcare wedge is administrative intake with strict clinical escalation.',
    apiChain: ['caller lookup', 'eligibility/prep knowledge', 'scheduling tool', 'clinical escalation gate', 'post-call note'],
    simpleComponents: ['inbound agent', 'HIPAA posture', 'knowledge base', 'HTTP tools', 'warm transfer'],
    roi: { monthlyCalls: 110000, handleMinutes: 8, hourlyCost: 33, containmentRate: 0.34, conversionLift: 0.009, averageOrderValue: 210, grossMargin: 0.42, pilotCost: 95000 },
    paramsExample: { patient_name: 'Alex', clinic: 'downtown', appointment_type: 'new_patient', insurance_state: 'unknown' },
    prompt: 'You are a healthcare administrative intake agent. Help schedule and prepare visits. Do not provide medical advice. Escalate symptoms, emergencies, medication questions, and uncertainty to a human clinician or nurse line.',
    analyzers: ['appointment_booked', 'clinical_escalation', 'prep_understood', 'insurance_missing', 'no_show_risk'],
    tools: ['lookup_patient', 'check_slot', 'book_visit', 'send_prep_sms'],
    safeguards: ['emergency language', 'no diagnosis', 'PHI minimization'],
    demo: 'Patient needs a new appointment; agent collects basics, books visit, sends prep, transfers symptom question.',
    productLoop: 'No-show risk and prep confusion drive proactive reminders and knowledge updates.',
    sierraWedge: 'Sell administrative throughput with clear clinical safety boundaries.',
  },
  {
    id: 'insurance-eligibility-explainer',
    rank: 10,
    title: 'Insurance Eligibility Explainer',
    sector: 'insurance and benefits',
    stakeholder: 'Member services, claims ops, compliance',
    surface: 'inbound eligibility and benefits explanation',
    useCase: 'Explain coverage, copays, eligibility, claim status, and next steps using live policy data.',
    thesis: 'Benefit calls are high-volume explanation tasks that become safer when backed by deterministic tools.',
    apiChain: ['member identity', 'eligibility tool', 'benefit summary', 'claim status tool', 'analyzer', 'audit note'],
    simpleComponents: ['inbound agent', 'HTTP tools', 'knowledge base', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 160000, handleMinutes: 10, hourlyCost: 37, containmentRate: 0.29, conversionLift: 0.001, averageOrderValue: 0, grossMargin: 1, pilotCost: 105000 },
    paramsExample: { member_name: 'Robin', plan_code: 'GOLD-2026', claim_id: 'CLM-9021', state: 'CA' },
    prompt: 'You are a benefits explanation agent. Use tools to retrieve eligibility and claim facts. Explain plainly, cite plan language when needed, and transfer appeals, complaints, and ambiguous coverage questions.',
    analyzers: ['benefit_explained', 'claim_resolved', 'appeal_risk', 'repeat_call_risk', 'member_sentiment'],
    tools: ['check_eligibility', 'lookup_claim', 'send_summary', 'create_case_note'],
    safeguards: ['identity verification', 'no coverage invention', 'appeal escalation'],
    demo: 'Member asks why a claim was denied; agent retrieves status and explains next appeal step without legal overreach.',
    productLoop: 'Repeat-call reasons identify confusing plan language and tool gaps.',
    sierraWedge: 'Win on explainability and audit-ready handoffs.',
  },
  {
    id: 'saas-renewal-save-desk',
    rank: 11,
    title: 'SaaS Renewal Save Desk',
    sector: 'B2B SaaS',
    stakeholder: 'Customer success, renewals, finance',
    surface: 'outbound renewal risk calls and inbound cancellation calls',
    useCase: 'Identify churn reason, resolve administrative blockers, book success calls, and trigger approved save plays.',
    thesis: 'Voice AI can turn cancellation queues into structured churn intelligence.',
    apiChain: ['CRM renewal cohort', 'journey run', 'usage lookup', 'save-offer tool', 'CS task creation', 'churn analyzer'],
    simpleComponents: ['journeys', 'outbound calls', 'HTTP tools', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 8500, handleMinutes: 9, hourlyCost: 48, containmentRate: 0.41, conversionLift: 0.022, averageOrderValue: 18000, grossMargin: 0.82, pilotCost: 55000 },
    paramsExample: { account: 'Ridge Analytics', renewal_date: '2026-07-15', usage_risk: 'low_admin_login', arr: '18000' },
    prompt: 'You are a renewal save assistant. Listen for churn reason, resolve simple administrative issues, offer approved next steps, and book a human success conversation for strategic risk.',
    analyzers: ['churn_reason', 'save_play_triggered', 'meeting_booked', 'admin_blocker', 'arr_at_risk'],
    tools: ['lookup_usage', 'extend_trial_feature', 'book_csm', 'update_renewal_stage'],
    safeguards: ['no custom contract terms', 'handoff legal/security/procurement'],
    demo: 'Customer says nobody uses the product; agent checks usage, identifies admin issue, books CSM, and sends enablement link.',
    productLoop: 'Churn reasons become onboarding fixes and product activation experiments.',
    sierraWedge: 'Tie agent work to ARR save math and product activation, not only service cost.',
  },
  {
    id: 'retail-return-exchange-save',
    rank: 12,
    title: 'Retail Return Exchange Save',
    sector: 'retail and ecommerce',
    stakeholder: 'CX, ecommerce, margin ops',
    surface: 'inbound return support',
    useCase: 'Validate return eligibility, offer exchange or replacement, issue label, and capture root cause.',
    thesis: 'Returns are not just cost; they are a chance to save margin and learn product defects.',
    apiChain: ['order lookup', 'return eligibility tool', 'exchange recommendation', 'label tool', 'post-call reason analyzer'],
    simpleComponents: ['inbound agent', 'HTTP tools', 'analyzers', 'tags'],
    roi: { monthlyCalls: 40000, handleMinutes: 6, hourlyCost: 27, containmentRate: 0.58, conversionLift: 0.031, averageOrderValue: 76, grossMargin: 0.45, pilotCost: 42000 },
    paramsExample: { order_id: 'R-8841', product: 'running shoe', return_reason: 'fit', customer_tier: 'repeat' },
    prompt: 'You are a return and exchange assistant. Validate policy, offer useful exchange options, issue labels when eligible, and escalate exceptions or angry customers.',
    analyzers: ['return_prevented', 'exchange_accepted', 'defect_signal', 'policy_exception', 'refund_amount'],
    tools: ['lookup_order', 'check_return_window', 'recommend_exchange', 'create_label'],
    safeguards: ['policy language', 'confirm email/address', 'escalate fraud signals'],
    demo: 'Customer wants refund for wrong size; agent offers exchange size, creates label, and tags fit issue.',
    productLoop: 'Defect and fit tags feed merchandising and product pages.',
    sierraWedge: 'Margin-preserving voice automation beats simple ticket deflection.',
  },
  {
    id: 'auto-service-scheduler',
    rank: 13,
    title: 'Auto Service Scheduler',
    sector: 'automotive dealers and service networks',
    stakeholder: 'Service manager, dealer GM, BDC team',
    surface: 'inbound service calls and outbound maintenance reminders',
    useCase: 'Schedule service, explain maintenance, order loaner/shuttle, and reduce advisor interruptions.',
    thesis: 'Automotive service calls are structured enough for automation and valuable enough for fast payback.',
    apiChain: ['VIN/customer lookup', 'maintenance schedule tool', 'calendar capacity', 'confirmation SMS', 'post-call task'],
    simpleComponents: ['inbound agent', 'outbound campaigns', 'SMS', 'HTTP tools', 'analyzers'],
    roi: { monthlyCalls: 9500, handleMinutes: 5, hourlyCost: 29, containmentRate: 0.64, conversionLift: 0.037, averageOrderValue: 390, grossMargin: 0.48, pilotCost: 28000 },
    paramsExample: { customer_name: 'Lee', vin_last6: '482991', vehicle: '2021 Accord', reminder_type: '60k_service' },
    prompt: 'You are an automotive service scheduling assistant. Identify vehicle and need, explain standard maintenance at a high level, book service, and escalate warranty, safety, and complex diagnostic questions.',
    analyzers: ['appointment_booked', 'service_type', 'advisor_needed', 'estimated_ro', 'no_show_risk'],
    tools: ['lookup_vehicle', 'check_service_slots', 'book_service', 'send_confirmation'],
    safeguards: ['no diagnosis certainty', 'safety escalation', 'price estimate caveat'],
    demo: 'Customer asks for oil change and brake concern; agent books appointment and flags advisor note.',
    productLoop: 'Repeated diagnostic confusion becomes knowledge and callback routing.',
    sierraWedge: 'Deploy quickly into one dealer group and show booked repair orders.',
  },
  {
    id: 'restaurant-catering-order-agent',
    rank: 14,
    title: 'Restaurant Catering Order Agent',
    sector: 'restaurants and catering',
    stakeholder: 'Operations, store manager, catering sales',
    surface: 'inbound catering and large-order calls',
    useCase: 'Capture catering details, check store capacity, suggest packages, collect deposits or route payment.',
    thesis: 'Large orders justify a better phone experience because each missed call can be high value.',
    apiChain: ['location routing', 'menu/package tool', 'capacity check', 'order draft', 'human payment handoff', 'CRM follow-up'],
    simpleComponents: ['inbound agent', 'IVR navigation', 'HTTP tools', 'warm transfer', 'analyzers'],
    roi: { monthlyCalls: 3200, handleMinutes: 8, hourlyCost: 24, containmentRate: 0.52, conversionLift: 0.058, averageOrderValue: 780, grossMargin: 0.36, pilotCost: 25000 },
    paramsExample: { event_date: '2026-06-22', guest_count: '45', location: 'SoMa', budget: '900' },
    prompt: 'You are a catering intake agent. Collect event details, suggest approved packages, check location capacity, create a draft order, and transfer for payment or custom terms.',
    analyzers: ['catering_qualified', 'draft_order_value', 'capacity_issue', 'payment_handoff', 'lost_reason'],
    tools: ['lookup_menu', 'check_store_capacity', 'create_draft_order', 'notify_catering_manager'],
    safeguards: ['allergy disclosure', 'payment handoff', 'do not promise unavailable inventory'],
    demo: 'Office admin calls for 45-person lunch; agent builds draft package and sends manager a clean brief.',
    productLoop: 'Lost reasons improve packages, pricing, and staffing plans.',
    sierraWedge: 'Use voice AI as revenue capture for distributed operators, not only enterprise support.',
  },
  {
    id: 'field-technician-dispatch-triage',
    rank: 15,
    title: 'Field Technician Dispatch Triage',
    sector: 'home services and industrial service',
    stakeholder: 'Dispatch, operations, customer support',
    surface: 'inbound service requests and proactive status calls',
    useCase: 'Collect symptom details, classify urgency, schedule technician, and reduce wasted truck rolls.',
    thesis: 'A voice agent that asks the right diagnostic questions can save dispatch time and field cost.',
    apiChain: ['customer/site lookup', 'triage decision tree', 'parts/location tool', 'dispatch scheduling', 'photo/SMS follow-up'],
    simpleComponents: ['inbound agent', 'SMS', 'HTTP tools', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 18000, handleMinutes: 9, hourlyCost: 31, containmentRate: 0.46, conversionLift: 0.015, averageOrderValue: 480, grossMargin: 0.5, pilotCost: 46000 },
    paramsExample: { customer_name: 'Morgan', equipment: 'water_heater', warranty: 'active', zip: '94107' },
    prompt: 'You are a dispatch triage assistant. Ask concise diagnostic questions, classify urgency, schedule technician, send prep instructions, and escalate safety issues immediately.',
    analyzers: ['dispatch_needed', 'urgency', 'truck_roll_avoided', 'parts_likely_needed', 'safety_escalation'],
    tools: ['lookup_warranty', 'classify_issue', 'check_technician_slots', 'send_prep_sms'],
    safeguards: ['gas/electrical emergency transfer', 'no unsafe repair advice'],
    demo: 'Customer reports leak; agent triages severity, books emergency slot, and sends shutoff instructions from approved KB.',
    productLoop: 'Truck-roll avoidances become better triage prompts and parts predictions.',
    sierraWedge: 'Show direct ops cost savings, not only support queue reduction.',
  },
  {
    id: 'travel-irregular-operations-agent',
    rank: 16,
    title: 'Travel Irregular Operations Agent',
    sector: 'travel and hospitality',
    stakeholder: 'Contact center, revenue management, loyalty',
    surface: 'inbound disruption support',
    useCase: 'Handle delays, cancellations, rebooking education, vouchers, and loyalty-sensitive handoffs.',
    thesis: 'During spikes, voice AI can absorb explanation and triage while preserving human capacity for exceptions.',
    apiChain: ['reservation lookup', 'policy/tool lookup', 'option generation', 'voucher eligibility', 'handoff brief', 'sentiment analyzer'],
    simpleComponents: ['inbound agent', 'knowledge base', 'HTTP tools', 'warm transfer', 'analyzers'],
    roi: { monthlyCalls: 60000, handleMinutes: 11, hourlyCost: 38, containmentRate: 0.27, conversionLift: 0.006, averageOrderValue: 210, grossMargin: 0.32, pilotCost: 100000 },
    paramsExample: { traveler_name: 'Dana', reservation_id: 'PNR42K', loyalty_tier: 'gold', disruption: 'weather_delay' },
    prompt: 'You are a travel disruption assistant. Explain status and policy clearly, gather preferences, offer approved options, and escalate loyalty exceptions or complex rebooking.',
    analyzers: ['resolved_without_agent', 'rebooking_needed', 'voucher_eligible', 'loyalty_risk', 'anger_level'],
    tools: ['lookup_reservation', 'lookup_policy', 'find_options', 'issue_voucher'],
    safeguards: ['do not invent availability', 'transfer exceptions', 'empathy under stress'],
    demo: 'Weather delay spikes queue; agent explains options and transfers only the cases requiring override.',
    productLoop: 'Spike transcripts reveal policy confusion and self-service gaps.',
    sierraWedge: 'Stress-test during irregular ops as a high-visibility wedge.',
  },
  {
    id: 'banking-fraud-intake-gate',
    rank: 17,
    title: 'Banking Fraud Intake Gate',
    sector: 'banking and fintech',
    stakeholder: 'Fraud ops, contact center, risk',
    surface: 'inbound suspicious activity calls',
    useCase: 'Collect structured fraud facts, freeze risky flows through tool calls only when allowed, and route to specialists.',
    thesis: 'For high-risk calls, value comes from structured intake and faster human decisions, not full automation.',
    apiChain: ['identity state', 'fraud intake script', 'risk tool', 'temporary safe action', 'specialist handoff', 'audit analyzer'],
    simpleComponents: ['inbound agent', 'HTTP tools', 'warm transfer', 'analyzers', 'tags'],
    roi: { monthlyCalls: 50000, handleMinutes: 12, hourlyCost: 44, containmentRate: 0.12, conversionLift: 0.002, averageOrderValue: 0, grossMargin: 1, pilotCost: 100000 },
    paramsExample: { customer_name: 'Riley', account_tier: 'premium', risk_signal: 'unknown_charge', auth_state: 'partial' },
    prompt: 'You are a fraud intake assistant. Stay calm, collect facts, explain immediate safe next steps, use only approved tools, and transfer quickly for identity, fraud decisioning, or account action.',
    analyzers: ['fraud_type', 'specialist_ready_brief', 'safe_action_taken', 'identity_gap', 'audit_risk'],
    tools: ['create_fraud_case', 'mark_card_suspected', 'lookup_recent_transactions', 'handoff_to_fraud_queue'],
    safeguards: ['identity escalation', 'no final fraud determination', 'strict audit note'],
    demo: 'Customer reports unknown charge; agent collects merchant/date/amount and creates specialist-ready case before transfer.',
    productLoop: 'Specialist feedback improves intake questions and false-positive routing.',
    sierraWedge: 'Sell human amplification under risk, not unsafe deflection.',
  },
  {
    id: 'real-estate-showing-concierge',
    rank: 18,
    title: 'Real Estate Showing Concierge',
    sector: 'real estate and property management',
    stakeholder: 'Leasing, sales, property operations',
    surface: 'inbound listing calls and outbound nurture',
    useCase: 'Answer listing questions, qualify buyer/renter, schedule showing, and follow up with SMS.',
    thesis: 'High-intent listing calls are perishable; fast voice follow-up lifts showing volume.',
    apiChain: ['listing lookup', 'qualification', 'calendar availability', 'SMS confirmation', 'CRM stage update'],
    simpleComponents: ['inbound agent', 'outbound call', 'SMS', 'HTTP tools', 'analyzers'],
    roi: { monthlyCalls: 5600, handleMinutes: 6, hourlyCost: 30, containmentRate: 0.7, conversionLift: 0.065, averageOrderValue: 1200, grossMargin: 0.5, pilotCost: 26000 },
    paramsExample: { listing_id: 'APT-193', neighborhood: 'Mission', budget: '3200', move_date: '2026-07-01' },
    prompt: 'You are a property showing concierge. Answer factual listing questions, qualify fit, schedule showings, and escalate negotiation or legal questions to a human.',
    analyzers: ['showing_booked', 'qualified_fit', 'budget_gap', 'lost_reason', 'followup_needed'],
    tools: ['lookup_listing', 'check_showing_slots', 'book_showing', 'send_sms_confirmation'],
    safeguards: ['fair housing compliance', 'no legal advice', 'clear agent handoff'],
    demo: 'Renter calls on listing; agent answers pet policy, qualifies budget, books showing, and sends SMS.',
    productLoop: 'Lost reasons inform listing copy and pricing.',
    sierraWedge: 'Local operators can adopt quickly with direct revenue attribution.',
  },
  {
    id: 'education-admissions-counselor',
    rank: 19,
    title: 'Admissions Counselor',
    sector: 'education and training',
    stakeholder: 'Admissions, enrollment marketing, student services',
    surface: 'inbound program questions and outbound application nudges',
    useCase: 'Answer program questions, qualify interest, explain deadlines, and schedule counselor calls.',
    thesis: 'Admissions calls need patient explanation and consistent follow-up more than aggressive selling.',
    apiChain: ['lead lookup', 'program KB', 'deadline tool', 'calendar booking', 'application task webhook'],
    simpleComponents: ['knowledge base', 'outbound calls', 'SMS', 'HTTP tools', 'analyzers'],
    roi: { monthlyCalls: 7800, handleMinutes: 8, hourlyCost: 29, containmentRate: 0.62, conversionLift: 0.028, averageOrderValue: 6500, grossMargin: 0.55, pilotCost: 36000 },
    paramsExample: { student_name: 'Avery', program_interest: 'cybersecurity', application_status: 'started', deadline: '2026-08-01' },
    prompt: 'You are an admissions information assistant. Explain program facts, deadlines, and next steps. Encourage completion, book counselors, and avoid promises about admission or financial aid.',
    analyzers: ['application_next_step', 'counselor_booked', 'program_fit', 'financial_aid_question', 'deadline_risk'],
    tools: ['lookup_program', 'check_application_status', 'book_counselor', 'send_deadline_sms'],
    safeguards: ['no admission guarantee', 'financial aid escalation', 'minor consent policy'],
    demo: 'Applicant asks about program schedule; agent explains, books counselor, and sends checklist.',
    productLoop: 'Question clusters improve program pages and nurture campaigns.',
    sierraWedge: 'Patient counseling plus enrollment metrics is a clear vertical wedge.',
  },
  {
    id: 'ai-agent-quality-control-desk',
    rank: 20,
    title: 'AI Agent Quality Control Desk',
    sector: 'internal platform operations',
    stakeholder: 'Simple product, FDE, customer success, QA',
    surface: 'post-call review, regression tests, and deployment improvement',
    useCase: 'Use analyzers and call notes to score calls, detect regressions, and create deployment improvement tickets.',
    thesis: 'The meta-product is a self-improving deployment loop every customer can inherit.',
    apiChain: ['list interactions', 'get call', 'analyzer results', 'call notes', 'call tags', 'experiment backlog', 'agent update'],
    simpleComponents: ['interactions API', 'call notes', 'call tags', 'analyzers', 'webhooks'],
    roi: { monthlyCalls: 10000, handleMinutes: 5, hourlyCost: 60, containmentRate: 0.5, conversionLift: 0.01, averageOrderValue: 500, grossMargin: 0.5, pilotCost: 30000 },
    paramsExample: { deployment: 'pilot_7', sample_window: 'last_7_days', top_failure: 'tool_timeout', owner: 'fde' },
    prompt: 'You are not a caller-facing agent. You review completed calls, identify failure modes, propose experiments, and write concise product or deployment tickets.',
    analyzers: ['failure_bucket', 'severity', 'root_cause', 'experiment_type', 'expected_metric_move'],
    tools: ['list_interactions', 'create_call_note', 'create_call_tag', 'create_issue'],
    safeguards: ['sample privacy', 'no raw PII in tickets', 'human approval before deployment changes'],
    demo: 'Review 100 failed calls, detect tool-timeout cluster, tag calls, and draft a retry/backoff experiment.',
    productLoop: 'This becomes the standard operating system for field deployment improvement.',
    sierraWedge: 'Compete by making every deployment learn faster than incumbent platforms.',
  },
];

export const INTERVIEW_RESPONSES = [
  {
    id: 'architecture-first-hour',
    title: 'How I would architect the first hour of a customer engagement',
    answer: 'I would start by finding the smallest valuable call type where the customer already knows the business owner and metric. Then I would map the current path: who calls, why, what system the human opens, what decision is made, what follow-up happens, and how the business currently measures success. I would avoid pitching "automation" in the abstract. I would create a business-event ledger and ask the stakeholder to validate the baseline: volume, handle time, conversion, escalation, repeat calls, and revenue or cost per event.',
    technical: 'The first build is a pre-call enrichment endpoint, a Simple call payload, one or two HTTP tools, three analyzers, and a post-call webhook. The reason is that this creates the whole loop without boiling the ocean: context in, conversation, action, typed outcome, ledger row.',
    demo: 'I would show a single synthetic call and the resulting ledger row. If the CRO, support lead, and engineer can all point to the same row and agree what changed, we have a pilot.',
  },
  {
    id: 'roi-loop',
    title: 'How I would show ROI instead of just agent quality',
    answer: 'I would separate three value streams: saved labor, amplified revenue, and better decisions. Saved labor is handle minutes avoided or compressed. Amplified revenue is recovered missed calls, qualified leads, saved orders, or retained renewals. Better decisions are structured fields that improve routing, product pages, policies, or outreach. Then I would keep a human baseline so we measure lift rather than claiming all resolved calls as AI value.',
    technical: 'Use external_identifiers on POST /calls to connect every interaction to CRM or order IDs. Use analyzers for outcome, revenue estimate, escalation reason, and confidence. Use post-call webhooks to write to the customer warehouse.',
    demo: 'I would bring a dashboard that can answer: value per completed call, value by workflow, value by failure bucket, and experiments ranked by expected metric movement.',
  },
  {
    id: 'self-improving-deployment',
    title: 'How I would build a self-improving deployment',
    answer: 'I would treat every deployment as an experiment system. The agent does not just handle calls; it produces typed evidence about what failed and why. Each week the team looks at the top failure buckets and chooses whether the fix is a prompt edit, knowledge base article, tool response change, flow branch, customer policy decision, or core product request.',
    technical: 'The loop is analyzers -> call tags -> call notes -> experiment backlog -> approved deployment change -> rerun analyzers on old calls -> compare before/after cohorts.',
    demo: 'I would show a regression pack of hard calls. Before deploying a change, run the pack and verify the target metric improves without breaking policy safety.',
  },
  {
    id: 'sierra-market-share',
    title: 'How Simple can take share from Sierra',
    answer: 'I would not try to beat Sierra by claiming a bigger enterprise platform on day one. I would wedge where speed, voice specificity, and ROI attribution matter more than broad suite gravity. Examples: missed inbound sales, regulated teaching handoffs, merchant ops recovery, and debt collection hardship. These buyers can see value in weeks if the deployment is narrow and tied to a business event.',
    technical: 'Package vertical templates: prompts, analyzer schemas, tool contracts, webhook payloads, and ROI ledgers. The FDE motion turns repeated customer work into reusable product primitives.',
    demo: 'For a competitive account, I would bring a working call loop and a payback model for one queue rather than a generic deck.',
  },
  {
    id: 'schwab-example',
    title: 'How I would handle the Schwab-style trade desk example',
    answer: 'I would keep the agent out of investment advice and trade placement. The useful product is a teaching router: explain terms, gather intent, distinguish education from advice, and create a warm handoff brief for a licensed human. That is still valuable because many callers need orientation before a specialist can help.',
    technical: 'Use knowledge base for approved educational content, HTTP tools for account-neutral help articles or account context where permitted, safe-action gates for risk categories, and analyzers for handoff reason and confidence delta.',
    demo: 'The demo call starts with a customer asking about options quote language. The agent explains bid, ask, spread, and routes advice or execution to a human with a clean brief.',
  },
  {
    id: 'api-design',
    title: 'How I would design the API composition',
    answer: 'I would design around a thin waist. Simple owns the conversational runtime, telephony, analyzers, and webhooks. The customer exposes narrow business tools like check_eligibility, lookup_order, book_appointment, and issue_credit. The agent should not orchestrate five systems directly if one customer endpoint can return the concise fact it needs to speak.',
    technical: 'Call payload uses params for runtime substitutions, external_identifiers for traceability, analyzers for typed outcomes, and idempotency_key for safe retries. Tool responses should be compact JSON with fields the agent can say or decide from.',
    demo: 'I would show one workflow with a generated Simple /calls payload, a mock tool response, the analyzer output, and the post-call webhook receipt.',
  },
  {
    id: 'voice-agent-prompting',
    title: 'How I would prompt a voice agent differently from a chat agent',
    answer: 'Voice has stricter latency, memory, interruption, and trust constraints. The prompt should use short spoken sentences, confirm before side effects, summarize choices, and avoid reading long policy blocks. It should know when to stop and transfer.',
    technical: 'Prompt structure: role, allowed goals, prohibited actions, tool-use triggers, escalation triggers, style, and analyzer contract. For complex flows I would prefer explicit nodes over one giant prompt.',
    demo: 'I would contrast a bad prompt that dumps policy with a good one that asks one question, uses a tool, and says the next step.',
  },
  {
    id: 'precall-workflows',
    title: 'Why pre-call workflows matter',
    answer: 'A voice call has almost no patience budget. If the agent starts by asking for information the company already has, the customer feels the automation immediately. Pre-call workflows let the agent greet the customer with relevant context and choose the right path before speech starts.',
    technical: 'The endpoint receives caller and agent metadata, looks up CRM/order/ticket/account data, applies business rules, and returns a parameters object. Keep it under the timeout and only return fields the agent needs.',
    demo: 'I would show an inbound VIP caller whose open billing ticket and plan are loaded before the greeting.',
  },
  {
    id: 'postcall-workflows',
    title: 'Why post-call workflows are the revenue loop',
    answer: 'The call is only half the product. The economic value often appears after the call: CRM stages updated, tickets resolved, follow-up scheduled, SMS sent, warehouse rows written, and product insights grouped.',
    technical: 'Use call.completed webhooks, make handlers idempotent, fetch call details if needed, then fan out to CRM, ticketing, BI, and experiment backlog.',
    demo: 'I would show a call that books an appointment and automatically creates a rep task, logs the transcript summary, and updates pipeline stage.',
  },
  {
    id: 'agent-tools',
    title: 'How I would decide what tools to give the agent',
    answer: 'I would only give the agent tools whose trigger is easy to describe and whose response is safe to say out loud. If a tool has complicated policy, that policy belongs behind the customer endpoint, not in the agent prompt.',
    technical: 'Each tool needs name, trigger description, input schema, auth, timeout behavior, concise success response, and graceful error response.',
    demo: 'For returns: lookup_order, check_return_window, recommend_exchange, create_label. Do not expose raw payment processor or warehouse APIs.',
  },
  {
    id: 'analyzer-schema',
    title: 'How I would design analyzers',
    answer: 'I would design analyzers backwards from the business decision. If the field will not route, measure, bill, improve, or create a task, it probably should not exist. I prefer booleans, enums, numbers, and compact objects over prose.',
    technical: 'For a lead workflow: qualified_lead boolean, qualification_score number, pain enum, urgency enum, meeting_booked boolean, estimated_revenue number, lost_reason enum.',
    demo: 'I would show how the same transcript produces CRM update, ROI ledger, and experiment backlog entry.',
  },
  {
    id: 'safety-boundaries',
    title: 'How I would handle safety boundaries',
    answer: 'I would classify actions into teaching, lookup, recommendation, and side effect. Teaching and lookup can be broad. Recommendations need policy constraints. Side effects need confirmation, idempotency, and sometimes human approval.',
    technical: 'Use safe-action gates, explicit transfer triggers, tool-level authorization, call tags, and audit analyzers.',
    demo: 'For banking fraud, the agent can collect facts and create a case, but final fraud determination routes to a human.',
  },
  {
    id: 'customer-study',
    title: 'How I would make the customer study self-funding',
    answer: 'I would design the first study so its result pays for the next one. Missed-call recovery, renewal saves, return exchanges, and collections are good because value is visible per call. If the first wedge produces margin, expansion becomes an internal reinvestment decision.',
    technical: 'Run a two-week pilot with a control cohort, ledger every event, then rank expansion candidates by payback period and implementation complexity.',
    demo: 'I would bring a simple table: workflow, monthly volume, value per resolved call, implementation risk, pilot cost, payback days.',
  },
  {
    id: 'handling-weakness',
    title: 'How I would answer if they probe my weakness',
    answer: 'I can go too wide too fast because I see many adjacent loops. In an FDE role I would turn that into a strength by forcing myself to ship the smallest complete loop first: one call type, one ledger, one analyzer contract, one weekly improvement cadence. I would keep the big map, but earn it through measured deployments.',
    technical: 'The concrete guardrail is a pilot definition document with non-goals and a weekly metric review.',
    demo: 'I would show the workbench itself as evidence: broad map behind a narrow first endpoint.',
  },
  {
    id: 'equity-leadership',
    title: 'How I would discuss equity and leadership path',
    answer: 'I would frame it around responsibility, not entitlement. If I am helping turn field discoveries into reusable product primitives, I want my incentives aligned with company value creation. I would ask what leadership looks like for someone who can both deploy customers and feed roadmap from the field.',
    technical: 'I would propose milestones: own a strategic deployment, convert two repeated patterns into productized templates, build the deployment metrics loop, and mentor later FDE hires.',
    demo: 'The negotiation is: give me a path to be accountable for a measurable product and customer outcome, and align equity with that upside.',
  },
  {
    id: 'debugging-live-call',
    title: 'How I would debug a bad live call',
    answer: 'First I would separate recognition, reasoning, tool, policy, and handoff failures. Then I would inspect transcript timing, tool request and response, analyzer result, and customer system logs. I would avoid changing prompts until I know which layer failed.',
    technical: 'Create tags for ASR issue, prompt issue, tool timeout, stale KB, policy ambiguity, and missing route. Then count frequency and severity.',
    demo: 'A caller asked for a refund and the agent stalled. Was the return tool slow, the policy unclear, or the prompt missing an escalation rule?',
  },
  {
    id: 'latency-and-reliability',
    title: 'How I would think about latency and reliability',
    answer: 'Voice agents are less forgiving than chat. The architecture needs fast pre-call context, small tool responses, graceful fallback language, and asynchronous post-call work. Heavy processing should happen after the call or behind a cached endpoint.',
    technical: 'Pre-call under five seconds, tool endpoints with timeouts, idempotent post-call handlers, exponential backoff for API calls, and clear degraded-mode prompts.',
    demo: 'If CRM lookup times out, agent says it can still help with general questions and offers a human handoff for account-specific actions.',
  },
  {
    id: 'product-feedback',
    title: 'How I would feed product roadmap from field work',
    answer: 'I would distinguish customer-specific glue from repeated primitive. If three customers need the same analyzer pattern, retry logic, dashboard, or tool auth shape, it should become product. The FDE should be a sensor for recurring structure.',
    technical: 'Every deployment ticket gets tagged customer-specific, template candidate, platform gap, docs gap, or product bug.',
    demo: 'If many customers build the same pre-call identity envelope, Simple should ship a first-class pattern for it.',
  },
  {
    id: 'campaign-journeys',
    title: 'How I would use journeys',
    answer: 'Journeys are how a single call becomes an operating program. A recipient can receive a call, branch on no-answer, receive SMS, wait, retry, and then exit into a CRM state. This is where voice AI becomes revenue operations.',
    technical: 'Design data fields once, import recipients per run, branch on call outcomes and analyzer fields, export results, and compare runs.',
    demo: 'Collections: call, if no answer send SMS, wait two days, retry, branch promise-to-pay into payment link follow-up.',
  },
  {
    id: 'why-simple',
    title: 'Why Simple specifically',
    answer: 'The public docs suggest a platform that already has the pieces an FDE needs: calls, SMS, web widget, campaigns, journeys, tools, analyzers, webhooks, numbers, and security posture. That means the role is not merely prompt writing. It is composing a customer-specific business loop out of existing primitives and then feeding repeated patterns back into product.',
    technical: 'The workbench maps those primitives into actual payloads, webhook handlers, ROI ledgers, and workflow templates.',
    demo: 'I would bring this as a cold interview artifact: pick any workflow and I can walk from stakeholder problem to API payload to post-call metric loop.',
  },
];

export function simpleHomePage() {
  const callout = `
    <aside aria-label="Deep workbench" style="max-width: var(--max); margin: 16px auto 0; padding: 0 20px;">
      <div class="card" style="border-color: var(--line-strong);">
        <h3 style="margin-top:0;">Workbench added behind this page</h3>
        <p class="lead" style="margin-bottom:12px;">The main essay stays here. The deeper layer now lives at <a href="/simple/workbench">/simple/workbench</a>, with machine-readable catalogs at <a href="/simple/api">/simple/api</a>, API payload templates, ROI calculators, mock analyzers, and guarded call/webhook endpoints.</p>
        <p style="margin:0;"><a href="/simple/workbench">Open workbench</a> · <a href="/simple/api/workflows">Workflows JSON</a> · <a href="/simple/api/openapi.json">Helper OpenAPI</a></p>
      </div>
    </aside>`;

  return simplePage
    .replace('<li><a href="#sources">Sources</a></li>', '<li><a href="#sources">Sources</a></li><li><a href="/simple/workbench">Workbench</a></li>')
    .replace('</nav>\n\n    <main>', `</nav>\n${callout}\n\n    <main>`);
}

export function simpleWorkbenchPage() {
  const workflowCards = SIMPLE_WORKFLOWS.map(workflow => {
    const sample = buildCallPayload(workflow, { to_number: '+15551234567' });
    return `
      <article class="workflow">
        <div class="eyebrow">#${workflow.rank} · ${escapeHtml(workflow.sector)}</div>
        <h3 id="${workflow.id}">${escapeHtml(workflow.title)}</h3>
        <p>${escapeHtml(workflow.thesis)}</p>
        <dl>
          <dt>Stakeholder</dt><dd>${escapeHtml(workflow.stakeholder)}</dd>
          <dt>Use case</dt><dd>${escapeHtml(workflow.useCase)}</dd>
          <dt>Demo</dt><dd>${escapeHtml(workflow.demo)}</dd>
          <dt>Product loop</dt><dd>${escapeHtml(workflow.productLoop)}</dd>
          <dt>Sierra wedge</dt><dd>${escapeHtml(workflow.sierraWedge)}</dd>
        </dl>
        <div class="cols">
          <div>
            <h4>Composition</h4>
            <ul>${workflow.apiChain.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </div>
          <div>
            <h4>Analyzer fields</h4>
            <ul>${workflow.analyzers.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </div>
        </div>
        <details>
          <summary>Sample Simple /calls payload</summary>
          ${codeBlock(JSON.stringify(sample, null, 2))}
          ${codeBlock(simpleCurl(sample))}
        </details>
      </article>`;
  }).join('');

  const primitiveCards = SIMPLE_PRIMITIVES.map(primitive => `
    <article class="primitive" id="${primitive.id}">
      <h3>${escapeHtml(primitive.title)}</h3>
      <p>${escapeHtml(primitive.definition)}</p>
      <p><strong>Why:</strong> ${escapeHtml(primitive.why)}</p>
      <p><strong>API pattern:</strong> ${escapeHtml(primitive.apiPattern)}</p>
      <p><strong>Metric:</strong> ${escapeHtml(primitive.metric)}</p>
    </article>`).join('');

  const responseCards = INTERVIEW_RESPONSES.map(response => `
    <article class="response" id="${response.id}">
      <h3>${escapeHtml(response.title)}</h3>
      <p>${escapeHtml(response.answer)}</p>
      <p><strong>Technical:</strong> ${escapeHtml(response.technical)}</p>
      <p><strong>Demo:</strong> ${escapeHtml(response.demo)}</p>
    </article>`).join('');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,noimageindex">
  <meta name="referrer" content="no-referrer">
  <title>Simple AI Workbench</title>
  <style>
    :root {
      --bg: #eef4f2;
      --paper: #ffffff;
      --ink: #121918;
      --muted: #52645f;
      --line: #cad9d4;
      --strong: #0f6b58;
      --blue: #155f8c;
      --red: #9b3745;
      --code: #14211f;
      --max: 1180px;
      --radius: 8px;
    }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.6 ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    a { color: var(--blue); }
    .wrap { width: min(var(--max), calc(100% - 32px)); margin: 0 auto; }
    header { padding: 44px 0 22px; border-bottom: 1px solid var(--line); }
    h1 { font-size: 4.2rem; line-height: 0.95; margin: 0 0 16px; letter-spacing: 0; max-width: 920px; }
    h2 { font-size: 1.9rem; margin: 44px 0 14px; line-height: 1.1; letter-spacing: 0; }
    h3 { font-size: 1.24rem; line-height: 1.2; margin: 0 0 10px; letter-spacing: 0; }
    h4 { margin: 18px 0 8px; }
    p { max-width: 80ch; }
    .lead { font-size: 1.1rem; color: var(--muted); }
    nav { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px 0; }
    nav a, .button { display: inline-flex; align-items: center; min-height: 38px; border: 1px solid var(--line); background: var(--paper); border-radius: var(--radius); padding: 7px 10px; text-decoration: none; color: var(--ink); }
    .grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 14px; }
    .panel, .workflow, .primitive, .response { background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius); padding: 18px; }
    .panel { grid-column: span 6; }
    .workflow { margin: 14px 0; }
    .primitive { grid-column: span 6; }
    .response { margin: 12px 0; }
    .eyebrow { color: var(--strong); text-transform: uppercase; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; margin-bottom: 8px; }
    dl { display: grid; grid-template-columns: 150px 1fr; gap: 8px 14px; margin: 14px 0; }
    dt { color: var(--muted); font-weight: 700; }
    dd { margin: 0; }
    .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    pre { max-width: 100%; overflow: auto; padding: 14px; border-radius: var(--radius); background: var(--code); color: #f4fbf8; font-size: 0.85rem; line-height: 1.45; }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
    summary { cursor: pointer; font-weight: 800; color: var(--blue); margin: 8px 0; }
    .endpoint { display: grid; grid-template-columns: 110px 1fr; gap: 8px; border-top: 1px solid var(--line); padding: 10px 0; }
    .method { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-weight: 800; color: var(--red); }
    footer { padding: 48px 0; color: var(--muted); }
    @media (max-width: 780px) {
      .panel, .primitive { grid-column: 1 / -1; }
      .cols, dl, .endpoint { grid-template-columns: 1fr; }
      h1 { font-size: 2.35rem; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="eyebrow">Hidden workbench · direct use only · noindex</div>
      <h1>Simple AI Field Deployment Workbench</h1>
      <p class="lead">This is the deeper layer behind the public-facing prep page: composable workflows, API call templates, consulting engagement shape, ROI loops, self-improvement loops, and interview-ready responses.</p>
      <nav aria-label="Workbench sections">
        <a href="/simple">Essay</a>
        <a href="#playbook">Engagement</a>
        <a href="#endpoints">Endpoints</a>
        <a href="#workflows">20 Workflows</a>
        <a href="#primitives">10 Primitives</a>
        <a href="#responses">20 Responses</a>
        <a href="/simple/api">JSON Index</a>
      </nav>
    </header>

    <main>
      <section id="playbook">
        <h2>Consulting Engagement Architecture</h2>
        <p>The core move is to make a voice-agent deployment pay for its own expansion. Start with one measurable event, instrument it end to end, use the gross value to fund the next workflow, and turn repeated field work into product primitives.</p>
        <div class="grid">
          ${CONSULTING_PLAYBOOK.map(item => `
            <article class="panel">
              <div class="eyebrow">${escapeHtml(item.phase)}</div>
              <p><strong>Output:</strong> ${escapeHtml(item.output)}</p>
              <p><strong>Proof:</strong> ${escapeHtml(item.proof)}</p>
            </article>`).join('')}
        </div>
      </section>

      <section id="endpoints">
        <h2>Workbench Endpoints</h2>
        <p>GET routes are open for direct-use scraping. POST routes are guarded by <code>Authorization: Bearer &lt;SIMPLE_LAB_KEY&gt;</code>. Live Simple calls require both that lab key and a separate <code>SIMPLE_API_KEY</code> Worker secret, and default to dry-run.</p>
        ${[
          ['GET', '/simple/api', 'Machine-readable index and source map.'],
          ['GET', '/simple/api/workflows', 'All 20 workflow templates. Add /:id for one workflow.'],
          ['GET', '/simple/api/primitives', 'The 10 reusable deployment primitives.'],
          ['GET', '/simple/api/responses', '20 interview responses spanning technical, product, market, and leadership.'],
          ['GET', '/simple/api/compose?workflow=missed-inbound-sales-recovery', 'Build a dry Simple /calls payload and curl command.'],
          ['GET', '/simple/api/roi?workflow=missed-inbound-sales-recovery&monthlyCalls=5000', 'Estimate monthly value and payback.'],
          ['POST', '/simple/api/calls', 'Guarded call composer. dry_run true returns payload; dry_run false calls Simple only if SIMPLE_API_KEY exists.'],
          ['POST', '/simple/api/precall', 'Guarded pre-call webhook simulator returning a parameters envelope.'],
          ['POST', '/simple/api/analyze-transcript', 'Guarded mock analyzer that turns a transcript into structured outcomes.'],
          ['POST', '/simple/api/webhooks/call-completed', 'Guarded post-call webhook receiver that returns ledger and experiment actions.'],
          ['GET', '/simple/api/openapi.json', 'Small OpenAPI document for these helper endpoints.'],
        ].map(([method, route, desc]) => `
          <div class="endpoint"><div class="method">${method}</div><div><code>${route}</code><br>${escapeHtml(desc)}</div></div>`).join('')}
        <h3>Copy-paste dry run</h3>
        ${codeBlock(`curl "https://computerfuture.me/simple/api/compose?workflow=missed-inbound-sales-recovery&to_number=+15551234567" \\
  -H "Accept: application/json"`)}
        <h3>Guarded call route</h3>
        ${codeBlock(`curl -X POST "https://computerfuture.me/simple/api/calls" \\
  -H "Authorization: Bearer $SIMPLE_LAB_KEY" \\
  -H "Content-Type: application/json" \\
  --data-binary @- <<'JSON'
{
  "workflow": "missed-inbound-sales-recovery",
  "dry_run": true,
  "to_number": "+15551234567",
  "params": {
    "customer_name": "Jordan",
    "lead_source": "paid_search",
    "missed_call_age_minutes": "3"
  }
}
JSON`)}
      </section>

      <section id="workflows">
        <h2>Top 20 Workflow Compositions</h2>
        <p>These are the visible survivors from the 400-candidate convergence pass. Each one is a stakeholder story, an API path, an ROI loop, and a product-learning loop.</p>
        ${workflowCards}
      </section>

      <section id="primitives">
        <h2>Reusable Primitives</h2>
        <div class="grid">${primitiveCards}</div>
      </section>

      <section id="responses">
        <h2>Interview Response Bank</h2>
        <p>These are not canned lines. They are rehearsable positions with enough technical shape to survive follow-up questions.</p>
        ${responseCards}
      </section>

      <section id="sources">
        <h2>Source Index</h2>
        <ul>
          ${SIMPLE_SOURCES.map(source => `<li><a href="${source.url}">${escapeHtml(source.label)}</a> - ${escapeHtml(source.note)}</li>`).join('')}
        </ul>
      </section>
    </main>

    <script type="application/json" id="simple-workbench-data">${escapeScript(JSON.stringify(machineIndex(), null, 2))}</script>
    <footer>Hidden direct-use endpoint. Main essay at <a href="/simple">/simple</a>. JSON index at <a href="/simple/api">/simple/api</a>.</footer>
  </div>
</body>
</html>`;
}

export async function handleSimpleApi(request, env, path) {
  const url = new URL(request.url);
  const method = request.method.toUpperCase();

  if (method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders() });
  }

  if (method === 'GET') {
    if (path === '/simple/api') return json(machineIndex());
    if (path === '/simple/api/sources') return json(SIMPLE_SOURCES);
    if (path === '/simple/api/primitives') return json(SIMPLE_PRIMITIVES);
    if (path === '/simple/api/responses') return json(INTERVIEW_RESPONSES);
    if (path === '/simple/api/workflows') return json(SIMPLE_WORKFLOWS);
    if (path.startsWith('/simple/api/workflows/')) {
      const id = decodeURIComponent(path.slice('/simple/api/workflows/'.length));
      const workflow = findWorkflow(id);
      return workflow ? json(workflow) : json({ error: 'workflow_not_found', id }, 404);
    }
    if (path === '/simple/api/compose') {
      const workflow = findWorkflow(url.searchParams.get('workflow')) || SIMPLE_WORKFLOWS[0];
      const payload = buildCallPayload(workflow, Object.fromEntries(url.searchParams.entries()));
      return json({
        workflow: workflow.id,
        simple_api_base: SIMPLE_API_BASE,
        alternate_openapi_base: ALT_SIMPLE_API_BASE,
        payload,
        curl: simpleCurl(payload),
        note: 'Dry composition only. POST /simple/api/calls with dry_run:false can call Simple when SIMPLE_API_KEY is installed.',
      });
    }
    if (path === '/simple/api/roi') {
      const workflow = findWorkflow(url.searchParams.get('workflow')) || SIMPLE_WORKFLOWS[0];
      return json({ workflow: workflow.id, estimate: estimateRoi(workflow, Object.fromEntries(url.searchParams.entries())) });
    }
    if (path === '/simple/api/openapi.json') return json(helperOpenApi(url.origin));
    return json({ error: 'not_found', path }, 404);
  }

  if (method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const auth = authorize(request, env);
  if (!auth.ok) return json(auth.body, auth.status);

  const body = await readJson(request);

  if (path === '/simple/api/calls') {
    const workflow = findWorkflow(body.workflow) || SIMPLE_WORKFLOWS[0];
    const payload = buildCallPayload(workflow, body);
    const estimate = estimateRoi(workflow, body.roi || {});
    const dryRun = body.dry_run !== false;
    if (dryRun || !env.SIMPLE_API_KEY) {
      return json({
        dry_run: true,
        live_ready: Boolean(env.SIMPLE_API_KEY),
        workflow: workflow.id,
        payload,
        roi: estimate,
        curl: simpleCurl(payload),
        message: env.SIMPLE_API_KEY ? 'Set dry_run:false to place a real Simple call.' : 'Install SIMPLE_API_KEY as a Worker secret before live calls.',
      });
    }

    const response = await fetch(`${SIMPLE_API_BASE}/calls`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.SIMPLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await safeJson(response);
    return json({
      dry_run: false,
      simple_status: response.status,
      workflow: workflow.id,
      payload,
      result,
      roi: estimate,
    }, response.ok ? 200 : response.status);
  }

  if (path === '/simple/api/precall') {
    return json(buildPrecallEnvelope(body));
  }

  if (path === '/simple/api/analyze-transcript') {
    return json(mockAnalyzeTranscript(body.transcript || '', body));
  }

  if (path === '/simple/api/roi') {
    const workflow = findWorkflow(body.workflow) || SIMPLE_WORKFLOWS[0];
    return json({ workflow: workflow.id, estimate: estimateRoi(workflow, body) });
  }

  if (path === '/simple/api/webhooks/call-completed') {
    return json(handleCallCompleted(body));
  }

  return json({ error: 'not_found', path }, 404);
}

function machineIndex() {
  return {
    name: 'Simple AI Field Deployment Workbench',
    updated: '2026-06-12',
    privacy: 'noindex,nofollow,noarchive,nosnippet,noimageindex',
    simple_api_base: SIMPLE_API_BASE,
    alternate_openapi_base: ALT_SIMPLE_API_BASE,
    convergence: CONVERGENCE,
    consulting_playbook: CONSULTING_PLAYBOOK,
    primitives: SIMPLE_PRIMITIVES,
    workflows: SIMPLE_WORKFLOWS,
    interview_responses: INTERVIEW_RESPONSES,
    sources: SIMPLE_SOURCES,
    endpoints: {
      essay: '/simple',
      workbench: '/simple/workbench',
      index: '/simple/api',
      workflows: '/simple/api/workflows',
      primitives: '/simple/api/primitives',
      responses: '/simple/api/responses',
      compose: '/simple/api/compose?workflow=missed-inbound-sales-recovery',
      roi: '/simple/api/roi?workflow=missed-inbound-sales-recovery',
      openapi: '/simple/api/openapi.json',
    },
  };
}

function buildCallPayload(workflow, input = {}) {
  const params = {
    ...workflow.paramsExample,
    ...(typeof input.params === 'object' && input.params ? input.params : {}),
  };
  const toNumber = normalizePhone(input.to_number || input.to || '+15551234567');
  const idKey = input.idempotency_key || `simple-prep-${workflow.id}-${params.customer_id || params.order_id || params.account || 'demo'}`;
  const payload = {
    to_number: toNumber,
    record: input.record === true,
    language: input.language || 'en',
    params,
    external_identifiers: {
      workflow_id: workflow.id,
      prep_surface: 'computerfuture.me/simple',
      customer_id: params.customer_id || params.order_id || params.account || params.store_id || 'demo',
      ...(typeof input.external_identifiers === 'object' && input.external_identifiers ? input.external_identifiers : {}),
    },
    idempotency_key: idKey,
  };
  if (input.from_number_id) payload.from_number_id = input.from_number_id;
  if (input.voice_id) payload.voice_id = input.voice_id;
  if (input.agent_id) {
    payload.agent_id = input.agent_id;
    if (input.version_id) payload.version_id = input.version_id;
  } else {
    payload.prompt = workflow.prompt;
    payload.boost_keywords = workflow.analyzers.slice(0, 4);
    payload.analyzers = workflow.analyzers.map(field => ({
      title: titleCase(field),
      prompt: `From the transcript, extract ${field.replaceAll('_', ' ')} for the ${workflow.title} workflow. Return only the requested field with high precision.`,
      output_config: analyzerOutputConfig(field),
    }));
  }
  return payload;
}

function analyzerOutputConfig(field) {
  if (field.includes('required') || field.includes('needed') || field.includes('booked') || field.includes('eligible') || field.includes('saved') || field.includes('resolved') || field.includes('qualified')) {
    return { type: 'boolean' };
  }
  if (field.includes('score') || field.includes('amount') || field.includes('revenue') || field.includes('minutes') || field.includes('arr')) {
    return { type: 'object', properties: { value: { type: 'string' }, confidence: { type: 'string' } } };
  }
  return { type: 'string' };
}

function estimateRoi(workflow, input = {}) {
  const base = workflow.roi;
  const monthlyCalls = number(input.monthlyCalls ?? input.monthly_calls, base.monthlyCalls);
  const handleMinutes = number(input.handleMinutes ?? input.handle_minutes, base.handleMinutes);
  const hourlyCost = number(input.hourlyCost ?? input.hourly_cost, base.hourlyCost);
  const containmentRate = clamp(number(input.containmentRate ?? input.containment_rate, base.containmentRate), 0, 1);
  const conversionLift = clamp(number(input.conversionLift ?? input.conversion_lift, base.conversionLift), 0, 1);
  const averageOrderValue = number(input.averageOrderValue ?? input.average_order_value, base.averageOrderValue);
  const grossMargin = clamp(number(input.grossMargin ?? input.gross_margin, base.grossMargin), 0, 1);
  const pilotCost = number(input.pilotCost ?? input.pilot_cost, base.pilotCost);
  const baselineHours = monthlyCalls * handleMinutes / 60;
  const handledByAi = monthlyCalls * containmentRate;
  const hoursSaved = handledByAi * handleMinutes / 60;
  const laborValue = hoursSaved * hourlyCost;
  const revenueLift = monthlyCalls * conversionLift * averageOrderValue * grossMargin;
  const grossMonthlyValue = laborValue + revenueLift;
  const valuePerCall = monthlyCalls ? grossMonthlyValue / monthlyCalls : 0;
  const paybackDays = grossMonthlyValue > 0 ? Math.ceil((pilotCost / grossMonthlyValue) * 30) : null;
  return {
    assumptions: { monthlyCalls, handleMinutes, hourlyCost, containmentRate, conversionLift, averageOrderValue, grossMargin, pilotCost },
    baselineHours: round(baselineHours),
    handledByAi: round(handledByAi),
    hoursSaved: round(hoursSaved),
    laborValue: dollars(laborValue),
    revenueLift: dollars(revenueLift),
    grossMonthlyValue: dollars(grossMonthlyValue),
    valuePerCall: dollars(valuePerCall),
    paybackDays,
    caveat: 'Directional planning math for interview rehearsal, not financial advice.',
  };
}

function buildPrecallEnvelope(body) {
  const fromNumber = body?.call?.from_number || body.from_number || '+15551234567';
  const last4 = fromNumber.replace(/\D/g, '').slice(-4) || '4567';
  return {
    parameters: {
      customer_name: body.customer_name || `Caller ${last4}`,
      account_id: body.account_id || `ACCT-${last4}`,
      priority: body.priority || (last4.endsWith('7') ? 'vip' : 'standard'),
      open_tickets: body.open_tickets ?? 1,
      last_call_summary: body.last_call_summary || 'Prior call mentioned billing confusion and requested a concise explanation.',
      recommended_flow: body.recommended_flow || 'teach_then_route',
      risk_mode: body.risk_mode || 'safe_lookup_only',
    },
    ttl_seconds: 300,
    note: 'Return only compact fields the voice agent needs before greeting.',
  };
}

function mockAnalyzeTranscript(transcript, body = {}) {
  const text = transcript.toLowerCase();
  const positive = ['thanks', 'great', 'book', 'scheduled', 'helpful', 'yes'].some(term => text.includes(term));
  const negative = ['angry', 'cancel', 'late', 'wrong', 'fraud', 'complaint', 'not working'].some(term => text.includes(term));
  const booked = /book|scheduled|appointment|meeting/.test(text);
  const payment = /pay|payment|card|invoice|refund/.test(text);
  const risk = /fraud|trade|medical|diagnos|lawsuit|bank|ssn|social security/.test(text);
  const workflow = findWorkflow(body.workflow) || SIMPLE_WORKFLOWS[0];
  return {
    workflow: workflow.id,
    outcome: booked ? 'booked_next_step' : risk ? 'escalated_for_policy' : negative ? 'needs_repair' : 'resolved_or_informational',
    sentiment: negative ? 'negative' : positive ? 'positive' : 'neutral',
    tags: [
      booked && 'appointment_booked',
      payment && 'payment_or_refund',
      risk && 'policy_risk',
      negative && 'save_or_repair_needed',
    ].filter(Boolean),
    analyzer_fields: Object.fromEntries(workflow.analyzers.slice(0, 8).map(field => [field, inferField(field, { booked, payment, risk, negative, positive })])),
    next_action: risk ? 'warm_transfer_with_brief' : negative ? 'create_recovery_task' : booked ? 'send_confirmation_and_update_crm' : 'log_and_monitor',
    experiment_candidate: negative ? 'Add a branch or tool response for the detected complaint pattern.' : 'No immediate experiment; add to weekly sample.',
  };
}

function handleCallCompleted(body) {
  const callId = body?.payload?.call_id || body.call_id || 'demo-call';
  const workflow = findWorkflow(body.workflow) || SIMPLE_WORKFLOWS[0];
  const analyzer = mockAnalyzeTranscript(body.transcript || 'Customer booked the next step and thanked the agent.', { workflow: workflow.id });
  return {
    received: true,
    idempotency_key: body.event_id || `evt-${callId}`,
    workflow: workflow.id,
    ledger_row: {
      call_id: callId,
      workflow_id: workflow.id,
      outcome: analyzer.outcome,
      sentiment: analyzer.sentiment,
      value_estimate: estimateRoi(workflow, { monthlyCalls: 1 }).valuePerCall,
      next_action: analyzer.next_action,
    },
    downstream_actions: [
      'write_call_activity_to_crm',
      'append_business_event_ledger',
      analyzer.next_action === 'create_recovery_task' ? 'create_recovery_task' : 'sample_for_quality_review',
      'update_experiment_backlog_if_failure_bucket_repeats',
    ],
  };
}

function inferField(field, flags) {
  if (field.includes('booked')) return flags.booked;
  if (field.includes('risk') || field.includes('required') || field.includes('escalation')) return flags.risk;
  if (field.includes('sentiment')) return flags.negative ? 'negative' : flags.positive ? 'positive' : 'neutral';
  if (field.includes('revenue') || field.includes('arr') || field.includes('amount')) return flags.booked ? 'medium' : 'unknown';
  if (field.includes('reason')) return flags.negative ? 'complaint_or_blocker' : 'not_detected';
  return flags.booked ? 'positive' : flags.risk ? 'requires_review' : 'not_detected';
}

function helperOpenApi(origin) {
  const base = `${origin}/simple/api`;
  return {
    openapi: '3.1.0',
    info: { title: 'Simple AI Prep Workbench Helper API', version: '0.2.0' },
    servers: [{ url: base }],
    paths: {
      '/workflows': { get: { summary: 'List workflow templates' } },
      '/workflows/{id}': { get: { summary: 'Get workflow template' } },
      '/primitives': { get: { summary: 'List deployment primitives' } },
      '/responses': { get: { summary: 'List interview response bank' } },
      '/compose': { get: { summary: 'Compose a dry Simple /calls payload' } },
      '/roi': {
        get: { summary: 'Estimate ROI for a workflow' },
        post: { summary: 'Estimate ROI with JSON assumptions', security: [{ labKey: [] }] },
      },
      '/calls': { post: { summary: 'Guarded dry-run or live Simple call composer', security: [{ labKey: [] }] } },
      '/precall': { post: { summary: 'Guarded pre-call workflow simulator', security: [{ labKey: [] }] } },
      '/analyze-transcript': { post: { summary: 'Guarded mock transcript analyzer', security: [{ labKey: [] }] } },
      '/webhooks/call-completed': { post: { summary: 'Guarded post-call webhook receiver', security: [{ labKey: [] }] } },
    },
    components: {
      securitySchemes: {
        labKey: { type: 'http', scheme: 'bearer', description: 'SIMPLE_LAB_KEY Worker secret' },
      },
    },
  };
}

function findWorkflow(id) {
  if (!id) return null;
  return SIMPLE_WORKFLOWS.find(workflow => workflow.id === id || String(workflow.rank) === String(id));
}

function simpleCurl(payload) {
  return `curl -X POST "${SIMPLE_API_BASE}/calls" \\
  -H "Authorization: Bearer $SIMPLE_API_KEY" \\
  -H "Content-Type: application/json" \\
  --data-binary @- <<'JSON'
${JSON.stringify(payload, null, 2)}
JSON`;
}

function authorize(request, env) {
  if (!env.SIMPLE_LAB_KEY) {
    return {
      ok: false,
      status: 503,
      body: { error: 'lab_key_not_configured', message: 'Install SIMPLE_LAB_KEY as a Worker secret before using guarded POST routes.' },
    };
  }
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : request.headers.get('x-simple-lab-key') || '';
  if (token !== env.SIMPLE_LAB_KEY) {
    return { ok: false, status: 401, body: { error: 'unauthorized', message: 'Use Authorization: Bearer <SIMPLE_LAB_KEY>.' } };
  }
  return { ok: true };
}

async function readJson(request) {
  const text = await request.text();
  if (!text.trim()) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

async function safeJson(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      ...corsHeaders(),
      'content-type': 'application/json;charset=UTF-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow, noarchive, nosnippet, noimageindex',
      'referrer-policy': 'no-referrer',
    },
  });
}

function corsHeaders() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'authorization,content-type,x-simple-lab-key',
  };
}

function codeBlock(value) {
  return `<pre><code>${escapeHtml(value)}</code></pre>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeScript(value) {
  return value.replaceAll('</script', '<\\/script');
}

function number(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value * 100) / 100;
}

function dollars(value) {
  return Math.round(value);
}

function titleCase(value) {
  return value.replaceAll('_', ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function normalizePhone(value) {
  const text = String(value || '').trim();
  return /^\d{10,15}$/.test(text) ? `+${text}` : text;
}
