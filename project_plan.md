# mypadidoc - AI Health Triage Landing Page

## 1. Project Description
A single-page landing site for mypadidoc, an AI-powered health triage service for Nigeria. The page captures two types of interest: individual users wanting early access to the Lagos pilot, and institutions/partners looking to refer users or collaborate. No app, no payments, no self-serve portal — just a signal-collection page.

## 2. Page Structure
- `/` - Single landing page with all sections (Hero, How it works, What we help with, Why different, Sign-up form, Institutional form, Footer)

## 3. Core Features
- [ ] Hero section with headline, subheadline, and dual CTAs
- [ ] How it works — 4-step visual explainer
- [ ] What we help with — 3 health area cards
- [ ] Why it's different — trust/reassurance section
- [ ] Individual sign-up form (Name, Phone, City, Interest areas, Consent)
- [ ] Institutional interest form (Org name, Contact, Org type, Message)
- [ ] Footer with emergency disclaimer, privacy note, contact

## 4. Data Model Design
No database needed — forms handle all data capture via Readdy Forms.

## 5. Backend / Third-party Integration Plan
- Readdy Forms: Individual sign-up and institutional interest form submissions
- No Supabase, Shopify, Stripe, or PayPal needed

## 6. Development Phase Plan

### Phase 1: Landing Page Build
- Goal: Build the complete single-page landing site with all sections and forms
- Deliverable: Fully functional landing page at `/`