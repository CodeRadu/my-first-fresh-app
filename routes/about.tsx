/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export default function AboutPage() {
  return (
    <main class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1>About</h1>
      <p>This is the about page</p>
    </main>
  )
}
