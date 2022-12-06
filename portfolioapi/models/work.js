export const projectModel = {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Project Name',
      name: 'projectName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Project Description',
      name: 'projectDescription',
      type: 'text',
      options: {
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Project Languages',
      name: 'projectLanguages',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Project Links',
      name: 'projectLinks',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Link',
          name: 'linkObj',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Url',
              name: 'url',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Project Image',
      name: 'projectImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export const linkModel = {
  type: 'object',
  title: 'Link',
  name: 'linkObj',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Url',
      name: 'url',
      type: 'string',
    },
  ],
};
