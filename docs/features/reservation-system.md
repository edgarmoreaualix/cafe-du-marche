# Feature: Reservation System

## Overview
Simple reservation form that stores submissions and sends auto-confirmations.
Start simple, iterate based on Paul & Matthias's feedback.

## Current State
- Old website has a basic form: date, time, guests, name, phone, email, message
- People also call to reserve
- No automated confirmation currently

## Phase 1: Basic Form + Email Confirmation

### Form Fields
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Date souhaitée | Date picker | Yes | No past dates, no closed days |
| Heure d'arrivée | Time picker | Yes | Within service hours |
| Nombre de personnes | Number (1-20) | Yes | Max 20 (above = redirect to group page) |
| Nom | Text | Yes | Min 2 chars |
| Téléphone | Tel | Yes | French phone format |
| Email | Email | Yes | Valid email |
| Message | Textarea | No | Max 500 chars |

### Service Hours (from Google/TheFork data — confirm with Paul & Matthias)
- **Lunch** (Mon-Fri): 12:00 - 14:30
- **Dinner** (Thu-Fri only): 19:30 - 22:30
- **Closed**: Saturday & Sunday
- **Groups on demand**: evening service Mon-Wed available for private groups

### Closed Days in Date Picker
- Saturday and Sunday: blocked
- Dinner time slots: only show for Thursday & Friday

### Submission Flow
```
User submits form
  → Client validation (instant feedback)
  → POST /api/reservation
  → Server validation (double check)
  → Save to Payload CMS `Reservation` collection
  → Trigger Payload afterChange hook
  → Send confirmation email to client
  → Send notification email to restaurant
  → Return success response
  → Show confirmation message to user
```

### Payload Collection: Reservation
```typescript
{
  slug: 'reservations',
  fields: [
    { name: 'date', type: 'date', required: true },
    { name: 'time', type: 'text', required: true },
    { name: 'guests', type: 'number', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea' },
    { name: 'status', type: 'select',
      options: ['pending', 'confirmed', 'cancelled'],
      defaultValue: 'pending'
    },
  ],
  admin: {
    defaultColumns: ['date', 'time', 'name', 'guests', 'status'],
    useAsTitle: 'name',
  }
}
```

### Confirmation Email Template
- Subject: "Votre réservation au Café du Marché"
- Content: recap of date, time, guests, a warm message
- Footer: phone number if they need to modify, address
- Branded with restaurant colors

### Notification to Restaurant
- Email to Paul & Matthias when new reservation comes in
- Summary: name, date, time, guests, message

## Phase 2: SMS Confirmation (future)
- Add SMS via Brevo or Twilio
- Send short confirmation: "Bonjour [name], votre table pour [guests] est réservée le [date] à [time]. À bientôt ! - Café du Marché"

## Phase 3: Capacity Management (future)
- Define max covers per time slot
- Show availability in form (green/orange/red)
- Auto-reject if full (with phone number fallback)

## Anti-spam
- Honeypot field (hidden, if filled = bot)
- Rate limiting on API route
- Optional: simple challenge (not reCAPTCHA — too intrusive)
