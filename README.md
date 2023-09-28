Vue web app for Annie's Wood Therapy servicing Southern California

# Annie's Wood Therapy

started on 09/11/2023.

## post mortem

I started this project by considering how I can optimize dev time and keep my code dry. I chose to complete `HTML` for all routes and then continue adding `CSS` after. 

One thing I noticed that I could have improved so that next time it will be faster is creating separate components. I created Article Card so that it could include a button, but most components do not include button. I should have created two article cards where one would include a button and the other would not.

## installation instructions

sass preprocessor `npm install -D sass`
font awesome:
`npm install @fortawesome/fontawesome-svg-core`
`npm i --save @fortawesome/vue-fontawesome@latest-3`
`npm i --save @fortawesome/free-solid-svg-icons`
swiper: `npm i swiper`
vue i18n: `npm install vue-i18n@9`

## useful links

- [Swiper](https://swiperjs.com/) - swiper library for carousel and pagination
- [Internationalization](https://vue-i18n.intlify.dev/guide/) - Vue's recommendation for internalization.
- [Language Codes](https://www.science.co.il/language/Locale-codes.php) - Language Codes

### useful tips

- for interating over json array to extract key properties to use in the i18n use this. For example,
  ``<p>{{ $t(`services[${index}].title`)}}</p>``

## Problems I Encountered

I wasn't able to target the `swiper-pagination-bullet-active` and `swiper-button-next`. The issue was resolved by adding the css code globally in my main.css instead of in the component-level. Same thing for `router-link-active`
