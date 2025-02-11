import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vocabulary/services/mockApi')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/vocabulary/services/mockApi"!</div>
}
