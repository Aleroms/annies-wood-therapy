import heroTranslations from '@/assets/data/hero.json'
import navTranslations from '@/assets/data/nav.json'
import introTranslations from '@/assets/data/introduction.json'
import aboutTranslations from '@/assets/data/about.json'
import followTranslations from '@/assets/data/follow.json'
import qualificationDescriptionTranslations from '@/assets/data/qualification-description.json'
import servicesTranslations from '@/assets/data/services.json'
import serviceSubtitleTranslations from '@/assets/data/service_subtitle.json'
import qualificationTranslations from '@/assets/data/qualification.json'
import serviceAreaTranslations from '@/assets/data/service-area.json'

//component-level translations over page-level translations
export default {
  hero: heroTranslations,
  nav: navTranslations,
  intro: introTranslations,
  about: aboutTranslations,
  follow: followTranslations,
  qualification: qualificationDescriptionTranslations,
  qualifications: qualificationTranslations,
  services: servicesTranslations,
  service_subtitle: serviceSubtitleTranslations,
  service_area: serviceAreaTranslations
}
