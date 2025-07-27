# Dockerfile

# Stage 1: Base image with pnpm and dependencies
# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN pnpm install --frozen-lockfile


# Stage 2: Development server
# This stage will be used for local development
FROM base AS dev

# Set working directory
WORKDIR /app

# Copy the installed dependencies from the 'base' stage
COPY --from=base /app/node_modules ./node_modules
# Copy the rest of the application's source code
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# The command to run when the container starts for development
# Using "next dev" directly to bind to all network interfaces
CMD ["pnpm", "dev", "--hostname", "0.0.0.0"] 