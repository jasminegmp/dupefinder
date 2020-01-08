echo "Running DupeFinder"
cd react-frontend
npm run build
cd ..
cd flask-backend
python app.py
cd ..