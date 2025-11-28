# Implementation Guide: Privacy Policy & Terms of Use

## Overview

You now have two legally compliant documents that work together to protect CultureCrunch:

1. **Privacy Policy** (currently live) - Governs how you collect, use, and protect data
2. **Terms of Use** (new) - Governs how users can access and use your Platform

---

## How They Work Together

```
┌─────────────────────────────────────────────────────────┐
│                    CULTURECRUNCH USER                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Agrees to both:
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌───────────────────┐     ┌──────────────────┐
│  TERMS OF USE     │     │  PRIVACY POLICY  │
│                   │     │                  │
│ • Access rules    │ ◄──┤ • Data practices │
│ • Usage rights    │     │ • User rights    │
│ • IP protection   │     │ • Security       │
│ • Liability       │     │ • Compliance     │
│ • Disputes        │     │ • Retention      │
└───────────────────┘     └──────────────────┘
        │                         │
        └────────────┬────────────┘
                     │
                     ▼
           Legal Protection for
              CultureCrunch
```

---

## Immediate Actions Required

### 1. Update Privacy Policy (Priority 1)

**Add to Privacy Policy BEFORE signing next customer:**

#### A. Company Identification (at top of document)
```markdown
CultureCrunch Pty Ltd
ABN: [Your ABN]
ACN: [Your ACN]
Registered Address: [Your NSW business address]
```

#### B. Data Breach Notification (new section after "Data Security")
```markdown
## Data Breach Notification

If we experience a data breach likely to result in serious harm, we will:
- Notify affected individuals as soon as practicable
- Notify the Office of the Australian Information Commissioner (OAIC)
- Provide details of the breach, likely consequences, and remedial steps

We maintain an incident response plan in accordance with the Notifiable 
Data Breaches (NDB) scheme under the Privacy Act 1988.
```

#### C. AI Decision-Making (enhance existing "How We Use Your Information")
```markdown
### AI-Powered Insights

Our AI Coach Companion analyzes team-level data to provide leadership 
recommendations. These insights are:

- **Advisory only** - Not automated decisions affecting employment
- **Team-level** - Based on aggregated signals, not individual metrics
- **Human-reviewable** - Significant recommendations reviewed by coaches
- **Context-dependent** - Always subject to leadership judgment

You have the right to understand how AI recommendations are generated and 
to request human review of any AI-generated insight.
```

#### D. Workplace Privacy Notice (new section after "For Residents Outside Australia")
```markdown
## Workplace Privacy Notice

CultureCrunch is designed for workplace use. If you are an employee whose 
organization uses CultureCrunch:

**Your Privacy:**
- We do NOT share individual responses, scores, or behavioral data with 
  your employer
- Your team leader may access team-level insights that include signals 
  from your participation
- All data is collected at the team level to protect individual privacy

**Your Rights:**
- Consult your organization's policies regarding participation expectations
- Raise concerns with us at privacy@culturecrunch.io or your organization's 
  privacy officer
- Access, correct, or request deletion of your personal information

**Employer Obligations:**
Organizational customers must notify employees about CultureCrunch use in 
accordance with APP 5 (notification of collection) and workplace privacy laws.
```

---

### 2. Add Terms of Use to Website

#### A. Create New Page: `/terms`

1. Copy the Terms of Use content to a new page
2. Use same styling as your Privacy Policy page
3. Ensure it's accessible before users can sign up

#### B. Update Footer Links

**Current:**
```html
Privacy Policy
```

**New:**
```html
Privacy Policy | Terms of Use | Cookie Policy
```

#### C. Update Signup/Login Flow

**Add checkbox before account creation:**
```html
☐ I agree to the Terms of Use and Privacy Policy
```

**Link the text:**
```html
☐ I agree to the <a href="/terms">Terms of Use</a> and 
  <a href="/privacy">Privacy Policy</a>
```

---

### 3. Update Contract Documents

If you have standard service agreements or contracts, add:

```markdown
"Customer acknowledges that use of the CultureCrunch Platform is subject 
to the Terms of Use available at https://culturecrunch.io/terms and the 
Privacy Policy available at https://culturecrunch.io/privacy, each as 
may be updated from time to time."
```

---

## Website Implementation Checklist

### Header/Navigation
- [ ] Add "Legal" or "Policies" dropdown with Terms and Privacy links

### Footer
- [ ] Privacy Policy link
- [ ] Terms of Use link  
- [ ] Cookie Policy link (can be same as Privacy for now)
- [ ] Copyright notice: "© 2025 CultureCrunch Pty Ltd. All rights reserved."

### Signup Flow
- [ ] Checkbox: "I agree to the Terms of Use and Privacy Policy"
- [ ] Links to both documents
- [ ] Cannot submit without checking box

### Account Dashboard
- [ ] Link to Terms and Privacy in account settings
- [ ] Notification system for when Terms are updated

### Email Footer (all emails)
- [ ] Links to Privacy and Terms in email footer template

---

## Key Cross-References Between Documents

The Terms of Use references the Privacy Policy in these sections:

1. **Section 1.1** - Links to Privacy Policy for data practices
2. **Section 8** - Entire section dedicated to privacy and data protection
3. **Section 11.1** - Privacy Policy is part of "entire agreement"

The Privacy Policy should reference Terms of Use:

**Add to Privacy Policy introduction:**
```markdown
Your use of CultureCrunch is also governed by our Terms of Use, which 
explain your rights and responsibilities when using the Platform.
```

---

## Legal Review Checklist

Before launching with both documents:

### DIY Check (Free)
- [ ] Ensure ABN/ACN is correct throughout
- [ ] Verify your registered NSW address is used consistently
- [ ] Check all email addresses work (privacy@, legal@, support@)
- [ ] Confirm pricing tiers match your actual offerings
- [ ] Review industry-specific language (healthcare, manufacturing, construction)

### Lawyer Review (Recommended: $1,500-3,000)
- [ ] Find NSW-based commercial lawyer with privacy/tech experience
- [ ] Provide both documents plus sample customer contract
- [ ] Ask specifically about:
  - APP compliance (especially APPs 1, 4, 5, 11, 12)
  - Fair Work Act implications for workplace data
  - Australian Consumer Law guarantees language
  - Limitation of liability clauses
  - IP ownership and licensing terms

**Recommended Law Firms:**
- Gilbert + Tobin (Sydney) - Tech/Privacy specialists
- Ashurst - Strong commercial/tech practice
- Corrs Chambers Westgarth - Privacy & Data team
- Small business alternative: LegalVision ($300/month, unlimited docs)

---

## Email Setup Required

You'll need these functioning email addresses:

1. **privacy@culturecrunch.io** - Privacy inquiries and data rights requests
2. **legal@culturecrunch.io** - Legal notices, Terms disputes
3. **support@culturecrunch.io** - General customer support
4. **sales@culturecrunch.io** - Sales inquiries (mentioned in industry section)

**Setup Options:**
- **Google Workspace:** $9/user/month (recommended for professional setup)
- **Email forwarding:** Forward all to your main email initially
- **Shared inbox:** Use Front or Help Scout to manage multiple addresses

---

## Customer Communication Template

When rolling out new Terms of Use to existing customers:

**Subject:** Important: New Terms of Use for CultureCrunch Platform

**Body:**
```
Hi [Name],

We're writing to inform you about new Terms of Use that now govern your 
use of the CultureCrunch platform.

What's changing:
• We've formalized our Terms of Use to provide clarity on rights and 
  responsibilities
• Our Privacy Policy remains largely the same, with minor enhancements 
  for workplace privacy
• These changes better protect both you and CultureCrunch

What you need to do:
• Review the new Terms at https://culturecrunch.io/terms
• Review updated Privacy Policy at https://culturecrunch.io/privacy
• Continued use of CultureCrunch constitutes acceptance

Questions?
Contact us at legal@culturecrunch.io if you have any concerns.

These changes are effective [30 days from today].

Thank you for being a CultureCrunch customer.

Best regards,
The CultureCrunch Team
```

---

## Ongoing Maintenance

### Annual Review (November each year)
- [ ] Review both documents for accuracy
- [ ] Update if business model changes
- [ ] Check for new legal requirements
- [ ] Update "Last Reviewed" date

### Trigger for Updates
Update Terms/Privacy when:
- Launching new features (especially AI/data features)
- Changing pricing structure
- Adding new data collection practices
- Expanding to new jurisdictions
- Receiving legal advice suggesting changes
- After any data breach or privacy incident

### Version Control
Keep track of changes:
```
Version 1.0 - November 28, 2025 - Initial version
Version 1.1 - [Date] - Added [description]
Version 2.0 - [Date] - Major revision: [description]
```

---

## Competitive Advantage Opportunities

Your Terms + Privacy combination gives you marketing angles:

### 1. "Privacy-First Leadership Development"
**Message:** "Unlike surveillance platforms, we never track individual performance. 
Leadership development built on trust, not monitoring."

### 2. Research-Backed Legal Framework
**Message:** "Our Terms of Use embed the same research-backed principles as our 
programs—transparency, ownership, and mutual agreement."

### 3. Trust Badges
Consider adding:
- "APP Compliant" badge
- "Privacy by Design" certification (work with privacy consultants)
- "No Individual Surveillance" guarantee

### 4. Comparison Table for RFPs
```
┌─────────────────────┬──────────────┬─────────────────┐
│                     │ CultureCrunch│ Traditional Tools│
├─────────────────────┼──────────────┼─────────────────┤
│ Individual Tracking │      ✗       │       ✓         │
│ Team-Level Insights │      ✓       │       ✗         │
│ Privacy by Design   │      ✓       │       ✗         │
│ APP Compliant       │      ✓       │      Maybe      │
│ Workplace Privacy   │   Protected  │   At Risk       │
└─────────────────────┴──────────────┴─────────────────┘
```

---

## FAQ for Your Team

**Q: Do existing customers need to re-sign anything?**
A: No, but send notification email. Continued use = acceptance.

**Q: What if a customer doesn't agree to new Terms?**
A: They have 30 days to terminate without penalty.

**Q: Can we modify Terms for individual customers?**
A: Yes, but document in separate addendum/contract. Standard Terms are baseline.

**Q: What if we're not sure if something is allowed?**
A: Default to: "Is this explicitly prohibited in Terms?" If yes, don't allow. 
If unclear, consult lawyer.

**Q: How do we handle customer requests to change Terms?**
A: Large customers may negotiate. Document all changes in signed addendum.

**Q: Do we need separate Terms for different products?**
A: Not yet. Current Terms cover "Platform" broadly. When you launch distinct 
products, may need separate Terms.

---

## Timeline for Full Implementation

### Week 1 (Immediate)
- [ ] Add ABN/ACN to Privacy Policy
- [ ] Set up email addresses
- [ ] Create internal draft with your actual details

### Week 2 (Before Next Customer)
- [ ] Lawyer review (if using one)
- [ ] Upload Terms to website
- [ ] Update footer links
- [ ] Update signup flow

### Week 3 (Existing Customers)
- [ ] Send notification email to existing customers
- [ ] Update contracts/agreements
- [ ] Train sales team on new Terms

### Week 4 (Optimization)
- [ ] Add trust badges to marketing
- [ ] Create FAQ for customers
- [ ] Monitor for questions/concerns

---

## Red Flags to Watch For

**Customer Requests That Violate Terms:**
- "Can we track individual employee performance?"  
  → No, violates core privacy principle

- "Can we use this for performance reviews?"  
  → No, Terms explicitly say not for performance management

- "Can we export and share team data publicly?"  
  → Maybe, depends on consent and de-identification

**Internal Practices That Violate Terms:**
- Using personal data for purposes not disclosed
- Sharing data with processors without agreements
- Not notifying OAIC of reportable breaches
- Making automated employment decisions based on platform data

---

## Success Metrics

Track these to measure legal/compliance health:

**Privacy Compliance:**
- Privacy requests received vs. resolved on time (target: 100% within 30 days)
- Data breaches (target: 0)
- OAIC complaints (target: 0)
- Customer privacy concerns (track and address trends)

**Terms Compliance:**
- Terms violations detected (investigate all)
- Customer disputes (target: <1% of customers)
- Legal threats or litigation (target: 0)
- IP infringement claims (target: 0)

**Process Metrics:**
- % of signups with Terms acceptance checkbox
- % of customers who read Terms before agreeing (use analytics)
- % of employees who understand privacy commitments
- Regular legal review cadence maintained

---

## Your Competitive Position

With these documents, CultureCrunch is now **ahead of most competitors** in the 
leadership development space on:

✅ **Privacy transparency** - Clear "team-level only" approach  
✅ **Australian compliance** - APP-aligned from day one  
✅ **Workplace privacy** - Explicit employee protections  
✅ **AI transparency** - Clear disclosure of automated insights  
✅ **Professional terms** - Enterprise-ready legal framework  

This isn't just legal protection—it's a **competitive moat**. Privacy-conscious 
customers (especially healthcare and regulated industries) will choose you over 
competitors who haven't thought through these issues.

---

## Next Steps - Priority Order

1. **[Today]** Fill in your actual ABN/ACN and address in both documents
2. **[This Week]** Set up email addresses (privacy@, legal@, support@)
3. **[This Week]** Upload Terms to website at /terms
4. **[Next Week]** Consider lawyer review ($1.5-3K investment)
5. **[Next Week]** Update signup flow with Terms acceptance
6. **[Within 30 Days]** Notify existing customers (if any)
7. **[Ongoing]** Annual review every November

---

**Questions? Let's tackle them together!**

These documents protect you legally while reinforcing your brand's commitment 
to privacy-first, research-backed leadership development. You're building trust 
through transparency—exactly what great leadership requires.
