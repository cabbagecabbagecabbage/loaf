# Set base image to 16.13.0-alpine
FROM node:16.13.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose port
EXPOSE 80

# Start the application
CMD ["npm", "run", "start"]
