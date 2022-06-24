import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '7gi8lr6t',
  dataset: 'production',
  apiVersion: '2022-06-24',
  token:
    'skFvYdw38tyLDEAvhCf7FoZXXSVLmWrvSSsHMf1Gr3dNfTGDBNL0b2O9NW6nmLJk2mNg4QiV8DAzc5aIqTFiNHQUgEFSIJ42Q8MonfYvATsjARuj1ffu662VdDMoeK40t9SuaDOMsTcr6T8tCvN0E1RING7hbJK8pddOh3XscoHic8rmvEHa',
  useCdn: false,
})
