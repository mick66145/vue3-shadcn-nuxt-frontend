import ContainerBlock from './block/ContainerBlock.vue'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@core/components/ui/card'

export default {
  install(app) {
    app.component('ContainerBlock', ContainerBlock)
    app.component('Card', Card)
    app.component('CardContent', CardContent)
    app.component('CardDescription', CardDescription)
    app.component('CardFooter', CardFooter)
    app.component('CardHeader', CardHeader)
    app.component('CardTitle', CardTitle)
  },
}
