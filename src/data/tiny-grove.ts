import type { ImageMetadata } from 'astro'

import today from '../assets/tiny-grove/screenshots/01-today.png'
import day from '../assets/tiny-grove/screenshots/02-day.png'
import reminder from '../assets/tiny-grove/screenshots/03-reminder.png'
import pause from '../assets/tiny-grove/screenshots/04-pause.png'
import history from '../assets/tiny-grove/screenshots/05-history.png'
import exportShot from '../assets/tiny-grove/screenshots/06-export.png'
import importShot from '../assets/tiny-grove/screenshots/07-import.png'
import profiles from '../assets/tiny-grove/screenshots/08-profiles.png'
import welcome from '../assets/tiny-grove/screenshots/09-welcome.png'
import widget from '../assets/tiny-grove/screenshots/10-widget.png'

/**
 * Content for the Tiny Grove landing page at /tiny-grove, which doubles as the
 * app's marketing and support URL in both store listings.
 *
 * Copy here comes from docs/store-listing.md and the press kit in the app
 * repo, so the site, the stores, and press all say the same thing. The privacy
 * promise is NOT here: it's read from the app's strings at build time (see
 * src/data/tiny-grove-privacy.ts) because it has to match word for word.
 *
 * Voice rules carried over from the app: no "missed", "streak", "overdue" or
 * other guilt language, no exclamation points, no urgency, and never a medical
 * claim. Keep dollar amounts off the page too: the unlock costs a different
 * amount on each store.
 */

type Screenshot = {
	image: ImageMetadata
	/** The headline and subline baked into the image, so they reach screen
	 * readers too. */
	alt: string
}

type FeatureGroup = { heading: string; items: string[] }

type Faq = { question: string; answer: string }

// Launch day: fill in both store URLs. That swaps "Coming soon" for store
// links here and on the portfolio card, with no layout changes.
const stores = {
	appStore: null as string | null,
	googlePlay: null as string | null,
}

export const tinyGroveApp = {
	name: 'Tiny Grove',
	path: '/tiny-grove',
	subtitle: 'A gentle medication tracker',
	tagline: 'Take your meds. Watch a garden grow.',
	stores,
	launched: Boolean(stores.appStore && stores.googlePlay),
	platforms: 'iPhone (iOS 16.4 or later) and Android (8.0 or later)',
	price:
		'Free for up to six medications and one profile. A single purchase unlocks the rest for good.',
	about: [
		'Tiny Grove is a calm medication tracker. Log each dose you take, and every dose helps a watercolor garden grow. The garden only ever grows: nothing wilts, nothing regresses, and coming back after a month away looks exactly like coming back after a day.',
		'Most medication apps lean on streaks and warnings. Tiny Grove leaves them out on purpose. There are no streaks, scores, or counts, and a dose is only ever taken, skipped, or left unrecorded.',
	],
	highlights: [
		'Your records stay on your phone. No account, no ads, no tracking.',
		'Free for up to six medications. One purchase unlocks the rest, forever. Never a subscription.',
		'Coming from another app? Bring your medications and history with you.',
	],
	disclaimer:
		'Tiny Grove is a routine tool, not medical advice. Always follow the guidance of your doctor or pharmacist.',
} as const

export const screenshots: Screenshot[] = [
	{ image: today, alt: 'Take your meds. Watch a garden grow. Every dose helps it bloom, and nothing you do ever makes it wilt.' },
	{ image: day, alt: 'Your whole day, at a gentle glance. Morning, afternoon, evening, and bedtime. One tap logs a whole window.' },
	{ image: reminder, alt: 'Reminders that nudge, never nag. Log it or snooze it right from the notification. No app to open.' },
	{ image: pause, alt: 'Take a breath before you tap. An optional little pause, so logging feels calm instead of rushed.' },
	{ image: history, alt: 'Skipped is a fact, never a failure. No scores and no guilt. Just an honest record, a month at a time.' },
	{ image: exportShot, alt: 'A summary ready for your doctor. One clear page of what you took and skipped. Share it, print it, or keep it.' },
	{ image: importShot, alt: 'Switching apps? Bring your history. From another app, a spreadsheet, or a PDF. It never leaves your phone.' },
	{ image: profiles, alt: 'Room for everyone you look after. Separate lists for you, your family, and even the cat.' },
	{ image: welcome, alt: 'Your records stay on your phone. No account, no ads, no tracking. One purchase, never a subscription.' },
	{ image: widget, alt: "Your day, right on your Home Screen. See what's still open at a glance, without opening the app." },
]

export const featureGroups: FeatureGroup[] = [
	{
		heading: 'Made to be calm',
		items: [
			'Doses grouped by time of day, with one tap to log a whole window',
			'An optional breathing pause before you record a dose',
			'Skipped is recorded as a fact, never as a failure. No streaks, no scores, no red',
			'Coming back after a week away feels exactly like coming back after a day',
		],
	},
	{
		heading: 'Made for real routines',
		items: [
			'Every day, specific days, several times a day, every few days, or as needed',
			'Your own morning, afternoon, evening, and bedtime, with your own names and times',
			'A day that ends when your day ends, not at midnight, if you stay up past it',
			'Gentle reminders, one per time of day, that you can log or snooze right from the notification',
			'Private reminders if you want them: no medication or profile names, just the time of day',
			'Home Screen widgets for today at a glance (and Lock Screen widgets on iPhone), which hide names too when your reminders do',
			'Notes on any dose, and a quiet heads-up when a supply is running low',
		],
	},
	{
		heading: 'Your records, your way',
		items: [
			'A month-by-month history you can correct if something was logged wrong',
			'A doctor summary you can share as a PDF',
			'A backup file you can keep, and restore on a new phone',
			'Coming from another app? Bring your medications and history along, from its export, a spreadsheet, or a PDF',
		],
	},
	{
		heading: 'Made to be used by everyone',
		items: [
			'Works with VoiceOver on iPhone and TalkBack on Android',
			'Text that grows with your phone’s text size, up to the largest settings',
			'Calmer, still screens when your phone is set to reduce motion',
		],
	},
]

export const faqs: Faq[] = [
	{
		question: 'Do I need an account?',
		answer:
			"No. There's no sign-up and no server. Everything you record stays on your phone.",
	},
	{
		question: 'Can I keep track for someone else?',
		answer:
			'Yes. Profiles keep separate lists on your phone for you, your family, or a pet. The first profile is free, and more come with the one-time unlock.',
	},
	{
		question: 'How do I move to a new phone?',
		answer:
			'Make a backup file in Tiny Grove, move it to your new phone, and choose "Restore from a backup" when you set the app up. The file never passes through a server, so it stays yours.',
	},
	{
		question: "I'm using another medication app. Can I switch?",
		answer:
			'Yes. Tiny Grove can bring in your medications and history from another app\'s export, a spreadsheet, or a PDF.',
	},
	{
		question: 'Is this medical advice?',
		answer:
			"No. Tiny Grove helps you keep up with a routine you already have. It doesn't diagnose, treat, or recommend anything, so always follow the guidance of your doctor or pharmacist.",
	},
]
