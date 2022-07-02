/** @jsx h */
import { h } from 'preact'
import { PageProps } from '$fresh/server.ts'
import { tw } from '@twind'

export default function Greet(props: PageProps) {
  const { name } = props.params
  return (
    <main class={tw`p-4 mx-auto max-w-screen-md`}>
      <p>Greetings, {name}</p>
    </main>
  )
}
