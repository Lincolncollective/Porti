import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'UcMNQZ45ChXtCsg7jKYqdQtt
    ',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok
