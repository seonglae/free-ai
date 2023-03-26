import { join } from 'node:path'
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import { env, pipeline } from '@xenova/transformers'

env.onnx.wasm.wasmPaths = `${join(process.cwd(), 'scripts')}/`

async function run() {
  const pipe = await pipeline('summarization')

  const out = await pipe('I love transformers!')
  console.info(out)
}
run()
