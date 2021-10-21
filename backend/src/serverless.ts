#! /usr/bin/env deno run --allow-net --no-check --allow-read
import { server } from "./application.ts";

export default server.handle;
