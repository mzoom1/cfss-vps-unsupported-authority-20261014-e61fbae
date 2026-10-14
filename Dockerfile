FROM node:22-bookworm-slim@sha256:d649c27dae7ba0137b3cef5dd75baa422c08dc3d9e3fc0c23dfb172dc3cc6436
WORKDIR /app
RUN --mount=type=secret,id=registry_token npm ci --ignore-scripts
COPY server.js ./server.js
USER 65532
CMD ["node", "server.js"]
