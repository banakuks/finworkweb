// src/services/ProjectService.js
import ApiService from './ApiService'

// ————————————————————————
// MOCK DASHBOARD DATA (Fixed & Complete)
// ————————————————————————

const mockDashboardData = {
    userName: 'Carolyn Perkins',
    taskCount: 5,

    projectOverviewData: {
        chart: {
            daily: {
                onGoing: 13,
                finished: 9,
                total: 21,
                series: [
                    { name: 'On Going', data: [20, 19, 18, 14, 12, 10] },
                    { name: 'Finished', data: [1, 4, 8, 15, 16, 18] },
                ],
                range: [
                    '6:00am',
                    '9:00am',
                    '12:00pm',
                    '03:00pm',
                    '06:00pm',
                    '09:00pm',
                ],
            },
            weekly: {
                onGoing: 126,
                finished: 87,
                total: 213,
                series: [
                    { name: 'On Going', data: [45, 52, 68, 84, 103, 112, 126] },
                    { name: 'Finished', data: [35, 41, 62, 62, 75, 81, 87] },
                ],
                range: [
                    '21 Jan',
                    '22 Jan',
                    '23 Jan',
                    '24 Jan',
                    '25 Jan',
                    '26 Jan',
                    '27 Jan',
                ],
            },
            monthly: {
                onGoing: 270,
                finished: 113,
                total: 383,
                series: [
                    {
                        name: 'On Going',
                        data: [28, 52, 91, 154, 227, 256, 270],
                    },
                    { name: 'Finished', data: [22, 31, 74, 88, 97, 107, 113] },
                ],
                range: [
                    '01 Jan',
                    '05 Jan',
                    '10 Jan',
                    '15 Jan',
                    '20 Jan',
                    '25 Jan',
                    '27 Jan',
                ],
            },
        },
    },

    myTasksData: [
        {
            taskId: 'KCM-1393',
            taskSubject: 'Design sign up flow',
            priority: 0,
            assignees: [
                {
                    id: '1',
                    name: 'Carolyn Perkins',
                    email: 'eileen_h@hotmail.com',
                    img: '/img/avatars/thumb-1.jpg',
                },
                {
                    id: '2',
                    name: 'Terrance Moreno',
                    email: '',
                    img: '/img/avatars/thumb-2.jpg',
                },
            ],
        },
        {
            taskId: 'KCM-2039',
            taskSubject: 'Update contact page',
            priority: 1,
            assignees: [
                {
                    id: '1',
                    name: 'Carolyn Perkins',
                    email: 'eileen_h@hotmail.com',
                    img: '/img/avatars/thumb-1.jpg',
                },
            ],
        },
        {
            taskId: 'KCM-2155',
            taskSubject: 'Document features 2.0',
            priority: 1,
            assignees: [
                {
                    id: '1',
                    name: 'Carolyn Perkins',
                    email: 'eileen_h@hotmail.com',
                    img: '/img/avatars/thumb-1.jpg',
                },
                {
                    id: '2',
                    name: 'Terrance Moreno',
                    email: '',
                    img: '/img/avatars/thumb-2.jpg',
                },
                {
                    id: '3',
                    name: 'Ron Vargas',
                    email: 'ronnie_vergas@infotech.io',
                    img: '/img/avatars/thumb-3.jpg',
                },
            ],
        },
        {
            taskId: 'KCM-2270',
            taskSubject: 'Fix typo in home page',
            priority: 2,
            assignees: [
                {
                    id: '1',
                    name: 'Carolyn Perkins',
                    email: 'eileen_h@hotmail.com',
                    img: '/img/avatars/thumb-1.jpg',
                },
                {
                    id: '5',
                    name: 'Joyce Freeman',
                    email: 'joyce991@infotech.io',
                    img: '/img/avatars/thumb-5.jpg',
                },
            ],
        },
        {
            taskId: 'KCM-1957',
            taskSubject: 'Fix broken API',
            priority: 0,
            assignees: [
                {
                    id: '1',
                    name: 'Carolyn Perkins',
                    email: 'eileen_h@hotmail.com',
                    img: '/img/avatars/thumb-1.jpg',
                },
            ],
        },
    ],

    scheduleData: [
        {
            id: '0',
            time: '10:00am',
            eventName: 'Sprint Planning',
            desciption: 'via Zoom',
            type: 'meeting',
        },
        {
            id: '1',
            time: '1:00pm',
            eventName: 'Design discussion',
            desciption: 'via Microsoft Teams',
            type: 'meeting',
        },
        {
            id: '2',
            time: '3:00pm',
            eventName: 'Create daily report',
            desciption: 'Daily task',
            type: 'task',
        },
        {
            id: '3',
            time: '4:00pm',
            eventName: 'MySql online workshop',
            desciption: 'Online workshop',
            type: 'workshop',
        },
    ],

    // FIXED: Was null → now has real projects
    projectsData: [
        {
            id: '1',
            name: 'Horizon UI Dashboard',
            progress: 75,
            team: ['1', '2', '5'],
        },
        {
            id: '2',
            name: 'Mobile App Redesign',
            progress: 100,
            team: ['3', '4'],
        },
        {
            id: '3',
            name: 'Internal CRM System',
            progress: 40,
            team: ['1', '6', '7'],
        },
    ],

    activitiesData: [
        {
            type: 'UPDATE-TICKET',
            dateTime: 1646580000,
            ticket: 'PD-979',
            status: 0,
            userName: 'Carolyn Perkins',
            userImg: '',
        },
        {
            type: 'COMMENT',
            dateTime: 1646578417,
            userName: 'Ron Vargas',
            userImg: '/img/avatars/thumb-3.jpg',
            comment: 'Fine, Java MIGHT be a good example...',
        },
        {
            type: 'ADD-TAGS-TO-TICKET',
            dateTime: 1646574027,
            userName: 'Joyce Freeman',
            tags: ['Live Issue', 'Backend'],
        },
        {
            type: 'ADD-FILES-TO-TICKET',
            dateTime: 1646569123,
            userName: 'Luke Cook',
            files: ['document.csv'],
            ticket: 'PD-1092',
        },
    ],
}

// ————————————————————————
// MOCK PROJECT LIST & MEMBERS
// ————————————————————————
const mockProjectList = [
    {
        id: 'proj_01',
        name: 'Horizon UI Dashboard',
        desc: 'Modern admin template with React & Tailwind',
        cover: '/img/projects/project-1.jpg',
        totalTask: 12,
        completedTask: 9,
        progress: 75,
        status: 'active',
        startDate: '2025-10-01',
        endDate: '2025-12-30',
        members: ['1', '3', '5'],
    },
    {
        id: 'proj_02',
        name: 'Mobile App Redesign',
        desc: 'Complete redesign of banking mobile app',
        cover: '/img/projects/project-2.jpg',
        totalTask: 28,
        completedTask: 28,
        progress: 100,
        status: 'completed',
        startDate: '2025-08-15',
        endDate: '2025-11-10',
        members: ['2', '4'],
    },
    {
        id: 'proj_03',
        name: 'Internal CRM System',
        desc: 'Customer relationship management tool',
        cover: '/img/projects/project-3.jpg',
        totalTask: 45,
        completedTask: 18,
        progress: 40,
        status: 'active',
        startDate: '2025-11-01',
        endDate: '2026-03-15',
        members: ['1', '6', '7', '3'],
    },
    {
        id: 'proj_04',
        name: 'E-Commerce Platform',
        desc: 'Full-stack online shopping platform',
        cover: '/img/projects/project-4.jpg',
        totalTask: 32,
        completedTask: 10,
        progress: 31,
        status: 'active',
        startDate: '2025-09-20',
        endDate: '2026-01-20',
        members: ['5', '8', '2'],
    },
]

const mockMembers = [
    { id: '1', name: 'Caroline Jensen', img: '/img/avatars/thumb-1.png' },
    { id: '2', name: 'Alex Turner', img: '/img/avatars/thumb-2.png' },
    { id: '3', name: 'Emma Watson', img: '/img/avatars/thumb-3.png' },
    { id: '4', name: 'James Doe', img: '/img/avatars/thumb-4.png' },
    { id: '5', name: 'Sarah Chen', img: '/img/avatars/thumb-5.png' },
    { id: '6', name: 'Mike Johnson', img: '/img/avatars/thumb-6.png' },
    { id: '7', name: 'Lisa Park', img: '/img/avatars/thumb-7.png' },
    { id: '8', name: 'David Kim', img: '/img/avatars/thumb-8.png' },
]

// ————————————————————————
// MOCK SCRUM BOARD DATA
// ————————————————————————
const mockScrumBoard = {
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            cardIds: ['t1', 't2', 't3'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            cardIds: ['t4'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Review',
            cardIds: ['t5'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Completed',
            cardIds: ['t6'],
        },
    },

    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],

    cards: {
        t1: {
            id: 't1',
            name: 'Create login UI',
            description: 'Design and create the login screen with validation',
            labels: ['UI', 'Frontend'],
            members: [
                {
                    id: '1',
                    name: 'Caroline Jensen',
                    img: '/img/avatars/thumb-1.png',
                },
                {
                    id: '2',
                    name: 'Alex Turner',
                    img: '/img/avatars/thumb-2.png',
                },
            ],
            comments: [],
            attachments: [],
            dueDate: '2025-04-15',
        },
        t2: {
            id: 't2',
            name: 'Prepare homepage wireframe',
            description: 'Sketch Figma layout for homepage sections',
            labels: ['Design'],
            members: [
                {
                    id: '3',
                    name: 'Emma Watson',
                    img: '/img/avatars/thumb-3.png',
                },
            ],
            comments: [],
            attachments: [],
            dueDate: '2025-04-20',
        },
        t3: {
            id: 't3',
            name: 'Fix profile API bug',
            description: '500 error when updating profile picture',
            labels: ['Backend', 'Bug'],
            members: [
                {
                    id: '5',
                    name: 'Sarah Chen',
                    img: '/img/avatars/thumb-5.png',
                },
            ],
            comments: [],
            attachments: [],
            dueDate: '2025-04-10',
        },
        t4: {
            id: 't4',
            name: 'Connect Stripe payments',
            description: 'Implement card payments flow + test mode',
            labels: ['Payment'],
            members: [
                { id: '4', name: 'James Doe', img: '/img/avatars/thumb-4.png' },
            ],
            comments: [],
            attachments: [],
            dueDate: null,
        },
        t5: {
            id: 't5',
            name: 'Rewrite dashboard charts',
            description: 'Replace old ApexCharts config with modern design',
            labels: ['Charts'],
            members: [
                {
                    id: '6',
                    name: 'Mike Johnson',
                    img: '/img/avatars/thumb-6.png',
                },
            ],
            comments: [],
            attachments: [],
            dueDate: '2025-04-25',
        },
        t6: {
            id: 't6',
            name: 'Finalize project proposal',
            description: 'Prepare PDF + slides for client',
            labels: ['Docs'],
            members: [
                { id: '7', name: 'Lisa Park', img: '/img/avatars/thumb-7.png' },
            ],
            comments: [],
            attachments: [],
            dueDate: '2025-04-18',
        },
    },
}
// ————————————————————————
// MOCK TICKET DETAIL FOR ISSUE PAGE
// ————————————————————————
const mockTicketDetail = {
    title: 'Fix login validation bug',
    ticketId: 'TICKET-1234',
    createdBy: 'Caroline Jensen',
    date: '2025-01-20',
    underProject: 'Horizon UI Dashboard',

    description: `<p>This issue is related to login form validation. The email validator is not working as expected. Enslave the hooman pounce on unsuspecting person or tuxedo cats always looking dapper yet poop on grasses or growl at dogs in my sleep but love blinks and purr purr purr purr yawn. <br> <br> Decide to want nothing to do with my owner today being gorgeous with belly side up claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? <br> <br> Bite nose of your human leave fur on owners clothes so scratch my tummy actually i hate you now fight me blow up sofa in 3 seconds.</p>`,

    assignees: [
        {
            id: '1',
            name: 'Caroline Jensen',
            img: '/img/avatars/thumb-1.png',
        },
        {
            id: '3',
            name: 'Emma Watson',
            img: '/img/avatars/thumb-3.png',
        },
    ],

    labels: [
        { title: 'Bug', class: 'bg-red-500' },
        { title: 'Urgent', class: 'bg-orange-500' },
    ],

    activity: [
        {
            type: 'COMMENT',
            name: 'Mike Johnson',
            img: '/img/avatars/thumb-6.png',
            time: '2 hours ago',
            comment: 'I checked the API and didn’t find any issues there.',
        },
        {
            type: 'ASSIGN',
            name: 'System',
            assignees: ['Caroline'],
            time: 'Yesterday',
        },
        {
            type: 'TAG',
            name: 'Sarah',
            labels: [
                { title: 'Bug', class: 'bg-red-500' },
                { title: 'Frontend', class: 'bg-blue-500' },
            ],
            time: '2 days ago',
        },
    ],
}

// ————————————————————————
// MOCK API ENDPOINTS (These override real ones)
// ————————————————————————

export const apiGetProjectDashboardData = async () => {
    await new Promise((r) => setTimeout(r, 800))
    return { data: mockDashboardData }
}

export const apiGetProjectList = async () => {
    await new Promise((r) => setTimeout(r, 600))
    return { data: mockProjectList }
}

export const apiGetScrumBoardtMembers = async () => {
    await new Promise((r) => setTimeout(r, 500))
    return { data: mockMembers }
}

export const apiPutProjectList = async (data) => {
    await new Promise((r) => setTimeout(r, 700))
    const newProject = {
        id: `proj_${Date.now()}`,
        name: data.name || 'New Project',
        desc: data.desc || 'No description',
        cover: '/img/projects/project-1.jpg',
        totalTask: 0,
        completedTask: 0,
        progress: 0,
        status: 'active',
        startDate: new Date().toISOString().split('T')[0],
        endDate: null,
        members: data.members || [],
    }
    mockProjectList.unshift(newProject)
    return { data: mockProjectList }
}

// Keep real APIs as fallback (won't be used while mocks are active)
export const apiGetScrumBoards = async () => {
    await new Promise((r) => setTimeout(r, 800))
    return {
        data: {
            columns: mockScrumBoard.columns,
            cards: mockScrumBoard.cards,
            columnOrder: mockScrumBoard.columnOrder,
        },
    }
}
export const apiGetScrumBoardtTicketDetail = async (id) => {
    await new Promise((r) => setTimeout(r, 500))
    return { data: mockTicketDetail }
}
