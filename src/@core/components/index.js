import ContainerBlock from './block/ContainerBlock.vue'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@core/components/ui/card'
import { Badge } from '@core/components/ui/badge'

export default {
  install(app) {
    app.component('ContainerBlock', ContainerBlock)

    //ui元件
    app.component('Card', Card)
    app.component('CardContent', CardContent)
    app.component('CardDescription', CardDescription)
    app.component('CardFooter', CardFooter)
    app.component('CardHeader', CardHeader)
    app.component('CardTitle', CardTitle)
    app.component('Badge', Badge)
  },
}
