import {
  frameworks,
  languages,
  databases,
  tools,
} from '@/app/lib/constants/tools'
import { StackGrid, SectionLabel, StackItem } from '../../ui'
import StackGroup from './stack-group'

const Stack = () => {
  return (
    <section id="stack" className="mb-14">
      <SectionLabel>Tools &amp; stack</SectionLabel>
      <StackGroup label="Frameworks &amp; Libraries" items={frameworks} />
      <StackGroup label="Languages" items={languages} />
      <StackGroup label="Databases" items={databases} />
      <StackGroup label="Dev tools &amp; design" items={tools} />
    </section>
  )
}

export default Stack
