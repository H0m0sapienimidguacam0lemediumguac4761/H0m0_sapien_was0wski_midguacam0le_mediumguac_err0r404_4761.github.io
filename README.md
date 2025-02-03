# Install dotenv
npm install dotenv

# Install Heroku CLI
npm install -g heroku
# Login to Heroku
heroku login
# Create Heroku app
heroku create private-proxy-app
# Add Enviroment Varible
heroku config:set SECRET_TOKEN=your_secret_token
heroku config:set ADMIN_USERNAME=Inter_forks
heroku config:set ADMIN_PASSWORD=Toilet4761
# Deploy:
git init
git add .
git commit -m "Initial commit"
heroku git:remote -a private-proxy-app
git push heroku master
# Start Server:
npm start
