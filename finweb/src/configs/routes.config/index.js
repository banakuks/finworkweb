import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    // {
    //     key: 'home',
    //     path: '/home',
    //     component: React.lazy(() => import('views/Home')),
    //     authority: [],
    // },
    /** Example purpose only, please remove */
    {
        key: 'dashboard',
        path: '/dashboard',
        component: React.lazy(() =>
            import('views/project/ProjectDashboard/index')
        ),
        authority: [],
    },
    {
        key: 'projectlist',
        path: '/projectlist',
        component: React.lazy(() => import('views/project/ProjectList/index')),
        authority: [],
    },
    {
        key: 'scrumboard',
        path: '/scrumboard',
        component: React.lazy(() => import('views/project/ScrumBoard/index')),
        authority: [],
    },
    {
        key: 'issue',
        path: '/issue',
        component: React.lazy(() => import('views/project/Issue/index')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]
