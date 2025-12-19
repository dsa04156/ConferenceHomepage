export interface MenuItem {
    key: string;
    href: string;
    children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
    { key: 'home', href: '' },
    {
        key: 'workshops',
        href: 'workshops',
        children: [
            {
                key: 'ccms_workshop',
                href: 'workshops/ccms-workshop',
                children: [
                    { key: 'ccms_submission', href: 'workshops/ccms-workshop/ccms-submission' },
                    { key: 'ccms_program', href: 'workshops/ccms-workshop/ccms-program-schedule' },
                ]
            },
            {
                key: 'wsis2025',
                href: 'workshops/wsis2025',
                children: [
                    { key: 'wsis_submission', href: 'workshops/wsis2025/wsis-submission' },
                    { key: 'wsis_program', href: 'workshops/wsis2025/wsis-program-schedule' },
                ]
            }
        ]
    },
    { key: 'notice', href: 'notice' },
    {
        key: 'call_for_papers',
        href: 'call-for-papers',
        children: [
            { key: 'call_for_conference_paper', href: 'call-for-papers/call-for-conference-paper' },
            { key: 'call_for_journal_paper', href: 'call-for-papers/call-for-journal-paper' },
            { key: 'call_for_workshop', href: 'call-for-papers/call-for-workshop' },
        ]
    },
    { key: 'committee', href: 'committee' },
    { key: 'important_dates', href: 'important-dates' },
    { key: 'keynote', href: 'keynote' },
    { key: 'program', href: 'program' },
    { key: 'submission', href: 'submission' },
    {
        key: 'registration',
        href: 'registration',
        children: [
            { key: 'registration_fee', href: 'registration/registration-fee' },
        ]
    },
    { key: 'venue_hotel', href: 'venue-hotel' },
];
