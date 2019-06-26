export default [
  {
    path: '/',
    name: 'client',
    component: () => import('../view/client/container/index.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../view/client/home/index.vue')
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../view/client/home/index.vue')
      },
      {
        path: 'courseIntroduction',
        name: 'courseIntroduction',
        component: () => import('../view/client/courseIntroduction/index.vue'),
        children:[
          {
            path: '/',
            name: 'courseBriefIntro',
            component: () => import('../view/client/courseIntroduction/courseBriefIntro/index.vue')
          },
          {
            path: 'courseBriefIntro',
            name: 'courseBriefIntro',
            component: () => import('../view/client/courseIntroduction/courseBriefIntro/index.vue')
          },
          {
            path: 'teachingMethod',
            name: 'teachingMethod',
            component: () => import('../view/client/courseIntroduction/teachingMethod/index.vue')
          },
          {
            path: 'courseSchedule',
            name: 'courseSchedule',
            component: () => import('../view/client/courseIntroduction/courseSchedule/index.vue')
          },
          {
            path: 'courseOutline',
            name: 'courseOutline',
            component: () => import('../view/client/courseIntroduction/courseOutline/index.vue')
          },
          {
            path: 'coursePhilosophyGoals',
            name: 'coursePhilosophyGoals',
            component: () => import('../view/client/courseIntroduction/coursePhilosophyGoals/index.vue')
          },
          {
            path: 'courseDynamics',
            name: 'courseDynamics',
            component: () => import('../view/client/courseIntroduction/courseDynamics/index.vue')
          }
        ]
      },
      {
        path: 'teachingTeam',
        name: 'teachingTeam',
        component: () => import('../view/client/teachingTeam/index.vue')
      },
      {
        path: 'courseConstruction',
        name: 'courseConstruction',
        component: () => import('../view/client/courseConstruction/index.vue')
      }, {
        path: 'courseResource',
        name: 'courseResource',
        component: () => import('../view/client/courseResource/index.vue')
      },
      {
        path: 'questionsAndAnswers',
        name: 'questionsAndAnswers',
        component: ()=> import('../view/client/questionsAndAnswers/index.vue')
      },
      {
        path: 'courseResearch',
        name: 'courseResearch',
        component: () => import('../view/client/courseResearch/index.vue')
      }
    ]
  }

]
