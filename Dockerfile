# Alpine images are smaller and more secure
FROM node:12-alpine
# create a work directory in the container os
RUN mkdir -p /usr/src/app
# set the default working directory by follwing command
WORKDIR /usr/src/app
# Copy all files to the image
COPY . .
# Install the packages
RUN npm install
# expose the API running port to the outside world 
EXPOSE 5000
# CMD run the script in our package.json
CMD ["npm", "run", "dev"]