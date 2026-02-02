# ProForce Site Services — Build Structure & Layout Plan

## Design System

**Aesthetic:** Dark, rugged, military-inspired, premium tactical  
**Colors:** Black (#0a0a0a), Charcoal (#1a1a1a), Military Red (#c41e3a), White (#ffffff), Navy Blue (#003366)  
**Typography:** Bebas Neue (display), Source Sans 3 (body)  
**UI:** Sharp edges (0 border-radius), high contrast, bold headings  
**Animations:** Fade-in, slide-up, hover transforms, parallax hero

---

## Page-by-Page Layout Plan

### 1. HOME PAGE (`index.html`)

| Section | Content | Components |
|---------|---------|------------|
| Header | Sticky nav, logo, CTA button | `.header`, `.logo`, `.nav-desktop`, `.btn-primary` |
| Hero | Parallax background, headline, CTA | `.hero`, `.hero-bg`, `.hero-badge`, `.hero-cta` |
| Trust Badges | Veteran-Owned, Faith, Family, Freedom | `.trust-badges`, `.trust-badge` |
| Dumpster Sizes | 15-yard & 20-yard cards | `.dumpster-grid`, `.dumpster-card` |
| Service Area Map | Loudon TN, embedded Google Map | `.map-container`, iframe |
| Testimonials | 3 customer quotes | `.testimonials-grid`, `.testimonial-card` |
| CTA Section | Reserve + Call buttons | `.btn-primary`, `.btn-secondary` |
| Footer | Contact, links, service area | `.footer`, `.footer-grid` |

---

### 2. ABOUT US PAGE (`about.html`)

| Section | Content | Components |
|---------|---------|------------|
| Page Hero | Badge, headline | `.page-hero`, `.hero-badge` |
| Founder Bio | 20-year USAF veteran, mission | `.about-grid`, `.card` |
| Mission Statement | Quote block | `blockquote` |
| Values | Faith, Family, Freedom cards | `.dumpster-grid`, `.card` |
| CTA | Reserve button | `.btn-primary` |
| Footer | Standard | `.footer` |

---

### 3. SERVICES PAGE (`services.html`)

| Section | Content | Components |
|---------|---------|------------|
| Page Hero | Headline, subtitle | `.page-hero` |
| 15-Yard Block | Size, 3 duration cards (24hr, 3-day, 7-day) | `.dumpster-grid`, `.dumpster-card` |
| 20-Yard Block | Size, 3 duration cards | Same |
| Pricing | Placeholder prices per duration | `.dumpster-price` |
| Book Now | Static links | `.btn-primary` |
| CTA | Request Quote | `.btn-primary` |
| Footer | Standard | `.footer` |

---

### 4. BOOKING PAGE (`booking.html`) — Static UI Only

| Step | Content | Components |
|------|---------|------------|
| Step 1 | Select Dumpster Size | `.booking-steps`, `.dumpster-card` (15 vs 20) |
| Step 2 | Select Rental Duration | `.duration-grid`, `.duration-card` |
| Step 3 | Calendar (non-functional) | `.calendar-mock`, `.calendar-grid`, `.calendar-day` |
| Step 4 | Customer Form | `.form-group`, `.form-input`, `.form-textarea` |
| Step 5 | Credit Card UI (visual only) | `.card-input-mock`, `.card-visual` |
| Pending | "Booking Request Pending Approval" | `.pending-banner` |

---

### 5. REQUEST A QUOTE PAGE (`quote.html`)

| Section | Content | Components |
|---------|---------|------------|
| Page Hero | Headline | `.page-hero` |
| Inquiry Form | Name, Phone, Email, Service Type, Address, Details | `.card`, `.form-group`, `.form-select` |
| Submit | Static button | `.btn-primary` |
| Footer | Standard | `.footer` |

---

### 6. CONTACT PAGE (`contact.html`)

| Section | Content | Components |
|---------|---------|------------|
| Page Hero | Headline | `.page-hero` |
| Contact Info | Phone, Email, Service Area | `.card` |
| Contact Form | Name, Email, Phone, Message | `.form-group` |
| Map | Embedded Google Map (Loudon TN) | `.map-container`, iframe |
| Footer | Standard | `.footer` |

---

### 7. ADMIN DASHBOARD MOCKUP (`admin.html`) — Static

| Section | Content | Components |
|---------|---------|------------|
| Sidebar | Pending Bookings, Calendar, Blackout, Settings | `.admin-sidebar` |
| Pending Table | Fake bookings, Approve/Decline | `.admin-table`, `.admin-btn-sm` |
| Calendar Blackout | Non-functional calendar with red blocks | `.calendar-mock` |
| SEO Meta Mockup | Title, URL, description, keywords | `.seo-mockup` |

---

## UI Component List

| Component | Use Case |
|-----------|----------|
| `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-large` | CTAs, forms |
| `.card` | Content blocks, forms |
| `.dumpster-card` | Size/duration selection |
| `.duration-card` | Rental duration picker |
| `.form-group`, `.form-input`, `.form-select`, `.form-textarea` | Forms |
| `.trust-badge` | Trust indicators |
| `.testimonial-card` | Reviews |
| `.map-container` | Google Maps embed |
| `.booking-step` | Multi-step wizard |
| `.calendar-mock`, `.calendar-day` | Date picker UI |
| `.card-input-mock` | Payment form visual |
| `.admin-table`, `.admin-sidebar` | Dashboard layout |

---

## Suggested Elementor / Divi Block Mapping

| Elementor | Divi | Static HTML Equivalent |
|-----------|------|------------------------|
| Heading | Text Module | `h1`, `h2`, `.hero-badge` |
| Text Editor | Text Module | `p`, `blockquote` |
| Button | Button Module | `.btn`, `.btn-primary` |
| Image | Image Module | `.trust-badge-icon` area |
| Section | Section | `.section`, `.section-dark` |
| Container | Row/Column | `.container`, grid divs |
| Form | Contact Form | `.form-group`, `.form-input` |
| Map | Map Module | iframe embed |
| Icon List | Blurb Module | `.trust-badges` |
| Testimonial | Testimonial Module | `.testimonial-card` |
| Pricing Table | Pricing Table | `.dumpster-card` with `.dumpster-price` |
| Tabs / Accordion | Tabs Module | `.booking-steps` |

---

## File Structure

```
dumpuster/
├── index.html          # Home
├── about.html          # About Us
├── services.html       # Services
├── booking.html        # Reserve (static multi-step)
├── quote.html          # Request a Quote
├── contact.html        # Contact
├── admin.html          # Admin mockup (noindex)
├── css/
│   └── main.css        # Design system, components
├── js/
│   └── main.js         # Mobile nav, scroll animations, form prevent
└── STRUCTURE.md        # This file
```

---

## SEO Setup (Static)

**Primary keyword:** Dumpster Rental Loudon TN  
**Placement:** Title, H1, meta description, footer, alt text  
**Meta mockup:** Available on Admin page (`.seo-mockup`)

---

## Mobile-First Responsive

- Breakpoints: 600px, 768px, 900px  
- Sticky header with hamburger menu on small screens  
- Single-column grids on mobile  
- Large tap targets for buttons  
- Form inputs full-width on mobile  
