import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vocabulary/components/VocabularyForm')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/vocabulary/components/VocabularyForm"!</div>
}
