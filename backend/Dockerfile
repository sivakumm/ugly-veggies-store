FROM denoland/deno:alpine-1.14.3

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when dependencies.ts is modified).
# Ideally cache dependencies.ts will download and compile _all_ external files used in server.ts.
COPY deno.config.json .
COPY dependencies.ts .
RUN deno cache -c deno.config.json dependencies.ts

# These steps will be re-run upon each file change in your working directory:
COPY data ./data
COPY src ./src

# Compile the server so that it doesn't need to be compiled each startup/entry.
RUN deno cache -c deno.config.json src/server.ts

CMD ["run", "--allow-net=0.0.0.0:8000", "--no-check", "--allow-read", "src/server.ts"]