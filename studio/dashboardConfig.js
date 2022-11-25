export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6380c79c14b0af1ba974e58f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qkakj74j',
                  apiId: 'ff77fe25-2d8c-48bd-8f82-2cf9ad63b667'
                },
                {
                  buildHookId: '6380c79c8cebdf21629a344d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y2eswtkh',
                  apiId: '45309523-a705-45ce-9c5d-a09d4efc4640'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amaygit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y2eswtkh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
